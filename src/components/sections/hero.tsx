"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/20 blur-3xl rounded-full opacity-20 animate-pulse" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/20 blur-3xl rounded-full opacity-20" />

            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
                            Next-Gen Development Agency
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight leading-tight mb-4">
                            AI-First Products & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                                Custom MVPs
                            </span>{" "}
                            Built to Scale
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            We design and develop intelligent systems, AI automations, and
                            scalable SaaS-ready solutions for modern startups.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-shadow" asChild>
                            <Link href="/contact">
                                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                            <Link href="/work">View Our Work</Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center gap-4 text-sm text-muted-foreground pt-4"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[10px] font-bold">U{i}</div>
                            ))}
                        </div>
                        <p>Trusted by 20+ Founders</p>
                    </motion.div>
                </div>

                {/* Right Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
                >
                    {/* Abstract Dashboard Mockup */}
                    <div className="relative w-full max-w-md aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl border border-white/10 backdrop-blur-sm p-6 shadow-2xl rotate-3">
                            <div className="h-full w-full bg-background/50 rounded-2xl border border-white/5 p-4 flex flex-col gap-4">
                                <div className="h-8 w-1/3 bg-muted/50 rounded-md animate-pulse" />
                                <div className="flex gap-4 h-32">
                                    <div className="w-1/2 bg-primary/10 rounded-md" />
                                    <div className="w-1/2 bg-secondary/10 rounded-md" />
                                </div>
                                <div className="h-4 w-full bg-muted/30 rounded-md" />
                                <div className="h-4 w-2/3 bg-muted/30 rounded-md" />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl border border-white/10 backdrop-blur-sm p-6 shadow-xl -rotate-6 -z-10 scale-95 translate-y-4">
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
