
import { motion } from "framer-motion";
import { Shield, Zap, Database, RotateCw } from "lucide-react";

const featureItems = [
  {
    icon: <Zap className="h-6 w-6 text-krinix-cyan" />,
    title: "NVMe Storage",
    description: "Lightning-fast storage for optimal server performance."
  },
  {
    icon: <Shield className="h-6 w-6 text-krinix-cyan" />,
    title: "DDoS Protection",
    description: "Advanced protection against DDoS attacks for uninterrupted gameplay."
  },
  {
    icon: <Database className="h-6 w-6 text-krinix-cyan" />,
    title: "Full SFTP Access",
    description: "Complete control over your server files and configurations."
  },
  {
    icon: <RotateCw className="h-6 w-6 text-krinix-cyan" />,
    title: "Instant Setup",
    description: "Get your server up and running in minutes, not hours."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-krinix-navy/20 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-lexend mb-6">
              <span className="bg-gradient-to-r from-krinix-blue to-krinix-purple bg-clip-text text-transparent">
                Minecraft Hosting Reimagined
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              We provide high-performance and affordable Minecraft hosting plans for everyone.
              From casual players to large communities, our infrastructure is designed to deliver 
              a smooth gaming experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card-gradient rounded-xl p-6 backdrop-blur-lg border border-white/5 hover:border-krinix-cyan/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-2 bg-krinix-navy/50 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
