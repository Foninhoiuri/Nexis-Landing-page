
"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, m as motion } from "framer-motion";

/**
 * Hook to preload multiple images and return their loading status.
 */
export function useImagePreloader(urls: string[]) {
    const [imagesPreloaded, setImagesPreloaded] = useState(false);

    useEffect(() => {
        if (!urls || urls.length === 0) {
            setImagesPreloaded(true);
            return;
        }

        let isMounted = true;
        const imagePromises = urls.map((url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = resolve; // Resolve even on error to avoid blocking forever
            });
        });

        Promise.all(imagePromises).then(() => {
            if (isMounted) {
                setImagesPreloaded(true);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [urls]);

    return imagesPreloaded;
}

interface AssetLoaderProps {
    urls: string[];
    children: React.ReactNode;
    skeleton: React.ReactNode;
    minDisplayTime?: number; // Optional: Minimum time to show skeleton to avoid flicker
}

/**
 * Component that shows a skeleton until all specified image URLs are loaded.
 */
export function AssetLoader({ urls, children, skeleton, minDisplayTime = 0 }: AssetLoaderProps) {
    const imagesLoaded = useImagePreloader(urls);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (imagesLoaded) {
            if (minDisplayTime > 0) {
                const timer = setTimeout(() => setShowContent(true), minDisplayTime);
                return () => clearTimeout(timer);
            } else {
                setShowContent(true);
            }
        }
    }, [imagesLoaded, minDisplayTime]);

    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
                {!showContent && (
                    <motion.div
                        key="skeleton"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-10 w-full h-full"
                    >
                        {skeleton}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    );
}
