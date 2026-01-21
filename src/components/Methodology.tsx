"use client";

import React from "react";
import { Search, PenTool, Rocket, LineChart } from "lucide-react";

export function Methodology() {
    const steps = [
        {
            id: "01",
            title: "Imersão",
            description: "Entendemos o gargalo da sua empresa.",
            icon: <Search className="w-5 h-5" />
        },
        {
            id: "02",
            title: "Arquitetura",
            description: "Desenhamos a infraestrutura e o fluxo de automação.",
            icon: <PenTool className="w-5 h-5" />
        },
        {
            id: "03",
            title: "Deploy",
            description: "Implementação segura e testes rigorosos.",
            icon: <Rocket className="w-5 h-5" />
        },
        {
            id: "04",
            title: "Monitoramento",
            description: "Acompanhamento contínuo via Dashboard.",
            icon: <LineChart className="w-5 h-5" />
        }
    ];

    return (
        <section className="py-24 border-y border-white/5 bg-neutral-900/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">A Metodologia</h2>
                    <p className="text-neutral-400">Como transformamos problemas complexos em soluções simples.</p>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center group">
                                {/* Circle/Icon */}
                                <div className="w-20 h-20 rounded-full border border-white/10 bg-surface flex items-center justify-center text-neutral-400 mb-6 relative z-10 transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:border-brand-glow group-hover:scale-110 shadow-[0_0_0_6px_rgba(0,0,0,0.5)]">
                                    {step.icon}
                                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-[10px] font-mono text-neutral-500">
                                        {step.id}
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-neutral-400 max-w-[200px]">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
