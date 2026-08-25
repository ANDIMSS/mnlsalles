import { Heart, Sparkles, Sun, Compass, Shield, Key } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const BENEFITS = [
  {
    icon: Shield,
    title: "Reconhecimento de Abusos",
    description:
      "Aprenda a identificar dinâmicas de manipulação, controle emocional e isolamento que muitas vezes se vestem de afeto.",
  },
  {
    icon: Key,
    title: "A Chave da Autonomia",
    description:
      "Descubra caminhos práticos e emocionais para reconstruir sua independência financeira, pessoal e psicológica.",
  },
  {
    icon: Sun,
    title: "A Vida Após os 40",
    description:
      "A prova viva de que nunca é tarde para recomeçar, construir novos sonhos e priorizar sua própria felicidade.",
  },
  {
    icon: Heart,
    title: "Acura e Autoaceitação",
    description:
      "Processos de cura interior para transformar feridas do passado em marcas de resiliência e sabedoria.",
  },
  {
    icon: Compass,
    title: "Reconstrução Familiar",
    description:
      "Como proteger os filhos, manter a sanidade e criar um ambiente seguro e amoroso em meio à tempestade.",
  },
  {
    icon: Sparkles,
    title: "Encontrar Sua Própria Voz",
    description:
      "Sair do silêncio suffocante e voltar a expressar suas vontades, opiniões e identidade com coragem e orgulho.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative scroll-mt-28 bg-cream/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="O que você vai encontrar"
          title={
            <>
              Transformações que este livro <em className="font-light text-brick">proporciona</em>
            </>
          }
          subtitle="Mais do que um depoimento, uma ferramenta de libertação e consciência para a sua caminhada."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <div className="group relative h-full rounded-2xl border border-line bg-paper p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brick/30 hover:shadow-xl">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brick/10 text-brick transition-colors group-hover:bg-brick group-hover:text-paper">
                  <item.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
