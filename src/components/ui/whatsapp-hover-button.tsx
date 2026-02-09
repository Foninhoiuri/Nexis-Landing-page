import React from "react";
import { cn } from "@/lib/utils";
import { SocialIcons } from "@/components/ui/Icons"; 

interface WhatsAppHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export function WhatsAppHoverButton({
  text = "Começar",
  className,
  onClick,
  ...props
}: WhatsAppHoverButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-blue-600/30 bg-blue-600 p-2.5 px-6 text-center font-semibold text-white transition-all btn-green",
        className
      )}
      {...props}
    >
      {/* ESTADO INICIAL: Apenas Texto (Sem a bolinha) */}
      <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>

      {/* ESTADO HOVER: Ícone WhatsApp + Texto (Vindo da esquerda) */}
      <div className="absolute top-0 left-0 z-10 flex h-full w-full -translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <SocialIcons.whatsapp className="w-5 h-5 text-white" />
        <span>{text}</span>
      </div>
    </button>
  );
}