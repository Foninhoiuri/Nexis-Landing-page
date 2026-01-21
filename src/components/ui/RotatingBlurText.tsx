"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface RotatingBlurTextProps {
    texts: string[];
    duration?: number;
    className?: string;
}

export function RotatingBlurText({
    texts,
    duration = 4000,
    className = "",
}: RotatingBlurTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, duration);

        return () => clearInterval(interval);
    }, [texts.length, duration]);

    const words = texts[index].split(" ");

    return (
        <div className="inline-flex relative h-[1.1em] w-full align-top overflow-visible justify-start">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className="flex flex-nowrap gap-[0.25em] items-center absolute left-0 top-0 whitespace-nowrap"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            className={`inline-block ${className}`}
                            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                            animate={{
                                filter: "blur(0px)",
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.4,
                                    ease: "easeOut",
                                    delay: i * 0.1 // Stagger entrance
                                }
                            }}
                            exit={{
                                filter: "blur(5px)",
                                opacity: 0,
                                y: -20,
                                transition: {
                                    duration: 0.3,
                                    ease: "easeIn",
                                    delay: i * 0.03 // Stagger exit
                                }
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
