import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessSection } from "@/components/sections/process-section";
import { FeaturedWork } from "@/components/sections/featured-work";
import { SaaSVision } from "@/components/sections/saas-vision";
import { CallToAction } from "@/components/sections/call-to-action";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <ProcessSection />
      <FeaturedWork />
      <SaaSVision />
      <CallToAction />
      <Footer />
    </main>
  );
}
