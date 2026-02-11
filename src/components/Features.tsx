"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import Marquee from "@/components/ui/marquee";
import {
    ArrowUpRight,
    ShieldCheck,
    Lock,
    Server,
    Globe,
    Cpu,
    Zap,
    Users,
    BarChart3,
    Database,
    Smartphone
} from "lucide-react";
import PixelCard from "@/components/ui/PixelCard";
import TargetCard from "@/components/ui/TargetCard";

// --- DADOS ---

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
        highlight: "text-blue-400",
        badge: "Mais Vendas"
    },
    {
        id: "02",
        category: "vendas",
        label: "ROI (ANUAL)",
        stat: "200%",
        desc: "Retorno sobre investimento já no primeiro ano.",
        highlight: "text-blue-400",
        badge: "Alta Rentabilidade"
    },
    {
        id: "03",
        category: "vendas",
        label: "ATENDIMENTO",
        stat: "24/7",
        desc: "Disponibilidade total sem custo de hora extra.",
        highlight: "text-blue-400",
        badge: "Satisfação Total"
    },

    // OPERACIONAL
    {
        id: "04",
        category: "operacional",
        label: "PRODUTIVIDADE",
        stat: "+40h",
        desc: "Horas mensais poupadas por colaborador.",
        highlight: "text-emerald-400",
        badge: "Tempo Ganho"
    },
    {
        id: "05",
        category: "operacional",
        label: "FINANCEIRO",
        stat: "-90%",
        desc: "Redução de erros em emissão de notas e boletos.",
        highlight: "text-emerald-400",
        badge: "Zero Erros"
    },
    {
        id: "06",
        category: "operacional",
        label: "RECRUTAMENTO",
        stat: "-70%",
        desc: "Tempo economizado na triagem de candidatos.",
        highlight: "text-emerald-400",
        badge: "Contratação Ágil"
    },

    // INFRA
    {
        id: "07",
        category: "infra",
        label: "UPTIME",
        stat: "99.9%",
        desc: "Garantia de disponibilidade de rede e sistemas.",
        highlight: "text-purple-400",
        badge: "Sempre Online"
    },
    {
        id: "08",
        category: "infra",
        label: "SEGURANÇA",
        stat: "100%",
        desc: "Monitoramento ativo contra ameaças externas.",
        highlight: "text-purple-400",
        badge: "Dados Protegidos"
    },
    {
        id: "09",
        category: "infra",
        label: "LATÊNCIA",
        stat: "1ms",
        desc: "Resposta instantânea em redes locais otimizadas.",
        highlight: "text-purple-400",
        badge: "Ultra Rápido"
    },
];
// ... (INTEGRATIONS and TECH_SPECS arrays remain unchanged, assuming replace_file_content handles the gap if I target correctly or I can just target the function rendering part if I split edits, but replacing valid block is safer)

// I will target the rendering part mainly, but I need to update METRICS first. Since I can't do two discontinuous blocks easily without multi_replace, and I want to update the data structure, I will use multi_replace.
// Wait, I am using replace_file_content in the thought trace, but the instruction says "Update METRICS array... AND In the render loop".
// I will use multi_replace_file_content to do both in one go.



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


export function Features() {
    const [activeTab, setActiveTab] = useState<Category>("vendas");

    const filteredMetrics = METRICS.filter(m => m.category === activeTab);

    return (
        <section id="features" className="bg-black py-24 px-4 font-sans relative overflow-hidden border-t border-white/5">

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
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            RESULTADOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">TANGÍVEIS</span>
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            A Arquitetura Nexis não é apenas teórica. É uma reformulação completa de como sua empresa opera.
                        </p>
                    </motion.div>
                </div>


                {/* --- TABS --- */}
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

                {/* --- METRICS GRID --- */}
                <div className="min-h-[300px] mb-24">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            {/* PixelCard import moved to top manually */}
                            {filteredMetrics.map((m, idx) => (
                                <PixelCard
                                    key={m.id}
                                    variant="blue"
                                    gap={4}
                                    speed={20}
                                    colors="#2563EB,#3B82F6,#60A5FA"
                                    className="h-[220px] w-full rounded-2xl border-white/5"
                                >
                                    <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between bg-neutral-950/90 backdrop-blur-md group-hover:bg-neutral-950/80 transition-all duration-500">

                                        {/* Header */}
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-sm font-medium text-neutral-400 tracking-wide">
                                                {m.label}
                                            </h3>
                                        </div>

                                        {/* Main Stat */}
                                        <div className="flex items-end justify-between mt-2">
                                            <div className="text-5xl font-bold tracking-tighter text-white">
                                                {m.stat}
                                            </div>
                                        </div>

                                        {/* Footer / Description */}
                                        <div className="mt-4 flex items-center gap-3">
                                            <div className="flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                                                <ArrowUpRight className="w-3 h-3 text-green-400" />
                                                <span className="text-xs font-semibold text-green-400">
                                                    {m.badge}
                                                </span>
                                            </div>
                                            <p className="text-xs text-neutral-500 line-clamp-1 flex-1">
                                                {m.desc}
                                            </p>
                                        </div>
                                    </div>
                                </PixelCard>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>


                {/* --- ECOSYSTEM (MARQUEE) --- */}
                <div className="mb-24 relative">
                    <div className="text-center mb-4">
                        <h3 className="text-2xl font-bold text-white mt-2">Conectado ao seu mundo</h3>
                    </div>

                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-full bg-white/5 border border-white/5 backdrop-blur-[2px] md:shadow-xl">
                        <Marquee pauseOnHover className="[--duration:80s] py-8">
                            {INTEGRATIONS.map((tool, i) => (
                                <div key={i} className="mx-8 flex items-center gap-2 group cursor-default opacity-50 hover:opacity-100 transition-opacity duration-600">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-600 brightness-125"
                                            onError={(e) => {
                                                // Fallback para caso alguma imagem não exista (evita quebra visual)
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

                        {/* Gradients */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/80 to-transparent dark:from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-black/80 to-transparent dark:from-background"></div>
                    </div>
                </div>


                {/* --- ENTERPRISE SPECS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-16">
                    {TECH_SPECS.map((spec, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-400">
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
        </section>
    );
}
