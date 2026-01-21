import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NexisHub | Automação Inteligente para o Seu Negócio",
    description: "Plataforma de automação empresarial com IA. Criação de Sites, Desenvolvimento de Sistemas, Landing Page e Hero Page profissionais",
    keywords: [
    "Criação de Sites",
    "Desenvolvimento de Sistemas",
    "WordPress",
    "Landing Page",
    "Hero Page",
    "Automação Empresarial",
    "Inteligência Artificial",
    "varaujo.dev",
    "Desenvolvimento Web",
    "Sistemas Personalizados",
    "Site Profissional",
    "Atendimento Automatizado",
    "Chatbot IA",
    "Suporte Inteligente"
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
