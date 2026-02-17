"use client";

import { motion } from "framer-motion";
import { Badge } from "lucide-react"; // Wait, Badge is an icon? No, I want a Badge component styling. I'll use div.

export function SaaSVision() {
    return (
        <section className="py-24 bg-background border-t border-border">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
                        Future-Proof Engineering
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading">
                        Scalability is Built In.
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                        "We build custom solutions today. <br className="hidden md:block" />
                        We’re building scalable AI products tomorrow."
                    </p>
                    <p className="text-sm text-muted-foreground pt-4">
                        Every line of code we write is designed to handle growth, from Day 1 MVP to Series B scale.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
