"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FeaturedWork } from "@/components/sections/featured-work"; // Reusing for now, but in full app could be different
import { CallToAction } from "@/components/sections/call-to-action";

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <section className="pt-32 pb-12 md:pt-48 md:pb-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Our Work
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A selection of AI-driven products and scalable systems we've engineered.
                    </p>
                </div>
            </section>

            {/* Reusing FeaturedWork Section as the main gallery for this MVP */}
            <FeaturedWork />

            <CallToAction />
            <Footer />
        </main>
    );
}
