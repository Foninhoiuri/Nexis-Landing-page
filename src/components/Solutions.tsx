import React, { useRef, useEffect, useState, useCallback, ReactNode } from 'react';
import { gsap } from 'gsap';
import { motion, useInView } from "framer-motion";
import { Bot, BarChart3, FileText, Server, Cpu, Headphones, Smartphone, BatteryCharging, Cloud, HardDrive, Database, RefreshCw, Camera, Calendar, Briefcase, Zap } from "lucide-react";
import ShineBorder from "@/components/ui/shine-border";

// --- Config ---
const DEFAULT_PARTICLE_COUNT = 0;
const DEFAULT_SPOTLIGHT_RADIUS = 150;
const DEFAULT_GLOW_COLOR = '56, 189, 248'; // Blue-400 (matches 'btn-blue')
const MOBILE_BREAKPOINT = 768;

// --- Data ---
const cardData = [
    // 1. AI Agents
    {
        icon: Bot,
        title: 'Agente SDR',
        description: 'Atendente virtual inteligente que se integra ao Google Calendar e Sistemas de Pedidos para qualificação e agendamento.',
        label: 'Prospecção Automática',
        colSpan: 'md:col-span-2',
        isAI: true
    },
    {
        icon: Database,
        title: 'Automação CRM & ERP',
        description: 'Agentes que automatizam a entrada de dados, atualização de etapas e sincronização entre sistemas de gestão.',
        label: 'Gestão Inteligente',
        colSpan: 'md:col-span-1',
        isAI: true
    },
    {
        icon: Zap,
        title: 'Agente de Vendas BPA',
        description: 'Agente Autônomo completo: do atendimento inicial à triagem, burocracia, emissão de NFs e logística de envio.',
        label: 'Automação Full-Service',
        colSpan: 'md:col-span-1',
        isAI: true,
        useShine: true // Special effect trigger
    },
    // 2. Infrastructure
    {
        icon: Server,
        title: 'Infraestrutura High-End',
        description: 'Workstations de alta performance, armazenamento NAS seguro e redes Wi-Fi empresariais robustas.',
        label: 'Hardware & Redes',
        colSpan: 'md:col-span-2',
    },
    // 3. Automation
    {
        icon: Cpu,
        title: 'Automação & IoT',
        description: 'Controle inteligente de ambientes, assistentes de voz locais e sensores para monitoramento 24/7.',
        label: 'Automação',
        colSpan: 'md:col-span-1',
    },
    {
        icon: Headphones,
        title: 'Suporte Especializado',
        description: 'Consultoria técnica dedicada e suporte remoto ágil para manter sua operação sempre ativa.',
        label: 'Suporte',
        colSpan: 'md:col-span-1',
    }
];

// --- Helpers ---
const createParticleElement = (x: number, y: number, color = DEFAULT_GLOW_COLOR) => {
    const el = document.createElement('div');
    el.className = 'particle';
    el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
    return el;
};

const calculateSpotlightValues = (radius: number) => ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;

    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', `${radius}px`);
};

// --- Components ---

const ParticleCard = ({
    children,
    className = '',
    disableAnimations = false,
    style,
    particleCount = DEFAULT_PARTICLE_COUNT,
    glowColor = DEFAULT_GLOW_COLOR,
    enableTilt = true,
    clickEffect = false,
    enableMagnetism = false,
    useShine = false // New prop
}: any) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLElement[]>([]);
    const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
    const isHoveredRef = useRef(false);
    const memoizedParticles = useRef<HTMLElement[]>([]);
    const particlesInitialized = useRef(false);
    const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

    const initializeParticles = useCallback(() => {
        if (particlesInitialized.current || !cardRef.current) return;

        const { width, height } = cardRef.current.getBoundingClientRect();
        memoizedParticles.current = Array.from({ length: particleCount }, () =>
            createParticleElement(Math.random() * width, Math.random() * height, glowColor)
        );
        particlesInitialized.current = true;
    }, [particleCount, glowColor]);

    const clearAllParticles = useCallback(() => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
        magnetismAnimationRef.current?.kill();

        particlesRef.current.forEach(particle => {
            gsap.to(particle, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'back.in(1.7)',
                onComplete: () => {
                    particle.parentNode?.removeChild(particle);
                }
            });
        });
        particlesRef.current = [];
    }, []);

    const animateParticles = useCallback(() => {
        if (!cardRef.current || !isHoveredRef.current) return;

        if (!particlesInitialized.current) {
            initializeParticles();
        }

        memoizedParticles.current.forEach((particle, index) => {
            const timeoutId = setTimeout(() => {
                if (!isHoveredRef.current || !cardRef.current) return;

                const clone = particle.cloneNode(true) as HTMLElement;
                cardRef.current.appendChild(clone);
                particlesRef.current.push(clone);

                gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

                gsap.to(clone, {
                    x: (Math.random() - 0.5) * 100,
                    y: (Math.random() - 0.5) * 100,
                    rotation: Math.random() * 360,
                    duration: 2 + Math.random() * 2,
                    ease: 'none',
                    repeat: -1,
                    yoyo: true
                });

                gsap.to(clone, {
                    opacity: 0.3,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    repeat: -1,
                    yoyo: true
                });
            }, index * 100);

            timeoutsRef.current.push(timeoutId);
        });
    }, [initializeParticles]);

    useEffect(() => {
        if (disableAnimations || !cardRef.current) return;

        const element = cardRef.current;

        const handleMouseEnter = () => {
            isHoveredRef.current = true;
            animateParticles();

            if (enableTilt) {
                gsap.to(element, {
                    rotateX: 5,
                    rotateY: 5,
                    duration: 0.3,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });
            }
        };

        const handleMouseLeave = () => {
            isHoveredRef.current = false;
            clearAllParticles();

            if (enableTilt) {
                gsap.to(element, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }

            if (enableMagnetism) {
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!enableTilt && !enableMagnetism) return;

            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            if (enableTilt) {
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;

                gsap.to(element, {
                    rotateX,
                    rotateY,
                    duration: 0.1,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });
            }

            if (enableMagnetism) {
                const magnetX = (x - centerX) * 0.05;
                const magnetY = (y - centerY) * 0.05;

                magnetismAnimationRef.current = gsap.to(element, {
                    x: magnetX,
                    y: magnetY,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        const handleClick = (e: MouseEvent) => {
            if (!clickEffect) return;

            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const maxDistance = Math.max(
                Math.hypot(x, y),
                Math.hypot(x - rect.width, y),
                Math.hypot(x, y - rect.height),
                Math.hypot(x - rect.width, y - rect.height)
            );

            const ripple = document.createElement('div');
            ripple.style.cssText = `
          position: absolute;
          width: ${maxDistance * 2}px;
          height: ${maxDistance * 2}px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
          left: ${x - maxDistance}px;
          top: ${y - maxDistance}px;
          pointer-events: none;
          z-index: 1000;
        `;

            element.appendChild(ripple);

            gsap.fromTo(
                ripple,
                {
                    scale: 0,
                    opacity: 1
                },
                {
                    scale: 1,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    onComplete: () => ripple.remove()
                }
            );
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('click', handleClick);

        return () => {
            isHoveredRef.current = false;
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('click', handleClick);
            clearAllParticles();
        };
    }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

    return (
        <div
            ref={cardRef}
            className={`${className} relative overflow-hidden ${useShine ? '!border-transparent' : ''}`}
            style={{ ...style, position: 'relative', overflow: 'hidden' }}
        >
            {/* Shine Effect Layer - Integrated for Tilt */}
            {useShine && (
                <div
                    style={
                        {
                            "--border-width": `2px`,
                            "--border-radius": `24px`,
                            "--duration": `14s`,
                            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                            "--background-radial-gradient": `radial-gradient(transparent,transparent, #A07CFE,#FE8FB5,#FFBE7B,transparent,transparent)`,
                        } as React.CSSProperties
                    }
                    className={`pointer-events-none before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine`}
                />
            )}

            {children}
        </div>
    );
};

const GlobalSpotlight = ({
    gridRef,
    disableAnimations = false,
    enabled = true,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    glowColor = DEFAULT_GLOW_COLOR
}: any) => {
    const spotlightRef = useRef<HTMLDivElement | null>(null);
    const isInsideSection = useRef(false);

    useEffect(() => {
        if (disableAnimations || !gridRef?.current || !enabled) return;

        const spotlight = document.createElement('div');
        spotlight.className = 'global-spotlight';
        spotlight.style.cssText = `
        position: fixed;
        width: 800px;
        height: 800px;
        border-radius: 50%;
        pointer-events: none;
        background: radial-gradient(circle,
          rgba(${glowColor}, 0.15) 0%,
          rgba(${glowColor}, 0.08) 15%,
          rgba(${glowColor}, 0.04) 25%,
          rgba(${glowColor}, 0.02) 40%,
          rgba(${glowColor}, 0.01) 65%,
          transparent 70%
        );
        z-index: 200;
        opacity: 0;
        transform: translate(-50%, -50%);
        mix-blend-mode: screen;
      `;
        document.body.appendChild(spotlight);
        spotlightRef.current = spotlight;

        const handleMouseMove = (e: MouseEvent) => {
            if (!spotlightRef.current || !gridRef.current) return;

            const section = gridRef.current.closest('.bento-section');
            const rect = section?.getBoundingClientRect();
            const mouseInside =
                rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

            isInsideSection.current = mouseInside || false;
            const cards = gridRef.current.querySelectorAll('.card');

            if (!mouseInside) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                cards.forEach((card: any) => {
                    card.style.setProperty('--glow-intensity', '0');
                });
                return;
            }

            const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
            let minDistance = Infinity;

            cards.forEach((card: any) => {
                const cardElement = card as HTMLElement;
                const cardRect = cardElement.getBoundingClientRect();
                const centerX = cardRect.left + cardRect.width / 2;
                const centerY = cardRect.top + cardRect.height / 2;
                const distance =
                    Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                const effectiveDistance = Math.max(0, distance);

                minDistance = Math.min(minDistance, effectiveDistance);

                let glowIntensity = 0;
                if (effectiveDistance <= proximity) {
                    glowIntensity = 1;
                } else if (effectiveDistance <= fadeDistance) {
                    glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                }

                updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
            });

            gsap.to(spotlightRef.current, {
                left: e.clientX,
                top: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });

            const targetOpacity =
                minDistance <= proximity
                    ? 0.8
                    : minDistance <= fadeDistance
                        ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
                        : 0;

            gsap.to(spotlightRef.current, {
                opacity: targetOpacity,
                duration: targetOpacity > 0 ? 0.2 : 0.5,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            isInsideSection.current = false;
            gridRef.current?.querySelectorAll('.card').forEach((card: any) => {
                card.style.setProperty('--glow-intensity', '0');
            });
            if (spotlightRef.current) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
        };
    }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

    return null;
};

const BentoCardGrid = ({ children, gridRef }: any) => (
    <div
        className="bento-section grid gap-4 p-4 mx-auto max-w-7xl relative"
        ref={gridRef}
    >
        {children}
    </div>
);

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

export function Solutions() {
    const gridRef = useRef(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = isMobile;
    const glowColor = DEFAULT_GLOW_COLOR; // Blue

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Style injection for GSAP variables */}
            <style>
                {`
            .bento-section {
              --glow-x: 50%;
              --glow-y: 50%;
              --glow-intensity: 0;
              --glow-radius: 200px;
              --glow-color: ${glowColor};
            }
            .card--border-glow::after {
              content: '';
              position: absolute;
              inset: 0;
              padding: 2px;
              background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                  rgb(${glowColor}) 0%,
                  rgba(${glowColor}, 0.5) 30%,
                  transparent 60%);
              border-radius: inherit;
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              mask-composite: exclude;
              pointer-events: none;
              opacity: var(--glow-intensity);
              transition: opacity 0.1s;
              z-index: 10;
            }
            .particle::before {
              content: '';
              position: absolute;
              inset: -2px;
              background: rgba(${glowColor}, 0.3);
              border-radius: 50%;
              z-index: -1;
            }
          `}
            </style>

            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Soluções <span className="text-blue-400">Nexis</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Infraestrutura robusta e IA avançada integradas para acelerar o seu negócio.
                </p>
            </div>

            <GlobalSpotlight
                gridRef={gridRef}
                disableAnimations={shouldDisableAnimations}
                enabled={true}
                spotlightRadius={DEFAULT_SPOTLIGHT_RADIUS}
                glowColor={glowColor}
            />

            <BentoCardGrid gridRef={gridRef}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                    {cardData.map((card, index) => (
                        <ParticleCard
                            key={index}
                            className={`
                         card relative bg-zinc-950/50 rounded-3xl border border-white/10 overflow-hidden group
                         ${card.colSpan || 'md:col-span-1'}
                         min-h-[220px] flex flex-col justify-between p-6
                         transition-all duration-300 hover:bg-zinc-900/80
                         card--border-glow
                     `}
                            glowColor={glowColor}
                            disableAnimations={shouldDisableAnimations}
                            enableTilt={false}
                            clickEffect={true}
                            enableMagnetism={!isMobile}
                            /* @ts-ignore */
                            useShine={card.useShine}
                        >
                            {/* Inner Content matching ServiceCard logic but adapted for Bento */}
                            <div className="relative z-20 flex flex-col h-full justify-between w-full h-full">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        {/* Icon Container with 'btn-blue' effect logic */}
                                        <div className={`
                                         w-12 h-12 rounded-xl flex items-center justify-center
                                         transition-all duration-300
                                         ${(isMobile && /* @ts-ignore */ card.useShine)
                                                ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] -translate-y-2'
                                                : 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:-translate-y-2'
                                            }
                                     `}>
                                            <card.icon className="w-6 h-6" />
                                        </div>

                                        {/* AI Badge */}
                                        {/* @ts-ignore */}
                                        {card.isAI && (
                                            <span className="px-2 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-[10px] font-bold text-blue-300 tracking-wider uppercase backdrop-blur-sm">
                                                IA Integrada
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed max-w-[90%] group-hover:text-gray-300 transition-colors">
                                        {card.description}
                                    </p>
                                </div>

                                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs font-medium text-blue-400/80 uppercase tracking-widest">
                                        {card.label}
                                    </span>
                                    {/* Arrow or visual indicator could go here */}
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </ParticleCard>
                    ))}
                </div>
            </BentoCardGrid>
        </section>
    );
}
