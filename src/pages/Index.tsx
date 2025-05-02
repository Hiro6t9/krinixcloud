
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HostingPlans from "@/components/HostingPlans";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "KrinixCloud - High-Performance Minecraft Hosting";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'KrinixCloud provides high-performance and affordable Minecraft hosting plans with NVMe storage, DDoS protection, and instant setup.');
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-white overflow-x-hidden"
    >
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HostingPlans />
      <CallToAction />
      <Footer />
    </motion.div>
  );
};

export default Index;
