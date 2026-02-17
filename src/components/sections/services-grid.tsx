"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Brain, Workflow, Rocket, MessageSquare, Database } from "lucide-react";

const services = [
    {
        title: "AI MVP Development",
        description: "Rapidly build and validate your AI product ideas with production-ready MVPs.",
        icon: Rocket,
    },
    {
        title: "LLM Integration",
        description: "Seamlessly integrate GPT-4, Claude, or open-source models into your workflow.",
        icon: Brain,
    },
    {
        title: "Workflow Automation",
        description: "Automate repetitive tasks and complex business processes with intelligent agents.",
        icon: Workflow,
    },
    {
        title: "Custom SaaS Development",
        description: "Scalable, secure, and modern SaaS architectures built for growth.",
        icon: Code,
    },
    {
        title: "AI Chatbot Systems",
        description: "Advanced conversational AI agents for customer support and internal tools.",
        icon: MessageSquare,
    },
    {
        title: "Backend Architecture",
        description: "Robust and scalable backend systems designed to handle high-load AI workloads.",
        icon: Database,
    },
];

export function ServicesGrid() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Built for founders. <br /> Designed for scale.
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We combine cutting-edge AI technology with robust software engineering to build products that matter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-muted bg-background/50 hover:bg-background hover:border-primary/50 transition-colors group">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="mb-2">{service.title}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
