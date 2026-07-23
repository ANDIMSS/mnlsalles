import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Book, Check, Crown, Gift, LockKeyhole, PartyPopper, ShieldCheck, Tablet, Truck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "./ui";

const TIERS = [
  {
    icon: Tablet,
    name: "E-book",
    desc: "Para começar a ler ainda hoje, em qualquer tela.",
    oldPrice: "R$ 29,90",
    price: "19,90",
    features: [
      "Acesso imediato após a compra",
      "Formatos PDF, EPUB e MOBI",
      "Leia no celular, tablet ou e-reader",
      "A carta do Cap. 7 em destaque digital",
      "Atualizações da edição para sempre",
    ],
    cta: "Baixar agora",
    highlight: false,
  },
  {
    icon: Book,
    name: "Livro Físico",
    desc: "O exemplar para guardar, sublinhar e abraçar.",
    oldPrice: "R$ 59,90",
    price: "49,90",
    badge: "Mais escolhido",
    features: [
      "Capa premium fosca com verniz localizado",
      "Marcador exclusivo “Eu mereço mais”",
      "Dedicatória autografada pela autora",
      "E-book incluso para começar já",
      "Envio rastreado para todo o Brasil",
    ],
    cta: "Quero o meu livro",
    highlight: true,
  },
  {
    icon: Gift,
    name: "Jornada Completa",
    desc: "A experiência integral — perfeita para presentear.",
    oldPrice: "R$ 109,90",
    price: "89,90",
    features: [
      "Tudo da edição física autografada",
      "Carta “Boa Noite” em fac-símile",
      "Guia de reflexão: 21 dias para recomeçar",
      "Caixa-presente com a arte da capa",
      "Frete grátis + brinde surpresa",
    ],
    cta: "Viver a jornada",
    highlight: false,
  },
];

const TRUST = [
  { icon: ShieldCheck, text: "Garantia incondicional de 7 dias" },
  { icon: LockKeyhole, text: "Pagamento 100% seguro" },
  { icon: Truck, text: "Envio para todo o Brasil" },
  { icon: Crown, text: "Pix, cartão ou boleto" },
];

export default function Pricing() {
  const [chosen, setChosen] = useState<(typeof TIERS)[number] | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!chosen) {
      setDone(false);
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [chosen]);

  return (
    <section id="edicoes" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden />
      <div className="glow-warm pointer-events-none absolute -top-20 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-70" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Escolha a sua edição"
          title={
            <>
              O seu recomeço cabe <em className="font-light text-brick">no seu bolso</em>
            </>
          }
          description="Condições de lançamento por tempo limitado. Cada edição carrega a mesma história — escolha como você quer vivê-la."
        />

        <Stagger className="mt-16 grid items-stretch gap-6 lg:grid-cols-3" gap={0.12}>
          {TIERS.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <article
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-8 transition-all duration-500",
                  t.highlight
                    ? "border-brick/35 bg-night text-paper shadow-[0_40px_80px_-30px_rgba(143,59,31,0.55)] lg:-translate-y-3 lg:scale-[1.02]"
                    : "border-line bg-white/60 shadow-[0_20px_50px_-30px_rgba(29,25,21,0.3)] backdrop-blur-sm hover:-translate-y-2 hover:border-brick/30 hover:shadow-[0_30px_60px_-30px_rgba(143,59,31,0.4)]"
                )}
              >
                {t.highlight && (
                  <>
                    <div className="glow-brick pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full" aria-hidden />
                    <span className="absolute top-6 right-6 rounded-full bg-gradient-to-r from-gold to-flame px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-night shadow-lg shadow-gold/30">
                      {t.badge}
                    </span>
                  </>
                )}
                <span
                  className={cn(
                    "grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
                    t.highlight ? "bg-white/10 text-gold" : "border border-line bg-cream text-brick-deep"
                  )}
                >
                  <t.icon size={22} strokeWidth={1.8} />
                </span>

                <h3 className={cn("mt-5 font-display text-2xl font-semibold", t.highlight ? "text-paper" : "text-ink")}>
                  {t.name}
                </h3>
                <p className={cn("mt-1.5 text-[13.5px] leading-relaxed", t.highlight ? "text-paper/60" : "text-ink-3")}>
                  {t.desc}
                </p>

                <div className="mt-6 flex items-end gap-2.5">
                  <span className={cn("text-[13px] font-medium line-through", t.highlight ? "text-paper/40" : "text-ink-3/70")}>
                    {t.oldPrice}
                  </span>
                  <span className={cn("font-display text-[44px] leading-none font-semibold", t.highlight ? "text-gold" : "text-ink")}>
                    <span className="align-top text-[18px] font-medium">R$</span> {t.price}
                  </span>
                </div>
                <p className={cn("mt-1.5 text-[11.5px] font-medium", t.highlight ? "text-paper/45" : "text-ink-3")}>
                  ou 3x sem juros no cartão
                </p>

                <ul className="mt-7 flex flex-col gap-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          t.highlight ? "bg-gold/20 text-gold" : "bg-sage/15 text-sage"
                        )}
                      >
                        <Check size={11} strokeWidth={3.5} />
                      </span>
                      <span className={cn("text-[13.5px] leading-snug font-medium", t.highlight ? "text-paper/80" : "text-ink-2")}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setChosen(t)}
                  aria-label={`Comprar a edição ${t.name}`}
                  className={cn(
                    "btn-shine focus-ring group/btn relative mt-8 inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full py-3.5 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5",
                    t.highlight
                      ? "bg-gradient-to-r from-gold to-flame text-night shadow-xl shadow-gold/25 hover:shadow-2xl hover:shadow-gold/35"
                      : "bg-ink text-paper shadow-lg shadow-ink/20 hover:shadow-xl"
                  )}
                >
                  {t.cta}
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-9 gap-y-4">
            {TRUST.map((i) => (
              <li key={i.text} className="flex items-center gap-2.5 text-[13px] font-semibold text-ink-2">
                <i.icon size={17} className="text-sage" />
                {i.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* modal de pedido */}
      <AnimatePresence>
        {chosen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-night/70 p-4 backdrop-blur-sm"
            onClick={() => setChosen(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Resumo do pedido"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-line bg-paper p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setChosen(null)}
                aria-label="Fechar"
                className="focus-ring absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink-2 transition-colors hover:bg-cream"
              >
                <X size={16} />
              </button>

              {!done ? (
                <>
                  <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-brick-deep">
                    Quase lá
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                    Edição {chosen.name}
                  </h3>
                  <div className="mt-5 rounded-2xl border border-line bg-white/70 p-5">
                    {chosen.features.slice(0, 3).map((f) => (
                      <p key={f} className="flex items-start gap-2.5 py-1 text-[13px] font-medium text-ink-2">
                        <Check size={14} className="mt-0.5 shrink-0 text-sage" strokeWidth={3} />
                        {f}
                      </p>
                    ))}
                    <div className="mt-4 flex items-end justify-between border-t border-line pt-4">
                      <span className="text-[12px] font-semibold text-ink-3">
                        <s className="mr-2">{chosen.oldPrice}</s>
                        promoção de lançamento
                      </span>
                      <span className="font-display text-3xl font-semibold text-ink">
                        <span className="align-top text-sm">R$</span> {chosen.price}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDone(true)}
                    className="btn-shine focus-ring relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brick-deep via-brick to-flame py-4 text-[15px] font-bold text-paper shadow-xl shadow-brick/30 transition-all hover:-translate-y-0.5"
                  >
                    <LockKeyhole size={15} />
                    Concluir pedido com segurança
                  </button>
                  <p className="mt-3 text-center text-[11.5px] font-medium text-ink-3">
                    Pix, cartão em até 3x ou boleto · Reembolso em 7 dias
                  </p>
                </>
              ) : (
                <div className="py-4 text-center">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-sage to-sage-deep text-paper shadow-lg shadow-sage/30">
                    <PartyPopper size={26} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                    Pedido recebido!
                  </h3>
                  <p className="mx-auto mt-2.5 max-w-xs text-[14px] leading-relaxed text-ink-2">
                    A edição <strong className="font-semibold">{chosen.name}</strong> está a caminho
                    do seu recomeço. Enviamos os detalhes para o seu e-mail.
                  </p>
                  <p className="mt-4 font-display text-lg text-brick italic">
                    “Nunca é tarde para escolher existir.”
                  </p>
                  <button
                    type="button"
                    onClick={() => setChosen(null)}
                    className="focus-ring mt-6 rounded-full border border-ink/15 px-6 py-3 text-[13.5px] font-semibold text-ink transition-colors hover:bg-cream"
                  >
                    Continuar explorando
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
