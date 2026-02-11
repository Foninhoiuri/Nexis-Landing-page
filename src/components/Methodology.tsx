"use client";

import React, { useState } from "react";
import {
    Search, PenTool, Rocket, LineChart,
    ArrowUpRight, ShieldCheck, Lock, Server,
    Globe, Cpu, Zap, Users, BarChart3, Database, Smartphone
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import PixelCard from "@/components/ui/PixelCard";
import Marquee from "@/components/ui/marquee";

// --- DADOS METHODOLOGY ---
const STEPS = [
    {
        id: "01",
        label: "STEP_01",
        title: "Imersão",
        desc: "Entendemos o gargalo da sua empresa.",
        icon: Search
    },
    {
        id: "02",
        label: "STEP_02",
        title: "Arquitetura",
        desc: "Desenhamos a infraestrutura e o fluxo.",
        icon: PenTool
    },
    {
        id: "03",
        label: "STEP_03",
        title: "Deploy",
        desc: "Implementação segura e testes rigorosos.",
        icon: Rocket
    },
    {
        id: "04",
        label: "STEP_04",
        title: "Monitoramento",
        desc: "Acompanhamento e melhoria contínua.",
        icon: LineChart
    }
];

// --- DADOS FEATURES ---
type Category = 'vendas' | 'operacional' | 'infra';

const TABS: { id: Category; label: string }[] = [
    { id: 'vendas', label: "Comercial & Vendas" },
    { id: 'operacional', label: "Operacional & RH" },
    { id: 'infra', label: "Infraestrutura & TI" },
];

const METRICS = [
    // VENDAS
    {
        id: "01",
        category: "vendas",
        label: "CONVERSÃO",
        stat: "+35%",
        desc: "Aumento na taxa de conversão de leads qualificados.",
        badge: "Mais Vendas"
    },
    {
        id: "02",
        category: "vendas",
        label: "ROI (ANUAL)",
        stat: "200%",
        desc: "Retorno sobre investimento já no primeiro ano.",
        badge: "Alta Rentabilidade"
    },
    {
        id: "03",
        category: "vendas",
        label: "ATENDIMENTO",
        stat: "24/7",
        desc: "Disponibilidade total sem custo de hora extra.",
        badge: "Satisfação Total"
    },

    // OPERACIONAL
    {
        id: "04",
        category: "operacional",
        label: "PRODUTIVIDADE",
        stat: "+40h",
        desc: "Horas mensais poupadas por colaborador.",
        badge: "Tempo Ganho"
    },
    {
        id: "05",
        category: "operacional",
        label: "FINANCEIRO",
        stat: "-90%",
        desc: "Redução de erros em emissão de notas e boletos.",
        badge: "Zero Erros"
    },
    {
        id: "06",
        category: "operacional",
        label: "RECRUTAMENTO",
        stat: "-70%",
        desc: "Tempo economizado na triagem de candidatos.",
        badge: "Contratação Ágil"
    },

    // INFRA
    {
        id: "07",
        category: "infra",
        label: "UPTIME",
        stat: "99.9%",
        desc: "Garantia de disponibilidade de rede e sistemas.",
        badge: "Sempre Online"
    },
    {
        id: "08",
        category: "infra",
        label: "SEGURANÇA",
        stat: "100%",
        desc: "Monitoramento ativo contra ameaças externas.",
        badge: "Dados Protegidos"
    },
    {
        id: "09",
        category: "infra",
        label: "LATÊNCIA",
        stat: "1ms",
        desc: "Resposta instantânea em redes locais otimizadas.",
        badge: "Ultra Rápido"
    },
];

const INTEGRATIONS = [
    { name: "HubSpot", logo: "/logos/hubspot.png" },
    { name: "WhatsApp", logo: "/logos/whatsapp.png" },
    { name: "OpenAI", logo: "/logos/chatgpt.png" },
    { name: "Google Ads", logo: "/logos/googleads.png" },
    { name: "Notion", logo: "/logos/notion.png" },
    { name: "Shopify", logo: "/logos/shopify.png" },
    { name: "Mercado Pago", logo: "/logos/mercadopago.png" },
    { name: "Bling", logo: "/logos/bling.png" },
    { name: "Trello", logo: "/logos/trello.png" },
    { name: "Excel", logo: "/logos/excel.png" },
    { name: "Gemini", logo: "/logos/gemini.png" },
    { name: "Stripe", logo: "/logos/stripe.png" },
    { name: "Supabase", logo: "/logos/supabase.png" },
    { name: "Teams", logo: "/logos/teams.png" },
    { name: "Gmail", logo: "/logos/gmail.png" },
    { name: "GitHub", logo: "/logos/gihub.png" },
    { name: "Docs", logo: "/logos/docs.png" },
    { name: "Drive", logo: "/logos/drive.png" },
    { name: "Calendar", logo: "/logos/calendar.png" },
    { name: "Instagram", logo: "/logos/instagram.png" },
    { name: "Facebook", logo: "/logos/facebook.webp" },
];

const TECH_SPECS = [
    {
        title: "SLA Garantido",
        desc: "Contrato com garantia de 99.9% de uptime.",
        icon: Server
    },
    {
        title: "Criptografia E2E",
        desc: "Seus dados blindados de ponta a ponta.",
        icon: Lock
    },
    {
        title: "Compliance LGPD",
        desc: "Infraestrutura 100% adequada à lei.",
        icon: ShieldCheck
    },
    {
        title: "Suporte Premium",
        desc: "Engenheiros dedicados ao seu negócio.",
        icon: Users
    }
];

export function Methodology() {
    const [activeTab, setActiveTab] = useState<Category>("vendas");
    const filteredMetrics = METRICS.filter(m => m.category === activeTab);

    return (
        <section id="methodology" className="bg-black py-24 px-4 font-sans relative overflow-hidden border-t border-white/5">
            <DotPattern
                width={32}
                height={32}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                    "text-neutral-800 opacity-80",
                    "[mask-image:radial-gradient(2000px_circle_at_center,white,transparent)]"
                )}
            />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- HEADER --- */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
                            NOSSO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">MÉTODO</span>
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            Transformamos problemas complexos em resultados mensuráveis através de um processo validado.
                        </p>
                    </motion.div>
                </div>

                {/* --- 1. METHODOLOGY STEPS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 relative">
                    {STEPS.map((step, idx) => (
                        <PixelCard
                            key={step.id}
                            variant="blue"
                            gap={4}
                            speed={20}
                            colors="#2563EB,#3B82F6,#60A5FA"
                            className="h-[320px] w-full rounded-2xl border-white/5"
                        >
                            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between bg-neutral-950/90 backdrop-blur-md group-hover:bg-neutral-950/80 transition-all duration-500 overflow-hidden">

                                {/* Background / Image Area adaptation for Number */}
                                <div className={cn("absolute inset-0 z-0 overflow-hidden")}>
                                    <div className="w-full h-full opacity-100 transition-opacity duration-500">
                                        <div className="absolute -right-4 -top-8 opacity-[0.03] transform scale-150 pointer-events-none">
                                            <span className="text-[12rem] font-bold text-white tracking-tighter leading-none">
                                                {step.id}
                                            </span>
                                        </div>
                                        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50 transition-transform duration-700" />
                                    </div>
                                </div>

                                <div className="flex justify-between items-start relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
                                        <step.icon size={24} />
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className="w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent relative z-10" />
                            </div>
                        </PixelCard>
                    ))}

                    {/* Visual Connector Line to Next Section */}
                    <div className="absolute -bottom-16 left-1/2 w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent hidden lg:block" />
                </div>


                {/* --- 2. APPLIED METRICS (FEATURES) --- */}
                <div className="mb-24 relative">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Aplicado à <span className="text-blue-400">Realidade</span>
                        </h3>
                        <p className="text-neutral-500 max-w-xl mx-auto">
                            Veja como nossa metodologia impacta diretamente os indicadores do seu negócio.
                        </p>
                    </div>

                    {/* TABS */}
                    <div className="flex justify-center mb-12">
                        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-full">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                                        activeTab === tab.id
                                            ? "text-white bg-blue-600 shadow-lg shadow-blue-500/20"
                                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* METRICS GRID */}
                    <div className="min-h-[240px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            >
                                {filteredMetrics.map((m) => (
                                    <div key={m.id} className="group relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/[0.07]">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-xs font-medium text-neutral-500">{m.label}</span>
                                            <div className="px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-1">
                                                <ArrowUpRight size={12} className="text-green-400" />
                                                <span className="text-[10px] font-bold text-green-400">{m.badge}</span>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <span className="text-4xl font-bold text-white tracking-tighter block">{m.stat}</span>
                                        </div>
                                        <p className="text-sm text-neutral-400 leading-relaxed">
                                            {m.desc}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* --- 3. ECOSYSTEM --- */}
                <div className="border-t border-white/10 pt-16">
                    <div className="text-center mb-8">
                        <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest">Ecossistema Integrado</span>
                    </div>

                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-full bg-white/5 border border-white/5 backdrop-blur-[2px] md:shadow-xl mb-24">
                        <Marquee pauseOnHover className="[--duration:80s] py-8">
                            {INTEGRATIONS.map((tool, i) => (
                                <div key={i} className="mx-8 flex items-center gap-2 group cursor-default opacity-50 hover:opacity-100 transition-opacity duration-600">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-600 brightness-125"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement?.classList.add('bg-white/10', 'rounded-lg');
                                            }}
                                        />
                                    </div>
                                    <span className="text-lg font-semibold text-neutral-300 group-hover:text-white transition-colors">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TECH_SPECS.map((spec, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <spec.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">{spec.title}</h4>
                                    <p className="text-sm text-neutral-400">{spec.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
