import { HeroSection } from "@/components/zvladnem/hero-section";
import { StepsSection } from "@/components/zvladnem/steps-section";
import { ServicesSection } from "@/components/zvladnem/services-section";
import { TestimonialSection } from "@/components/zvladnem/testimonial-section";
import { FormSection } from "@/components/zvladnem/form-section";
import { Footer } from "@/components/zvladnem/footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StepsSection />
      <ServicesSection />
      <TestimonialSection />
      <FormSection />
      <Footer />
      <Toaster />
    </main>
  );
}