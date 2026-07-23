import { ArrowRight, ShieldCheck } from "lucide-react";
import { CoverFace } from "./Book3D";
import { Reveal } from "./ui";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-night py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="glow-warm animate-drift absolute top-[-20%] left-[20%] h-[540px] w-[540px] rounded-full" />
        <div className="glow-brick animate-drift-2 absolute right-[10%] bottom-[-25%] h-[520px] w-[520px] rounded-full" />
        {/* linhas de grade suaves */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,247,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,247,240,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_auto]">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-soft">
              Epílogo — Capítulo 09
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-[1.06] font-medium tracking-tight text-balance text-paper sm:text-6xl">
              Nunca é tarde para{" "}
              <em className="bg-gradient-to-r from-gold via-flame to-gold bg-clip-text font-light text-transparent">
                escolher existir.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-[15.5px] leading-relaxed text-paper/65 lg:mx-0">
              O recomeço de Maria começou com um simples “Boa Noite” numa manhã qualquer. O seu
              pode começar agora — com a coragem de dizer: <em className="font-display text-paper">“Eu mereço mais.”</em>
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center">
              <a
                href="#edicoes"
                className="btn-shine focus-ring group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-gold to-flame px-9 py-4.5 text-[15.5px] font-bold text-night shadow-2xl shadow-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold/50 sm:w-auto"
              >
                Começar o meu recomeço
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <span className="inline-flex items-center gap-2 text-[12.5px] font-medium text-paper/55">
                <ShieldCheck size={15} className="text-sage" />
                Garantia incondicional de 7 dias
              </span>
            </div>
          </Reveal>
        </div>

        {/* mini livro inclinado */}
        <Reveal delay={0.2} className="mx-auto lg:mx-0">
          <div className="animate-floaty-slow relative h-[300px] w-[200px] rotate-6 transition-transform duration-700 hover:rotate-3">
            <div className="absolute inset-0 translate-x-2.5 translate-y-3 rounded-lg bg-white/10 blur-[1px]" aria-hidden />
            <div className="relative h-full w-full overflow-hidden rounded-md rounded-l-[3px] shadow-[0_30px_60px_-18px_rgba(0,0,0,0.7)] ring-1 ring-white/15">
              <CoverFace />
            </div>
            <div className="pages-edge absolute top-[3px] -right-[5px] bottom-[3px] w-[8px] rounded-r-sm" aria-hidden />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
