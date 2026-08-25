import { Quote } from "lucide-react";
import { Reveal } from "./ui";

export default function Letter() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-sand/30">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="relative rounded-3xl border border-line bg-paper p-8 sm:p-12 md:p-16 shadow-xl">
            <Quote size={48} className="text-gold/40 mb-6" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-6">
              Uma carta aberta de Maria Salles para você
            </h2>
            <div className="space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-ink-2 font-serif italic">
              <p>
                "Durante vinte e cinco anos, eu acreditei que o meu valor era medido pela minha capacidade de suportar o silêncio. Acreditava que ser forte significava aguentar tudo sem reclamar."
              </p>
              <p>
                "Até o dia em que olhei no espelho e não reconheci a mulher que ali estava. Foi quando percebi: a porta do castelo não estava trancada por fora. Eu tinha a chave nas minhas próprias mãos, mesmo tremendo de medo."
              </p>
              <p>
                "Se você está lendo estas palavras hoje, quero que saiba de algo fundamental: nunca é tarde para escolher existir. O seu recomeço não começa quando a dor acaba, mas quando você decide que é hora de viver."
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-line/60 flex items-center justify-between">
              <div>
                <p className="font-display font-bold text-lg text-brick">Maria Salles</p>
                <p className="text-xs text-ink-3">Autora de Além das Muralhas</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
