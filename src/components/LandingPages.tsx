"use client";

import React, { useState, useEffect } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Plus, Minus } from "lucide-react";
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
        badge: "Site da Agência",
        badgeColor: "text-blue-400",
        dotColor: "bg-blue-400",
        textGradient: "from-blue-600 to-blue-300",
        gradientDir: "to-r",
        imgReversed: false,
        title: "Nexis — Agência de Automação",
        desc: "O nosso próprio site. Um ecossistema digital desenvolvido em React e TailwindCSS com design focado em estética premium, conversão máxima e performance.",
        href: "#",
    },
    {
        img: "/paginas/bruno.png",
        alt: "Bruno Landing Page",
        badge: "Landing Page Educacional",
        badgeColor: "text-yellow-600",
        dotColor: "bg-yellow-600",
        textGradient: "from-yellow-600 to-yellow-300",
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
        badgeColor: "text-red-8 00",
        dotColor: "bg-red-800",
        textGradient: "from-red-800 to-red-600",
        gradientDir: "to-r",
        imgReversed: false,
        title: "OfficeMac — Soluções Apple para Empresas",
        desc: "Página institucional com identidade visual premium inspirada no design da Apple, focada em apresentar serviços empresariais de suporte e equipamentos Mac.",
        href: "https://officemac-lp.neon10-00086.workers.dev/",
    },
];

// FAQ Items da página principal
const FAQ_ITEMS = [
    {
        question: "Quanto tempo leva a implementação?",
        answer: "O MVP (Produto Mínimo Viável) para sua Landing Page pode estar rodando em ate 48 horas."
    },
    {
        question: "Voces criam Landing Pages para qualquer tipo de negocio?",
        answer: "Sim. Desenvolvemos Landing Pages para os mais variados nichos de mercado."
    },
    {
        question: "o pagamento é unico ou mensal?",
        answer: "O pagamento é unico. Você paga apenas uma vez e tem acesso vitalício ao seu site."
    },
    {
        question: "E se a automação parar de funcionar?",
        answer: "Nossos contratos incluem monitoramento ativo. Se um fluxo falha, nossa equipe é notificada antes mesmo de você perceber, parando o agente na hora e resolvemos em até 24h."
    }
];

export function LandingPages() {
    const [activeCardIdx, setActiveCardIdx] = useState(0);
    const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);
    const activeData = PAGES_DATA[activeCardIdx % PAGES_DATA.length];

    return (
        <section id="landing-pages" className="relative min-h-screen flex flex-col items-center pt-4 md:pt-2 lg:pt-3 pb-20 xl:pb-16 overflow-visible xl:overflow-hidden bg-black">
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
                <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] h-full order-2 lg:order-2 w-full pt-0 pb-0">
                    <div className="relative w-full max-w-[700px] aspect-[16/10] flex items-center justify-center transform -translate-y-[15%] md:-translate-y-[10%] lg:-translate-y-[5%] translate-x-0 lg:-translate-x-[10%] xl:-translate-x-[12%]">

                        {/* Imac Mockup (Centro/Atrás) */}
                        <div className="absolute top-1/2 left-1/2 lg:left-[40%] -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-[100%] z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <div className="absolute top-[4.5%] left-[4.5%] w-[91%] h-[64%] overflow-hidden bg-black z-0 rounded-lg">
                                <img src="/paginas/nexis.png" alt="Nexis on iMac" className="w-full h-full object-cover object-top opacity-90" />
                            </div>
                            <img src="/paginas/imac.png" alt="iMac Mockup" className="relative z-10 w-full h-auto pointer-events-none" />
                        </div>

                        {/* iPhone Mockup (Frente) */}
                        <div className="absolute bottom-[-20%] left-[5%] lg:left-[-5%] w-[21%] lg:w-[20%] z-20 drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]">
                            <div className="absolute top-[1%] left-[5%] w-[92%] h-[95%] overflow-hidden bg-black z-0 rounded-[15%]">
                                <video
                                    src="/paginas/iphone video.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <img src="/paginas/iphone.png" alt="iPhone Mockup" className="relative z-10 w-full h-auto pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>



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

                    {/* DYNAMIC SHOWCASE WITH CARDSWAP */}
                    <div className="grid grid-cols-1 xl:grid-cols-[45%_55%] gap-12 xl:gap-24 mt-8 w-full max-w-[1600px] mx-auto px-6 md:px-12 items-center">

                        {/* Text Content (Left Side) */}
                        <div className="flex flex-col text-left relative z-30 w-full order-2 xl:order-1 -mt-24 md:-mt-32 xl:mt-0 justify-center">
                            <motion.div
                                key={activeCardIdx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-5 items-start bg-black/40 xl:bg-transparent p-6 md:p-8 xl:p-0 rounded-3xl backdrop-blur-md xl:backdrop-blur-none shadow-2xl xl:shadow-none"
                            >
                                <span className={cn("inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-2", activeData?.badgeColor)}>
                                    <span className={cn("w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse", activeData?.dotColor)} />
                                    {activeData?.badge}
                                </span>

                                <h3 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-2 leading-tight">
                                    {activeData?.title.split(' — ')[0]} <br />
                                    <span className={cn("text-transparent bg-clip-text text-3xl md:text-4xl xl:text-5xl font-normal mt-2 block bg-gradient-to-r", activeData?.textGradient || "from-brand to-blue-300")}>
                                        {activeData?.title.split(' — ')[1] || ""}
                                    </span>
                                </h3>

                                <p className="text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed mb-6 max-w-2xl">
                                    {activeData?.desc}
                                </p>

                                <a
                                    href={activeData?.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-blue bg-surface border border-white/10 flex items-center gap-2 w-max justify-center h-[52px] px-8 text-base font-semibold"
                                >
                                    Visitar Projeto
                                    <ArrowRight className="w-5 h-5 ml-1" />
                                </a>
                            </motion.div>
                        </div>

                        {/* CardSwap (Right Side) */}
                        <div className="w-full relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center order-1 xl:order-2 perspective-[1200px] pointer-events-none xl:pointer-events-auto">
                            <CardSwap
                                width={700}
                                height={420}
                                cardDistance={40}
                                verticalDistance={40}
                                delay={4000}
                                onActiveCardChange={setActiveCardIdx}
                                containerClassName="!bottom-auto !right-auto !left-1/2 !top-1/2 !-translate-x-1/2 !-translate-y-1/2 xl:!-translate-y-[30%] origin-center scale-[0.6] sm:scale-[0.8] md:scale-100 lg:scale-[1.1] xl:scale-[1.15]"
                            >
                                {PAGES_DATA.slice(0, 3).map((page, idx) => (
                                    <Card key={idx} className="border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.9)] overflow-hidden rounded-[2rem] pointer-events-auto">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent z-10 pointer-events-none mix-blend-overlay" />
                                        <img
                                            src={page.img}
                                            alt={page.alt}
                                            className="w-full h-full object-cover object-top"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-20 pointer-events-none" />
                                    </Card>
                                ))}
                            </CardSwap>
                        </div>
                    </div>
                </div>
            </section>



            {/* SEÇÃO FAQ + CONTATO */}
            <section id="faq" className="py-24 bg-black relative border-t border-white/5">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none opacity-50" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        {/* Coluna Esquerda: Título e Intro */}
                        <div className="lg:sticky lg:top-24">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white text-left"
                            >
                                Dúvidas <br />
                                <span className="text-neutral-500">Frequentes</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-neutral-400 max-w-md text-left"
                            >
                                Entenda como a Nexis se integra à sua operação.
                                Se tiver dúvidas técnicas específicas, fale com nossos engenheiros.
                            </motion.p>

                            {/* Card de Contato - Layout Otimizado para Mobile */}
                            <div className="w-full relative group mt-10 max-w-sm sm:max-w-md mx-auto lg:mx-0">
                                <div className="relative flex flex-col items-center gap-6 p-6 sm:px-8 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] lg:rounded-[2rem] shadow-2xl">

                                    {/* Top Section: Image (Left) + Info (Right) */}
                                    <div className="flex flex-row items-center w-full gap-5">

                                        {/* Avatar area */}
                                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 shrink-0">
                                            <div className="w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-inner">
                                                <img
                                                    src="/pessoas/igor.png"
                                                    alt="Igor iuri - Atendente Online"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Ponto Online */}
                                            <div className="absolute bottom-0 right-1 sm:bottom-1 sm:right-1 md:bottom-2 md:right-2 w-4 h-4 rounded-full border-2 border-zinc-900 bg-green-500 z-10 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                                        </div>

                                        {/* Info area */}
                                        <div className="flex flex-col items-start text-left flex-1 min-w-0">
                                            <div className="bg-green-500/10 text-green-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md mb-2 inline-flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                Online
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">Igor Iuri</h3>
                                            <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2">Especialista em Automação & Conversão</p>
                                        </div>
                                    </div>

                                    {/* Bottom Section: Full Width Button */}
                                    <div className="w-full pt-2">
                                        <a
                                            href="https://wa.me/5519996976519?text=Olá! Me interessei pelas Landing Pages da Nexis e gostaria de falar com um atendente."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand hover:bg-blue-500 text-white font-semibold text-sm px-6 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                                <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.845L.057 23.882l6.233-1.634A11.944 11.944 0 0 0 12 24c6.626 0 12-5.374 12-12S18.626 0 12 0zm0 21.818a9.817 9.817 0 0 1-5.001-1.368l-.358-.214-3.706.972.99-3.614-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                                            </svg>
                                            Falar Agora
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coluna Direita: Cards / Accordion Original FAQ */}
                        <div className="flex flex-col gap-4">
                            {FAQ_ITEMS.map((item, index) => (
                                <FAQItem
                                    key={index}
                                    item={item}
                                    isOpen={openFAQIndex === index}
                                    onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </section>
    );
}

function FAQItem({ item, isOpen, onClick }: { item: typeof FAQ_ITEMS[0], isOpen: boolean, onClick: () => void }) {
    return (
        <motion.div
            initial={false}
            onClick={onClick}
            className={cn(
                "glass-card cursor-pointer p-6 transition-all duration-300",
                isOpen && "border-blue-500/30 bg-blue-500/[0.08]"
            )}
        >
            <div className="flex items-center justify-between gap-4">
                <h3 className={cn(
                    "text-lg font-semibold transition-colors leading-tight",
                    isOpen ? "text-white" : "text-neutral-300 group-hover:text-white"
                )}>
                    {item.question}
                </h3>
                <div className={cn(
                    "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    isOpen ? "bg-brand text-white" : "bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white"
                )}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-neutral-400 leading-relaxed">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
