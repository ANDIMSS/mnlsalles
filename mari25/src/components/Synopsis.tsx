import { Feather, HeartHandshake, Sprout } from "lucide-react";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "./ui";

const PILLARS = [
  {
    icon: Feather,
    title: "Um relato real",
    text: "Autobiográfico e sem retoques: o abuso mental que não deixa marcas na pele, mas corrói a alma — nomeado com verdade e cuidado.",
  },
  {
    icon: Sprout,
    title: "Uma reconstrução",
    text: "Não é apenas sobre dor. É sobre olhar para os escombros e decidir que um jardim pode nascer dali.",
  },
  {
    icon: HeartHandshake,
    title: "Um novo amor",
    text: "Prova de que o amor saudável não é acaso: é construção deliberada, feita de escolhas conscientes e respeito mútuo.",
  },
];

export default function Synopsis() {
  return (
    <section id="livro" className="relative scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Sobre o livro"
          title={
            <>
              Uma memória que virou <em className="font-light text-brick">farol</em>
            </>
          }
          description="Há histórias que não nascem para serem guardadas. Elas pedem voz, pedem espaço, pedem luz. Esta é uma dessas histórias."
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* texto editorial */}
          <Reveal className="order-2 lg:order-1">
            <div className="rounded-3xl border border-line bg-white/55 p-8 shadow-[0_20px_60px_-30px_rgba(29,25,21,0.25)] backdrop-blur-sm sm:p-10">
              <p className="drop-cap text-[15.5px] leading-[1.85] text-ink-2">
                Por vinte e cinco anos, vivi atrás de muralhas invisíveis. Não eram feitas de
                pedra, mas de silêncios, concessões e medos. Cada tijolo foi assentado com a
                renúncia da minha própria essência, até que um dia percebi que já não sabia quem
                eu era fora daquele papel que me aprisionava.
              </p>
              <p className="mt-5 text-[15.5px] leading-[1.85] text-ink-2">
                Este livro nasceu do estrondo da queda dessas paredes e do silêncio que se seguiu.
                Você vai caminhar comigo da anulação à descoberta, da solidão à esperança, do medo
                à confiança — até o dia em que um simples “Boa Noite” abriu uma porta para um novo
                mundo.
              </p>

              <blockquote className="relative mt-8 rounded-2xl bg-gradient-to-br from-brick/8 to-gold/10 p-6 pl-14">
                <span className="absolute top-4 left-5 font-display text-5xl leading-none text-brick/50" aria-hidden>
                  “
                </span>
                <p className="font-display text-lg leading-relaxed text-ink italic sm:text-xl">
                  Se você está aqui, talvez também tenha muralhas para derrubar. Que este livro
                  seja a prova de que, além delas, existe vida — e ela pode ser extraordinária.
                </p>
                <footer className="mt-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-brick-deep">
                  — Introdução do livro
                </footer>
              </blockquote>

              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ["Gênero", "Biografia & memórias"],
                  ["Público", "15 a 60 anos"],
                  ["Temas", "Recomeço, família, amor"],
                  ["Leitura", "Fluida · 1 fim de semana"],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-line bg-paper px-3.5 py-3">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-3">{t}</dt>
                    <dd className="mt-1 text-[12.5px] leading-snug font-semibold text-ink">{d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* pilares */}
          <Stagger className="order-1 flex flex-col gap-5 lg:order-2" gap={0.12}>
            {PILLARS.map((p) => (
              <StaggerItem key={p.title}>
                <article className="group relative overflow-hidden rounded-3xl border border-line bg-white/55 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-brick/30 hover:shadow-[0_24px_50px_-24px_rgba(180,80,45,0.35)] sm:p-8">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-gold/15 to-brick/10 blur-2xl transition-transform duration-700 group-hover:scale-150" aria-hidden />
                  <div className="flex items-start gap-5">
                    <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brick to-brick-deep text-paper shadow-lg shadow-brick/25 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <p.icon size={22} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{p.title}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2">{p.text}</p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
