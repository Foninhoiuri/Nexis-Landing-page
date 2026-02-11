"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
    {
        question: "Quanto tempo leva a implementação?",
        answer: "O MVP (Produto Mínimo Viável) para automações de atendimento e triagem pode estar rodando em 5 a 10 dias úteis. MVPs de projetos completos e dashboards personalizados variam de 3 a 6 semanas."
    },
    {
        question: "Preciso trocar meus sistemas atuais (ERP/CRM)?",
        answer: "Não. A arquitetura Nexis é agnóstica. Nós criamos 'pontes' que conectam seu sistema legado às novas automações, sem necessidade de migração traumática."
    },
    {
        question: "A IA substitui minha equipe de atendimento?",
        answer: "Ela expande a capacidade. A IA lida com o volume massivo, triagem e dúvidas repetitivas (80% da demanda), liberando seu time humano para fechar negócios complexos e resolver problemas críticos."
    },
    {
        question: "E se a automação parar de funcionar?",
        answer: "Nossos contratos incluem monitoramento ativo. Se um fluxo falha, nossa equipe é notificada antes mesmo de você perceber, parando o agente na hora e resolvemos em até 24h."
    },
    {
        question: "Como funciona a segurança dos dados?",
        answer: "Seguimos rigorosamente a LGPD. Os dados trafegam criptografados e, dependendo do plano, podem ser processados em servidores (VPS) exclusivos da sua empresa, sem compartilhamento com terceiros."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Coluna Esquerda: Título e Intro */}
                    <div className="lg:sticky lg:top-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white"
                        >
                            Dúvidas <br />
                            <span className="text-neutral-500">Frequentes</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-neutral-400 max-w-md"
                        >
                            Entenda como a Nexis se integra à sua operação.
                            Se tiver dúvidas técnicas específicas, fale com nossos engenheiros.
                        </motion.p>
                    </div>

                    {/* Coluna Direita: Cards / Accordion */}
                    <div className="flex flex-col gap-4">
                        {FAQ_ITEMS.map((item, index) => (
                            <FAQItem
                                key={index}
                                item={item}
                                isOpen={openIndex === index}
                                onClick={() => toggleItem(index)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

function FAQItem({ item, isOpen, onClick }: { item: typeof FAQ_ITEMS[0], isOpen: boolean, onClick: () => void }) {
    return (
        <motion.div
            initial={false}
            onClick={onClick}
            className={cn(
                "glass-card cursor-pointer p-6 transition-all duration-300",
                isOpen && "border-blue-500/30 bg-blue-500/[0.08]"
            )}
        >
            <div className="flex items-center justify-between gap-4">
                <h3 className={cn(
                    "text-lg font-semibold transition-colors leading-tight",
                    isOpen ? "text-white" : "text-neutral-300 group-hover:text-white"
                )}>
                    {item.question}
                </h3>
                <div className={cn(
                    "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    isOpen ? "bg-brand text-white" : "bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white"
                )}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-neutral-400 leading-relaxed">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
