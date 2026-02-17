"use client";

import { motion } from "framer-motion";

const steps = [
    { number: "01", title: "Discover", description: "We dive deep into your vision, requirements, and user needs." },
    { number: "02", title: "Architect", description: "Designing scalable systems and intuitive user experiences." },
    { number: "03", title: "Build", description: "Agile development with modern tech stacks and AI integration." },
    { number: "04", title: "Scale", description: "Deployment, monitoring, and iteration for growth." },
];

export function ProcessSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16">
                    Our Process
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-muted -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative bg-background p-6 rounded-xl border border-transparent hover:border-primary/20 transition-all text-center md:text-left"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-primary/10 to-secondary/10 border border-primary/20 text-xl font-bold font-heading mb-6 group-hover:scale-110 transition-transform">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
