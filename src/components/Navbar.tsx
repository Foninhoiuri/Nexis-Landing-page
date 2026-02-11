"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useDevice } from "@/hooks/useDevice";
import Link from "next/link";
import { WhatsAppHoverButton } from "@/components/ui/whatsapp-hover-button";
import { SOCIAL } from "@/config/social";

// --- ASSETS ---
const ASSETS = {
    icon: "/nexis_logo.png",
};

// --- LINKS MAP ---
const LINKS = [
    { label: "Dores", id: "problems" },
    { label: "Soluções", id: "solutions" },
    { label: "Dashboard", id: "dashboard" },
    { label: "Metodologia", id: "methodology" },
    { label: "Depoimentos", id: "reviews" },
    { label: "FAQ", id: "faq" },
];

// --- CONFIGURAÇÃO DE ALTURAS ---
const LOGO_ICON_SIZES = {
    desktop: 30,
    tablet: 30,
    mobile: 32,
};

const NAVBAR_HEIGHTS = {
    desktop: 72,
    tablet: 72,
    mobile: 80,
};

export function Navbar() {
    const logoRef = useRef<HTMLAnchorElement>(null);
    const { isMobile, isTablet, isDesktop } = useDevice();
    const [activeTab, setActiveTab] = useState("Soluções");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(NAVBAR_HEIGHTS.desktop);
    const [iconHeight, setIconHeight] = useState(LOGO_ICON_SIZES.desktop);

    // --- UPDATE DIMENSIONS ---
    useEffect(() => {
        if (isDesktop) {
            setNavbarHeight(NAVBAR_HEIGHTS.desktop);
            setIconHeight(LOGO_ICON_SIZES.desktop);
        } else if (isTablet) {
            setNavbarHeight(NAVBAR_HEIGHTS.tablet);
            setIconHeight(LOGO_ICON_SIZES.tablet);
        } else {
            setNavbarHeight(NAVBAR_HEIGHTS.mobile);
            setIconHeight(LOGO_ICON_SIZES.mobile);
        }
    }, [isDesktop, isTablet, isMobile]);

    // -- SECTION DETECTOR --
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const visibleSectionId = entry.target.id;
                        const link = LINKS.find(l => l.id === visibleSectionId);
                        if (link) setActiveTab(link.label);
                    }
                });
            },
            { rootMargin: "-40% 0px -50% 0px" }
        );

        LINKS.forEach(l => {
            const el = document.getElementById(l.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // --- SCROLL ---
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --- ESTILOS ---
    const containerStyle = `
        backdrop-blur-[10px]
        bg-[#050505]/40
        rounded-full
        border border-white/5
        shadow-[0_8px_32px_rgba(0,0,0,0.2)]
    `;

    const transparentStyle = `bg-transparent border-transparent shadow-none rounded-0 `;

    const glassStyleMobile = `
        backdrop-blur-[20px]
        bg-black/80
        rounded-full
        border border-white/10
        shadow-2xl
    `;

    return (
        <>
            {/* DESKTOP / TABLET NAV (ESCONDIDO NO MOBILE) */}
            <div className="hidden md:flex fixed top-4 left-0 w-full z-50 justify-center pointer-events-none">
                <motion.div
                    initial={false}
                    animate={{ opacity: 1 }}
                    className={`
                        pointer-events-auto relative
                        flex items-center justify-between px-6
                        
                        transition-all duration-300
                        ${scrolled ? containerStyle : transparentStyle}
                    `}
                    style={{
                        height: `${navbarHeight}px`,
                        width: "auto",
                        minWidth: "700px",
                        maxWidth: "1500px",
                    }}
                >
                    {/* 1. LOGO (SOLTA e SEM FUNDO) */}
                    {/* 1. LOGO (SOLTA e SEM FUNDO) */}
                    <Link
                        href="/"
                        ref={logoRef}
                        onClick={(e) => {
                            e.preventDefault();
                            const hero = document.getElementById("hero");
                            if (hero) {
                                hero.scrollIntoView({ behavior: "smooth" });
                            } else {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                            setActiveTab("");
                        }}
                        className="flex justify-start px-4 transition-opacity hover:cursor-pointer hover:transition-transform hover:scale-[1.1]"
                    >
                        <img
                            src={ASSETS.icon}
                            alt="Nexis Logo"
                            className="object-contain"
                            style={{ height: `${iconHeight}px` }}
                        />
                    </Link>

                    {/* 2. NAVEGAÇÃO CENTRAL */}
                    {(!isTablet || scrolled) && (
                        <nav className="flex items-center 
                        backdrop-blur-[100px]
                        gap-1 bg-white/5 p-1.5 
                        rounded-full 
                        border border-white/5 
                        mx-auto">
                            {LINKS.map((link) => {
                                const isActive = activeTab === link.label;
                                return (
                                    <button
                                        key={link.id}
                                        onClick={() => {
                                            const el = document.getElementById(link.id);
                                            if (el) {
                                                el.scrollIntoView({ behavior: "smooth" });
                                                setActiveTab(link.label);
                                            } else {
                                                console.warn(`Elemento com id '${link.id}' não encontrado!`);
                                            }
                                        }}
                                        className={`
                                            relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
                                            ${isActive
                                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                                                : "text-zinc-400 hover:text-white hover:bg-white/5"
                                            }
                                        `}
                                    >
                                        {link.label}
                                    </button>
                                );
                            })}
                        </nav>
                    )}


                    {/* 3. BOTÃO COMEÇAR (SUBSTITUÍDO) */}
                    {SOCIAL.whatsapp.active && (
                        <div className="flex items-center ml-8 hover:cursor-pointer">
                            <WhatsAppHoverButton
                                className="min-w-[140px]"
                                onClick={() => window.open(SOCIAL.whatsapp.url, "_blank")}
                            />
                        </div>
                    )}
                </motion.div>
            </div>

            {/* MOBILE: SPEED DIAL (SÓ APARECE NO MOBILE) */}
            <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-3 pointer-events-auto">

                {/* Botão de Toggle (FAB) */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`
                        w-14 h-14 rounded-full flex items-center justify-center
                        text-white shadow-xl transition-all duration-300 relative z-50
                        ${isMobileMenuOpen
                            ? "bg-blue-600 rotate-90"
                            : `${glassStyleMobile} rotate-0`
                        }
                    `}
                >
                    {isMobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                    )}
                </motion.button>

                {/* Itens do Menu Mobile */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        // Alterado: items-end -> items-center para centralizar na "coluna" do botão
                        <div className="flex flex-col items-center gap-3 mb-2">
                            {LINKS.slice().reverse().map((link, i) => (
                                <motion.button
                                    key={link.label}
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                    transition={{ delay: (i + 1) * 0.05 }}
                                    onClick={() => {
                                        const el = document.getElementById(link.id);
                                        if (el) {
                                            el.scrollIntoView({ behavior: "smooth" });
                                            setActiveTab(link.label);
                                        }
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`
                                        px-6 py-3 rounded-full font-medium text-white shadow-lg min-w-[140px] items-end
                                        ${activeTab === link.label ? "bg-blue-600" : glassStyleMobile}
                                    `}
                                >
                                    {link.label}
                                </motion.button>
                            ))}

                            {/* Botão Começar Mobile */}
                            {SOCIAL.whatsapp.active && (
                                <motion.button
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                    transition={{ delay: 0.05 }}
                                    onClick={() => window.open(SOCIAL.whatsapp.url, "_blank")}
                                    className=" btn-blue bg-[var(--color-brand-blue)] px-6 py-3 rounded-full text-white font-bold shadow-lg min-w-[140px] text-center items-center"
                                >
                                    Começar
                                </motion.button>
                            )}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}