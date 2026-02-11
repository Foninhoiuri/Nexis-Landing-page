"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Network, Cpu, Zap, Activity } from "lucide-react";

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

export function Dashboard() {
    return (
        <section id="dashboard" className="pt-24 pb-0 relative overflow-hidden">
            
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-1 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight leading-tight">
                            Fale com sua <br />
                            <span className="text-6xl text-brand">Estrutura</span>
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8">
                            A Nexis integra voce diretamente com sua infraestrutura. te dando controle total sobre ela.
                        </p>

                        <ul className="space-y-6">
                            <ListItem
                                icon={<Network className="w-5 h-5 text-brand" />}
                                title="Gestão Centralizada"
                                description="Gerencie múltiplas redes em um só lugar."
                            />
                            <ListItem
                                icon={<Cpu className="w-5 h-5 text-brand" />}
                                title="Controle de IA"
                                description="Gerencie sua inteligência artificial individualmente."
                            />
                            <ListItem
                                icon={<Zap className="w-5 h-5 text-brand" />}
                                title="Automação Simples"
                                description="Execute ações em massa sem decorar scripts."
                            />
                            <ListItem
                                icon={<Activity className="w-5 h-5 text-brand" />}
                                title="Diagnóstico Rápido"
                                description="Diagnostique gargalos em segundos."
                            />
                        </ul>
                    </div>

                    {/* Macbook Mockup */}
                    {/* Ambient background glow  <div className="absolute top-1/2 translate-x- -translate-y-1/2 w-[800px] h-[500px] bg-brand/30 blur-[100px] rounded-full pointer-events-none" />*/}

                    <div className="relative lg:self-end flex justify-center lg:justify-end mt-0">
                        <img
                            src="/macbook com tela.png"
                            alt="Nexis Dashboard"
                            className="w-[110%] sm:w-[80%] lg:w-[140%] max-w-none object-contain drop-shadow-2xl transform translate-x-0 translate-y-0 lg:translate-x-[40%]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
