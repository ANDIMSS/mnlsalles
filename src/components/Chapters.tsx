import { BookOpen, CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const CHAPTERS = [
  {
    num: "01",
    title: "O Silêncio como Refúgio",
    desc: "Os primeiros sinais imperceptíveis de controle e a construção gradual do silêncio no casamento.",
  },
  {
    num: "02",
    title: "A Ilusão do Castelo de Cartas",
    desc: "A rotina do medo velado e o peso acumulado de tentar manter uma aparência perfeita.",
  },
  {
    num: "03",
    title: "Vinte e Cinco Anos sob Sombra",
    desc: "As renúncias cotidianas e a dolorosa anulação da própria identidade.",
  },
  {
    num: "04",
    title: "O Estopim e a Tomada de Consciência",
    desc: "O momento decisivo em que a verdade se tornou inevitável e a escolha corajosa de colocar um ponto final.",
  },
  {
    num: "05",
    title: "Atravessando o Deserto",
    desc: "Os primeiros passos da partida, a reação do ambiente e os desafios da reconstrução pessoal.",
  },
  {
    num: "06",
    title: "A Redescoberta do Espelho",
    desc: "O reencontro com a própria essência e a cura das feridas mais profundas deixadas pelo tempo.",
  },
  {
    num: "07",
    title: "Um Simples 'Boa Noite'",
    desc: "Às 1h47 de uma madrugada de outubro, a mensagem inesperada que despertou um novo olhar.",
  },
  {
    num: "08",
    title: "O Amor e a Coragem de Recomeçar",
    desc: "A vertigem de viver um novo começo aos 45 anos e a permissão para amar novamente.",
  },
  {
    num: "09",
    title: "A Construção do Novo Jardim",
    desc: "A certeza de que a liberdade é um exercício diário e que nunca é tarde para escolher existir.",
  },
];

export default function Chapters() {
  return (
    <section id="capitulos" className="relative scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Estrutura da obra"
          title={
            <>
              Uma jornada em <em className="font-light text-brick">9 capítulos intensos</em>
            </>
          }
          subtitle="Acompanhe passo a passo a trajetória do aprisionamento à libertação."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CHAPTERS.map((chap, idx) => (
            <Reveal key={chap.num} delay={idx * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-cream/40 p-8 transition-all duration-300 hover:border-gold hover:bg-paper hover:shadow-xl">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-brick/40 group-hover:text-brick">
                      {chap.num}
                    </span>
                    <BookOpen size={20} className="text-ink-3 group-hover:text-gold" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">{chap.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-2">{chap.desc}</p>
                </div>

                <div className="mt-8 flex items-center gap-2 pt-4 border-t border-line/60 text-xs font-semibold text-sage-deep">
                  <CheckCircle2 size={15} className="text-sage" />
                  <span>Relato completo + reflexões</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
