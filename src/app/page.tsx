import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import Flow from "@/components/Flow";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BeforeAfter />
      <Services />
      <Tools />
      <Flow />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
