import React, { useEffect, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { User, Check, Plus, CheckCircle2, Star, StarHalf } from "lucide-react";
import GradualBlur from "@/components/ui/gradual-blur";
import { RainbowButton } from "@/components/ui/BlueRainbowButton";

// ---------------- CONFIGURAÇÕES ----------------
const SCROLL_SPEED = 0.4;
const CARD_WIDTH = 320;
const CARD_HEIGHT = 540;
const CARD_GAP = 40;

const REVIEWS_DATA = [
    
    {
        nome: "Teacher Bruno",
        company: "Professor & Consultor",
        foto: "/pessoas/bruno_fernandes.png",
        stars: 4.5,
        testimonial: "Resultados tangíveis em tempo recorde. A equipe entendeu nossa dor desde o primeiro dia."
    },
    {
        nome: "Tarciso",
        company: "Consultor Financeiro",
        foto: "/pessoas/tarciso.png",
        stars: 5,
        testimonial: "A velocidade de implementação e a qualidade do código são inigualáveis no mercado atual."
    },
    {
        nome: "Flavia Nogueira",
        company: "Administradora",
        foto: "/pessoas/flavia_nogueira.png",
        stars: 5,
        testimonial: "aaaaa"
    },
    {
        nome: "Maya Ross",
        company: "Doutora",
        foto: "/pessoas/generico1.png",
        stars: 4.5,
        testimonial: "Resultados tangíveis em tempo recorde. A equipe entendeu nossa dor desde o primeiro dia."
    },
];

// Helper for stars
const renderStars = (score: number) => {
    const stars = [];
    const full = Math.floor(score);
    const half = score % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
        if (i < full) {
            stars.push(<Star key={`star-${i}`} className="w-4 h-4 fill-[#3B82F6] text-[#3B82F6]" />);
        } else if (i === full && half) {
            stars.push(
                <div key={`star-half-${i}`} className="relative w-4 h-4">
                    <Star className="w-4 h-4 text-neutral-800 absolute" />
                    <StarHalf className="w-4 h-4 fill-[#3B82F6] text-[#3B82F6] absolute" />
                </div>
            );
        } else {
            stars.push(<Star key={`star-empty-${i}`} className="w-4 h-4 text-neutral-800" />);
        }
    }
    return stars;
};

export function Reviews() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="reviews" className={`relative py-24 bg-black overflow-hidden font-['Poppins']`}>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            `}</style>

            <div className="container relative z-10 mx-auto px-4 mb-12 md:mb-20 text-center">
                <RainbowButton className="mb-6 h-9 rounded-full px-5">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse shadow-[0_0_10px_rgba(147,197,253,0.8)]" />
                        Resultados Comprovados
                    </span>
                </RainbowButton>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                    Líderes que <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-cyan-400 drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                        Confiam em Nós
                    </span>
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
                    Histórias reais de quem transformou suas operações com nossa tecnologia.
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                <MarqueeRow items={REVIEWS_DATA} cardWidth={isMobile ? 280 : CARD_WIDTH} />
            </div>
        </section>
    );
}

// ---------------- CARD DARK MODE + PROGRESSIVE BLUR ----------------
// ---------------- CARD DARK MODE + PROGRESSIVE BLUR ----------------
const ReviewCard = ({ item, cardWidth }: any) => {
    return (
        <motion.div
            style={{ width: cardWidth, height: CARD_HEIGHT }}
            className="group relative 
            rounded-[3.5rem] 
            bg-neutral-900 
            overflow-hidden shrink-0 cursor-pointer 
            transition-colors duration-500 
            
            hover:bg-neutral-900/80"

            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* 1. CONTAINER DA IMAGEM E MÁSCARA */}
            <motion.div
                className="relative z-0 overflow-hidden"
                variants={{
                    rest: {
                        height: "100%",
                        borderRadius: "0rem",
                        margin: "0px",
                    },
                    hover: {
                        height: "280px", // The "Square" Crop
                        borderRadius: "2.5rem",
                        margin: "16px", // Adds the padding look
                    }
                }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
                {/* 
                    A imagem é maior que o container (tamanho original do card).
                    No hover, movemos ela para "cima/esquerda" (negativo da margin) para compensar o movimento do container.
                    Isso cria o efeito de "crop" onde a imagem fica parada e a borda encolhe.
                */}
                <motion.img
                    src={item.foto}
                    alt={item.nome}
                    style={{ width: cardWidth, height: CARD_HEIGHT, transformOrigin: "top left" }}
                    className="absolute top-0 left-0 max-w-none object-cover opacity-100 transition-opacity"
                    variants={{
                        rest: { x: 0, y: 0, scale: 1 },
                        hover: { x: 0, y: -16, scale: 0.9 }
                    }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                />

                {/* --- GRADUAL BLUR INTEGRATION --- */}
                {/* O blur acompanha o container (ficando sempre na base do "crop") */}
                <motion.div
                    className="absolute inset-x-0 bottom-0 z-10 pointer-events-none h-[40%]"
                    variants={{
                        rest: { opacity: 1 },
                        hover: { opacity: 0 }
                    }}
                    transition={{ duration: 0.4 }}
                >
                    <GradualBlur
                        className="w-full h-full"
                        height="100%"
                        preset="bottom"
                        strength={2.5}
                        divCount={8}
                    />
                </motion.div>

                {/* Overlay extra escuro */}
                <motion.div
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent mix-blend-multiply"
                    variants={{
                        rest: { opacity: 1 },
                        hover: { opacity: 0 }
                    }}
                />
            </motion.div>

            {/* 2. CONTEÚDO (Texto Branco) - Fixed at bottom */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-8 flex flex-col justify-end h-full pointer-events-none">

                {/* Bloco de Texto Principal */}
                <motion.div
                    className="mt-auto"
                    variants={{
                        rest: { y: 0 },
                        hover: { y: -15 } // Moves text up closer to the square crop
                    }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">
                            {item.nome}
                        </h3>
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
                    </div>

                    <p className="text-sm text-neutral-400 font-medium mb-2 uppercase tracking-widest">
                        {item.company}
                    </p>

                    {/* Stars - now below company, no background */}
                    <div className="flex gap-1 items-center mb-4">
                        {renderStars(item.stars)}
                    </div>

                    {/* Testimonial - Reveals on hover */}
                    <motion.div
                        variants={{
                            rest: { height: 0, opacity: 0, marginTop: 0 },
                            hover: { height: "auto", opacity: 1, marginTop: 0 }
                        }}
                        className="overflow-hidden"
                    >
                        <p className="text-neutral-200 text-sm leading-relaxed font-light italic">
                            "{item.testimonial}"
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

// ---------------- MARQUEE (Mantido) ----------------
function MarqueeRow({ items, cardWidth }: any) {
    const x = useMotionValue(0);
    const [paused, setPaused] = useState(false);
    const duplicated = [...items, ...items, ...items];
    const contentWidth = items.length * (cardWidth + CARD_GAP);

    useAnimationFrame(() => {
        if (paused) return;
        const current = x.get();
        x.set(current <= -contentWidth ? 0 : current - SCROLL_SPEED);
    });

    return (
        <motion.div
            style={{ x, width: "max-content" }}
            className="flex gap-10 px-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            drag="x"
            dragConstraints={{ left: -contentWidth, right: 0 }}
        >
            {duplicated.map((item, i) => (
                <ReviewCard key={i} item={item} cardWidth={cardWidth} />
            ))}
        </motion.div>
    );
}
