"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
    words: string[];
    className?: string;
    loop?: boolean;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}

export function TypingAnimation({
    words,
    className,
    loop = true,
    typingSpeed = 150,
    deletingSpeed = 80,
    pauseTime = 1500,
}: TypingAnimationProps) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(timeout2);
    }, []);

    // Typing logic
    useEffect(() => {
        if (index === words.length && !loop) return;

        if (subIndex === words[index].length + 1 && !reverse) {
            // Word finished typing
            const timeout = setTimeout(() => {
                setReverse(true);
            }, pauseTime);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            // Word finished deleting
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, loop, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className={cn("inline-flex items-center", className)}>
            {/* Zero-width space to prevent height collapse */}
            {'\u200B'}{words[index].substring(0, subIndex)}
            <span className={cn("ml-1 w-[3px] h-[1em] bg-white block", blink ? "opacity-100" : "opacity-0")} />
        </span>
    );
}
