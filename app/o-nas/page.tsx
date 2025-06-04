import Link from "next/link";
import { Footer } from "@/components/zvladnem/footer";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-zvladnem-text mb-8">O nás</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl mb-6 text-zvladnem-textLight">
                Všichni známe ten pocit. Něco doma potřebujeme zařídit – opravit kohoutek, smontovat skříň, vyklidit sklep…<br />
                A v dnešní době najít někoho spolehlivého dokáže zabrat víc času než samotná práce.
              </p>
              
              <p className="text-xl mb-6 text-zvladnem-text font-medium">
                Zvládnem to vzniklo přesně kvůli tomu.<br />
                Vy nám řeknete, s čím potřebujete pomoct – my obvoláme ověřené lidi a domluvíme vám pomoc, co dává smysl.<br />
                Rychle. Jednoduše. Bez stresu.
              </p>
              
              <p className="text-xl mb-10 text-zvladnem-textLight">
                Spojujeme šikovné lidi s těmi, kteří si váží svého času.<br />
                Bez zbytečné administrativy, bez nejasností. Jen poctivá domluva mezi dvěma stranami.
              </p>
              
              <p className="text-xl mb-10 text-zvladnem-text font-medium">
                Fungujeme jednoduše a férově. A jsme rádi, že jste u toho s námi.
              </p>
              
              <div className="bg-zvladnem-lightBlue p-6 rounded-lg shadow-sm my-8">
                <p className="text-lg mb-0">
                  Pokud se s námi budete chtít spojit jsme pro vás dostupní na adrese <a href="mailto:info@zvladnemto.eu" className="text-zvladnem-primary font-medium hover:underline">info@zvladnemto.eu</a>
                </p>
              </div>
              
              <div className="mt-12 flex justify-center">
                <Link href="/">
                  <Button className="bg-zvladnem-primary hover:bg-zvladnem-primary/90 text-white px-6 py-3">
                    Zpět na hlavní stránku
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