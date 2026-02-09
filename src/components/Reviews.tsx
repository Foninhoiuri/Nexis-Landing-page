import React, { useEffect, useState } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
} from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

// ---------------- CONFIGURAÇÕES ----------------
const TEXT_LIMIT = 150;
const SCROLL_SPEED = 0.7;
const CARD_WIDTH_DESKTOP = 400;
const CARD_WIDTH_MOBILE = 250;
const CARD_GAP = 24;
// -----------------------------------------------

// Mock Data for Nexis - Automation & AI
const REVIEWS_DATA = [
    {
        nome: "Carlos M.",
        foto: "", // Use initials or placeholder
        estrelas: 5,
        texto: "A automação da Nexis transformou nosso fluxo de trabalho. O que levava horas agora é feito em minutos. Incrível!"
    },
    {
        nome: "Ana P.",
        foto: "",
        estrelas: 5,
        texto: "O atendimento via IA é surreal. Tivemos um aumento de 30% na retenção de clientes no primeiro mês."
    },
    {
        nome: "Ricardo S.",
        foto: "",
        estrelas: 4.5,
        texto: "Implementação rápida e suporte técnico de primeira. A equipe entendeu exatamente nossa necessidade de infraestrutura."
    },
    {
        nome: "Juliana T.",
        foto: "",
        estrelas: 5,
        texto: "Dashboards claros e precisos. Finalmente temos controle total sobre nossos dados de vendas em tempo real."
    },
    {
        nome: "Fernanda L.",
        foto: "",
        estrelas: 5,
        texto: "A redução de erros nos processos fiscais foi imediata. A Nexis trouxe a segurança que precisávamos."
    },
    {
        nome: "Roberto G.",
        foto: "",
        estrelas: 5,
        texto: "O ROI foi visível em semanas. A eficiência que a Nexis trouxe para nossa operação é impagável."
    }

];

const RATING = 5.0;
const TOTAL_REVIEWS = "50+";

export function Reviews() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const imgSize = isMobile ? "h60" : "h200";
    const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;

    const processedReviews = [...REVIEWS_DATA];

    if (isMobile) {
        processedReviews.sort((a, b) => a.texto.length - b.texto.length);
    }

    const splitIndex = Math.ceil(processedReviews.length / 2);
    const row1 = processedReviews.slice(0, splitIndex);
    const row2 = processedReviews.slice(splitIndex);

    const renderStars = (score: number) => {
        const stars = [];
        const full = Math.floor(score);
        const half = score % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < full) {
                stars.push(<Star key={i} className="w-4 h-4 fill-brand text-brand" />);
            } else if (i === full && half) {
                stars.push(
                    <div key={i} className="relative w-4 h-4">
                        <Star className="w-4 h-4 text-neutral-800 absolute" />
                        <StarHalf className="w-4 h-4 fill-brand text-brand absolute" />
                    </div>
                );
            } else {
                stars.push(<Star key={i} className="w-4 h-4 text-neutral-800" />);
            }
        }
        return stars;
    };

    return (
        <section
            id="reviews"
            className="relative py-24 bg-black overflow-hidden border-t border-white/5"
        >
            {/* Gradiente lateral GLOBAL da seção */}
            {!isMobile && (
                <>
                    <div className="absolute inset-y-0 left-0 w-48 z-20 pointer-events-none bg-gradient-to-r from-black to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-48 z-20 pointer-events-none bg-gradient-to-l from-black to-transparent" />
                </>
            )}

            <div className="relative z-10 container mx-auto px-4 mb-12 text-center">
                <h2 className="text-4xl font-bold mb-4 text-white">
                    Confiança Técnica
                </h2>

                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg font-semibold text-white">
                        {RATING.toFixed(1)}
                    </span>
                    <div className="flex">
                        {renderStars(RATING)}
                    </div>
                </div>

                <p className="text-neutral-500 font-medium">
                    {TOTAL_REVIEWS} projetos entregues
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex flex-col gap-12 py-10 pb-20">
                    <MarqueeRow
                        items={row1}
                        direction="left"
                        renderStars={renderStars}
                        imgSize={imgSize}
                        cardWidth={cardWidth}
                        isMobile={isMobile}
                    />

                    {row2.length > 0 && (
                        <MarqueeRow
                            items={row2}
                            direction="right"
                            renderStars={renderStars}
                            imgSize={imgSize}
                            cardWidth={cardWidth}
                            isMobile={isMobile}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

// ---------------- CARD INDIVIDUAL ----------------
const ReviewCard = ({ item, renderStars, imgSize, cardWidth, isMobile }: any) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLongText = item.texto.length > TEXT_LIMIT;

    const Header = (
        <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-neutral-900 flex items-center justify-center text-white font-bold">
                {item.foto ? (
                    <img src={item.foto} alt={item.nome} className="w-full h-full object-cover" />
                ) : (
                    item.nome.charAt(0)
                )}
            </div>

            <div>
                <h4 className="font-bold text-white text-lg">{item.nome}</h4>
                <div className="flex gap-0.5">{renderStars(item.estrelas)}</div>
            </div>
        </div>
    );

    if (isMobile) {
        return (
            <div
                style={{ width: cardWidth }}
                className="rounded-[1.5rem] p-6 border border-white/10 bg-neutral-900/50 backdrop-blur-sm"
            >
                {Header}
                <p className="text-neutral-400 italic">"{item.texto}"</p>
            </div>
        );
    }

    return (
        <div style={{ width: cardWidth, height: 220 }} className="relative shrink-0">
            {isLongText && (
                <div
                    className="absolute inset-0 z-10"
                    onMouseEnter={() => setIsHovered(true)}
                />
            )}

            <motion.div
                initial={false}
                animate={{
                    maxHeight: isHovered ? 600 : 220,
                    zIndex: isHovered ? 50 : 1,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onMouseLeave={() => setIsHovered(false)}
                className={cn(
                    "absolute top-0 left-0 w-full overflow-hidden rounded-[1.5rem] p-6 border border-white/10 bg-neutral-900/50 backdrop-blur-sm transition-colors",
                    isHovered
                        ? "shadow-2xl bg-neutral-900 border-brand/50"
                        : "hover:bg-neutral-900/80"
                )}
            >
                {Header}

                <p
                    className={cn(
                        "text-neutral-400 italic transition-all duration-300",
                        isLongText && !isHovered && "line-clamp-4"
                    )}
                >
                    "{item.texto}"
                </p>

                {isHovered && (
                    <div className="absolute -bottom-6 left-0 w-full h-8 bg-transparent pointer-events-auto" />
                )}
            </motion.div>
        </div>
    );
};

// ---------------- LINHA DO MARQUEE ----------------
function MarqueeRow({ items, direction, renderStars, imgSize, cardWidth, isMobile }: any) {
    const x = useMotionValue(0);
    const [paused, setPaused] = useState(false);
    const duplicated = [...items, ...items, ...items];

    const contentWidth = items.length * (cardWidth + CARD_GAP);

    useEffect(() => {
        if (direction === "right") {
            x.set(-contentWidth);
        }
    }, [direction, contentWidth, x]);

    useAnimationFrame(() => {
        if (paused) return;

        const move = SCROLL_SPEED * (direction === "left" ? -1 : 1);
        const current = x.get();

        if (direction === "left") {
            x.set(current <= -contentWidth ? 0 : current + move);
        } else {
            x.set(current >= 0 ? -contentWidth : current + move);
        }
    });

    return (
        <div className="relative w-full" style={{ height: isMobile ? "auto" : 240 }}>
            <motion.div
                style={{ x, width: "max-content" }}
                className="flex gap-6 px-4 items-start"
                drag="x"
                onDragStart={() => setPaused(true)}
                onDragEnd={() => setPaused(false)}
            >
                {duplicated.map((item: any, i: number) => (
                    <ReviewCard
                        key={i}
                        item={item}
                        renderStars={renderStars}
                        imgSize={imgSize}
                        cardWidth={cardWidth}
                        isMobile={isMobile}
                    />
                ))}
            </motion.div>
        </div>
    );
}
