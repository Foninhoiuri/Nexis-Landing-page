"use client";

import React from "react";
import { Search, PenTool, Rocket, LineChart } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

export function Methodology() {
    const [activeStep, setActiveStep] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const step1Ref = React.useRef<HTMLDivElement>(null);
    const step2Ref = React.useRef<HTMLDivElement>(null);
    const step3Ref = React.useRef<HTMLDivElement>(null);
    const step4Ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 4);
        }, 2000); // 2 seconds per step for slower, clearer highlight
        return () => clearInterval(interval);
    }, []);

    const steps = [
        {
            id: "01",
            title: "Imersão",
            description: "Entendemos o gargalo da sua empresa.",
            icon: <Search className="w-5 h-5" />,
            ref: step1Ref
        },
        {
            id: "02",
            title: "Arquitetura",
            description: "Desenhamos a infraestrutura e o fluxo de automação.",
            icon: <PenTool className="w-5 h-5" />,
            ref: step2Ref
        },
        {
            id: "03",
            title: "Deploy",
            description: "Implementação segura e testes rigorosos.",
            icon: <Rocket className="w-5 h-5" />,
            ref: step3Ref
        },
        {
            id: "04",
            title: "Monitoramento",
            description: "Acompanhamento e melhoria contínua.",
            icon: <LineChart className="w-5 h-5" />,
            ref: step4Ref
        }
    ];

    return (
        <section id="methodology" className="py-24 border-y border-white/5 bg-neutral-900/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">A Metodologia</h2>
                    <p className="text-neutral-400">Como transformamos problemas complexos em soluções simples.</p>
                </div>

                <div
                    ref={containerRef}
                    className="relative flex flex-col items-center justify-center overflow-hidden p-6 md:p-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 w-full max-w-6xl">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center group">
                                {/* Circle/Icon */}
                                <div
                                    ref={step.ref}
                                    className={cn(
                                        "w-20 h-20 rounded-full border-2 flex items-center justify-center mb-6 relative z-10 transition-all duration-700 shadow-2xl",
                                        activeStep === index
                                            ? "border-blue-500 bg-blue-500/20 text-white scale-110 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                                            : "border-white/10 bg-neutral-950 text-neutral-400 group-hover:border-blue-500/50 group-hover:text-white"
                                    )}
                                >
                                    {step.icon}
                                    <span className={cn(
                                        "absolute -top-2 -right-2 w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-mono transition-colors duration-700",
                                        activeStep === index
                                            ? "bg-blue-500 border-blue-400 text-white"
                                            : "bg-neutral-800 border-white/10 text-neutral-500"
                                    )}>
                                        {step.id}
                                    </span>
                                </div>

                                <h3 className={cn("text-lg font-semibold mb-2 transition-colors duration-700", activeStep === index ? "text-white" : "text-white/80")}>
                                    {step.title}
                                </h3>
                                <p className="text-sm text-neutral-400 max-w-[200px]">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Animated Beams - Explicitly defining 3 separate beams */}
                    <div className="hidden md:block">
                        {/* Beam 1: Imersão -> Arquitetura */}
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={step1Ref}
                            toRef={step2Ref}
                            duration={2}
                            delay={0}
                            startXOffset={0}
                            endXOffset={0}
                            curvature={0}
                            gradientStartColor={activeStep === 0 ? "#3b82f6" : "#262626"} // Active: Blue, Inactive: Dark Gray
                            gradientStopColor={activeStep === 0 ? "#06b6d4" : "#262626"}
                            pathWidth={3}
                            pathOpacity={0.1}
                        />

                        {/* Beam 2: Arquitetura -> Deploy */}
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={step2Ref}
                            toRef={step3Ref}
                            duration={2}
                            delay={0} // No delay prop needed if we control color/activation via state, but sticking to loop sync 
                            startXOffset={0}
                            endXOffset={0}
                            curvature={0}
                            gradientStartColor={activeStep === 1 ? "#3b82f6" : "#262626"}
                            gradientStopColor={activeStep === 1 ? "#06b6d4" : "#262626"}
                            pathWidth={3}
                            pathOpacity={0.1}
                        />

                        {/* Beam 3: Deploy -> Monitoramento */}
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={step3Ref}
                            toRef={step4Ref}
                            duration={2}
                            delay={0}
                            startXOffset={0}
                            endXOffset={0}
                            curvature={0}
                            gradientStartColor={activeStep === 2 ? "#3b82f6" : "#262626"}
                            gradientStopColor={activeStep === 2 ? "#06b6d4" : "#262626"}
                            pathWidth={3}
                            pathOpacity={0.1}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
