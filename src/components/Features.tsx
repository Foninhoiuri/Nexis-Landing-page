"use client";

import React from "react";
import { GlowCard } from "@/components/ui/GlowCard";
import { Activity, Shield, Zap, Globe, Cpu, BarChart3 } from "lucide-react";

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <GlowCard className="p-6 h-full flex flex-col items-start gap-4 hover:shadow-[0_0_30px_-10px_rgba(var(--color-brand-primary),0.2)] transition-all">
            <div className="p-3 rounded-lg bg-brand/10 border border-brand/20">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-neutral-400 leading-relaxed text-sm">
                {description}
            </p>
        </GlowCard>
    )
}

export function Features() {
    return (
        <section id="features" className="py-24 relative z-10">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">Scale</span>
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        Everything you need to build generic apps is getting old. Nexis provides a specialized runtime for the modern web.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<Zap className="w-6 h-6 text-brand" />}
                        title="Instant Deploy"
                        description="Push to git and your app is live in seconds. No configuration required globally distributed."
                    />
                    <FeatureCard
                        icon={<Shield className="w-6 h-6 text-brand" />}
                        title="Edge Security"
                        description="Enterprise-grade protection baked into every request. DDoS mitigation and WAF included."
                    />
                    <FeatureCard
                        icon={<Activity className="w-6 h-6 text-brand" />}
                        title="Real-time Analytics"
                        description="Observe your traffic with millisecond precision. Custom dashboards and alerts out of the box."
                    />
                    <FeatureCard
                        icon={<Globe className="w-6 h-6 text-brand" />}
                        title="Global Mesh"
                        description="Intelligent routing across 35 regions ensures your users always hit the nearest node."
                    />
                    <FeatureCard
                        icon={<Cpu className="w-6 h-6 text-brand" />}
                        title="Serverless Compute"
                        description="Run complex logic at the edge with zero cold starts. Supports Node.js, Python, and Go."
                    />
                    <FeatureCard
                        icon={<BarChart3 className="w-6 h-6 text-brand" />}
                        title="Auto Scaling"
                        description="Handle spikes from 0 to 10M requests without manual intervention. Pay only for what you use."
                    />
                </div>
            </div>
        </section>
    );
}
