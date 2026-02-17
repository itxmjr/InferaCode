"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CallToAction } from "@/components/sections/call-to-action";

export default function ProjectPage() {
    const params = useParams();
    const slug = params.slug as string;

    const projectTitle = slug ? slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) : "Project Detail";

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <section className="pt-32 pb-12 md:pt-48 md:pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <Link href="/work" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 max-w-4xl">
                        {projectTitle}
                    </h1>
                    <div className="flex flex-wrap gap-4 mb-12">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">AI SaaS</span>
                        <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">Next.js</span>
                        <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">Python</span>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-muted/20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="h-[400px] w-full bg-muted rounded-2xl mb-12 flex items-center justify-center text-muted-foreground">
                        Project Screenshot Placeholder
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold font-heading mb-4">The Challenge</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    The client needed a scalable solution to process millions of data points in real-time.
                                    Legacy systems were slow and prone to errors. We needed to re-architect the entire pipeline.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold font-heading mb-4">Our Solution</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We implemented a custom AI agent architecture using Python and OpenAI's API, wrapped in a
                                    robust Next.js frontend. The system now handles 50x the load with sub-second latency.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="bg-card border border-border rounded-xl p-6">
                                <h3 className="font-bold mb-4">Project Stats</h3>
                                <ul className="space-y-4">
                                    <div className="border-b border-border pb-4">
                                        <div className="text-sm text-muted-foreground">Timeline</div>
                                        <div className="font-medium">3 Months</div>
                                    </div>
                                    <div className="border-b border-border pb-4">
                                        <div className="text-sm text-muted-foreground">Role</div>
                                        <div className="font-medium">Full Stack Development</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">Outcome</div>
                                        <div className="font-medium text-primary">200% Efficiency Boost</div>
                                    </div>
                                </ul>
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
