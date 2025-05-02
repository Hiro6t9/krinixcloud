
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "16GB RAM",
    price: "₹800",
    popular: true,
    features: [
      "NVMe SSD Storage",
      "Unlimited Player Slots",
      "Full Panel Access",
      "Discord Support",
      "99.9% Uptime Guarantee",
    ],
    color: "from-krinix-blue to-krinix-purple",
  },
  {
    name: "24GB RAM",
    price: "₹1200",
    popular: false,
    features: [
      "NVMe SSD Storage",
      "Unlimited Player Slots",
      "Full Panel Access",
      "Discord Support",
      "99.9% Uptime Guarantee",
    ],
    color: "from-krinix-purple to-krinix-cyan",
  },
  {
    name: "32GB RAM",
    price: "₹1600",
    popular: false,
    features: [
      "NVMe SSD Storage",
      "Unlimited Player Slots",
      "Full Panel Access",
      "Discord Support",
      "99.9% Uptime Guarantee",
    ],
    color: "from-krinix-cyan to-krinix-blue",
  },
];

const HostingPlans = () => {
  return (
    <section id="hosting-plans" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-krinix-navy/20 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-lexend mb-6">
            <span className="bg-gradient-to-r from-krinix-purple to-krinix-cyan bg-clip-text text-transparent">
              Choose Your Hosting Plan
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Select the perfect plan tailored to your server needs. All plans include our premium features 
            and 24/7 monitoring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative rounded-2xl bg-card-gradient backdrop-blur-sm border border-white/10 p-8 flex flex-col ${
                plan.popular ? "animate-pulse-glow" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-4">
                  <div className="bg-gradient-to-r from-krinix-blue to-krinix-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-krinix-cyan mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button
                className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`}
              >
                Select Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;
