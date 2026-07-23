import { Heart, ShieldCheck, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const CHIPS = [
  { icon: Users, label: "Mãe de três — porto seguro e estrutura" },
  { icon: ShieldCheck, label: "Voz contra o abuso emocional" },
  { icon: Heart, label: "Recomeçou aos 45 — e floresceu" },
];

export default function Author() {
  return (
    <section id="autora" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32">
      <div className="glow-brick pointer-events-none absolute top-10 left-[-8%] h-[420px] w-[420px] rounded-full opacity-70" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Sobre a autora"
          title={
            <>
              A mulher que emergiu <em className="font-light text-brick">dos escombros</em>
            </>
          }
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* retrato */}
          <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
            <div className="group relative">
              <div className="absolute -inset-3 rotate-2 rounded-[2rem] border border-gold/40 bg-gradient-to-br from-gold/15 to-transparent transition-transform duration-700 group-hover:rotate-3" aria-hidden />
              <div className="absolute -inset-3 -rotate-2 rounded-[2rem] border border-brick/25 transition-transform duration-700 group-hover:-rotate-3" aria-hidden />
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-ink/30">
                <img
                  src="https://images.pexels.com/photos/36625054/pexels-photo-36625054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="Retrato editorial de Maria Salles, autora do livro, sorrindo com serenidade junto a uma janela"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="font-display text-2xl font-semibold text-paper italic">Maria Salles</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.24em] text-gold-soft">
                    Escritora · 47 anos
                  </p>
                </div>
              </div>
              {/* selo */}
              <div className="animate-floaty absolute -right-5 -top-5 rounded-2xl border border-line bg-paper px-4 py-3 shadow-xl shadow-ink/15" aria-hidden>
                <p className="font-display text-xl leading-none font-semibold text-brick">25 → ∞</p>
                <p className="mt-1 text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink-3">
                  do peso ao recomeço
                </p>
              </div>
            </div>
          </Reveal>

          {/* bio */}
          <Reveal delay={0.12}>
            <p className="drop-cap text-[16px] leading-[1.9] text-ink-2">
              Maria Salles é uma mulher que transformou dor em força e silêncio em voz. Após viver
              25 anos num relacionamento marcado por abuso emocional, decidiu reconstruir a sua
              vida e partilhar a sua jornada para inspirar outras pessoas.
            </p>
            <p className="mt-5 text-[16px] leading-[1.9] text-ink-2">
              Mãe dedicada e profissional resiliente, escreveu este livro entre a mochila escolar
              da filha caçula e as madrugadas em que a esperança dizia “Boa Noite”. Maria acredita
              que contar a própria história é o primeiro tijolo do jardim de outra pessoa.
            </p>

            <blockquote className="relative mt-8 border-l-[3px] border-brick bg-gradient-to-r from-brick/8 to-transparent py-5 pr-6 pl-7">
              <p className="font-display text-xl leading-relaxed text-ink italic sm:text-2xl">
                “Acredito que a verdadeira liberdade começa quando escolhemos existir plenamente.”
              </p>
            </blockquote>

            <ul className="mt-8 flex flex-col gap-3.5">
              {CHIPS.map((c) => (
                <li key={c.label} className="group flex items-center gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-white/70 text-brick transition-all duration-300 group-hover:border-brick/40 group-hover:bg-brick group-hover:text-paper">
                    <c.icon size={17} strokeWidth={1.9} />
                  </span>
                  <span className="text-[14.5px] font-semibold text-ink-2">{c.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
