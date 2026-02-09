"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { SocialIcons } from "@/components/ui/Icons";

// --- CONFIGURAÇÃO REDES SOCIAIS ---
const SOCIAL_CONFIG = {
    iconSize: "w-5 h-5",
    hoverColor: "var(--color-brand-blue)", // Brand Blue
};

// Missing Google, LinkedIn, GitHub compared to OfficeMac reference
// Creating placeholder links/icons for now or reusing existing ones if we want to match structure

const SOCIAL_LINKS = [
    {
        name: "Instagram",
        url: "#",
        icon: <SocialIcons.instagram className="w-full h-full" />
    },
    {
        name: "Facebook",
        url: "#",
        icon: <SocialIcons.facebook className="w-full h-full" />
    },
    {
        name: "WhatsApp",
        url: "https://wa.me/5519999999999",
        icon: <SocialIcons.whatsapp className="w-full h-full" />
    }
];

const NAV_LINKS = [
    { label: "Dores", id: "problems" },
    { label: "Soluções", id: "solutions" },
    { label: "Dashboard", id: "dashboard" },
    { label: "Métricas", id: "features" },
    { label: "Metodologia", id: "methodology" },
    { label: "Depoimentos", id: "reviews" },
    { label: "FAQ", id: "faq" },
];

export function Footer() {
    return (
        <footer className="relative text-white pb-10 pt-64 lg:pt-56 overflow-hidden">

            {/* Placeholder for ContactCTA - positioned like reference */}
            {/* <div className="absolute top-0 left-0 w-full -translate-y-[55%] z-30">
            <ContactCTA />
        </div> */}

            {/* Background - using simple dark bg with grid pattern simulation if needed */}
            <div className="absolute inset-0 z-0 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black opacity-40" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <a href="/" className="flex items-center gap-2 group mb-4">
                            <img
                                src="/nexis_logo.png"
                                alt="Nexis Logo"
                                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                        </a>

                        {/* Social Media - positioned here as per reference branding column */}
                        <div className="flex">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center w-10 h-10 text-neutral-400 transition-all hover:text-brand hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]`}
                                    aria-label={social.name}
                                >
                                    <div className="w-5 h-5 ">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>

                        <p className="text-white/60 text-lg max-w-sm">
                            Sua parceira em automação e infraestrutura digital.
                        </p>
                    </div>

                    {/* Contact & Links Column - Matches Reference Structure */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Links Column */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold mb-4 text-white">Navegação</h4>
                            <ul className="space-y-3">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.id}>
                                        <a href={`#${link.id}`} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-base">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info Column */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="https://wa.me/5519999999999" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                <SocialIcons.whatsapp className="w-5 h-5" />
                                            </div>
                                            <span>+55 19 99999-9999</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:contato@nexis.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <span>contato@nexis.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold mb-4 text-white">Endereço</h4>
                                <div className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span>Americana<br />São Paulo, SP</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
                    <div className="flex items-center gap-2 text-neutral-600">
                        <img src="/favicon.ico" alt="Nexis" className="w-5 h-5 object-contain" />
                        <p>© 2026 Nexis Inc. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex gap-6">
                        <span className="text-white/40">Desenvolvido por <span className="font-semibold text-white">Nexis</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
