import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FramerMotionProvider } from "@/components/providers/FramerMotionProvider";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",        // Evita FOIT — melhora CLS e LCP
    preload: true,
    variable: "--font-inter",
});

// ─── VIEWPORT (tema PWA) ──────────────────────────────────────────────────────
export const viewport: Viewport = {
    themeColor: "#030303",
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    viewportFit: "cover",   // Necessário para iOS safe-area (notch/ilha)
};

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "NexisHub | Automação Inteligente para o Seu Negócio",
    description: "Plataforma de automação empresarial com IA. Criação de Sites, Desenvolvimento de Sistemas, Landing Page e Hero Page profissionais",
    keywords: [
        "Criação de Sites",
        "Desenvolvimento de Sistemas",
        "WordPress",
        "Landing Page",
        "Hero Page",
        "Automação Empresarial",
        "Inteligência Artificial",
        "varaujo.dev",
        "Desenvolvimento Web",
        "Sistemas Personalizados",
        "Site Profissional",
        "Atendimento Automatizado",
        "Chatbot IA",
        "Suporte Inteligente"
    ],
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        title: "NexisHub",
        statusBarStyle: "black-translucent",
    },
    openGraph: {
        title: "Nexis - Automação Inteligente",
        description: "Gerencie sua infraestrutura com o Nexis.",
        url: "https://igoriurialves.com.br",
        siteName: "Nexis",
        images: [
            {
                url: "https://www.igoriurialves.com.br/macbook%20com%20tela.png",
                width: 1200,
                height: 630,
                alt: "Dashboard NexisHub",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/nexis_icon.png", type: "image/png" },
        ],
        shortcut: "/nexis_icon.png",
        apple: [
            { url: "/icone_app.png", sizes: "180x180", type: "image/png" },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <head>
                {/* Preconnect para melhorar LCP */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Apple PWA - Splash Screens e Safe Area */}
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-touch-fullscreen" content="yes" />

                {/* Apple Touch Icons para diferentes tamanhos */}
                <link rel="apple-touch-icon" href="/icone_app.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icone_app.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icone_app.png" />

                {/* Preload da imagem LCP principal (logo no Hero) */}
                <link
                    rel="preload"
                    href="/nexis_logo.png"
                    as="image"
                    type="image/png"
                    fetchPriority="high"
                />
            </head>
            <body className={inter.className}>
                <FramerMotionProvider>
                    {children}
                </FramerMotionProvider>

                {/* Service Worker Registration */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(function(reg) {
        // SW registrado com sucesso
        reg.addEventListener('updatefound', function() {
          var newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', function() {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Nova versão disponível — SW atualizado silenciosamente
                console.log('[SW] Nova versão disponível');
              }
            });
          }
        });
      })
      .catch(function(err) {
        // Falha no registro (modo privado, sem HTTPS, etc.)
        console.warn('[SW] Registro falhou:', err);
      });
  });
}
                        `,
                    }}
                />
            </body>
        </html>
    );
}
