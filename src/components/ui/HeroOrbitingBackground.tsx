"use client";

import React from "react";
import OrbitingCircles from "@/components/ui/orbiting-circles";

const RenderLogo = ({ src, alt, color }: { src: string; alt: string; color: string }) => {
    return (
        <div className="relative flex h-24 w-24 items-center justify-center">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full blur-[15px] opacity-50 pointer-events-none"
                style={{ backgroundColor: color }}
            />
            <img
                src={src}
                alt={alt}
                className="w-14 h-14 object-contain relative drop-shadow-sm"
            />
        </div>
    );
};

export function HeroOrbitingBackground() {
    return (
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <div className="relative flex h-full w-full flex-col items-center justify-center">

                {/* --- ÓRBITA INTERNA (Raio 190) --- */}
                <OrbitingCircles path={true} radius={190} duration={20} delay={0}>
                    <RenderLogo src="/logos/instagram.png" alt="Instagram" color="#d62976" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={190} duration={20} delay={5}>
                    <RenderLogo src="/logos/whatsapp.png" alt="WhatsApp" color="#25D366" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={190} duration={20} delay={10}>
                    <RenderLogo src="/logos/gemini.png" alt="Gemini" color="#ffffff" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={190} duration={20} delay={15}>
                    <RenderLogo src="/logos/chatgpt.png" alt="OpenAI" color="#ffffffff" />
                </OrbitingCircles>

                {/* --- ÓRBITA DO MEIO (Raio 300 | Reverse) --- */}
                <OrbitingCircles path={true} radius={300} duration={30} delay={0} reverse>
                    <RenderLogo src="/logos/docs.png" alt="Docs" color="#4285F4" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={300} duration={30} delay={5} reverse>
                    <RenderLogo src="/logos/trello.png" alt="Trello" color="#0079BF" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={300} duration={30} delay={10} reverse>
                    <RenderLogo src="/logos/calendar.png" alt="Calendar" color="#f4e242ff" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={300} duration={30} delay={15} reverse>
                    <RenderLogo src="/logos/drive.png" alt="Drive" color="#FFC107" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={300} duration={30} delay={20} reverse>
                    <RenderLogo src="/logos/excel.png" alt="Excel" color="#217346" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={300} duration={30} delay={25} reverse>
                    <RenderLogo src="/logos/shopify.png" alt="Shopify" color="#96bf48" />
                </OrbitingCircles>

                {/* --- ÓRBITA EXTERNA (Raio 450) --- */}
                <OrbitingCircles path={true} radius={450} duration={60} delay={0}>
                    <RenderLogo src="/logos/mercadopago.png" alt="Mercado Pago" color="#009ee3" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={450} duration={60} delay={6.7}>
                    <RenderLogo src="/logos/bling.png" alt="Bling" color="#333333" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={450} duration={60} delay={13.3}>
                    <RenderLogo src="/logos/supabase.png" alt="Supabase" color="#3ECF8E" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={450} duration={60} delay={20}>
                    <RenderLogo src="/logos/facebook.webp" alt="Facebook" color="#1877F2" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={450} duration={60} delay={26.7}>
                    <RenderLogo src="/logos/gmail.png" alt="Gmail" color="#EA4335" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={450} duration={60} delay={33.3}>
                    <RenderLogo src="/logos/googleads.png" alt="Google Ads" color="#4285F4" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={450} duration={60} delay={40}>
                    <RenderLogo src="/logos/notion.png" alt="Notion" color="#ffffff" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={450} duration={60} delay={46.7}>
                    <RenderLogo src="/logos/stripe.png" alt="Stripe" color="#635BFF" />
                </OrbitingCircles>
                <OrbitingCircles path={false} radius={450} duration={60} delay={53.3}>
                    <RenderLogo src="/logos/teams.png" alt="Teams" color="#6264A7" />
                </OrbitingCircles>

            </div>
        </div>
    );
}