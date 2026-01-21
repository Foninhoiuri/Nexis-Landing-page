"use client";

import React from "react";

export function ChatDemo() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight leading-tight">
                            Talk to your <br />
                            <span className="text-brand">Infrastructure</span>
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8">
                            Nexis AI integrates directly with your stack. Debug issues, rollback deployments, or scale instances using natural language.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Ask 'Why is latency high in EU-West?'",
                                "Command 'Rollback to v2.4 immediately'",
                                "Query 'Show me top 5 endpoints by error rate'"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-neutral-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Chat Interface Mockup */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-brand/20 to-transparent rounded-2xl blur-lg opacity-50" />
                        <div className="relative bg-surface/80 border border-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
                            {/* Chat Header */}
                            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                                <span className="text-xs font-mono text-neutral-500">nexis-cli — zsh — 80x24</span>
                            </div>

                            {/* Chat Body */}
                            <div className="p-6 font-mono text-sm space-y-4">
                                <div className="flex gap-4">
                                    <span className="text-brand shrink-0">➜</span>
                                    <p className="text-neutral-300">nexis analyze --last 5m</p>
                                </div>
                                <div className="text-neutral-500 pl-6">
                                    Analyzing traffic patterns... <br />
                                    <span className="text-green-400">✓ No anomalies detected.</span> <br />
                                    Avg Latency: 24ms <br />
                                    RPS: 4,502
                                </div>

                                <div className="flex gap-4 pt-2">
                                    <span className="text-brand shrink-0">➜</span>
                                    <p className="text-neutral-300">nexis scale --region us-east --min 5</p>
                                </div>
                                <div className="text-neutral-500 pl-6">
                                    <span className="text-blue-400">ℹ Scaling policy updated.</span> <br />
                                    Provisioning 2 new instances in us-east-1...
                                </div>

                                <div className="flex gap-4 pt-2 group">
                                    <span className="text-brand shrink-0 group-hover:animate-pulse">➜</span>
                                    <div className="w-2.5 h-5 bg-brand/50 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
