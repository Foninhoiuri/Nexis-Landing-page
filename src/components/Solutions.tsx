import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { Bot, Server, Cpu, Headphones, Database, Zap, ArrowUpRight, ShieldCheck, CloudFog, LineChart } from "lucide-react";
import { RainbowButton } from "@/components/ui/BlueRainbowButton";
import GradualBlur from "@/components/ui/GradualBlur";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

// --- Config (Mantendo azul para contraste: Vermelho = Problema / Azul = Solução) ---
const DEFAULT_PARTICLE_COUNT = 0;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '56, 189, 248'; // Blue-400
const MOBILE_BREAKPOINT = 768;

// --- Data (Mesmos dados) ---
const cardData = [
    {
        icon: Bot,
        title: 'Agente SDR',
        description: 'Atendente virtual inteligente que qualifica leads e agenda reuniões automaticamente 24/7.',
        label: 'Prospecção Automática',
        isAI: true,
        useShine: true,
        compatibleApps: ['Meta', 'Google', 'Telegram', 'CRM']
    },
    {
        icon: Database,
        title: 'Automação CRM & ERP',
        description: 'Agentes que sincronizam dados e atualizam etapas entre sistemas de gestão sem intervenção humana.',
        label: 'Gestão Inteligente',
        isAI: false,
        compatibleApps: ['Bling', 'Olist', 'Clickup']
    },
    {
        icon: Zap,
        title: 'Agente de Vendas BPA',
        description: 'Automação full-service: do atendimento inicial à emissão de NFs e logística de envio.',
        label: 'Automação Autônoma',
        isAI: true,

        compatibleApps: ['Stripe', 'Shopify', 'Meta']
    },
    {
        icon: Server,
        title: 'Infraestrutura High-End',
        description: 'Workstations de alta performance e redes empresariais robustas para operações exigentes.',
        label: 'Hardware & Redes',
        compatibleApps: ['Unifi', 'Dell', 'Lenovo']
    }
];

// --- Helpers e Componentes Internos (ParticleCard, Spotlight) ---
// ... (Mantenha createParticleElement, calculateSpotlightValues, updateCardGlowProperties, GlobalSpotlight iguais ao anterior) ...
const createParticleElement = (x: number, y: number, color = DEFAULT_GLOW_COLOR) => {
    const el = document.createElement('div');
    el.className = 'particle';
    el.style.cssText = `position: absolute; width: 4px; height: 4px; border-radius: 50%; background: rgba(${color}, 1); box-shadow: 0 0 6px rgba(${color}, 0.6); pointer-events: none; z-index: 100; left: ${x}px; top: ${y}px;`;
    return el;
};

const calculateSpotlightValues = (radius: number) => ({ proximity: radius * 0.5, fadeDistance: radius * 0.75 });

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;
    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard = ({ children, className = '', disableAnimations = false, style, particleCount = DEFAULT_PARTICLE_COUNT, glowColor = DEFAULT_GLOW_COLOR, enableTilt = true, clickEffect = false, enableMagnetism = false, useShine = false }: any) => {
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
        memoizedParticles.current = Array.from({ length: particleCount }, () => createParticleElement(Math.random() * width, Math.random() * height, glowColor));
        particlesInitialized.current = true;
    }, [particleCount, glowColor]);

    const clearAllParticles = useCallback(() => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
        magnetismAnimationRef.current?.kill();
        particlesRef.current.forEach(particle => {
            gsap.to(particle, { scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)', onComplete: () => { particle.parentNode?.removeChild(particle); } });
        });
        particlesRef.current = [];
    }, []);

    const animateParticles = useCallback(() => {
        if (!cardRef.current || !isHoveredRef.current) return;
        if (!particlesInitialized.current) { initializeParticles(); }
        memoizedParticles.current.forEach((particle, index) => {
            const timeoutId = setTimeout(() => {
                if (!isHoveredRef.current || !cardRef.current) return;
                const clone = particle.cloneNode(true) as HTMLElement;
                cardRef.current.appendChild(clone);
                particlesRef.current.push(clone);
                gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
                gsap.to(clone, { x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100, rotation: Math.random() * 360, duration: 2 + Math.random() * 2, ease: 'none', repeat: -1, yoyo: true });
                gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
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
            if (enableTilt) { gsap.to(element, { rotateX: 5, rotateY: 5, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 }); }
        };
        const handleMouseLeave = () => {
            isHoveredRef.current = false;
            clearAllParticles();
            if (enableTilt) { gsap.to(element, { rotateX: 0, rotateY: 0, duration: 0.3, ease: 'power2.out' }); }
            if (enableMagnetism) { gsap.to(element, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' }); }
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
                gsap.to(element, { rotateX, rotateY, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
            }
            if (enableMagnetism) {
                const magnetX = (x - centerX) * 0.05;
                const magnetY = (y - centerY) * 0.05;
                magnetismAnimationRef.current = gsap.to(element, { x: magnetX, y: magnetY, duration: 0.3, ease: 'power2.out' });
            }
        };
        const handleClick = (e: MouseEvent) => {
            if (!clickEffect) return;
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
            const ripple = document.createElement('div');
            ripple.style.cssText = `position: absolute; width: ${maxDistance * 2}px; height: ${maxDistance * 2}px; border-radius: 50%; background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%); left: ${x - maxDistance}px; top: ${y - maxDistance}px; pointer-events: none; z-index: 1000;`;
            element.appendChild(ripple);
            gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() });
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
        <div ref={cardRef} className={`${className} relative overflow-hidden ${useShine ? '!border-transparent' : ''}`} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
            {useShine && (
                <div style={{ "--border-width": `2px`, "--border-radius": `32px`, "--duration": `14s`, "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`, "--background-radial-gradient": `radial-gradient(transparent, transparent, #3B82F6, #2563EB, #1D4ED8, transparent, transparent)`, } as React.CSSProperties} className={`pointer-events-none before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine`} />
            )}
            {children}
        </div>
    );
};

const GlobalSpotlight = ({ gridRef, disableAnimations = false, enabled = true, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, glowColor = DEFAULT_GLOW_COLOR }: any) => {
    const spotlightRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (disableAnimations || !gridRef?.current || !enabled) return;
        const spotlight = document.createElement('div');
        spotlight.className = 'global-spotlight';
        spotlight.style.cssText = `position: fixed; width: 800px; height: 800px; border-radius: 50%; pointer-events: none; background: radial-gradient(circle, rgba(${glowColor}, 0.12) 0%, rgba(${glowColor}, 0.06) 20%, rgba(${glowColor}, 0.02) 45%, transparent 70%); z-index: 200; opacity: 0; transform: translate(-50%, -50%); mix-blend-mode: screen;`;
        document.body.appendChild(spotlight);
        spotlightRef.current = spotlight;

        let animationFrameId: number;

        // Cache cards to avoid repeated querySelectorAll
        const cards = Array.from(gridRef.current.querySelectorAll('.card')) as HTMLElement[];

        const handleMouseMove = (e: MouseEvent) => {
            if (!spotlightRef.current || !gridRef.current) return;

            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                const section = gridRef.current.closest('.bento-section');
                const rect = section?.getBoundingClientRect();

                if (!rect || !(e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom)) {
                    gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
                    cards.forEach((card) => card.style.setProperty('--glow-intensity', '0'));
                    return;
                }

                const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
                let minDistance = Infinity;

                cards.forEach((cardElement) => {
                    const cardRect = cardElement.getBoundingClientRect();
                    const distance = Math.hypot(e.clientX - (cardRect.left + cardRect.width / 2), e.clientY - (cardRect.top + cardRect.height / 2)) - Math.max(cardRect.width, cardRect.height) / 2;
                    const effectiveDistance = Math.max(0, distance);
                    minDistance = Math.min(minDistance, effectiveDistance);

                    let glowIntensity = 0;
                    if (effectiveDistance <= proximity) { glowIntensity = 1; }
                    else if (effectiveDistance <= fadeDistance) { glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity); }

                    updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
                });

                gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' });

                const targetOpacity = minDistance <= proximity ? 0.8 : minDistance <= fadeDistance ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8 : 0;
                gsap.to(spotlightRef.current, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.5, ease: 'power2.out' });
            });
        };

        const handleMouseLeave = () => { if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' }); };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
            cancelAnimationFrame(animationFrameId);
        };
    }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);
    return null;
};

const BentoCardGrid = ({ children, gridRef }: any) => (
    <div className="bento-section grid gap-4 p-4 mx-auto max-w-7xl relative" ref={gridRef}>
        {children}
    </div>
);

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        checkMobile(); window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
};

export function Solutions() {
    const gridRef = useRef(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = isMobile;
    const glowColor = DEFAULT_GLOW_COLOR;
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        if (!isMobile) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute('data-index'));
                    setActiveIndex(index);
                }
            });
        }, {
            root: null,
            rootMargin: '-45% 0px -45% 0px', // Detects the element in the exact center
            threshold: 0
        });

        const cards = document.querySelectorAll('.card-item');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, [isMobile]);

    return (
        // MUDANÇA 1: Adicionei min-h-screen e flex para centralizar se quiser, 
        // mas o principal é o gradiente de background para não ficar um preto chapado.
        <section className="relative py-12 md:py-24 overflow-hidden bg-black selection:bg-blue-500/30">
            <DotPattern
                width={40}
                height={40}
                cx={1}
                cy={1}
                cr={1}
                glow={!isMobile} // Desativa glow no mobile para performance
                className={cn(
                    "text-white/10", // Aumentado para 10% para ser visível
                    "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]" // Aumentado area visivel
                )}
            />

            <style>
                {`
            .bento-section {
              --glow-x: 50%;
              --glow-y: 50%;
              --glow-intensity: 0;
              --glow-radius: 300px; /* Aumentei o raio para espalhar mais a luz */
              --glow-color: ${glowColor};
            }
            /* ... (mantenha os outros estilos CSS iguais) ... */
            
            /* Ajuste na Tag de IA para ficar mais legível */
            .animate-spin-slow {
                animation: spin-slow 4s linear infinite; /* Restoration: Faster spin for visibility */
            }
            @keyframes spin-slow {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
          `}
            </style>

            <div className="container relative z-10 mx-auto px-4 mb-12 md:mb-20 text-center">
                {/* Badge Superior "Nossas Soluções" - Ajuda na hierarquia */}
                {/* Badge Superior "Nossas Soluções" - Ajuda na hierarquia */}
                <RainbowButton className="mb-6 h-9 rounded-full px-5">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse shadow-[0_0_10px_rgba(147,197,253,0.8)]" />
                        A Nova Era da Eficiência
                    </span>
                </RainbowButton>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                    Tecnologia que <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-cyan-400 drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                        Impulsiona o Futuro
                    </span>
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
                    Substituímos processos manuais e lentos por uma infraestrutura autônoma que trabalha 24/7
                </p>
            </div>

            <GlobalSpotlight
                gridRef={gridRef}
                disableAnimations={shouldDisableAnimations}
                enabled={true}
                spotlightRadius={300} // Spotlight maior para ser menos "foco de lanterna"
                glowColor={glowColor}
            />
            <BentoCardGrid gridRef={gridRef}>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full relative z-10">
                    {cardData.map((card, index) => (
                        <ParticleCard
                            key={index}
                            data-index={index}
                            className={`
                          card card-item relative 
                          /* --- MUDANÇA 3: Consistência de Material --- */
                          /* Usando white/5 para igualar a textura dos cards de Problema */
                          bg-white/5 backdrop-blur-md
                          /* Aumentei o arredondamento para 32px (2rem) para aproximar do design anterior */
                          rounded-[2rem] border border-white/5 
                          overflow-hidden group
                          min-h-[260px] md:min-h-[280px] flex flex-col justify-between p-6 md:p-8
                          transition-all duration-500 
                          hover:bg-zinc-900/80 hover:border-white/10
                          hover:shadow-2xl hover:shadow-blue-900/10
                          [&.is-active]:bg-zinc-900/80 [&.is-active]:border-white/10
                          [&.is-active]:shadow-2xl [&.is-active]:shadow-blue-900/10
                          card--border-glow
                          ${(isMobile && index === activeIndex) ? 'is-active' : ''}
                      `}
                            glowColor={glowColor}
                            disableAnimations={shouldDisableAnimations}
                            enableTilt={false}
                            clickEffect={true}
                            enableMagnetism={false}
                            /* @ts-ignore */
                            useShine={card.useShine}
                        >
                            <div className="absolute -bottom-8 -right-8 opacity-[0.02] transform rotate-[-15deg] group-hover:scale-110 group-hover:opacity-[0.06] group-[.is-active]:scale-110 group-[.is-active]:opacity-[0.06] transition-all duration-700 ease-out pointer-events-none">
                                <card.icon strokeWidth={1} className="w-32 h-32 md:w-48 md:h-48 text-white" />
                            </div>

                            <GradualBlur
                                className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-0"
                                preset="bottom"
                                strength={0.4}
                                opacity={0.5}
                            />

                            <div className="relative z-20 flex flex-col h-full justify-between w-full h-full">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        {/* Icon Container with 'btn-blue' effect logic */}
                                        <div className={`
                                         w-12 h-12 rounded-xl flex items-center justify-center
                                         transition-all duration-300
                                         ${(isMobile && index === activeIndex) /* Use activeIndex for mobile check */
                                                ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] -translate-y-2'
                                                : 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:-translate-y-2 group-[.is-active]:bg-blue-500 group-[.is-active]:text-white group-[.is-active]:shadow-[0_0_20px_rgba(59,130,246,0.6)] group-[.is-active]:-translate-y-2' /* Add group-[.is-active] variants */
                                            }
                                     `}>
                                            <card.icon className="w-7 h-7" strokeWidth={1.5} />
                                        </div>

                                        {/* @ts-ignore */}
                                        {card.isAI && (
                                            <RainbowButton className="mb-6 h-7 w-12 rounded-full px-5 opacity-80">
                                                <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                                                    IA
                                                </span>
                                            </RainbowButton>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-medium text-zinc-100 mb-3 group-hover:text-white group-[.is-active]:text-white transition-colors tracking-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-zinc-400 leading-7 group-hover:text-zinc-300 group-[.is-active]:text-zinc-300 transition-colors line-clamp-3">
                                        {card.description}
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between group/footer">
                                    <span className="text-xs font-semibold text-zinc-500 group-hover:text-blue-400/80 group-[.is-active]:text-blue-400/80 uppercase tracking-widest transition-colors relative z-10">
                                        {card.label}
                                    </span>
                                    {/* @ts-ignore */}
                                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 group-[.is-active]:translate-y-0 relative z-10">
                                        {card.compatibleApps?.map((app: string, i: number) => (
                                            <span key={i} className="text-[10px] font-medium text-zinc-500 grayscale hover:grayscale-0 hover:text-zinc-300 transition-all cursor-default">
                                                {app}
                                            </span>
                                        ))}
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