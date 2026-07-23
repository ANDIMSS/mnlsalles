import { Sprout } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./ui";

const STATS = [
  { value: "25", label: "anos de história transformados em páginas" },
  { value: "9", label: "capítulos — do silêncio ao recomeço" },
  { value: "3", label: "corações protegidos durante a travessia" },
  { value: "1", label: "“Boa Noite” que mudou tudo" },
];

const QUOTES = [
  "Parei de pedir licença para existir",
  "O amor real é calmo, respeitoso e livre",
  "Eu mereço mais",
  "Nunca é tarde para recomeçar",
  "A liberdade floresce",
  "Os escombros podem virar jardim",
];

export default function SocialProof() {
  return (
    <section aria-label="Prova social" className="relative">
      {/* estatísticas */}
      <div className="border-y border-line bg-cream/60">
        <Stagger className="mx-auto grid max-w-7xl grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="group px-6 py-9 text-center transition-colors duration-500 hover:bg-white/60">
              <p className="font-display text-4xl font-medium text-ink transition-transform duration-500 group-hover:-translate-y-1 sm:text-5xl">
                {s.value}
              </p>
              <p className="mx-auto mt-2 max-w-[200px] text-[12.5px] leading-snug font-medium text-ink-3">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* letreiro de frases */}
      <Reveal y={0}>
        <div className="marquee-paused relative overflow-hidden bg-night py-5">
          <div className="animate-marquee flex w-max items-center gap-10 pr-10">
            {[...QUOTES, ...QUOTES].map((q, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="font-display text-lg italic whitespace-nowrap text-paper/85 sm:text-xl">
                  “{q}.”
                </span>
                <Sprout size={16} className="shrink-0 text-gold" aria-hidden />
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-night to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-night to-transparent" />
        </div>
      </Reveal>
    </section>
  );
}
