"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Vyplníte, s čím potřebujete pomoct",
    description: "Stačí nám jen rychle popsat, s čím potřebujete pomoci. Žádné složité formuláře.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
      </svg>
    )
  },
  {
    title: "My to obratem zpracujeme",
    description: "Náš tým vše zpracuje a najde pro vás vhodného pomocníka v okolí.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  },
  {
    title: "Do 24 h vás spojíme s někým šikovným z okolí",
    description: "Ověřený pomocník vás kontaktuje a domluví se s vámi na detailech.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 2v3"></path>
        <path d="M12 19v3"></path>
        <path d="M19 12h3"></path>
        <path d="M2 12h3"></path>
      </svg>
    )
  }
];

export function StepsSection() {
  return (
    <section className="bg-zvladnem-background py-20">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zvladnem-text mb-4">Jak to funguje</h2>
          <div className="w-20 h-1 bg-zvladnem-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-zvladnem-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="bg-zvladnem-lightBlue text-zvladnem-primary p-4 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zvladnem-text">{step.title}</h3>
              <p className="text-zvladnem-textLight">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}