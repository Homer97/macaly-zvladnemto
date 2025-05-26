"use client";

import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section className="py-20 bg-zvladnem-background">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zvladnem-text mb-4">Zkušenost našich zákazníků</h2>
          <div className="w-20 h-1 bg-zvladnem-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-zvladnem-white p-8 md:p-10 rounded-lg shadow-lg relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="absolute -top-5 left-10 text-5xl text-zvladnem-primary">❝</div>
          
          <div className="text-xl text-zvladnem-text leading-relaxed italic mb-6 pt-4">
            Nevěděla jsem si rady s ucpaným odpadem. Řekla jsem si, že tomu dám šanci. Hned další den odpoledne přišel pán od ZvládnemTo a do půl hodiny jsem měla odpad vyčištěný. A ještě mi srovnal dvířka u kuchyňské linky. Bylo to milé překvapení, určitě zkusím znova. :)
          </div>
          
          <div className="flex items-center">
            <div className="w-12 h-12 bg-zvladnem-lightBlue rounded-full flex items-center justify-center text-zvladnem-primary font-bold text-xl">KN</div>
            <div className="ml-4">
              <div className="font-medium text-zvladnem-text">Karolína N.</div>
              <div className="text-sm text-zvladnem-textLight">Praha</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}