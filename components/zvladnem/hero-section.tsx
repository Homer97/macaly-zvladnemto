"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToForm = () => {
    const form = document.getElementById("form-section");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-zvladnem-white w-full overflow-hidden min-h-[90vh] flex items-center justify-center py-20 md:py-28">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-zvladnem-lightBlue/30 to-zvladnem-white"></div>
      
      <div className="container px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zvladnem-text font-inter mb-6">
            <span className="relative inline-block">
              Pomoc doma?
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-zvladnem-primary rounded-full transform translate-y-2"></span>
            </span>
            {" "}
            <span className="text-zvladnem-primary">Zvládnem to.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zvladnem-textLight mb-8 max-w-3xl mx-auto">
            Potřebujete s něčím pomoct? Stačí říct a my k Vám pošleme někoho šikovného.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Button 
              onClick={scrollToForm}
              className="bg-zvladnem-primary hover:bg-zvladnem-primary/90 text-white text-lg py-6 px-10 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Pojďme na to
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
