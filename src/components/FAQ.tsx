import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./ui";
import { initScrollReveals } from "../lib/scrollRevealGSAP";

const FAQS = [
  {
    q: "O livro está disponível em quais formatos?",
    a: "O livro está disponível tanto em versão física (impresso com capa com orelhas e papel amarelado de alta qualidade) quanto em versão digital (e-book PDF/ePub instantâneo).",
  },
  {
    q: "Qual o prazo de entrega da versão física?",
    a: "O prazo médio de entrega para o Brasil é de 5 a 10 dias úteis, dependendo da sua região. Você receberá o código de rastreamento por e-mail logo após o envio.",
  },
  {
    q: "Como recebo o e-book?",
    a: "Assim que o pagamento for confirmado, você receberá um e-mail com o link direto para download do e-book para ler no seu celular, tablet, Kindle ou computador.",
  },
  {
    q: "Este livro é indicado para quem passa por relacionamentos difíceis?",
    a: "Sim. Embora seja um relato pessoal, a obra traz lições profundas de coragem, identificação de sinais de abuso e reconstrução pessoal que ajudam a clarear caminhos de quem busca liberdade e apoio.",
  },
  {
    q: "Quais são as formas de pagamento aceitas?",
    a: "Aceitamos Pix (com aprovação imediata), cartão de crédito em até 12x e boleto bancário.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    initScrollReveals();
  }, []);

  return (
    <section id="faq" className="relative scroll-mt-28 bg-cream/30 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div data-anim="fade-up">
          <SectionHeading
            eyebrow="Tire suas dúvidas"
            title={
              <>
                Perguntas <em className="font-light text-brick">frequentes</em>
              </>
            }
          />
        </div>

        <div className="mt-14 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                data-anim="fade-up"
                data-anim-delay={(idx * 0.08).toFixed(2)}
                className="rounded-2xl border border-line bg-paper transition-all shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left focus-ring"
                >
                  <span className="font-display text-lg font-bold text-ink pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brick transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-[15px] leading-relaxed text-ink-2 border-t border-line/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
