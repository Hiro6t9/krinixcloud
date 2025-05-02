
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-hero-pattern bg-flow animate-flow z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex items-center"
          >
            <Cloud className="h-10 w-10 text-krinix-cyan mr-2" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-lexend mb-6 glow-text"
          >
            <span className="bg-gradient-to-r from-krinix-blue to-krinix-cyan bg-clip-text text-transparent">
              KrinixCloud
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10"
          >
            High-Performance Minecraft Hosting for Everyone
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              className="bg-krinix-blue hover:bg-krinix-darkblue text-white px-8 py-6 rounded-lg text-lg"
            >
              Join Discord
            </Button>
            <Button 
              variant="outline" 
              className="border-krinix-cyan text-krinix-cyan hover:bg-krinix-cyan/10 px-8 py-6 rounded-lg text-lg"
            >
              View Plans
            </Button>
          </motion.div>
          
          {/* Floating elements */}
          <motion.div
            animate={{ 
              y: [0, -15, 0], 
              rotate: [0, 5, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute right-[15%] top-1/4 w-24 h-24 rounded-full bg-krinix-blue/20 blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 15, 0], 
              rotate: [0, -5, 0],
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute left-[20%] top-1/3 w-32 h-32 rounded-full bg-krinix-purple/20 blur-xl"
          />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
