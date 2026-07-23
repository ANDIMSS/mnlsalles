import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Calendar, Quote } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading } from "./ui";

const CHAPTERS = [
  {
    n: "01",
    title: "Entre Tijolos e Silêncios",
    tag: "O silêncio",
    excerpt:
      "Aos 45 anos, ao olhar-me no espelho, eu não via apenas o meu reflexo; eu via uma fortificação. O silêncio era a substância mais densa dessa construção. Não era um silêncio de paz, mas um silêncio de vigilância.",
  },
  {
    n: "02",
    title: "Ruínas e Raízes",
    tag: "A vertigem",
    excerpt:
      "Quando a separação finalmente aconteceu, o estrondo da queda foi ensurdecedor para o meu espírito, mas mudo para o mundo. De repente, vi-me de pé no meio das ruínas com três corações para proteger.",
  },
  {
    n: "03",
    title: "Quando a Esperança Disse Boa Noite",
    tag: "25 out 2025",
    excerpt:
      "Na noite de 24 de outubro, deixei um “curtir” na foto de um estranho e fui dormir sem expectativas. A surpresa chegou com o café da manhã: uma mensagem enviada nas horas mortas da madrugada, dizendo simplesmente “Boa Noite”.",
  },
  {
    n: "04",
    title: "O Dia em que o Destino Sorriu",
    tag: "08 nov 2025",
    excerpt:
      "Era o aniversário de 37 anos do Uanderson — e o nosso primeiro encontro. Não houve o silêncio constrangedor que eu tanto temia. A confirmação foi silenciosa e absoluta: a base que havíamos construído era real.",
  },
  {
    n: "05",
    title: "Fios de Confiança, Laços de Amor",
    tag: "A confirmação",
    excerpt:
      "Eu, que havia passado anos com a guarda levantada, comecei a abaixá-la conscientemente, fio a fio. Até que minha filha de seis anos, com os olhos cheios de lágrimas, disse: “Mamãe, estou chorando de alegria porque eu gosto de ver você feliz.”",
  },
  {
    n: "06",
    title: "Pontes Sobre o Medo",
    tag: "As pontes",
    excerpt:
      "Apresentar o Uanderson aos meus filhos foi o meu maior teste de vulnerabilidade. A aceitação das meninas foi o selo de que a muralha estava dando lugar a uma ponte — forte o suficiente para suportar as tempestades da mudança.",
  },
  {
    n: "07",
    title: "A Voz do Outro Lado da Muralha",
    tag: "A carta",
    excerpt:
      "“Para o mundo, Maria Salles é força e superação. Para mim, ela é a personificação da descoberta. Meu amor, meu eterno flerte, minha confidente e minha maior alegria — você é o meu lar.” — Uanderson",
  },
  {
    n: "08",
    title: "O Código do Recomeço",
    tag: "O método",
    excerpt:
      "Com a Maria, aprendi que o amor é uma escolha deliberada. Perceber o agora. Decidir pelo legado. Agir sem desculpas. Os problemas dos adultos morrem no casal — os filhos têm o direito de serem apenas crianças.",
  },
  {
    n: "09",
    title: "Epílogo — Além das Muralhas",
    tag: "O farol",
    excerpt:
      "Cada tijolo que caiu abriu espaço para a possibilidade de existir plenamente. O meu recomeço começou com um simples “Boa Noite”. O seu pode começar com a coragem de dizer: “Eu mereço mais.”",
  },
];

export default function Chapters() {
  const [active, setActive] = useState(2);

  return (
    <section id="capitulos" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32">
      <div className="glow-sage pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] rounded-full opacity-60" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Dentro do livro"
          title={
            <>
              Nove capítulos, <em className="font-light text-brick">uma travessia</em>
            </>
          }
          description="Do primeiro tijolo ao jardim que floresce do outro lado. Passeie pelos capítulos e leia um trecho de cada um."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* lista de capítulos */}
          <Reveal>
            <ol className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white/55 shadow-[0_20px_60px_-35px_rgba(29,25,21,0.3)] backdrop-blur-sm">
              {CHAPTERS.map((c, i) => {
                const isActive = active === i;
                return (
                  <li key={c.n}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      className={cn(
                        "focus-ring group flex w-full items-center gap-4 px-5 py-4.5 text-left transition-colors duration-300 sm:gap-6 sm:px-7",
                        isActive ? "bg-gradient-to-r from-brick/8 to-gold/8" : "hover:bg-cream/70"
                      )}
                    >
                      <span
                        className={cn(
                          "font-display text-2xl font-medium transition-colors duration-300 sm:text-3xl",
                          isActive ? "text-brick" : "text-ink/25 group-hover:text-brick/60"
                        )}
                      >
                        {c.n}
                      </span>
                      <span className="flex-1">
                        <span
                          className={cn(
                            "block font-display text-[16.5px] leading-tight font-semibold transition-colors sm:text-lg",
                            isActive ? "text-ink" : "text-ink-2 group-hover:text-ink"
                          )}
                        >
                          {c.title}
                        </span>
                        <span className="mt-1 inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-3">
                          {c.tag.match(/^\d/) && <Calendar size={10} />}
                          {c.tag}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={18}
                        className={cn(
                          "shrink-0 transition-all duration-300",
                          isActive ? "rotate-45 text-brick" : "text-ink/25 group-hover:text-brick"
                        )}
                      />
                    </button>

                    {/* expansão inline no mobile */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden lg:hidden"
                        >
                          <p className="border-l-2 border-brick/50 px-7 pt-1 pb-6 pl-8 font-display text-[15px] leading-relaxed text-ink-2 italic">
                            {c.excerpt}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* painel de leitura (desktop) */}
          <Reveal delay={0.12} className="hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-line bg-night p-9 shadow-2xl shadow-night/30">
              <div className="glow-warm pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" aria-hidden />
              <Quote size={34} className="text-gold/70" aria-hidden />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.26em] text-gold-soft">
                    Capítulo {CHAPTERS[active].n} · {CHAPTERS[active].tag}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight font-medium text-paper">
                    {CHAPTERS[active].title}
                  </h3>
                  <p className="mt-6 font-display text-[17px] leading-[1.8] text-paper/75 italic">
                    {CHAPTERS[active].excerpt}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <p className="text-[12px] font-medium text-paper/50">
                  {active + 1} de {CHAPTERS.length} capítulos
                </p>
                <a
                  href="#edicoes"
                  className="focus-ring group inline-flex items-center gap-2 text-[13px] font-semibold text-gold transition-colors hover:text-gold-soft"
                >
                  Ler o livro completo
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
