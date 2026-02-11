"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";

import { Dashboard } from "@/components/Dashboard";

import { Solutions } from "@/components/Solutions";
import { Methodology } from "@/components/Methodology";
import { Reviews } from "@/components/Reviews";

import { FAQ } from "@/components/FAQ";
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

            <Dashboard />

            <Methodology />

        

            <Reviews />

            <FAQ />

            <Footer />
        </main>
    );
}
