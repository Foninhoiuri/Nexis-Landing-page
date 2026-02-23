
import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

export function ProblemsSkeleton() {
    return (
        <section className="py-24 relative bg-background overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
                    <Skeleton className="h-12 w-3/4 rounded-lg" />
                    <Skeleton className="h-6 w-1/2 rounded-lg" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-[500px] w-full rounded-[3rem] bg-white/5" />
                    ))}
                </div>
            </div>
        </section>
    );
}

export function SolutionsSkeleton() {
    return (
        <section className="py-12 md:py-24 relative bg-black overflow-hidden">
            <div className="container mx-auto px-4 mb-12 md:mb-20 flex flex-col items-center gap-4">
                <Skeleton className="h-8 w-40 rounded-full" />
                <Skeleton className="h-16 w-3/4 md:w-1/2 rounded-lg" />
                <Skeleton className="h-6 w-full max-w-lg rounded-lg" />
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-[280px] w-full rounded-[2rem] bg-zinc-900/40" />
                    ))}
                </div>
            </div>
        </section>
    );
}

export function DashboardSkeleton() {
    return (
        <section className="pt-24 pb-0 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-8">
                        <Skeleton className="h-20 w-3/4 rounded-lg" />
                        <Skeleton className="h-24 w-full rounded-lg" />
                        <div className="space-y-6">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <Skeleton className="w-10 h-10 rounded-lg shrink-0" />
                                    <div className="space-y-2 w-full">
                                        <Skeleton className="h-5 w-1/2 rounded" />
                                        <Skeleton className="h-4 w-3/4 rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[400px] lg:h-[600px] w-full flex items-end justify-center">
                        <Skeleton className="w-full h-[80%] rounded-t-3xl opacity-50" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export function MethodologySkeleton() {
    return (
        <section className="bg-black py-24 px-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 flex flex-col items-center gap-4">
                    <Skeleton className="h-16 w-2/3 max-w-xl rounded-lg" />
                    <Skeleton className="h-6 w-1/2 max-w-lg rounded-lg" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-[320px] w-full rounded-2xl bg-white/5" />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-40 w-full rounded-2xl bg-white/5" />
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ReviewsSkeleton() {
    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 mb-20 flex flex-col items-center gap-4">
                <Skeleton className="h-8 w-40 rounded-full" />
                <Skeleton className="h-16 w-1/2 rounded-lg" />
            </div>
            <div className="flex gap-10 overflow-hidden px-4 opacity-50">
                {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-[540px] w-[320px] rounded-[3.5rem] shrink-0" />
                ))}
            </div>
        </section>
    );
}

export function FAQSkeleton() {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <div className="space-y-6">
                        <Skeleton className="h-16 w-3/4 rounded-lg" />
                        <Skeleton className="h-24 w-full rounded-lg" />
                    </div>
                    <div className="flex flex-col gap-4">
                        {[...Array(5)].map((_, i) => (
                            <Skeleton key={i} className="h-24 w-full rounded-2xl bg-white/5" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function FooterSkeleton() {
    return (
        <div className="w-full h-full bg-transparent">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    <div className="lg:col-span-5 space-y-6">
                        <Skeleton className="h-10 w-32 rounded" />
                        <div className="flex gap-4">
                            {[...Array(3)].map((_, i) => (
                                <Skeleton key={i} className="w-10 h-10 rounded-full" />
                            ))}
                        </div>
                        <Skeleton className="h-6 w-2/3 rounded" />
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <Skeleton className="h-6 w-24 rounded mb-4" />
                            {[...Array(6)].map((_, i) => (
                                <Skeleton key={i} className="h-4 w-32 rounded" />
                            ))}
                        </div>
                        <div className="space-y-4">
                            <Skeleton className="h-6 w-24 rounded mb-4" />
                            {[...Array(2)].map((_, i) => (
                                <Skeleton key={i} className="h-10 w-full max-w-[200px] rounded" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
