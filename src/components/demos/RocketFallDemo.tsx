import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import CountUp from "../../components/ui/CountUp";


// Types for strict animation handling
type Phase = 'entry' | 'idle' | 'boost' | 'failure' | 'fall';

export function RocketFallDemo() {
    const [phase, setPhase] = useState<Phase>('entry');
    const [cycle, setCycle] = useState(0);
    const [altitude, setAltitude] = useState(0);
    const [isWarning, setIsWarning] = useState(false);

    useEffect(() => {
        let mounted = true;

        const loop = async () => {
            while (mounted) {
                // Nova rodada -> Incrementa ciclo para resetar componente
                setCycle(c => c + 1);

                // 1. O Início (Vindo da direita inferior)
                setPhase('entry');
                setAltitude(30);
                setIsWarning(false);
                await wait(2500); // Tempo para chegar e estabilizar
                if (!mounted) break;

                // Fica em idle um pouco ("segundos antes do boost")
                setPhase('idle');
                setAltitude(150); // Começa a subir um pouco
                await wait(1500);
                if (!mounted) break;

                // 2. O Dash (Propulsão forte + Star Wars)
                setPhase('boost');
                setAltitude(10000); // Sobe até 10000
                await wait(2500); // Sobe...
                if (!mounted) break;

                setIsWarning(true); // "Dessacelerando" -> Alerta
                await wait(1000); // Stall
                if (!mounted) break;

                // 3. A Falha (Motor falhando)
                setPhase('failure');
                setAltitude(45); // Cai rapidamenet para quase 0
                await wait(1500); // Engasgando
                if (!mounted) break;

                // A Queda
                setPhase('fall');
                setAltitude(0);
                await wait(1000); // Caindo

                // Reset
                setAltitude(0);
                await wait(500);
            }
        };

        loop();
        return () => { mounted = false; };
    }, []);

    const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden bg-transparent pointer-events-none">
            {/* Starwarp Effect - Only visible during boost */}
            <StarWarp active={phase === 'boost'} />

            {/* Altitude Counter - Target Style */}
            {/* Altitude Counter - Minimalist */}
            <motion.div
                className="absolute top-12 left-1/2 -translate-x-1/2 z-0 flex flex-col items-center justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: (phase === 'boost' || phase === 'failure') ? 1 : 0,
                    color: (isWarning || phase === 'failure') ? '#ef4444' : phase === 'boost' ? '#4ade80' : '#ffffff'
                }}
                transition={{ duration: 0.5 }}
            >
                <CountUp
                    to={altitude}
                    duration={phase === 'boost' ? 3 : phase === 'failure' ? 0.3 : 1}
                    className={cn(
                        "text-6xl md:text-7xl font-black tabular-nums text-center drop-shadow-2xl",
                        (isWarning || phase === 'failure') && "animate-pulse"
                    )}
                />
            </motion.div>

            {/* Rocket Container */}
            <motion.div
                key={cycle} // Reseta o estado da animação a cada ciclo
                className="relative z-10 filter drop-shadow-xl"
                initial={{ x: 100, y: 400, scale: 0.3, rotate: -60, opacity: 1 }}
                animate={getRocketAnimation(phase)}
            >
                <CartoonRocket phase={phase} />
            </motion.div>
        </div>
    );
}

// Animation Logic
function getRocketAnimation(phase: Phase): any {
    switch (phase) {
        case 'entry':
            return {
                x: [100, 0, 0], // Settle final
                y: [400, -30, 0], // Overshoot (sobe demais e desce para corrigir)
                rotate: [-60, 2, 0], // Overshoot angulação
                scale: [0.3, 1],
                opacity: 1,
                transition: {
                    duration: 2.2,
                    ease: [0.16, 1, 0.3, 1], // EaseOut suave (cubic-bezier)
                    times: [0, 0.7, 1]
                }
            };
        case 'idle':
            return {
                x: 0,
                y: [0, -8, 0], // Flutuando suavemente
                rotate: [0, 1, -1, 0], // Micro estabilização
                scale: 1,
                transition: {
                    y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
                    rotate: { repeat: Infinity, duration: 4, ease: "linear" }
                }
            };
        case 'boost':
            return {
                x: [-1, 1, -1, 1, 0], // Tremedeira lateral
                y: [0, 10, -100], // Dip mais curto e subida explosiva
                scale: 1.1,
                rotate: 0,
                transition: {
                    x: { repeat: Infinity, duration: 0.1 },
                    y: { duration: 0.5, times: [0, 0.2, 1], ease: "easeInOut" }, // Ajustado timing
                    scale: { duration: 0.3 }
                }
            };
        case 'failure':
            return {
                x: [0, -3, 3, -1, 1, 0], // Tremedeira aumentada
                y: [-80, -20], // Caindo levemente enquanto falha
                rotate: [0, -5, 5, -8, 8], // Instabilidade crescente
                scale: 1,
                transition: {
                    duration: 1.5,
                    y: { ease: "easeInOut" },
                    rotate: { repeat: Infinity, duration: 0.3, repeatType: "reverse" }
                }
            };
        case 'fall':
            return {
                y: 600, // Cai para fora da tela
                rotate: [10, 90], // Gira enquanto cai (tumble)
                x: 50, // Deriva lateral
                scale: 1, // Garante que não diminui
                transition: { duration: 0.8, ease: "easeIn" }
            };
    }
}

// Visual Components

const CartoonRocket = ({ phase }: { phase: Phase }) => {
    const isBoost = phase === 'boost';
    const isFailure = phase === 'failure';

    return (
        <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible">
            <defs>
                {/* 1. Filtro de Brilho para o Fogo e Motor */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* 2. Filtro de Sombra Suave (Drop Shadow interna) */}
                <filter id="softShadow">
                    <feDropShadow dx="2" dy="4" stdDeviation="2" floodColor="#000" floodOpacity="0.2" />
                </filter>

                {/* Gradients Corpo - TRANSPARENT GLASS STYLE */}
                <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.69)" />
                    <stop offset="50%" stopColor="rgba(243, 244, 246, 0.69)" />
                    <stop offset="100%" stopColor="rgba(209, 213, 219, 0.69)" />
                </linearGradient>

                {/* Gradient Borda do Corpo (Simulando reflexo) */}
                <linearGradient id="bodyStrokeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                </linearGradient>

                {/* Gradients Vermelho (Aletas/Bico) - VIBRANT RED */}
                <linearGradient id="redGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(239, 68, 68, 1)" />
                    <stop offset="100%" stopColor="rgba(185, 28, 28, 0.9)" />
                </linearGradient>

                {/* Gradient Vidro Complexo */}
                <linearGradient id="glassGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(37, 99, 235, 0.3)" />
                </linearGradient>

                {/* Metal do Motor */}
                <linearGradient id="metalGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4b5563" />
                    <stop offset="50%" stopColor="#9ca3af" />
                    <stop offset="100%" stopColor="#374151" />
                </linearGradient>

                {/* Fogo: Núcleo (Branco/Amarelo) e Borda (Laranja/Vermelho) */}
                <linearGradient id="fireCore" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#fef08a" />
                </linearGradient>
                <linearGradient id="fireOuter" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor="#facc15" />
                    <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                {/* Fogo Azul (Boost) */}
                <linearGradient id="fireBlueCore" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#bfdbfe" />
                </linearGradient>
                <linearGradient id="fireBlueOuter" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
            </defs>

            <g transform="translate(100, 100)">

                {/* --- CAMADA DE TRÁS --- */}

                {/* Aleta Traseira (Escura para profundidade) */}
                <path d="M -15 45 L 15 45 L 0 75 Z" fill="#7f1d1d" stroke="#500724" strokeWidth="1" />

                {/* FOGO DO MOTOR (Animado) */}
                {(phase === 'entry' || phase !== 'fall') && (
                    <g filter="url(#glow)"> {/* Adiciona brilho ao fogo */}
                        {/* Chama Externa */}
                        <motion.path
                            d="M -18 68 Q 0 140 18 68 Q 0 85 -18 68"
                            fill={isBoost ? "url(#fireBlueOuter)" : "url(#fireOuter)"}
                            initial={{ scale: 0 }}
                            animate={{
                                scale: isBoost ? [1, 1.3, 1] : isFailure ? [1, 0.2, 0] : [1, 1.05, 1],
                                opacity: isFailure ? [1, 0] : 0.9
                            }}
                            transition={{ repeat: Infinity, duration: 0.15 }}
                        />
                        {/* Chama Interna (Núcleo Quente) */}
                        <motion.path
                            d="M -8 68 Q 0 100 8 68 Q 0 75 -8 68"
                            fill={isBoost ? "url(#fireBlueCore)" : "url(#fireCore)"}
                            animate={{
                                scale: isBoost ? [1, 1.2, 1] : [1, 1.1, 0.9],
                                y: [0, 2, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 0.1 }}
                        />
                    </g>
                )}

                {/* Aletas Laterais (Com espessura 3D) */}
                {/* Esquerda */}
                <path d="M -35 35 Q -65 65 -50 75 L -20 60 Z" fill="#b91c1c" /> {/* Parte de trás da aleta */}
                <path d="M -35 30 Q -60 60 -50 70 L -20 55 Z" fill="url(#redGradient)" stroke="#7f1d1d" strokeWidth="1" filter="url(#softShadow)" />

                {/* Direita */}
                <path d="M 35 35 Q 65 65 50 75 L 20 60 Z" fill="#b91c1c" /> {/* Parte de trás */}
                <path d="M 35 30 Q 60 60 50 70 L 20 55 Z" fill="url(#redGradient)" stroke="#7f1d1d" strokeWidth="1" filter="url(#softShadow)" />


                {/* --- CORPO PRINCIPAL --- */}

                {/* Fuselagem - GLASS */}
                <path
                    d="M 0 -75 C 45 -20 45 45 22 65 L -22 65 C -45 45 -45 -20 0 -75"
                    fill="url(#bodyGradient)"
                    stroke="none"
                    filter="url(#softShadow)"
                />
                {/* Bico Vermelho */}
                <path
                    d="M 0 -75 C 24 -40 24 -40 24 -40 L -24 -40 C -24 -40 -24 -40 0 -75"
                    fill="url(#redGradient)"
                    stroke="none"
                />
                {/* Brilho no Bico (Highlight) */}
                <ellipse cx="8" cy="-55" rx="3" ry="8" fill="white" opacity="0.15" transform="rotate(-15)" />


                {/* --- JANELA (Estilo Bolha) --- */}

                {/* 1. Borda Metálica Escura */}
                <circle cx="0" cy="-10" r="22" fill="#1f2937" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                {/* 2. Vidro */}
                <circle cx="0" cy="-10" r="16" fill="url(#glassGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />

                {/* 4. Reflexos do Vidro (O "glare" que dá vida) */}
                <path d="M -10 -20 Q 0 -26 10 -20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" fill="none" />
                <ellipse cx="-8" cy="-8" rx="3" ry="6" fill="white" opacity="0.4" transform="rotate(20)" />
                <circle cx="8" cy="0" r="1.5" fill="white" opacity="0.6" />

                {/* --- MOTOR --- */}
                {/* Nozzle (Bocal) */}
                <path d="M -22 65 L 22 65 L 18 72 L -18 72 Z" fill="url(#metalGradient)" stroke="#1f2937" strokeWidth="1" />
                {/* Ranhuras do motor */}
                <path d="M -10 65 L -8 72" stroke="#1f2937" strokeWidth="0.5" />
                <path d="M 0 65 L 0 72" stroke="#1f2937" strokeWidth="0.5" />
                <path d="M 10 65 L 8 72" stroke="#1f2937" strokeWidth="0.5" />

            </g>
        </svg>
    );
};

const StarWarp = ({ active }: { active: boolean }) => {
    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    className="absolute inset-0 z-0 overflow-hidden rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Estrelas "Riscadas" para dar efeito de velocidade */}
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-blue-100 rounded-full"
                            style={{
                                width: Math.random() > 0.5 ? '2px' : '3px',
                                height: '20px', // Compridas
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                            animate={{
                                y: [0, 800], // Move muito rápido pra baixo (simulando foguete subindo)
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: Math.random() * 0.3 + 0.1, // Mt rápido
                                ease: "linear",
                                delay: Math.random() * 0.2
                            }}
                        />
                    ))}


                </motion.div>
            )}
        </AnimatePresence>
    );
};
