import React from "react";
import { cn } from "@/lib/utils";
import { SocialIcons } from "@/components/ui/Icons"; // Importando seu arquivo de ícones

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
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-blue-600/30 bg-blue-600 p-2.5 px-6 text-center font-semibold text-white transition-all hover:border-[#25D366] hover:bg-blue-700",
        className
      )}
      {...props}
    >
      {/* ESTADO INICIAL: Ponto Verde + Texto */}
      <div className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        <div className="h-2 w-2 rounded-full bg-[#25D366] transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span>{text}</span>
      </div>

      {/* ESTADO HOVER: Ícone WhatsApp + Texto (Vindo da esquerda) */}
      <div className="absolute top-0 left-0 z-10 flex h-full w-full -translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <SocialIcons.whatsapp className="w-5 h-5 text-[#25D366]" /> {/* Ícone Verde */}
        <span>{text}</span>
      </div>
    </button>
  );
}