
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <span className="text-2xl font-lexend font-bold text-white">
              Krinix<span className="text-krinix-cyan">Cloud</span>
            </span>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-6 justify-center mb-6 md:mb-0"
          >
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Panel
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Discord
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm"
        >
          Copyright © 2025 KrinixCloud. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
