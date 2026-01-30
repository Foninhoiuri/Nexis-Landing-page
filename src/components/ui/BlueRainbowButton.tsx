import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export function RainbowButton({
    children,
    className,
    ...props
}: RainbowButtonProps) {
    return (
        <button
            className={cn(
                "group relative inline-flex h-9 animate-rainbow cursor-pointer items-center justify-center rounded-full border-0 bg-[length:200%] px-6 py-1 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

                // Blue/Cyan/Violet Gradient for "Blue Tone" effect
                // We use linear-gradient for the background content (black), and another for the border
                // The magic is: background-image: linear-gradient(bg, bg), linear-gradient(rainbow)
                // With background-clip: padding-box, border-box
                // This makes the first gradient (black) cover the padding area (inner), and the second (rainbow) cover the border area.

                "bg-[linear-gradient(#000,#000),linear-gradient(90deg,#3b82f6,#06b6d4,#8b5cf6,#3b82f6)]",
                // colors: blue-500, cyan-500, violet-500, back to blue-500

                // Text color
                "text-white",

                // Shadow/Glow
                "shadow-[0_0_15px_-3px_rgba(59,130,246,0.6)]",
                className
            )}
            {...props}
        >
            <style>
                {`
            @keyframes rainbow {
                0% { background-position: 0% 50%; }
                100% { background-position: 200% 50%; }
            }
            .animate-rainbow {
                animation: rainbow 4s linear infinite;
            }
            `}
            </style>
            {children}
        </button>
    );
}
