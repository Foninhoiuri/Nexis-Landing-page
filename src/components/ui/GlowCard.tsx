"use client";

import React, { MouseEvent, useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    spotlightColor?: string;
}

export function GlowCard({
    children,
    className,
    spotlightColor = "rgba(255, 255, 255, 0.15)", // Subtle white/grey glow by default
    ...props
}: GlowCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = useCallback(
        ({ currentTarget, clientX, clientY }: MouseEvent) => {
            const { left, top } = currentTarget.getBoundingClientRect();
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        },
        [mouseX, mouseY]
    );

    return (
        <div
            className={cn(
                "group relative border border-white/5 bg-surface/50 overflow-hidden rounded-xl",
                "hover:border-white/10 transition-colors duration-500", // Subtle border brighten on hover
                className
            )}
            onMouseMove={handleMouseMove}
            {...props}
        >
            {/* Spotlight Effect - visible only on hover */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                }}
            />

            {/* Card Content - Inner background to block the full spotlight, keeping it subtle or as a border glow if desired */}
            <div className="relative h-full">{children}</div>

            {/* Top Highlight for "Edge Lighting" simulation */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
        </div>
    );
}
