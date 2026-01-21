"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, User, Code2, Server, Cpu, ArrowRight, ToggleLeft, ToggleRight } from "lucide-react";
import Typewriter from "typewriter-effect";

export function AboutMe() {
    const [isDevMode, setIsDevMode] = useState(false);

    return (
        <motion.section
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`py-24 relative overflow-hidden transition-colors duration-500 border-b border-white/5 z-10 ${isDevMode ? "bg-black text-green-400 font-mono" : "bg-background text-white font-sans"
                }`}
        >
            {/* Texture Overlay for Dev Mode */}
            {isDevMode && (
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))", backgroundSize: "100% 2px, 3px 100%" }} />
            )}

            <div className="container mx-auto px-4 relative z-10">

                {/* Toggle Switch */}
                <div className="absolute top-0 right-4 md:right-0 flex items-center gap-3 bg-white/5 backdrop-blur-sm p-2 rounded-full border border-current shadow-lg z-20">
                    <span className={`text-xs font-bold uppercase tracking-wider ${!isDevMode ? "opacity-100" : "opacity-50"}`}>Business</span>
                    <button
                        onClick={() => setIsDevMode(!isDevMode)}
                        className="relative flex items-center justify-center text-current hover:scale-105 transition-transform"
                    >
                        {isDevMode ? <ToggleRight className="w-10 h-10 fill-green-500/20" /> : <ToggleLeft className="w-10 h-10" />}
                    </button>
                    <span className={`text-xs font-bold uppercase tracking-wider ${isDevMode ? "opacity-100 text-green-400" : "opacity-50"}`}>Dev Mode</span>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center min-h-[500px]">

                    {/* Left Content */}
                    <div className="space-y-6">
                        <AnimatePresence mode="wait">
                            {isDevMode ? (
                                <motion.div
                                    key="dev-text"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-6"
                                >
                                    <div className="flex items-center gap-2 text-green-500 border-b border-green-900/50 pb-2 w-fit">
                                        <Terminal className="w-5 h-5" />
                                        <span className="text-sm">root@nexis:~/profile</span>
                                    </div>

                                    <div className="min-h-[200px] text-sm md:text-base leading-relaxed p-4 rounded-lg bg-black/50 border border-green-900/50 shadow-inner font-mono">
                                        <Typewriter
                                            options={{
                                                delay: 30,
                                                cursor: "█",
                                            }}
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString('<span style="color: #4ade80;">root@nexis:~$ whoami</span><br/>')
                                                    .pauseFor(500)
                                                    .typeString('"Analista de Suporte & Dev Full-Stack"<br/><br/>')
                                                    .pauseFor(500)
                                                    .typeString('<span style="color: #4ade80;">root@nexis:~$ load_modules</span><br/>')
                                                    .pauseFor(300)
                                                    .typeString('[OK] Docker & Virtualization (Proxmox)<br/>')
                                                    .pauseFor(100)
                                                    .typeString('[OK] API Integration (Evolution API)<br/>')
                                                    .pauseFor(100)
                                                    .typeString('[OK] Security (VPN/Tailscale)<br/><br/>')
                                                    .pauseFor(500)
                                                    .typeString('<span style="color: #4ade80;">root@nexis:~$ current_status</span><br/>')
                                                    .typeString('"Pronto para otimizar sua empresa."')
                                                    .start();
                                            }}
                                        />
                                    </div>

                                    <button className="group mt-6 px-6 py-3 bg-green-900/20 border border-green-500/50 text-green-400 font-mono text-sm hover:bg-green-500/20 transition-all flex items-center gap-2">
                                        <span>./start_project.sh</span>
                                        <span className="animate-pulse">_</span>
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="biz-text"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-6"
                                >
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wide">
                                        Sobre Mim
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                        Não é Feitiçaria, <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">é tecnologia    .</span>
                                    </h2>
                                    <p className="text-neutral-400 text-lg leading-relaxed">
                                        Muitas agências vendem automação, mas poucas entendem a infraestrutura. Sou <strong>Igor Iuri</strong>, especialista que une Hardware (Servidores/Redes) e Software (N8n/React). Não entrego apenas ferramentas, arquitetos ecossistemas digitais seguros e eficientes.
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {["Infraestrutura", "Automação", "Dashboards"].map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 text-sm font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="group mt-4 px-8 py-3 bg-brand text-white rounded-full font-medium hover:bg-brand-glow transition-all flex items-center gap-2 shadow-[0_0_30px_-10px_rgba(var(--color-brand-primary),0.5)]">
                                        Iniciar Diagnóstico <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Content - Image / Visual Status */}
                    <div className="relative h-full min-h-[400px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {isDevMode ? (
                                <motion.div
                                    key="dev-visual"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    className="w-full relative"
                                >
                                    {/* Matrix-like Visual */}
                                    <div className="w-full aspect-square bg-black border border-green-500/50 rounded-lg p-2 shadow-[0_0_50px_rgba(0,255,0,0.1)] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzZtYmZ5NWh5NWh5NWh5NWh5NWh5NWh5NWh5NWh5LzI/xTiTnxpQ3ghPiB2Hp6/giphy.gif')] opacity-10 bg-cover mix-blend-screen" />
                                        <div className="h-full w-full border border-green-900/50 p-4 font-mono text-xs text-green-500/70 overflow-hidden">
                                            {Array.from({ length: 20 }).map((_, i) => (
                                                <div key={i} className="flex justify-between font-mono my-1 opacity-50">
                                                    <span>PID: {Math.floor(Math.random() * 9999)}</span>
                                                    <span>MEM: {Math.floor(Math.random() * 1024)}MB</span>
                                                    <span>STATUS: <span className="text-green-400">RUNNING</span></span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="biz-visual"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    className="relative"
                                >
                                    {/* Professional Photo Placeholder */}
                                    <div className="w-72 h-72 md:w-96 md:h-96 bg-brand/5 rounded-2xl md:rounded-[2rem] overflow-hidden relative shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent mix-blend-overlay" />
                                        {/* Placeholder for Igor's Photo */}
                                        <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 flex-col gap-2">
                                            <User className="w-20 h-20 opacity-50" />
                                            <span className="text-sm font-medium">Foto Profissional</span>
                                        </div>
                                    </div>

                                    {/* Floating Cards */}
                                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                            <Server className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-bold uppercase">Uptime</p>
                                            <p className="text-sm font-bold text-slate-800">99.9%</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </motion.section >
    );
}

