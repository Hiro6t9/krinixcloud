
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-background/60 to-krinix-navy/50 backdrop-blur-lg rounded-2xl p-10 border border-white/10"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-lexend mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Start Hosting Today
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Join thousands of satisfied users and experience the power of KrinixCloud hosting.
              Get started in minutes with our simple setup process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-krinix-blue to-krinix-purple hover:from-krinix-purple hover:to-krinix-blue text-white px-8 py-6 h-auto text-lg font-medium rounded-lg"
              >
                Purchase Now
              </Button>
              <Button 
                variant="outline"
                className="border-krinix-cyan text-white hover:bg-krinix-cyan/10 px-8 py-6 h-auto text-lg font-medium rounded-lg"
              >
                View Full Dashboard
              </Button>
              <Button 
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-white/5 px-8 py-6 h-auto text-lg font-medium rounded-lg"
              >
                Panel Access
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
