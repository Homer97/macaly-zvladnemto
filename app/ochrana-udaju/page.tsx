import Link from "next/link";
import { Footer } from "@/components/zvladnem/footer";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-zvladnem-primary py-4">
        <div className="container px-4 mx-auto">
          <Link href="/" className="text-white text-xl font-bold hover:underline">ZvládnemTo</Link>
        </div>
      </div>
      
      <section className="py-16 bg-zvladnem-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-zvladnem-text mb-8">Ochrana osobních údajů</h1>
            
            <div className="prose prose-lg max-w-none text-zvladnem-textLight">
              <p className="text-lg mb-6">
                Vaše osobní údaje používáme výhradně za účelem zpracování vaší poptávky a propojení se specialistou.<br />
                Zpracováváme pouze nezbytné minimum dat (jméno, kontakt, popis poptávky).
              </p>
              
              <p className="text-lg mb-6">
                Vaše údaje nepředáváme žádným třetím stranám.<br />
                Nezbytné informace sdílíme pouze s pověřeným specialistou, aby vás mohl kontaktovat a pomoci vyřešit vaši poptávku.<br />
                Odesláním formuláře s tímto postupem souhlasíte.
              </p>
              
              <p className="text-lg mb-6">
                Údaje uchováváme maximálně 6 měsíců, nebo kratší dobu, pokud nás požádáte o výmaz.
              </p>
              
              <p className="text-lg mb-8">
                Pokud nám v rámci formuláře svěříte svou e-mailovou adresu, můžeme vás v budoucnu kontaktovat také s informací o spuštění nové online služby, která celý proces výrazně zjednoduší.<br />
                Pokud si to nebudete přát, stačí kdykoliv napsat na <a href="mailto:info@zvladnemto.eu" className="text-zvladnem-primary hover:underline">info@zvladnemto.eu</a> a vaše údaje upravíme nebo smažeme.
              </p>
              
              <div className="bg-zvladnem-lightBlue p-6 rounded-lg shadow-sm my-8 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-zvladnem-primary mr-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <p className="text-xl font-medium mb-0 text-zvladnem-text">🔒 Vaše důvěra je pro nás důležitá.</p>
              </div>
              
              <div className="flex justify-center mt-12 space-x-4">
                <Link href="/">
                  <Button className="bg-zvladnem-primary hover:bg-zvladnem-primary/90 text-white px-6 py-3">
                    Zpět na hlavní stránku
                  </Button>
                </Link>
                <Link href="/podminky">
                  <Button variant="outline" className="border-zvladnem-primary text-zvladnem-primary hover:bg-zvladnem-primary/10 px-6 py-3">
                    Podmínky použití
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}