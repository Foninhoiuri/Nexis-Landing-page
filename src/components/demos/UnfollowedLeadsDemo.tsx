"use client";

import React from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { User, Flame, Snowflake, Clock } from "lucide-react";

// --- 1. O CARD (Reage ao ActiveStep) ---
interface LeadCardProps {
    isHero: boolean;
    stage: number;
    timeLabel?: string;
    stepTrigger: number; // Nova prop para sincronizar o pulo
}

const LeadCard = ({ isHero, stage, timeLabel, stepTrigger }: LeadCardProps) => {
    const controls = useAnimation();
    const prevStepRef = React.useRef(stepTrigger);

    React.useEffect(() => {
        // Só executa se for o Hero
        if (isHero) {
            // Verifica se o passo mudou (avançou)
            const hasChangedStep = stepTrigger !== prevStepRef.current;

            // Lógica: Pula se mudou de passo E se não for o passo inicial (0)
            if (hasChangedStep && stepTrigger > 0) {
                controls.start({
                    y: [0, -25, 0],      // Pula mais alto (15px)
                    scale: [1, 2, 1], // Infla
                    transition: { duration: 0.5, ease: "easeInOut" }
                });
            }

            prevStepRef.current = stepTrigger;
        }
    }, [stepTrigger, isHero, controls]);

    return (
        <motion.div
            animate={controls}
            className={cn(
                "relative w-full p-3 rounded-full transition-all duration-500",
                "border overflow-hidden",
                "transform-gpu dark:backdrop-blur-md dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",

                !isHero
                    ? "bg-transparent opacity-40 border-white/5 border-dashed"
                    : "border-white/10",

                isHero && stage === 0 && "bg-orange-500/10 border-orange-500/30",
                isHero && stage === 1 && "bg-yellow-500/10 border-yellow-500/30",
                isHero && stage === 2 && "bg-neutral-800/40 border-white/5 opacity-60"
            )}
        >
            <div className="flex items-center gap-3 w-full">
                <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500",
                    isHero && stage === 0 ? "bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.5)]" : "bg-white/10 text-white/50",
                    isHero && stage === 1 && "bg-yellow-600 text-white",
                    isHero && stage === 2 && "bg-neutral-700 text-neutral-400",
                    !isHero && "bg-white/5"
                )}>
                    <User size={18} />
                </div>

                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                    <span className={cn("text-sm font-medium truncate leading-tight transition-colors duration-300", isHero ? "text-white" : "text-white/40")}>
                        {isHero ? "Lead Qualificado" : "Lead Desqualificado"}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-white/40">
                        <Clock size={10} />
                        <span>
                            {timeLabel || (isHero
                                ? (stage === 0 ? "Agora" : stage === 1 ? "24h atrás" : "7 dias atrás")
                                : "2h atrás")
                            }
                        </span>
                    </div>
                </div>

                {isHero && (
                    <div className={cn(
                        "relative px-2 py-0.5 rounded-full flex items-center justify-center gap-1 font-medium shrink-0 text-[10px] transition-colors duration-500",
                        stage === 0 ? "bg-orange-500/20 text-orange-400 border border-orange-500/20" :
                            stage === 1 ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20" :
                                "bg-neutral-700/50 text-neutral-400 border border-white/5"
                    )}>
                        <span className="relative flex items-center gap-1">
                            {stage === 0 && <Flame size={10} className="text-orange-500" />}
                            {stage === 1 && <Clock size={10} />}
                            {stage === 2 && <Snowflake size={10} />}
                            {stage === 0 ? "Quente" : stage === 1 ? "Aguardando" : "Esfriou"}
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

// --- 2. DEMO PRINCIPAL ---
export function UnfollowedLeadsDemo() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [leads, setLeads] = React.useState<Array<{ id: string, isHero: boolean, stage: number, timeLabel?: string }>>([
        { id: "hero", isHero: true, stage: 0, timeLabel: "Agora" }
    ]);

    const steps = ["Novo Lead", "Em Atendimento", "Proposta", "Negociação", "Fechamento"];

    React.useEffect(() => {
        let mounted = true;

        const runSequence = async () => {
            while (mounted) {
                // --- INICIO DO CICLO ---

                // Passo 0: Recentes
                setActiveStep(0); // Reset
                setLeads([{ id: "hero", isHero: true, stage: 0, timeLabel: "Agora" }]);
                await new Promise(r => setTimeout(r, 2000));
                if (!mounted) break;

                // Passo 1: PULA para Negociação
                setActiveStep(1); // O Card vai pular agora
                // Atualiza o texto um pouco depois do pulo começar para suavidade
                setTimeout(() => {
                    if (mounted) setLeads(prev => prev.map(l => l.isHero ? { ...l, timeLabel: "2 min" } : l));
                }, 200);
                await new Promise(r => setTimeout(r, 2000));
                if (!mounted) break;

                // Passo 2: PULA para Aguardando
                setActiveStep(2); // O Card vai pular agora
                setTimeout(() => {
                    if (mounted) setLeads(prev => prev.map(l => l.isHero ? { ...l, stage: 0, timeLabel: "1 dia" } : l));
                }, 200);
                await new Promise(r => setTimeout(r, 2000));
                if (!mounted) break;

                // Passo 3: PULA para Fechamento
                setActiveStep(3); // O Card vai pular agora
                setTimeout(() => {
                    if (mounted) setLeads(prev => prev.map(l => l.isHero ? { ...l, stage: 0, timeLabel: "3 dias" } : l));
                }, 200);

                // FASE FINAL: Soterramento (Sem pular, apenas novos leads entrando)
                const heroAging = ["1 semana", "2 semanas", "1 mês", "3 meses", "6 meses"];

                await new Promise(r => setTimeout(r, 2000));

                // Envelhece mais uma vez antes do caos (3 dias -> 5 dias)
                if (mounted) setLeads(prev => prev.map(l => l.isHero ? { ...l, stage: 1, timeLabel: "5 dias" } : l));
                await new Promise(r => setTimeout(r, 1500));

                for (let i = 0; i < 4; i++) {
                    await new Promise(r => setTimeout(r, 800)); // Espera um pouco antes de começar a soterrar
                    if (!mounted) break;

                    setLeads(prev => {
                        const newLead = {
                            id: `new-${i}`,
                            isHero: false,
                            stage: 0,
                            timeLabel: "Agora"
                        };
                        return [
                            newLead,
                            ...prev.map(l => {
                                if (l.isHero) {
                                    const ageLabel = heroAging[i] || "6 meses";
                                    return {
                                        ...l,
                                        stage: i >= 2 ? 2 : 1, // Esfria (Stage 2) a partir do 3º lead ("1 mês")
                                        timeLabel: ageLabel
                                    };
                                }
                                return l;
                            }).slice(0, 4)
                        ];
                    });
                }

                await new Promise(r => setTimeout(r, 3000));
            }
        };

        runSequence();
        return () => { mounted = false; };
    }, []);

    const getPillStyle = (index: number) => {
        const isActive = activeStep === index;
        if (index === 3 && isActive) return "bg-orange-500/10 border-orange-500/20 text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.1)]";
        if (isActive) return "bg-white/10 border-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.05)]";
        return "bg-transparent border-transparent text-neutral-500/50";
    };

    return (
        <div className="relative mx-auto min-h-fit w-full max-w-[400px] overflow-hidden rounded-[2rem] p-4 flex flex-col pt-10">

            {/* PILLS TRACK */}
            <div className="relative w-full h-12 flex items-center justify-center mb-4 z-20">
                <motion.div
                    className="absolute left-1/2 flex items-center gap-16"
                    initial={{ x: -50 }}
                    animate={{ x: -50 - (activeStep * 164) }}
                    transition={{ duration: 0.6, ease: "easeInOut" }} // Sincronizado com o pulo
                >
                    {steps.map((step, i) => (
                        <motion.div
                            key={step}
                            className={cn(
                                "px-2 py-1.5 rounded-full border text-[10px] font-medium whitespace-nowrap transition-all duration-300 w-[100px] flex items-center justify-center",
                                getPillStyle(i)
                            )}
                            animate={{
                                scale: activeStep === i ? 1.1 : 0.9,
                                opacity: activeStep === i ? 1 : 0.4
                            }}
                        >
                            {step === "Fechamento" && activeStep === 3 ? (
                                <div className="flex items-center gap-1.5">
                                    <span>{step}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                </div>
                            ) : step}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* LISTA */}
            <div className="w-full max-w-[320px] h-[350px] relative px-4 flex-1 flex flex-col">
                <AnimatePresence mode="popLayout" initial={false}>
                    {leads.map((lead) => (
                        <motion.div
                            key={lead.id}
                            layout
                            initial={{ x: -20, opacity: 0, scale: 0.9 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                                layout: { type: "spring", stiffness: 300, damping: 30 }
                            }}
                            className="mb-2.5"
                        >
                            <LeadCard
                                isHero={lead.isHero}
                                stage={lead.stage}
                                timeLabel={lead.timeLabel}
                                stepTrigger={activeStep} // <--- AQUI ESTÁ A MÁGICA
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}