// NexisHub Service Worker
// Estratégia: Cache First para assets estáticos, Network First para HTML

const CACHE_VERSION = 'v1';
const STATIC_CACHE = `nexis-static-${CACHE_VERSION}`;
const IMAGE_CACHE = `nexis-images-${CACHE_VERSION}`;
const RUNTIME_CACHE = `nexis-runtime-${CACHE_VERSION}`;

// Assets críticos para pré-cache (shell do app)
const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico',
  '/nexis_logo.png',
  '/nexis_icon.png',
  '/icone_app.png',
];

// Máximo de entradas no cache de imagens
const IMAGE_CACHE_MAX = 60;
// Máximo de entradas no cache de runtime
const RUNTIME_CACHE_MAX = 30;

// ─── INSTALL ──────────────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ─── ACTIVATE ─────────────────────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  const currentCaches = [STATIC_CACHE, IMAGE_CACHE, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => !currentCaches.includes(name))
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// ─── FETCH ────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requisições não-HTTP (chrome-extension, etc)
  if (!url.protocol.startsWith('http')) return;

  // Ignorar requisições de outros domínios que não sejam nossa origem
  if (url.origin !== self.location.origin) {
    // Para recursos externos (analytics, etc): Network com fallback silencioso
    event.respondWith(
      fetch(request).catch(() => new Response('', { status: 408 }))
    );
    return;
  }

  // Estratégia por tipo de asset:

  // 1. IMAGENS → Cache First com limite de entradas
  if (request.destination === 'image') {
    event.respondWith(
      cacheFirst({
        request,
        cacheName: IMAGE_CACHE,
        maxEntries: IMAGE_CACHE_MAX,
      })
    );
    return;
  }

  // 2. JS/CSS/FONTS (Next.js /_next/static/) → Cache First (imutáveis)
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(
      cacheFirst({
        request,
        cacheName: STATIC_CACHE,
        maxEntries: 100,
      })
    );
    return;
  }

  // 3. HTML / Navegação → Network First com fallback offline
  if (request.mode === 'navigate') {
    event.respondWith(
      networkFirst({
        request,
        cacheName: RUNTIME_CACHE,
        fallbackUrl: '/offline.html',
      })
    );
    return;
  }

  // 4. Demais requisições → Network First genérico
  event.respondWith(
    networkFirst({
      request,
      cacheName: RUNTIME_CACHE,
      maxEntries: RUNTIME_CACHE_MAX,
    })
  );
});

// ─── ESTRATÉGIAS ──────────────────────────────────────────────────────────────

async function cacheFirst({ request, cacheName, maxEntries }) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const responseClone = response.clone();
      cache.put(request, responseClone).then(() => {
        if (maxEntries) trimCache(cache, maxEntries);
      });
    }
    return response;
  } catch {
    return new Response('', { status: 408, statusText: 'Offline' });
  }
}

async function networkFirst({ request, cacheName, fallbackUrl, maxEntries }) {
  const cache = await caches.open(cacheName);

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone()).then(() => {
        if (maxEntries) trimCache(cache, maxEntries);
      });
    }
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;

    // Fallback para página offline (só para navegação)
    if (fallbackUrl) {
      const offlineCache = await caches.open(STATIC_CACHE);
      const offline = await offlineCache.match(fallbackUrl);
      if (offline) return offline;
    }

    return new Response('', { status: 408, statusText: 'Offline' });
  }
}

// Remove entradas mais antigas quando o cache excede o limite
async function trimCache(cache, maxEntries) {
  const keys = await cache.keys();
  if (keys.length > maxEntries) {
    const excess = keys.length - maxEntries;
    for (let i = 0; i < excess; i++) {
      await cache.delete(keys[i]);
    }
  }
}
