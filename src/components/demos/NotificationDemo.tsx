
import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/AnimatedList";
import { WhatsAppIcon } from "@/components/ui/Icons";

interface Item {
    name: string
    description: string
    icon: React.ReactNode
    color: string
    time: string
}

let notifications = [
    {
        name: "Cliente 01",
        description: "Péssimo atendimento, ninguém responde🙄",
        time: "15m atrás",
        icon: <WhatsAppIcon className="w-6 h-6 text-white" />,
        color: "#25D366",
    },
    {
        name: "Cliente 02",
        description: "Alguém ai?? Estou esperando...",
        time: "10m atrás",
        icon: <WhatsAppIcon className="w-6 h-6 text-white" />,
        color: "#25D366",
    },
    {
        name: "Cliente 03",
        description: "Já fechei com outro, demoraram demais!",
        time: "5m atrás",
        icon: <WhatsAppIcon className="w-6 h-6 text-white" />,
        color: "#25D366",
    },
    {
        name: "Cliente 04",
        description: "Vou cancelar meu pedido 🤬",
        time: "2m atrás",
        icon: <WhatsAppIcon className="w-6 h-6 text-white" />,
        color: "#25D366",
    },
    {
        name: "Cliente 05",
        description: "Oi? Você viu minha mensagem?",
        time: "agora",
        icon: <WhatsAppIcon className="w-6 h-6 text-white" />,
        color: "#25D366",
    },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] overflow-hidden rounded-3xl p-4",
                "transform-gpu bg-transparent dark:backdrop-blur-md ",
                "dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl overflow-hidden"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    {icon}
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre text-white">
                        <span className="text-sm sm:text-base">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-xs font-normal text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export function AnimatedListDemo() {
    return (
        <div className="relative flex max-h-[500px] min-h-[500px] w-full max-w-[32rem] flex-col overflow-hidden p-6">
            <AnimatedList delay={1500} className="w-full">
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}
