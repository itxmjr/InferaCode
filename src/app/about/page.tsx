"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { CallToAction } from "@/components/sections/call-to-action";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-16 md:pt-48 md:pb-32">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                            We Bridge the Gap Between <br />
                            <span className="text-primary">Vision</span> and <span className="text-secondary">Reality</span>.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            InferaCode is a hybrid AI agency and product lab. We don't just build software;
                            we engineer intelligent systems that scale.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-6">Our Mission</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                The startup landscape has changed. Speed is no longer enough; intelligence is the new differentiator.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Our mission is to empower founders with the AI infrastructure they need to compete with giants.
                                We believe in clean code, scalable architecture, and user-centric design.
                            </p>
                        </div>
                        <div className="bg-background p-8 rounded-2xl border border-border shadow-xs">
                            <h3 className="text-2xl font-bold font-heading mb-4">Why We Exist</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                    <span className="text-muted-foreground">To eliminating technical debt before it starts.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                    <span className="text-muted-foreground">To democratize access to advanced AI engineering.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                    <span className="text-muted-foreground">To build products that actually solve problems.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto bg-linear-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/10 text-center">
                        <h2 className="text-3xl font-bold font-heading mb-6">From the Founder</h2>
                        <blockquote className="text-xl md:text-2xl font-medium italic mb-8">
                            "We built InferaCode because we were tired of seeing great ideas fail due to poor execution.
                            We bring the rigor of top-tier engineering to the agility of the startup world."
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 bg-muted rounded-full overflow-hidden">
                                {/* Placeholder for founder image */}
                                <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-400" />
                            </div>
                            <div className="text-left">
                                <div className="font-bold">Alex Rivera</div>
                                <div className="text-sm text-muted-foreground">Founder & Lead Engineer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
            <Footer />
        </main>
    );
}
