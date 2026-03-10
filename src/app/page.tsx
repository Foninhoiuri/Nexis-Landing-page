"use client";

import React, { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import {
    ProblemsSkeleton,
    SolutionsSkeleton,
    MethodologySkeleton,
    ReviewsSkeleton,
    FAQSkeleton,
    FooterSkeleton
} from "@/components/PageSkeletons";

// Lazy load below-the-fold components
import dynamic from "next/dynamic";

// Otimização: Carregamento dinâmico com next/dynamic e SSR false para componentes abaixo da dobra
const Problems = dynamic(() => import("@/components/Problems").then((mod) => mod.Problems), {
    loading: () => <ProblemsSkeleton />,
    ssr: true, // Keep SSR for SEO content
});

const Solutions = dynamic(() => import("@/components/Solutions").then((mod) => mod.Solutions), {
    loading: () => <SolutionsSkeleton />,
    ssr: true,
});


const Methodology = dynamic(() => import("@/components/Methodology").then((mod) => mod.Methodology), {
    loading: () => <MethodologySkeleton />,
    ssr: true,
});

const Reviews = dynamic(() => import("@/components/Reviews").then((mod) => mod.Reviews), {
    loading: () => <ReviewsSkeleton />,
    ssr: true,
});

const FAQ = dynamic(() => import("@/components/FAQ").then((mod) => mod.FAQ), {
    loading: () => <FAQSkeleton />,
    ssr: true,
});

const Footer = dynamic(() => import("@/components/Footer").then((mod) => mod.Footer), {
    loading: () => <FooterSkeleton />,
    ssr: true,
});

export default function Home() {
    return (
        <main className="min-h-screen bg-black relative selection:bg-brand/30 selection:text-white overflow-x-hidden">
            {/* Texture Overlay */}
            <div className="fixed inset-0 bg-noise z-50 pointer-events-none opacity-20" />

            <Navbar />

            <Hero />

            <div id="problems">
                <Problems />
            </div>

            <div id="solutions">
                <Solutions />
            </div>

            <div id="methodology">
                <Methodology />
            </div>

            <div id="reviews">
                <Reviews />
            </div>

            <div id="faq">
                <FAQ />
            </div>

            <Footer />
        </main>
    );
}
