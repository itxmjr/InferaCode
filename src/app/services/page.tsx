"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CallToAction } from "@/components/sections/call-to-action";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <section className="pt-32 pb-12 md:pt-48 md:pb-24 bg-muted/20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive AI and software engineering services tailored for growth-stage startups.
                    </p>
                </div>
            </section>

            <ServicesGrid />

            <section className="py-24 container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold font-heading mb-12 text-center">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <h3 className="text-xl font-bold mb-4">Speed to Market</h3>
                        <p className="text-muted-foreground">We use rapid development frameworks and AI-assisted coding to deliver 2x faster.</p>
                    </div>
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <h3 className="text-xl font-bold mb-4">Enterprise Quality</h3>
                        <p className="text-muted-foreground">Scalable architecture, rigorous testing, and clean code from day one.</p>
                    </div>
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <h3 className="text-xl font-bold mb-4">Post-Launch Support</h3>
                        <p className="text-muted-foreground">We don't just hand over code. We monitor, maintain, and iterate with you.</p>
                    </div>
                </div>
            </section>

            <CallToAction />
            <Footer />
        </main>
    );
}
