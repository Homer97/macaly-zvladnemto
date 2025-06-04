import Link from "next/link";
import { Footer } from "@/components/zvladnem/footer";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-zvladnem-text mb-8">Podmínky použití</h1>
            
            <div className="prose prose-lg max-w-none">
              <ol className="list-decimal pl-6 space-y-6 text-lg text-zvladnem-textLight">
                <li>
                  Vyplněním formuláře nám umožňujete zpracovat vaši poptávku a spojit se s vámi.
                </li>
                <li>
                  V případě zájmu vám doporučíme specialistu, který zakázku provede. Smluvní vztah následně vzniká mezi vámi a tímto specialistou.
                </li>
                <li>
                  Neodpovídáme za kvalitu jeho práce, ale vybíráme ověřené lidi s dobrou reputací.
                </li>
                <li>
                  Poskytnutím zpětné vazby souhlasíte s tím, že ji můžeme využít k vylepšování služby nebo jako anonymní referenci.
                </li>
                <li>
                  Pokud jste nám v rámci poptávky svěřili e-mail, můžeme vás později kontaktovat s informací o spuštění online řešení, které nabídne stejnou službu pohodlněji. Pokud si to nebudete přát, napište nám a my vás vyřadíme z databáze.
                </li>
              </ol>
              
              <div className="flex justify-center mt-12 space-x-4">
                <Link href="/">
                  <Button className="bg-zvladnem-primary hover:bg-zvladnem-primary/90 text-white px-6 py-3">
                    Zpět na hlavní stránku
                  </Button>
                </Link>
                <Link href="/ochrana-udaju">
                  <Button variant="outline" className="border-zvladnem-primary text-zvladnem-primary hover:bg-zvladnem-primary/10 px-6 py-3">
                    Ochrana osobních údajů
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