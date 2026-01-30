import Link from "next/link";
import React from "react";

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full bg-background overflow-hidden font-sans">
            {/* Texture Overlay (Optional, matching app style) */}
            <div className="fixed inset-0 bg-noise z-50 pointer-events-none opacity-20" />

            {/* Content Container */}
            <div className="relative z-10 h-screen w-full flex flex-col items-center text-center pt-[30vh] md:pt-[35vh]">

                {/* 404 CENTRAL FIXO */}
                <h1
                    className="
            pointer-events-none transform -translate-x-[1%]
            absolute inset-0
            flex items-center justify-center
            text-[180px] md:text-[300px]
            font-black leading-none
            text-white/5
            blur-[2px]
            select-none
            z-0
          "
                >
                    404
                </h1>

                <div className="relative z-10 flex flex-col items-center">
                    {/* Title */}
                    <h2
                        className="
                text-3xl md:text-5xl
                font-semibold
                bg-gradient-to-r from-white via-gray-300 to-white
                bg-clip-text text-transparent
                drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]
            "
                    >
                        Página não encontrada
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-4 text-base text-gray-400 max-w-md">
                        A página que você procura não existe ou foi movida.
                    </p>

                    {/* Button */}
                    <Link
                        href="/"
                        style={{ "--btn-color": "var(--color-red)" } as React.CSSProperties}
                        className="
                live-btn
                mt-8
                inline-flex items-center justify-center
                rounded-full
                px-8 py-3
                text-sm font-medium
                text-white
                bg-white/5
                backdrop-blur-md
                border border-white/10
                transition-all duration-300
                hover:bg-[var(--btn-color)]
                hover:scale-[1.04]
                hover:border-transparent
                shadow-lg
            "
                    >
                        Voltar para Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
