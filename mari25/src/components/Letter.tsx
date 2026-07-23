import { Heart, Mail, Sparkles } from "lucide-react";
import { Reveal } from "./ui";

export default function Letter() {
  return (
    <section className="relative overflow-hidden bg-night py-24 sm:py-32">
      {/* ambiente */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="glow-warm animate-drift absolute top-[-15%] left-[12%] h-[480px] w-[480px] rounded-full" />
        <div className="glow-brick animate-drift-2 absolute bottom-[-20%] right-[5%] h-[520px] w-[520px] rounded-full" />
        {[
          { top: "18%", left: "8%", d: "0s" },
          { top: "30%", right: "10%", d: "1.2s" },
          { bottom: "22%", left: "16%", d: "0.6s" },
          { bottom: "30%", right: "20%", d: "1.8s" },
        ].map((p, i) => (
          <Sparkles
            key={i}
            size={15}
            className="animate-pulse-soft absolute text-gold/50"
            style={{ ...p, animationDelay: p.d }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-soft">
            <Mail size={12} />
            Capítulo 07 · A voz do outro lado da muralha
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance text-paper sm:text-5xl">
            Uma carta <em className="font-light text-gold">atravessou</em> a muralha
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-paper/60">
            Depois de nove meses ao lado de Maria, Uanderson escreveu o que sente — e o livro
            guardou as palavras dele na íntegra.
          </p>
        </Reveal>

        <Reveal delay={0.15} y={36}>
          <figure className="group relative mt-14 rotate-[-0.6deg] transition-transform duration-700 hover:rotate-0">
            {/* sombra de papel */}
            <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-2xl bg-night-2 ring-1 ring-white/5" aria-hidden />
            <div className="relative rounded-2xl bg-gradient-to-b from-paper to-cream p-8 shadow-2xl shadow-black/50 sm:p-12">
              {/* selo */}
              <div className="absolute -top-5 right-8 grid h-14 w-14 rotate-6 place-items-center rounded-full bg-gradient-to-br from-brick to-brick-deep shadow-lg shadow-brick/40 ring-4 ring-night transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" aria-hidden>
                <Heart size={20} className="fill-paper text-paper" />
              </div>

              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brick-deep">
                Carta para Maria Salles, meu amor
              </p>

              <blockquote className="mt-6 space-y-5 font-display text-[16.5px] leading-[1.85] text-ink-2 italic sm:text-[17.5px]">
                <p>Minha Maria, melhor escolha de todos os dias,</p>
                <p>
                  Lembro-me do dia em que o seu sorriso me encontrou naquele aplicativo. Não tinha
                  a pretensão de encontrar o meu mundo, mas os seus lábios me mostraram o caminho.
                  Foi o começo de tudo.
                </p>
                <p>
                  Você é, para mim, a definição da graça. A forma como você lida com a vida me
                  ensina a respirar mais fundo. Essa leveza é o que eu mais admiro em você.
                </p>
                <p>
                  Meu amor, meu eterno flerte, minha confidente e minha maior alegria — você é o
                  meu lar. Obrigado por ser a escolha certa.
                </p>
              </blockquote>

              <figcaption className="mt-8 flex items-end justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-3">
                    Com todo o amor,
                  </p>
                  <p className="mt-1 font-display text-3xl font-semibold text-brick-deep italic">
                    Uanderson
                  </p>
                </div>
                <p className="text-right text-[11px] font-medium text-ink-3">
                  Além das Muralhas
                  <br />
                  Capítulo 07
                </p>
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
