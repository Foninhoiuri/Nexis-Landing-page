"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { HeroOrbitingBackground } from "@/components/ui/HeroOrbitingBackground";
import { RotatingBlurText } from "@/components/ui/RotatingBlurText";
import { SOCIAL } from "@/config/social";
import GradualBlur from "@/components/ui/gradual-blur";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center pt-4 md:pt-2 lg:pt-3 pb-20 xl:pb-16 overflow-visible xl:overflow-hidden bg-background">

            {/* Conteúdo de Texto (Esquerda) */}
            <div className="container mx-auto relative px-4 grid grid-cols-1 xl:grid-cols-[58%_42%] gap-12 items-center min-h-[calc(100vh-100px)]">
                {/* Coluna 1: Texto (Mobile: Abaixo, Desktop: Esquerda) */}
                <div className="flex flex-col items-start text-left pt-10 xl:pt-0 order-2 xl:order-1 relative z-50">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 sm:mb-8 hover:border-brand/30 transition-colors cursor-default"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
                        <span className="text-xs font-medium text-neutral-300">Infraestrutura, Inteligência e Controle</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white mb-4 sm:mb-6 relative z-30 leading-tight"
                    >
                        Sua empresa no{" "}
                        <br className="block sm:hidden" />
                        <RotatingBlurText
                            texts={[
                                "piloto automático!",
                                "controle!",
                                "próximo nível!",
                                "topo do mercado!",
                                "Futuro!",
                            ]}
                            className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-cyan-400 drop-shadow-[0_0_30px_rgba(37,99,235,0.5)] pb-1"
                        />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-neutral-400 mb-8 sm:mb-10 leading-relaxed relative z-30"
                    >
                        Integração de sistemas, implementação de IA e dashboards de gestão. <br className="hidden md:block" />
                        <span className="text-white">Pare de gerenciar tarefas e comece a gerenciar resultados.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 relative  w-full sm:w-auto"
                    >
                        {SOCIAL.whatsapp.active && (
                            <a
                                href={SOCIAL.whatsapp.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-blue-solid flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                Comece agora <ArrowRight className="w-4 h-4" />
                            </a>
                        )}
                        <button className="btn-blue bg-surface border border-white/10 flex items-center gap-2 w-full sm:w-auto justify-center">
                            <Zap className="w-4 h-4 text-brand-white" />
                            Automações
                        </button>
                    </motion.div>
                </div>

                {/* Coluna 2: Órbitas (Mobile: Acima, Desktop: Direita) */}
                <div className="relative flex items-center justify-center h-full xl:h-full order-1 xl:order-2">

                    {/* Layer 1: Background Orbits (Blurred & Behind) */}
                    <div className="relative w-full h-full flex items-center justify-center scale-75 md:scale-90 lg:scale-100 lg:translate-y-40 lg:-translate-x-20 blur-[3px] md:blur-[2px] xl:blur-0 z-10">
                        <HeroOrbitingBackground />
                    </div>

                    {/* Layer 2: Central Logo (Sharp & On Top) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                        <div className="flex items-center justify-center scale-75 md:scale-90 lg:scale-100 lg:translate-y-40 lg:-translate-x-20">
                            {/* Mobile Logo (Navbar Logo) */}
                            <img
                                src="/nexis_logo.png"
                                alt="Nexis"
                                className="md:hidden h-16 w-auto object-contain brightness-125 drop-shadow-[0_0_25px_rgba(62,207,142,0.4)]"
                            />
                            {/* Desktop Logo (Icon) */}
                            <img
                                src="/nexis_icon.png"
                                alt="Nexis"
                                className="hidden md:block h-24 w-24 lg:h-24 lg:w-24 object-contain brightness-125 drop-shadow-[0_0_25px_rgba(62,207,142,0.4)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SISTEMA DE FINALIZAÇÃO DA SESSÃO --- */}

            {/* 1. Camada de Blur Atmosférico (Mais alta e suave) */}
            <GradualBlur
                position="bottom"
                height="22rem"      // Altura maior para o blur começar mais cedo
                strength={2}        // Strength 3 é o "sweet spot" para não ficar leitoso
                divCount={12}       // Mais divisões = transição muito mais orgânica
                curve="ease-in-out" // Curva mais suave que o ease-out
                zIndex={20}
                className="pointer-events-none opacity-90"
            />

            {/* 2. Camada de Blackout (Fade Sólido) */}
            <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-black via-black/90 to-transparent z-30 pointer-events-none" />

        </section>
    );
}