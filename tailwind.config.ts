import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Semantic Brand Colors using CSS variables for opacity support
                brand: {
                    DEFAULT: "rgb(var(--color-brand-primary) / <alpha-value>)", // #2563EB
                    glow: "rgb(var(--color-brand-primary) / <alpha-value>)", // Accessible for opacity tweaks
                },
                background: {
                    DEFAULT: "rgb(var(--bg-depth) / <alpha-value>)", // #030303
                },
                surface: {
                    DEFAULT: "rgb(var(--bg-surface) / <alpha-value>)", // #0A0A0A
                    highlight: "rgba(255, 255, 255, 0.05)",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "spotlight": "radial-gradient(circle at center, var(--tw-gradient-stops))",
            },
            animation: {
                "spotlight": "spotlight 2s ease .75s 1 forwards",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                orbit: "orbit calc(var(--duration)*1s) linear infinite",
                ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
                shine: "shine var(--duration) infinite linear",
            },
            keyframes: {
                shine: {
                    "0%": {
                        "background-position": "0% 0%",
                    },
                    "50%": {
                        "background-position": "100% 100%",
                    },
                    to: {
                        "background-position": "0% 0%",
                    },
                },
                spotlight: {
                    "0%": {
                        opacity: "0",
                        transform: "translate(-50%, -150%) scale(0.5)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate(-50%, 0) scale(1)",
                    },
                },
                orbit: {
                    "0%": {
                        transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
                    },
                },
                ripple: {
                    "0%, 100%": {
                        transform: "translate(-50%, -50%) scale(1)",
                    },
                    "50%": {
                        transform: "translate(-50%, -50%) scale(0.9)",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
