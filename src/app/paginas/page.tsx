import { Navbar } from "@/components/Navbar";
import { LandingPages } from "@/components/LandingPages";
import { Footer } from "@/components/Footer";

export default function PaginasPage() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-brand/30 selection:text-white overflow-x-hidden">
            {/* Texture Overlay */}
            <div className="fixed inset-0 bg-noise z-50 pointer-events-none opacity-20" />

            <Navbar />

            <div className="pt-20">
                <LandingPages />
            </div>

            <Footer />
        </main>
    );
}
