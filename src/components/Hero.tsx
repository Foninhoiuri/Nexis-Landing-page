"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { HeroOrbitingBackground } from "@/components/ui/HeroOrbitingBackground";
import { RotatingBlurText } from "@/components/ui/RotatingBlurText";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center pt-4 md:pt-2 lg:pt-3 pb-20 xl:pb-16 overflow-visible xl:overflow-hidden bg-background">

            {/* Conteúdo de Texto (Esquerda) */}
            <div className="container mx-auto relative z-20 px-4 grid grid-cols-1 xl:grid-cols-[58%_42%] gap-12 items-center min-h-[calc(100vh-100px)]">
                {/* Coluna 1: Texto (Mobile: Abaixo, Desktop: Esquerda) */}
                <div className="flex flex-col items-start text-left pt-10 xl:pt-0 order-2 xl:order-1">
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
                        <button className="btn-blue-solid flex items-center gap-2 w-full sm:w-auto justify-center">
                            Comece agora <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="btn-blue bg-surface border border-white/10 flex items-center gap-2 w-full sm:w-auto justify-center">
                            <Zap className="w-4 h-4 text-brand-white" />
                            Automações
                        </button>
                    </motion.div>
                </div>

                {/* Coluna 2: Órbitas (Mobile: Acima, Desktop: Direita) */}
                <div className="relative flex items-center justify-center h-full xl:h-full order-1 xl:order-2 blur-[5px] xl:blur-0">
                    <HeroOrbitingBackground />
                </div>
            </div>

            {/* Fade inferior para suavizar o corte */}
            <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none" />


        </section>
    );
}