"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function CallToAction() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-background to-muted -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-heading">
                        Let's Build Something <span className="text-primary">Intelligent</span>.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Ready to turn your idea into a production-ready AI product?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="rounded-full px-12 h-14 text-lg shadow-[0_4px_14px_0_rgba(0,255,136,0.39)]" asChild>
                            <Link href="/contact">Start Your Project</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
