import { AnimatePresence, motion } from "framer-motion";
import { MessageCircleHeart, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading } from "./ui";

const FAQS = [
  {
    q: "“Além das Muralhas” é uma história real?",
    a: "Sim. É um relato autobiográfico de Maria Salles, com datas e fatos reais — da mensagem de “Boa Noite” em 25 de outubro de 2025 ao primeiro encontro em 8 de novembro do mesmo ano. Nomes e detalhes foram preservados com carinho e responsabilidade.",
  },
  {
    q: "O livro aborda temas sensíveis?",
    a: "Sim: abuso emocional, separação e luto pela vida anterior — sempre com cuidado, sem cenas gratuitas e com foco na reconstrução. A leitura é indicada a partir dos 15 anos. Se o tema for um gatilho para você, leia no seu ritmo e lembre-se: apoio existe. Ligue 180 (Central de Atendimento à Mulher) ou 188 (CVV).",
  },
  {
    q: "Para quem o livro é indicado?",
    a: "Para leitores e leitoras dos 15 aos 60 anos: quem já se sentiu preso(a) numa relação, quem protege filhos durante uma transição, quem carrega cicatrizes invisíveis — e quem quer entender, de dentro, o que é um amor calmo, respeitoso e livre.",
  },
  {
    q: "Como e quando recebo o meu exemplar?",
    a: "O e-book chega por e-mail imediatamente após a confirmação do pagamento. O livro físico é postado em até 2 dias úteis, com código de rastreio, e o prazo médio de entrega é de 5 a 12 dias corridos, conforme a região. A Edição Jornada Completa tem frete grátis.",
  },
  {
    q: "Posso presentear alguém especial?",
    a: "Deve. A Edição Jornada Completa foi feita para isso: caixa-presente com a arte da capa, carta “Boa Noite” em fac-símile e guia de reflexão de 21 dias. No checkout, você pode indicar o endereço da pessoa presenteada e incluir uma dedicatória.",
  },
  {
    q: "E se o livro não tocar o meu coração?",
    a: "Devolvemos o seu investimento. Você tem 7 dias de garantia incondicional: basta escrever para o nosso suporte e o valor é reembolsado integralmente, sem perguntas difíceis. Arriscamos por você — como Maria arriscou ao dizer “eu mereço mais”.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-28 bg-cream/70 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Dúvidas frequentes"
              title={
                <>
                  Antes de virar <em className="font-light text-brick">a primeira página</em>
                </>
              }
              description="Tudo o que você precisa saber sobre o livro, as edições e a entrega — respondido com a mesma honestidade da história."
            />
            <Reveal delay={0.2}>
              <div className="mt-9 flex items-center gap-4 rounded-2xl border border-line bg-white/70 p-5 backdrop-blur-sm">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sage to-sage-deep text-paper shadow-lg shadow-sage/25">
                  <MessageCircleHeart size={21} />
                </span>
                <p className="text-[13.5px] leading-relaxed text-ink-2">
                  <strong className="font-semibold text-ink">Ainda ficou alguma dúvida?</strong>
                  <br />
                  Escreva para{" "}
                  <a href="mailto:contato@mariasalles.com.br" className="focus-ring font-semibold text-brick-deep underline-offset-2 hover:underline">
                    contato@mariasalles.com.br
                  </a>{" "}
                  — respondemos em até 1 dia útil.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-3.5">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={f.q}
                    className={cn(
                      "overflow-hidden rounded-2xl border backdrop-blur-sm transition-colors duration-400",
                      isOpen ? "border-brick/30 bg-white/85 shadow-[0_18px_44px_-24px_rgba(143,59,31,0.4)]" : "border-line bg-white/55 hover:border-brick/25"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className={cn("font-display text-[16.5px] font-semibold transition-colors", isOpen ? "text-brick-deep" : "text-ink")}>
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-400",
                          isOpen ? "rotate-45 bg-brick text-paper" : "border border-ink/15 text-ink-2"
                        )}
                      >
                        <Plus size={15} strokeWidth={2.5} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-[14px] leading-relaxed text-ink-2">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
