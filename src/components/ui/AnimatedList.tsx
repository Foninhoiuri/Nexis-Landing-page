import React, { useEffect, useMemo, useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

export interface AnimatedListProps {
    className?: string;
    children: React.ReactNode;
    delay?: number;
}

export const AnimatedList = React.memo(
    ({ className, children, delay = 1000 }: AnimatedListProps) => {
        const [index, setIndex] = useState(0);
        const childrenArray = React.Children.toArray(children);
        const containerRef = useRef(null);
        const isInView = useInView(containerRef, { once: false, amount: 0.5 });

        useEffect(() => {
            if (!isInView) {
                setIndex(0);
                return;
            }

            if (index < childrenArray.length - 1) {
                const timeout = setTimeout(() => {
                    setIndex((prevIndex) => prevIndex + 1);
                }, delay);
                return () => clearTimeout(timeout);
            }
        }, [index, delay, isInView, childrenArray.length]);

        const itemsToShow = useMemo(
            () => childrenArray.slice(0, index + 1).reverse(),
            [index, childrenArray],
        );

        return (
            <div ref={containerRef} className={`flex flex-col items-center gap-4 ${className}`}>
                <AnimatePresence>
                    {itemsToShow.map((item, i) => (
                        <AnimatedListItem key={(item as React.ReactElement).key} index={i}>
                            {item}
                        </AnimatedListItem>
                    ))}
                </AnimatePresence>
            </div>
        );
    },
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children, index = 0 }: { children: React.ReactNode, index?: number }) {
    const animations = {
        initial: { scale: 0, opacity: 0 },
        animate: {
            scale: 1 - index * 0.1,
            opacity: 1 - index * 0.3,
            originY: 0,
        },
        exit: { scale: 0, opacity: 0 },
        transition: { type: "spring", stiffness: 350, damping: 40 },
    } as any;

    return (
        <motion.div {...animations} layout className="mx-auto w-full">
            {children}
        </motion.div>
    );
}
