"use client";

import React from "react";
import { GlowCard } from "@/components/ui/GlowCard";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function UseCases() {
    return (
        <section className="py-24 mb-12">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Cenários Reais</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none">
                            Resultados que <br />
                            falam por si.
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-md">
                            Não vendemos horas, vendemos performance. Veja como aplicamos nossa tecnologia para resolver gargalos críticos.
                        </p>
                        <button className="px-6 py-3 rounded-full bg-surface border border-white/10 text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
                            Ver todos os cases <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <GlowCard className="p-0 overflow-hidden flex flex-col md:flex-row">
                        <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-neutral-300 mb-6">
                                    Varejo & Logística
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Gargalo no Atendimento</h3>
                                <p className="text-neutral-400 text-sm mb-6">
                                    Empresa recebia 500+ mensagens/dia e perdia vendas por demora na resposta.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                                    <span className="text-xs text-brand font-mono mb-1 block">Solução</span>
                                    <p className="text-sm text-neutral-200">Implementação de Chatbot com IA + RAG e impressão automática de etiquetas.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span className="text-white font-semibold">Redução de 70% no tempo de resposta</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Side (Desktop) */}
                        <div className="hidden md:block w-1/3 bg-brand/5 border-l border-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-noise opacity-20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 bg-brand/20 blur-2xl rounded-full" />
                            </div>
                        </div>
                    </GlowCard>
                </div>
            </div>
        </section>
    );
}
