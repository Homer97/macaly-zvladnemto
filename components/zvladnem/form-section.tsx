"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

export function FormSection() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    description: "",
    timing: "",
    location: "",
    name: "",
    email: "",
    phone: "",
    consent: false
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(`Field ${name} changed to: ${value}`);
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    console.log(`Timing changed to: ${value}`);
    setFormState(prev => ({ ...prev, timing: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    console.log(`Consent changed to: ${checked}`);
    setFormState(prev => ({ ...prev, consent: checked }));
  };

  const actionUrl = "https://formspree.io/f/xvgajyrl";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formState);
    
    // Validace formuláře
    if (!formState.description || !formState.timing || !formState.location || 
        !formState.name || !formState.email || !formState.phone || !formState.consent) {
      toast({
        variant: "destructive",
        title: "Chybí povinné údaje",
        description: "Prosím vyplňte všechny povinné údaje ve formuláři."
      });
      return;
    }
    
    setLoading(true);
    
    // Simulace odeslání formuláře
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Formulář byl odeslán",
        description: "Děkujeme! Ozveme se vám do 24 hodin."
      });
      
      // Reset formuláře
      setFormState({
        description: "",
        timing: "",
        location: "",
        name: "",
        email: "",
        phone: "",
        consent: false
      });

    } else {
      // Try to pull error message from Formspree
      const errorData = await res.json();
      toast({
        variant: "destructive",
        title: "Chyba při odeslání",
        description: errorData.error || "Něco se pokazilo, zkuste to prosím znovu."
      });
    }
  } catch (err) {
    console.error("Form submission failed:", err);
    setLoading(false);
    toast({
      variant: "destructive",
      title: "Chyba sítě",
      description: "Nepodařilo se odeslat formulář. Zkontrolujte připojení a zkuste to znovu."
    });
  }
  };

  return (
    <section id="form-section" className="py-20 bg-zvladnem-white">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zvladnem-text mb-3">Napište, co potřebujete – zvládnem to společně.</h2>
          <p className="text-xl text-zvladnem-textLight max-w-2xl mx-auto">Zabere to minutu. Do pár hodin se ozveme a společně to vyřešíme.</p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-zvladnem-background p-6 md:p-10 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <form
            action="https://formspree.io/f/xvgajyrl"
            method="POST"
            onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Co potřebujete */}
              <div>
                <Label htmlFor="description" className="text-base font-medium block mb-2">Co potřebujete? <span className="text-zvladnem-accent">*</span></Label>
                <Textarea 
                  id="description"
                  name="description"
                  value={formState.description}
                  onChange={handleChange}
                  placeholder="Např. smontovat skříň, opravit kapající kohoutek, vystěhovat sedačku..."
                  className="min-h-32 bg-zvladnem-white"
                />
              </div>
              
              {/* Kdy byste chtěli práci provést */}
              <div>
                <Label className="text-base font-medium block mb-2">Kdy byste chtěli práci provést? <span className="text-zvladnem-accent">*</span></Label>
                <RadioGroup value={formState.timing} onValueChange={handleRadioChange} className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Co nejdříve" id="Co nejdříve" />
                    <Label htmlFor="Co nejdříve" className="cursor-pointer">Co nejdříve</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="zitra" id="zitra" />
                    <Label htmlFor="zitra" className="cursor-pointer">Zítra</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tento-tyden" id="tento-tyden" />
                    <Label htmlFor="tento-tyden" className="cursor-pointer">Tento týden</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pozdeji" id="pozdeji" />
                    <Label htmlFor="pozdeji" className="cursor-pointer">Později (doplním v poznámce)</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Kde potřebujete pomoct */}
              <div>
                <Label htmlFor="location" className="text-base font-medium block mb-2">Kde potřebujete pomoct? <span className="text-zvladnem-accent">*</span></Label>
                <Input 
                  id="location"
                  name="location"
                  value={formState.location}
                  onChange={handleChange}
                  placeholder="Např. Karlovy Vary - Anglická 5"
                  className="bg-zvladnem-white"
                />
              </div>
              
              {/* Kontaktní údaje */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="name" className="text-base font-medium block mb-2">Jméno <span className="text-zvladnem-accent">*</span></Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="bg-zvladnem-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base font-medium block mb-2">E-mail <span className="text-zvladnem-accent">*</span></Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-zvladnem-white"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base font-medium block mb-2">Telefon <span className="text-zvladnem-accent">*</span></Label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    className="bg-zvladnem-white"
                  />
                </div>
              </div>
              
              {/* Souhlas */}
              <div className="flex items-start space-x-3 mt-4">
                <Checkbox 
                  id="consent" 
                  checked={formState.consent}
                  onCheckedChange={handleCheckboxChange}
                  className="mt-1"
                />
                <Label htmlFor="consent" className="cursor-pointer text-sm leading-tight">
                  Souhlasím se zpracováním osobních údajů za účelem zajištění služby. <span className="text-zvladnem-accent">*</span>
                </Label>
              </div>
              
              {/* Submit button */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-zvladnem-primary hover:bg-zvladnem-primary/90 text-white py-6 text-lg font-medium"
                  disabled={loading}
                >
                  {loading ? "Odesílání..." : "Vyřešit"}
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
