
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface TargetCardProps {
    children: React.ReactNode;
    className?: string;
    spinDuration?: number;
    hoverDuration?: number;
}

const TargetCard: React.FC<TargetCardProps> = ({
    children,
    className = "",
    spinDuration = 4,
    hoverDuration = 0.3,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cornersRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
    const spinTl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        cornersRef.current = container.querySelectorAll<HTMLDivElement>(".target-corner");

        // Inicialmente, animação de spin
        const createSpinTimeline = () => {
            if (spinTl.current) spinTl.current.kill();
            spinTl.current = gsap.timeline({ repeat: -1 }).to(cornersRef.current, {
                rotation: 360,
                transformOrigin: "center center", // Pode precisar ajustar dependendo do CSS
                duration: spinDuration,
                ease: "none",
            });
        };

        // Simplificando o efeito: Apenas cantos normais que "fecham" ou "expandem" no hover?
        // O usuário pediu "esse efeito no card de metrica", referindo-se ao "TargetCursor".
        // Mas "sem o cursor mudar". Então ele quer os cantos animados ao redor do card?
        // O código original era um cursor global. Aqui vamos adaptar para ser local ao card.

        // Vamos posicionar os cantos nos cantos do container
        const corners = Array.from(cornersRef.current || []);

        // Reset positions
        gsap.set(corners[0], { top: 0, left: 0, rotation: 0 }); // Top-Left
        gsap.set(corners[1], { top: 0, right: 0, rotation: 90 }); // Top-Right
        gsap.set(corners[2], { bottom: 0, right: 0, rotation: 180 }); // Bottom-Right
        gsap.set(corners[3], { bottom: 0, left: 0, rotation: 270 }); // Bottom-Left

        const handleMouseEnter = () => {
            // "Target" effect: os cantos "focam" ou piscam?
            // No código original, eles seguiam o mouse ou ficavam girando.
            // Vamos fazer eles "travarem" com um brilho ou leve movimento para dentro.
            gsap.to(corners, {
                scale: 1.2,
                opacity: 1,
                duration: hoverDuration,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(corners, {
                scale: 1,
                opacity: 0.5,
                duration: hoverDuration,
                ease: "power2.out"
            });
        };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
            spinTl.current?.kill();
        };
    }, [spinDuration, hoverDuration]);

    return (
        <div ref={containerRef} className={`relative group ${className}`}>
            {/* Target Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-blue-500 target-corner opacity-50 transition-opacity" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-blue-500 target-corner opacity-50 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-blue-500 target-corner opacity-50 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-blue-500 target-corner opacity-50 transition-opacity" />

            {children}
        </div>
    );
};

export default TargetCard;
