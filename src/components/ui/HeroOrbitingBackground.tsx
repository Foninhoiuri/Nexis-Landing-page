"use client";

import React from "react";
import OrbitingCircles from "@/components/ui/orbiting-circles";

// ... (Mantenha o RenderLogo igual) ...
const RenderLogo = ({ src, alt, color }: { src: string; alt: string; color: string }) => {
    return (
        <div className="relative flex h-24 w-24 items-center justify-center">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full blur-[15px] opacity-90 pointer-events-none"
                style={{ backgroundColor: color }}
            />
            <img
                src={src}
                alt={alt}
                className="w-16 h-16 object-contain relative drop-shadow-sm"
            />
        </div>
    );
};

export function HeroOrbitingBackground() {
    return (
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <div className="relative flex h-full w-full flex-col items-center justify-center scale-75 md:scale-90 lg:scale-100 lg:translate-y-40 lg:-translate-x-20">

                {/* Logo Central */}
                <div className="z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img src="/nexis_icon.png" alt="Nexis" className="h-20 w-20 lg:h-24 lg:w-24 object-contain brightness-125 drop-shadow-[0_0_25px_rgba(62,207,142,0.4)]" />
                </div>

                {/* --- ÓRBITA INTERNA (4 Ícones | Duração 20s | Passo 5s) --- */}
                {/* 0s */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" duration={20} delay={0} radius={190}>
                    <RenderLogo src="/logos/instagram.png" alt="Instagram" color="#d62976" />
                </OrbitingCircles>
                {/* 5s */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" duration={20} delay={5} radius={190}>
                    <RenderLogo src="/logos/whatsapp.png" alt="WhatsApp" color="#25D366" />
                </OrbitingCircles>
                {/* 10s */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" duration={20} delay={10} radius={190}>
                    <RenderLogo src="/logos/gemini.png" alt="Gemini" color="#ffffff" />
                </OrbitingCircles>
                {/* 15s (Antes estava 20, o que causava a colisão com o 0) */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" duration={20} delay={15} radius={190}>
                    <RenderLogo src="/logos/chatgpt.png" alt="OpenAI" color="#ffffffff" />
                </OrbitingCircles>


                {/* --- ÓRBITA DO MEIO (5 Ícones | Duração 30s | Passo 6s) --- */}
                {/* 0s */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" radius={300} duration={30} delay={0} reverse>
                    <RenderLogo src="/logos/docs.png" alt="Docs" color="#4285F4" />
                </OrbitingCircles>
                {/* 6s */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" radius={300} duration={30} delay={6} reverse>
                    <RenderLogo src="/logos/trello.png" alt="Trello" color="#0079BF" />
                </OrbitingCircles>
                {/* 12s */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" radius={300} duration={30} delay={12} reverse>
                    <RenderLogo src="/logos/calendar.png" alt="Calendar" color="#f4e242ff" />
                </OrbitingCircles>
                {/* 18s */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" radius={300} duration={30} delay={18} reverse>
                    <RenderLogo src="/logos/drive.png" alt="Drive" color="#FFC107" />
                </OrbitingCircles>
                {/* 24s */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" radius={300} duration={30} delay={24} reverse>
                    <RenderLogo src="/logos/excel.png" alt="Excel" color="#217346" />
                </OrbitingCircles>


                {/* --- ÓRBITA EXTERNA (4 Ícones | Duração 40s | Passo 10s) --- */}
                {/* 0s */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" radius={450} duration={40} delay={0}>
                    <RenderLogo src="/logos/mercadopago.png" alt="Mercado Pago" color="#009ee3" />
                </OrbitingCircles>
                {/* 10s */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" radius={450} duration={40} delay={10}>
                    <RenderLogo src="/logos/shopify.png" alt="Shopify" color="#96bf48" />
                </OrbitingCircles>
                {/* 20s */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" radius={450} duration={40} delay={20}>
                    <RenderLogo src="/logos/bling.png" alt="Bling" color="#10a37f" />
                </OrbitingCircles>
                {/* 30s */}
                <OrbitingCircles className="size-[60px] border-none bg-transparent" radius={450} duration={40} delay={30}>
                    <RenderLogo src="/logos/supabase.png" alt="Supabase" color="#3ECF8E" />
                </OrbitingCircles>

            </div>
        </div>
    );
}