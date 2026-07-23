import { BadgeCheck, Quote } from "lucide-react";
import { Reveal, SectionHeading, Stagger, StaggerItem, Stars } from "./ui";

const TESTIMONIALS = [
  {
    quote:
      "Devorei em dois dias. Me vi em cada tijolo dessa muralha — e chorei de alegria com o “Boa Noite”. Um livro que abraça e, ao mesmo tempo, empurra para frente.",
    name: "Ana Paula R.",
    meta: "52 anos · Professora",
    bg: "#8f3b1f",
  },
  {
    quote:
      "Comprei para a minha mãe e acabei lendo primeiro. A “Mesa da Verdade” do Capítulo 8 mudou o tom das conversas aqui em casa.",
    name: "Juliana M.",
    meta: "34 anos · Enfermeira",
    bg: "#5b7a68",
  },
  {
    quote:
      "Nunca tinha lido um relato tão honesto sobre abuso emocional. Não julga, não vitimiza: reconstrói. Li e reli o epílogo no mesmo dia.",
    name: "Carlos E.",
    meta: "47 anos · Engenheiro",
    bg: "#4a4238",
  },
  {
    quote:
      "Tenho 19 anos e li para entender o que a minha mãe viveu. Terminei com mais respeito por ela — e muito mais esperança por mim.",
    name: "Beatriz L.",
    meta: "19 anos · Estudante",
    bg: "#dfa14c",
  },
  {
    quote:
      "O capítulo da filha de seis anos me desmontou. É literatura que cura sem prometer milagre — mostra o preço e a beleza de recomeçar.",
    name: "Marcos V.",
    meta: "61 anos · Aposentado",
    bg: "#b4502d",
  },
  {
    quote:
      "Depois de um divórcio duro, achei que não saberia confiar de novo. Maria provou que recomeço é construção, não sorte. Saí do livro com um plano.",
    name: "Fernanda S.",
    meta: "41 anos · Arquiteta",
    bg: "#2f463a",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative scroll-mt-28 bg-cream/70 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Quem já leu"
          title={
            <>
              Histórias que essa história <em className="font-light text-brick">já atravessou</em>
            </>
          }
          description="Depoimentos dos primeiros leitores da pré-venda — dos 19 aos 61 anos, porque recomeço não tem idade."
        />

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-4 rounded-full border border-line bg-white/70 py-2.5 pr-6 pl-3 shadow-sm backdrop-blur">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brick to-brick-deep font-display text-lg font-bold text-paper">
              4,9
            </span>
            <span>
              <Stars size={14} />
              <span className="mt-0.5 flex items-center gap-1.5 text-[12px] font-semibold text-ink-2">
                <BadgeCheck size={13} className="text-sage" />
                Avaliação média · 2.400+ leitores da pré-venda
              </span>
            </span>
          </div>
        </Reveal>

        <Stagger className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3" gap={0.08}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name} className="mb-6 break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-3xl border border-line bg-white/70 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_26px_50px_-26px_rgba(143,59,31,0.35)]">
                <Quote size={26} className="text-brick/25 transition-colors duration-500 group-hover:text-brick/45" aria-hidden />
                <blockquote className="mt-4 text-[14.5px] leading-relaxed text-ink-2">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-[12px] font-bold text-paper shadow-md"
                    style={{ background: t.bg }}
                    aria-hidden
                  >
                    {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                  <span>
                    <span className="block text-[14px] font-bold text-ink">{t.name}</span>
                    <span className="mt-0.5 block text-[12px] font-medium text-ink-3">{t.meta}</span>
                  </span>
                  <Stars size={11} className="ml-auto" />
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
