import React from "react";

import { cn } from "@/lib/utils";

interface RippleProps {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
    className?: string;
}

export default function Ripple({
    mainCircleSize = 210,
    mainCircleOpacity = 0.24,
    numCircles = 8,
    className,
}: RippleProps) {
    return (
        <div
            className={cn(
                "absolute inset-0 flex items-center justify-center bg-white/90 [mask-image:linear-gradient(to_bottom,white,transparent)]",
                className,
            )}
        >
            {Array.from({ length: numCircles }).map((_, i) => {
                const size = mainCircleSize + i * 70;
                const opacity = mainCircleOpacity - i * 0.03;
                const animationDelay = `${i * 0.06}s`;
                // Creating a gradient effect for the ripple lines
                // We'll use a conic gradient or a combination of shadows to give it depth and "gradient" look

                return (
                    <div
                        key={i}
                        className={`absolute animate-ripple rounded-full shadow-xl top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 [--i:${i}]`}
                        style={
                            {
                                width: `${size}px`,
                                height: `${size}px`,
                                opacity,
                                animationDelay,
                                border: "1px solid transparent",
                                background: "linear-gradient(#000, #000) padding-box, linear-gradient(to bottom right, rgba(255,255,255,0.4), rgba(255,255,255,0.05)) border-box",
                                borderRadius: "50%",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)",
                            } as React.CSSProperties
                        }
                    />
                );
            })}
        </div>
    );
}
