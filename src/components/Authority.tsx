"use client";

import React from "react";
import { Server, BrainCircuit, LayoutDashboard, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Authority() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-px w-8 bg-brand"></div>
                        <span className="text-brand font-medium tracking-wide text-sm uppercase">O Parceiro Técnico</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
                        Engenharia de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Ponta a Ponta</span>
                    </h2>

                    <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                        Diferente de agências que focam apenas na superfície, atuamos na arquitetura completa do seu negócio. Do planejamento de servidores (Hardware/VPS) ao desenvolvimento da interface de gestão (Software/Dashboards).
                    </p>

                    <ul className="space-y-6">
                        <ListItem
                            icon={<Server className="w-5 h-5 text-brand" />}
                            title="Segurança de Dados"
                            description="Infraestrutura própria e blindada."
                        />
                        <ListItem
                            icon={<BrainCircuit className="w-5 h-5 text-brand" />}
                            title="Processos Autônomos"
                            description="Redução de erro humano com IA e automações inteligentes."
                        />
                        <ListItem
                            icon={<LayoutDashboard className="w-5 h-5 text-brand" />}
                            title="Visibilidade Total"
                            description="Dashboards personalizados para tomada de decisão estratégica."
                        />
                    </ul>
                </motion.div>

                {/* Visual / Graphic Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-xl p-8 shadow-2xl overflow-hidden aspect-square flex flex-col justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 via-transparent to-transparent opacity-50" />

                        {/* Abstract Architecture Diagram */}
                        <div className="relative z-10 flex flex-col items-center gap-8">
                            {/* Top Layer: Interface */}
                            <div className="w-48 h-16 rounded-lg border border-brand/30 bg-brand/5 flex items-center justify-center text-sm font-mono text-brand mb-4 shadow-[0_0_20px_-5px_rgba(var(--color-brand-primary),0.3)]">
                                Interface / Dashboard
                            </div>

                            {/* Connections */}
                            <div className="h-12 w-0.5 bg-gradient-to-b from-brand/50 to-transparent" />

                            {/* Middle Layer: Automation Engine */}
                            <div className="w-64 h-32 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-noise opacity-10" />
                                <BrainCircuit className="w-12 h-12 text-white/20 group-hover:text-brand/50 transition-colors duration-500" />
                                <div className="absolute bottom-2 inset-x-0 text-center text-xs text-neutral-500">Automation Engine & AI</div>
                            </div>

                            {/* Connections */}
                            <div className="h-12 w-0.5 bg-gradient-to-b from-transparent to-brand/50" />

                            {/* Bottom Layer: Infrastructure */}
                            <div className="w-full max-w-[300px] h-4 rounded-full bg-neutral-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/40 to-transparent animate-pulse-slow" />
                            </div>
                            <span className="text-xs text-neutral-600 font-mono mt-2">Dedicated Infrastructure (VPS)</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ListItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <li className="flex gap-4 items-start">
            <div className="mt-1 p-2 rounded-lg bg-surface border border-white/5 shadow-inner">
                {icon}
            </div>
            <div>
                <h4 className="text-white font-medium mb-1">{title}</h4>
                <p className="text-neutral-400 text-sm">{description}</p>
            </div>
        </li>
    )
}
