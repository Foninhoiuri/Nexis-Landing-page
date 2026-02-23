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
    ],
    openGraph: {
        title: "Nexis - Automação Inteligente",
        description: "Gerencie sua infraestrutura com o Nexis.",
        url: "https://igoriurialves.com.br",
        siteName: "Nexis",
        images: [
            {
                url: "https://www.igoriurialves.com.br/macbook%20com%20tela.png", // Link da imagem
                width: 1200,
                height: 630,
                alt: "Logo do Nexis",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/nexis_icon.png",
        apple: "/icone_app.png",
    },
};

import { FramerMotionProvider } from "@/components/providers/FramerMotionProvider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <FramerMotionProvider>
                    {children}
                </FramerMotionProvider>
            </body>
        </html>
    );
}
