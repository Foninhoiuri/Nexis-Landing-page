/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Static export não suporta Image Optimization API
    },

    // Reduz o tamanho do bundle JS eliminando imports não usados
    experimental: {
        optimizePackageImports: [
            'lucide-react',
            'framer-motion',
            'motion',
            '@radix-ui/react-progress',
            '@radix-ui/react-slot',
        ],
    },

    // Compressão de assets no build
    compress: true,

    // Remove o X-Powered-By header (pequena melhora de segurança)
    poweredByHeader: false,

    // Garante que o trailing slash seja consistente (melhor para cache de CDN)
    trailingSlash: false,
};

export default nextConfig;