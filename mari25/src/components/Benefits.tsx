import { Check, HeartCrack, HeartHandshake, Shield, Sunrise } from "lucide-react";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "./ui";

const CARDS = [
  {
    icon: Shield,
    title: "Para quem viveu uma relação que sufoca",
    text: "Quando o silêncio vira endereço e a própria voz parece perigo, este livro estende a mão — sem julgamento, com verdade.",
  },
  {
    icon: HeartCrack,
    title: "Para quem carrega cicatrizes invisíveis",
    text: "O abuso mental não deixa marcas na pele. Aqui, essa dor ganha nome, rosto e, principalmente, um caminho de saída.",
  },
  {
    icon: Sunrise,
    title: "Para quem quer recomeçar — aos 20, 45 ou 60",
    text: "Recomeço não tem idade; tem decisão. Maria recomeçou aos 45, com três filhos a bordo e um coração em obras.",
  },
  {
    icon: HeartHandshake,
    title: "Para quem ainda acredita no amor",
    text: "Mesmo ferido(a), é possível amar de novo — e melhor. Amor saudável não é acaso: é construção deliberada a dois.",
  },
];

const TAKEAWAYS = [
  "Coragem nomeada em 9 capítulos de história real",
  "As ferramentas do Cap. 8: o método PDA e a Mesa da Verdade",
  "A carta completa de Uanderson, do Cap. 7",
  "O mapa do “eu mereço mais” para a sua própria travessia",
];

export default function Benefits() {
  return (
    <section id="para-quem" className="relative scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Para quem é este livro"
          title={
            <>
              Escrito para quem tem <em className="font-light text-brick">muralhas</em> para derrubar
            </>
          }
          description="Dos 15 aos 60 anos: para quem já se sentiu preso(a), para quem protege os filhos com o próprio corpo e para quem, mesmo ferido, ainda acredita."
        />

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" gap={0.1}>
          {CARDS.map((c) => (
            <StaggerItem key={c.title}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white/55 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-brick/30 hover:shadow-[0_28px_55px_-28px_rgba(180,80,45,0.4)]">
                <div className="absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-gradient-to-tl from-brick/10 to-gold/15 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brick/20 bg-brick/8 text-brick transition-all duration-500 group-hover:scale-110 group-hover:bg-brick group-hover:text-paper">
                  <c.icon size={21} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-[19px] leading-snug font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-2">{c.text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} y={20}>
          <div className="mt-10 rounded-3xl border border-gold/25 bg-gradient-to-r from-gold/12 via-cream to-brick/8 p-8 sm:p-10">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <h3 className="max-w-xs font-display text-2xl leading-tight font-semibold text-ink">
                O que você leva <em className="font-light text-brick">deste livro</em>
              </h3>
              <ul className="grid flex-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {TAKEAWAYS.map((t) => (
                  <li key={t} className="group flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sage text-paper transition-transform duration-300 group-hover:scale-115">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-[14px] leading-snug font-medium text-ink-2">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
