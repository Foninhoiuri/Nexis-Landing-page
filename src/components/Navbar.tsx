"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [

    { name: "Soluções", href: "#solucoes" },
    { name: "Metodologia", href: "#metodologia" },
    { name: "Cases", href: "#cases" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { scrollY } = useScroll();

    // Transform background opacity based on scroll
    const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.8]);
    const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={cn(
                "fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300",
                isScrolled ? "backdrop-blur-md" : "backdrop-blur-none"
            )}
            style={{
                backgroundColor: `rgba(var(--bg-depth), ${isScrolled ? 0.7 : 0})`,
                borderColor: `rgba(255,255,255, ${isScrolled ? 0.05 : 0})`,
                borderBottomWidth: isScrolled ? "1px" : "0px",
            }}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <img
                        src="/nexis_logo.png"
                        alt="Nexis Logo"
                        className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-2">
                    {NAV_LINKS.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                        >
                            {hoveredIndex === index && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                        Log in
                    </Link>
                    <button className="btn-blue-solid h-9 px-6 text-sm">
                        Começar
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-neutral-400 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-16 inset-x-0 bg-background/95 backdrop-blur-xl border-b border-white/5 p-4 flex flex-col gap-4 md:hidden"
                >
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px bg-white/5 my-2" />
                    <Link href="/login" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors py-2">
                        Log in
                    </Link>
                    <button className="w-full h-10 rounded-lg bg-brand text-white text-sm font-medium">
                        Começar
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
}
