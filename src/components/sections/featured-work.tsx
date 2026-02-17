"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
    {
        title: "FinTech AI Advisor",
        category: "AI SaaS",
        description: "Intelligent financial planning assistant powered by custom LLM agents.",
        tech: ["Next.js", "Python", "LangChain"],
        image: "bg-linear-to-br from-blue-500/10 to-cyan-500/10", // Placeholder gradient
    },
    {
        title: "HealthStream Analytics",
        category: "Healthcare Automation",
        description: "Real-time patient data processing pipeline with anomaly detection.",
        tech: ["AWS", "TensorFlow", "React"],
        image: "bg-linear-to-br from-emerald-500/10 to-teal-500/10",
    },
    {
        title: "LegalMind Pro",
        category: "Legal Tech",
        description: "Automated contract review system reducing manual work by 80%.",
        tech: ["OpenAI API", "Node.js", "PostgreSQL"],
        image: "bg-linear-to-br from-purple-500/10 to-pink-500/10",
    },
];

export function FeaturedWork() {
    return (
        <section className="py-24 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading">
                            Featured Work
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            From MVP to Enterprise Scale. See how we deliver value.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/work">
                            View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="overflow-hidden group hover:border-primary/50 transition-colors h-full flex flex-col">
                                {/* Image Placeholder */}
                                <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors" />
                                    {/* Simple graphical element to simulate UI */}
                                    <div className="absolute bottom-4 left-4 right-4 h-24 bg-background/50 backdrop-blur-md rounded-t-xl border-t border-x border-white/10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500" />
                                </div>
                                <CardContent className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-6 flex-1">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-muted text-muted-foreground border">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
