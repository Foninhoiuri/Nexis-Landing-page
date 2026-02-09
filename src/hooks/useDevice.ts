
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

const TABLET_MIN = 768; // width >= 768
const TABLET_MAX = 1024; // width < 1024

export function useDevice() {
    const isMobile = useIsMobile();
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                const w = window.innerWidth;
                setWidth(w);
                const tablet = w >= TABLET_MIN && w < TABLET_MAX;
                setIsTablet(!isMobile && tablet);
                setIsDesktop(!isMobile && !tablet);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    return { isMobile, isTablet, isDesktop, width };
}
