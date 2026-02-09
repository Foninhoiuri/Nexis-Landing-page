"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ArrowUpRight, Activity, Database, ShieldCheck } from "lucide-react";

// Dados focados em impacto numérico (Legibilidade Alta)
const metrics = [
    {
        id: "01",
        label: "ATENDIMENTO",
        stat: "100%",
        desc: "Disponibilidade 24/7 com agentes autônomos.",
        coord: "A-100",
        highlight: "text-cyan-400"
    },
    {
        id: "02",
        label: "FINANCEIRO",
        stat: "-90%",
        desc: "Redução drástica de falhas e retrabalho fiscal.",
        coord: "F-090",
        highlight: "text-emerald-400"
    },
    {
        id: "03",
        label: "PRODUTIVIDADE",
        stat: "+40h",
        desc: "Ganho mensal livre por colaborador.",
        coord: "P-040",
        highlight: "text-amber-400"
    },
    {
        id: "04",
        label: "CONVERSÃO",
        stat: "+35%",
        desc: "Aumento na taxa de leads qualificados.",
        coord: "C-035",
        highlight: "text-blue-500"
    },
    {
        id: "05",
        label: "ESTOQUE",
        stat: "99.9%",
        desc: "Precisão absoluta de inventário em tempo real.",
        coord: "E-999",
        highlight: "text-purple-400"
    },
    {
        id: "06",
        label: "INFRAESTRUTURA",
        stat: "0s",
        desc: "Downtime não planejado (Zero Quedas).",
        coord: "I-000",
        highlight: "text-rose-400"
    },
    {
        id: "07",
        label: "RECRUTAMENTO",
        stat: "-70%",
        desc: "Menos tempo gasto na triagem de currículos.",
        coord: "R-070",
        highlight: "text-pink-400"
    },
    {
        id: "08",
        label: "SEGURANÇA",
        stat: "100%",
        desc: "Monitoramento ativo contra invasões.",
        coord: "S-100",
        highlight: "text-green-400"
    },
    {
        id: "09",
        label: "JURÍDICO",
        stat: "10x",
        desc: "Mais velocidade na geração de contratos.",
        coord: "J-010",
        highlight: "text-indigo-400"
    },
    {
        id: "10",
        label: "ROI (ANUAL)",
        stat: "200%",
        desc: "Retorno financeiro direto no 1º ciclo.",
        coord: "R-200",
        highlight: "text-yellow-400"
    }
];

// REVERTIDO: O nome agora é Features para bater com seu import na Home
export function Features() {
    return (
        <section id="features" className="bg-black py-24 px-4 font-sans relative overflow-hidden border-t border-white/5">
            
            {/* 1. Background Técnico */}
            <DotPattern
                width={32}
                height={32}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                    "text-neutral-800 opacity-40",
                    "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]"
                )}
            />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* 2. Header Técnico */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
                            MÉTRICAS DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">IMPACTO</span>
                        </h2>
                        
                        <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            Dados projetados com base na média de performance dos nossos clientes após a implementação da <span className="text-white font-medium">Arquitetura Nexis</span>.
                        </p>
                    </motion.div>
                </div>

                {/* 3. O Grid "Blueprint" */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 shadow-2xl shadow-black">
                    {metrics.map((m, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="group relative p-8 bg-black hover:bg-neutral-950 transition-colors duration-500 flex flex-col justify-between h-[260px] overflow-hidden"
                        >
                            {/* Efeito Scan Line */}
                            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100" />

                            {/* Topo do Card */}
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-[9px] font-mono text-neutral-700 group-hover:text-blue-500/50 transition-colors uppercase tracking-widest">
                                    COORD_{m.coord}
                                </span>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-neutral-800 group-hover:bg-blue-500 rounded-sm transition-colors" />
                                    <div className="w-1 h-1 bg-neutral-800 rounded-sm" />
                                </div>
                            </div>

                            {/* O Dado Principal */}
                            <div className="relative z-10 mb-auto">
                                <div className={cn("text-5xl md:text-6xl font-bold tracking-tighter mb-3 text-white group-hover:scale-105 transition-transform duration-500 origin-left")}>
                                    {m.stat}
                                </div>
                                <p className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-2", m.highlight)}>
                                    <ArrowUpRight className="w-3 h-3" />
                                    {m.label}
                                </p>
                            </div>

                            {/* Descrição Técnica */}
                            <div className="mt-8 pt-4 border-t border-dashed border-neutral-900 group-hover:border-blue-500/20 transition-colors">
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    {m.desc}
                                </p>
                            </div>

                            {/* Canto Decorativo */}
                            <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="w-2 h-2 border-r border-b border-blue-500" />
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
            
            <style jsx global>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </section>
    );
}