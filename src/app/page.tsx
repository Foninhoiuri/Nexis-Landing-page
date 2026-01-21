"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { AboutMe } from "@/components/AboutMe";
import { ChatDemo } from "@/components/ChatDemo";
import { Features } from "@/components/Features";
import { Solutions } from "@/components/Solutions";
import { Authority } from "@/components/Authority";
import { Methodology } from "@/components/Methodology";
import { UseCases } from "@/components/UseCases";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-brand/30 selection:text-white overflow-x-hidden">
            {/* Texture Overlay */}
            <div className="fixed inset-0 bg-noise z-50 pointer-events-none opacity-20" />

            <Navbar />

            <Hero />

            <Problems />

            <Solutions />

            <AboutMe />

            <ChatDemo />

            <Features />

            <Authority />

            <Methodology />

            <UseCases />

            <Footer />
        </main>
    );
}
