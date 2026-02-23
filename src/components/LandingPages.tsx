"use client";

import React, { useState, useEffect } from "react";
import { m as motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import { RotatingBlurText } from "@/components/ui/RotatingBlurText";
import { RainbowButton } from "@/components/ui/BlueRainbowButton";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { SOCIAL } from "@/config/social";
import GradualBlur from "@/components/ui/gradual-blur";
import { AssetLoader } from "@/components/ui/AssetLoader";
import { Skeleton } from "@/components/ui/Skeleton";
import { WhatsAppHoverButton } from "@/components/ui/whatsapp-hover-button";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

// Data for the pages showcase
const PAGES_DATA = [
    {
        img: "/paginas/nexis.png",
        alt: "Nexis Landing Page",
        badge: "Landing Page Pessoal",
        badgeColor: "text-blue-400",
        dotColor: "bg-blue-400",
        gradientDir: "to-r",
        imgReversed: false,
        title: "Igori Urial — Portfólio & Professional Brand",
        desc: "Página de apresentação profissional com design dark premium, animações fluídas e call-to-action otimizado para conversão de novos clientes e oportunidades.",
        href: "https://www.igoriurialves.com.br/",
    },
    {
        img: "/paginas/bruno.png",
        alt: "Bruno Landing Page",
        badge: "Landing Page Educacional",
        badgeColor: "text-violet-400",
        dotColor: "bg-violet-400",
        gradientDir: "to-l",
        imgReversed: true,
        title: "Teacher Bruno — Captação de Alunos Premium",
        desc: "Página de vendas para programa educacional com funil de conversão estratégico, depoimentos em destaque e seções de prova social para maximizar matrículas.",
        href: "https://teacher-bruno-landingpage.neon10-00086.workers.dev/",
    },
    {
        img: "/paginas/officemac.png",
        alt: "OfficeMac Landing Page",
        badge: "Landing Page Corporativa",
        badgeColor: "text-emerald-400",
        dotColor: "bg-emerald-400",
        gradientDir: "to-r",
        imgReversed: false,
        title: "OfficeMac — Soluções Apple para Empresas",
        desc: "Página institucional com identidade visual premium inspirada no design da Apple, focada em apresentar serviços empresariais de suporte e equipamentos Mac.",
        href: "https://officemac-lp.neon10-00086.workers.dev/",
    },
];

export function LandingPages() {
    return (
        <section id="landing-pages" className="relative min-h-screen flex flex-col items-center pt-4 md:pt-2 lg:pt-3 pb-20 xl:pb-16 overflow-visible xl:overflow-hidden bg-background">
            {/* Mobile-only Logo */}
            <div className="flex md:hidden w-full justify-center pb-4">
                <img
                    src="/nexis_logo.png"
                    alt="Nexis Logo"
                    className="h-12 w-auto object-contain"
                />
            </div>

            {/* Conteúdo de Texto (Esquerda) - Carrega Imediato */}
            <div className="w-full max-w-[1600px] mx-auto relative px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[50%_50%] gap-20 lg:gap-20 xl:gap-60 items-center min-h-[calc(100vh-100px)]">
                {/* Coluna 1: Texto (Mobile: Acima, Desktop: Esquerda) */}
                <div className="flex flex-col items-start text-left pt-10 lg:pt-0 order-1 lg:order-1 relative z-50">
                    <AssetLoader
                        urls={[]} // No external assets for text, but we want the delay effect
                        minDisplayTime={800} // Force skeleton for 0.8s for effect
                        skeleton={
                            <div className="w-full flex flex-col items-start gap-6">
                                <Skeleton className="h-8 w-64 rounded-full bg-white/5" />
                                <div className="space-y-4 w-full">
                                    <Skeleton className="h-16 w-full max-w-xl rounded-lg bg-white/5" />
                                    <Skeleton className="h-16 w-3/4 max-w-lg rounded-lg bg-white/5" />
                                </div>
                                <Skeleton className="h-20 w-full max-w-md rounded-lg bg-white/5" />
                                <div className="flex gap-4 w-full mt-4">
                                    <Skeleton className="h-12 w-40 rounded-lg bg-white/5" />
                                    <Skeleton className="h-12 w-40 rounded-lg bg-white/5" />
                                </div>
                            </div>
                        }
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 sm:mb-8 hover:border-brand/30 transition-colors cursor-default"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
                            <span className="text-xs font-medium text-neutral-300">Design de Alta Conversão e Performance</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white mb-4 sm:mb-6 relative z-30 leading-tight"
                        >
                            Landing Pages que{" "}
                            <br className="block sm:hidden" />
                            <RotatingBlurText
                                texts={[
                                    "convertem!",
                                    "vendem mais!",
                                    "posicionam!",
                                    "surpreendem!",
                                    "dominam!",
                                ]}
                                className="text-gradient-hero drop-shadow-[0_0_30px_rgba(37,99,235,0.5)] pb-1"
                            />
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-base sm:text-lg md:text-xl text-neutral-400 mb-8 sm:mb-10 leading-relaxed relative z-30"
                        >
                            Criamos experiências digitais focadas em resultados reais. <br className="hidden md:block" />
                            <span className="text-white">Transforme visitantes em clientes com layouts premium.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 relative  w-full sm:w-auto"
                        >
                            {SOCIAL.whatsapp.active && (
                                <WhatsAppHoverButton
                                    text="Começar agora"
                                    className="min-w-[180px]"
                                    onClick={() => window.open(SOCIAL.whatsapp.url, "_blank")}
                                />
                            )}
                            <button
                                onClick={() => document.getElementById("nossas-paginas")?.scrollIntoView({ behavior: "smooth" })}
                                className="btn-blue bg-surface border border-white/10 flex items-center gap-2 w-full sm:w-auto justify-center h-[46px]"
                            >
                                <Zap className="w-4 h-4 text-brand-white" />
                                Nossas Páginas
                            </button>
                        </motion.div>
                    </AssetLoader>
                </div>

                {/* Coluna 2: Landing Pages Interactive Previews (Mobile: Abaixo, Desktop: Direita) */}
                <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] h-full order-2 lg:order-2 w-full pt-10 lg:pt-0 pb-0">
                    <CardSwap
                        width={1280}
                        height={720}
                        cardDistance={100}
                        verticalDistance={100}
                        delay={3000}
                        containerClassName="lg:translate-x-[5%] overflow-visible lg:translate-y-[1%] translate-x-0 -translate-y-[15%] scale-[0.30] md:scale-[0.6] lg:scale-[0.8] opacity-90 mx-auto"
                    >
                        {[
                            "/paginas/nexis.png",
                            "/paginas/bruno.png",
                            "/paginas/officemac.png",
                            "/paginas/nexis_2.png",
                            "/paginas/bruno_2.png",
                            "/paginas/nexis_3.png",
                        ].map((imgSrc, idx) => (
                            <Card key={idx} className="border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
                                <img
                                    src={imgSrc}
                                    alt={`Preview ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
                                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
                            </Card>
                        ))}
                    </CardSwap>
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

            {/* SEÇÃO NOSSAS PÁGINAS */}
            <section id="nossas-paginas" className="relative w-full py-20 bg-black flex flex-col items-center z-50 overflow-hidden">
                <DotPattern
                    width={30}
                    height={30}
                    cx={1}
                    cy={1}
                    cr={1.5}
                    className={cn(
                        "text-white/10 opacity-40",
                        "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
                    )}
                />

                <div className="container relative z-10 mx-auto px-6 text-center">
                    {/* Badge Superior "Nossas Páginas" */}
                    <RainbowButton className="mb-6 h-9 rounded-full px-5">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse shadow-[0_0_10px_rgba(147,197,253,0.8)]" />
                            Showcase de Projetos
                        </span>
                    </RainbowButton>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Portfólio de <br className="hidden md:block" />
                        <span className="text-gradient-hero drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                            Nossas Páginas
                        </span>
                    </h2>

                    <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light mb-16">
                        Explore as soluções visuais e de conversão que desenvolvemos para nossos clientes.
                    </p>

                    {/* ── UNIFIED GRID (ProblemCard Style) ── */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {PAGES_DATA.map((page, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "group relative h-[500px] bg-white/5 transition-all duration-500 rounded-[3rem] hover:scale-[1.02] bg-gradient-to-tr from-brand/5 via-zinc-950 to-transparent",
                                    "overflow-hidden z-20 text-left"
                                )}
                            >
                                {/* Background / Image Area */}
                                <div className={cn("absolute inset-0 z-0 rounded-[3rem] overflow-hidden")}>
                                    <div className="w-full h-full opacity-100 transition-opacity duration-500">
                                        <img
                                            src={page.img}
                                            alt={page.alt}
                                            className="w-full h-full object-cover object-top opacity-70 transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
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
                                        <span className={`inline-flex items-center justify-center gap-1.5 text-[9px] font-semibold tracking-widest uppercase ${page.badgeColor} mb-2`}>
                                            <span className={`w-1 h-1 rounded-full ${page.dotColor} animate-pulse`} />
                                            {page.badge}
                                        </span>
                                        <h3 className="text-xl font-bold text-brand mb-2 transition-colors min-h-[3.5rem] flex items-end justify-center">
                                            {page.title.split(' — ')[0]}
                                        </h3>
                                        <p className="text-neutral-300 text-sm leading-relaxed text-balance min-h-[5rem] flex items-start justify-center">
                                            {page.desc}
                                        </p>
                                        <a
                                            href={page.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 pointer-events-auto text-[11px] font-medium text-brand hover:text-white transition-colors flex items-center justify-center gap-1 group/link"
                                        >
                                            Ver projeto <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 inline-block transition-transform">↗</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO QUEM SOMOS */}
            <section id="quem-somos" className="relative w-full py-20 bg-background overflow-hidden">
                {/* Glow de fundo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container relative z-10 mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Foto do Fundador */}
                        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group order-2 lg:order-1">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                            {/* O usuário deve colocar a imagem eu.png na pasta public */}
                            <img
                                src="/eu.png"
                                alt="Igori Urial - Fundador da Nexis"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-8 left-8 z-20">
                                <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-blue-400 mb-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                    Fundador
                                </span>
                                <h3 className="text-2xl font-bold text-white">Igor iuri1</h3>
                            </div>
                        </div>

                        {/* Texto */}
                        <div className="flex flex-col justify-center order-1 lg:order-2">
                            <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-blue-400 mb-4">
                                <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                                Sobre Mim
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Oi, sou o Igor.{" "}
                                <br />
                                <span className="text-gradient-hero drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                                    Design & Automação
                                </span>
                            </h2>
                            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6 font-light">
                                Sou apaixonado por unir estética refinada, minimalismo e alta conversão. A <span className="text-white font-medium">Nexis</span> nasceu desse propósito: criar projetos que não só deslumbram no primeiro olhar, mas que são verdadeiras máquinas de gerar lucro.
                            </p>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                                Nosso foco central está na construção de <span className="text-white font-medium">Landing Pages premium</span>. Cuidamos de cada pixel para prender a atenção do seu cliente em segundos. E, para garantir que seu funil seja completo, conectamos o design a <span className="text-white font-medium">automações inteligentes</span> nos bastidores — garantindo triagem de leads, atendimento rápido e controle absoluto do seu negócio digital, mesmo quando você estiver dormindo.
                            </p>

                            {/* Valores / Cards de pilares */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="group rounded-xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all duration-300 p-5">
                                    <span className="text-2xl mb-3 block">🎨</span>
                                    <h4 className="text-sm font-semibold text-white mb-2">Paixão por Design</h4>
                                    <p className="text-xs text-zinc-500 leading-relaxed">
                                        Interfaces visuais "Apple-like", limpas, sofisticadas e com forte autoridade para a sua marca.
                                    </p>
                                </div>
                                <div className="group rounded-xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all duration-300 p-5">
                                    <span className="text-2xl mb-3 block">🤖</span>
                                    <h4 className="text-sm font-semibold text-white mb-2">Páginas que Trabalham</h4>
                                    <p className="text-xs text-zinc-500 leading-relaxed">
                                        Muito além do layout, as páginas alimentam automações que operam ativamente no WhatsApp e CRMs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO PEÇA UM ORÇAMENTO */}
            <section id="orcamento" className="relative w-full py-20 bg-black overflow-hidden">
                {/* Glow azul central */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-800/8 rounded-full blur-[80px] pointer-events-none" />

                <div className="container relative z-10 mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center mb-12">
                        <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-blue-400 mb-4">
                            <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                            Seu próximo projeto
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Peça um{" "}
                            <span className="text-gradient-hero drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                                Orçamento
                            </span>
                        </h2>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            Conte um pouco sobre o seu projeto e nossa equipe entrará em contato em até <span className="text-white">24 horas</span>.
                        </p>
                    </div>

                    {/* CTA Card */}
                    <div className="max-w-xl mx-auto rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm p-6 md:p-10">
                        <div className="flex flex-col gap-4">

                            {/* Opções rápidas */}
                            <div>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-3">Tipo de projeto</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Landing Page", "Site Institucional", "Portfólio", "E-commerce", "Outro"].map((tipo) => (
                                        <button
                                            key={tipo}
                                            className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-zinc-400 hover:border-blue-500/50 hover:text-white hover:bg-blue-500/10 transition-all duration-200 cursor-pointer"
                                        >
                                            {tipo}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-white/8 my-1" />

                            {/* Info de contato */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-3">
                                    <span className="text-zinc-500 text-sm">👤</span>
                                    <input
                                        type="text"
                                        placeholder="Seu nome"
                                        className="bg-transparent text-sm text-white placeholder-zinc-600 outline-none w-full"
                                    />
                                </div>
                                <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-3">
                                    <span className="text-zinc-500 text-sm">💬</span>
                                    <input
                                        type="text"
                                        placeholder="Seu WhatsApp ou e-mail"
                                        className="bg-transparent text-sm text-white placeholder-zinc-600 outline-none w-full"
                                    />
                                </div>
                                <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-3">
                                    <span className="text-zinc-500 text-sm mt-0.5">📝</span>
                                    <textarea
                                        placeholder="Descreva brevemente seu projeto..."
                                        rows={3}
                                        className="bg-transparent text-sm text-white placeholder-zinc-600 outline-none w-full resize-none"
                                    />
                                </div>
                            </div>

                            {/* CTA Button */}
                            <a
                                href={`https://wa.me/5519996976519?text=Olá! Gostaria de solicitar um orçamento para uma landing page.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3.5 transition-all duration-200 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.845L.057 23.882l6.233-1.634A11.944 11.944 0 0 0 12 24c6.626 0 12-5.374 12-12S18.626 0 12 0zm0 21.818a9.817 9.817 0 0 1-5.001-1.368l-.358-.214-3.706.972.99-3.614-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                                </svg>
                                Enviar pelo WhatsApp
                            </a>

                            <p className="text-center text-[11px] text-zinc-600">
                                Resposta garantida em até 24h • Sem compromisso
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
