"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Starter",
        price: "$5,000",
        description: "Perfect for validating an idea with a robust MVP.",
        features: ["Core MVP Development", "Basic AI Integration", "Responsive UI/UX Design", "1 Month of Support"],
    },
    {
        name: "Growth",
        price: "$12,000",
        description: "For startups ready to scale with custom AI workflows.",
        popular: true,
        features: ["Advanced AI Agents", "Custom LLM Fine-tuning", "Scalable Backend", "3 Months of Support", "Analytics Integration"],
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Full-scale SaaS platforms and complex AI infrastructure.",
        features: ["Dedicated Engineering Team", "Enterprise Security", "Custom SLA", "Priority Support", "On-premise Deployment Options"],
    },
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <section className="pt-32 pb-24 md:pt-48 md:pb-32">
                <div className="container mx-auto px-4 md:px-6 text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Transparent Pricing
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Choose the plan that fits your stage of growth. No hidden fees.
                    </p>
                </div>

                <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative rounded-2xl border p-8 bg-card flex flex-col ${plan.popular ? 'border-primary ring-2 ring-primary/20 shadow-lg shadow-primary/10' : 'border-border'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold font-heading">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mt-2">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-muted-foreground text-sm">/ starting at</span>}
                                </div>
                                <p className="text-muted-foreground mt-4 text-sm">{plan.description}</p>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className={`w-full ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`} variant={plan.popular ? 'default' : 'outline'} asChild>
                                <Link href="/contact">Get Started</Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
