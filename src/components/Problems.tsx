"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Zap, AlertCircle, User, Flame, Snowflake, Clock, Copy, Check, X, FileSpreadsheet, MessageCircle, ServerCrash, CheckCircle2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import GradualBlur from "@/components/ui/GradualBlur";
import { TypingAnimation } from "@/components/ui/TypingAnimation";
import { AnimatedList } from "@/components/ui/AnimatedList";
import { WhatsAppIcon } from "@/components/ui/Icons";

import { ManualProcessDemo } from "@/components/demos/ManualProcessDemo";
import { AnimatedListDemo } from "@/components/demos/NotificationDemo";
import { UnfollowedLeadsDemo } from "@/components/demos/UnfollowedLeadsDemo";
import { RocketFallDemo } from "@/components/demos/RocketFallDemo";



const PROBLEMS = [
    {
        title: "Atendimento lento",
        description: "Se o cliente demora a ser respondido, ele vai embora. Simples assim. Cada minuto sem resposta é uma venda a menos.",
        component: <AnimatedListDemo />
    },
    {
        title: "Leads sem acompanhamento",
        description: "As pessoas até chegam até você, mas sem um processo claro, elas se perdem no caminho. E cada conversa que não continua é uma oportunidade que morre.",
        component: <UnfollowedLeadsDemo />
    },
    {
        title: "Processos manuais",
        description: "Quando tudo depende de copiar, colar e conferir, o trabalho trava. O time se desgasta, o erro aumenta e o cliente sente o impacto.",
        component: <ManualProcessDemo />
    },
    {
        title: "Falta de escala",
        description: "Seu negócio até cresce, mas sem estrutura ele começa a sofrer. Mais demanda vira mais caos — não mais resultado.",
        component: <RocketFallDemo />
    }
];

export function Problems() {
    return (
        <section className="py-24 relative bg-background overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight flex flex-col items-center gap-2 md:gap-4"
                    >
                        <span>Onde sua empresa está perdendo</span>
                        <span className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 inline-block">
                                <TypingAnimation
                                    words={['dinheiro', 'tempo', 'clientes', 'oportunidades']}
                                    loop
                                    typingSpeed={150}
                                    deletingSpeed={220}
                                    pauseTime={2500}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
                                />
                            </span>
                            <span>hoje?</span>
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-neutral-400 text-lg leading-relaxed"
                    >
                        Quando tudo é manual, o preço aparece em tempo perdido, clientes frustrados e vendas que não acontecem
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {PROBLEMS.map((problem, index) => (
                        <ProblemCard key={index} {...problem} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProblemCard({ title, description, index, component }: { title: string, description: string, index: number, component?: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "group relative h-[500px] bg-white/5 transition-all duration-500 rounded-[3rem] border border-white/5 hover:scale-[1.02] bg-gradient-to-tr from-brand/5 via-transparent to-transparent",
                "overflow-hidden z-20"
            )}
        >
            {/* Background / Image Area */}
            <div className={cn("absolute inset-0 z-0 rounded-[3rem] overflow-hidden")}>
                {component ? (
                    <div className="w-full h-full opacity-100 transition-opacity duration-500">
                        {component}
                    </div>
                ) : (
                    <>
                        {/* Visual Placeholder - Could be an image or abstract shape */}
                        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50 transition-transform duration-700" />
                    </>
                )}
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end pointer-events-none px-6 pb-6">

                {/* Blur Effect for Text Readability */}
                <GradualBlur
                    position="bottom"
                    height="200px"
                    strength={4}
                    className="z-10 !bottom-0 pointer-events-none"
                    opacity={1}
                />

                {/* Text Content */}
                <div className="relative z-20 text-center w-full">
                    <h3 className="text-xl font-bold text-brand mb-2 transition-colors min-h-[3.5rem] flex items-end justify-center">
                        {title}
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed text-balance min-h-[5rem] flex items-start justify-center">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
