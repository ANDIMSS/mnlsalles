import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Book3D from "./Book3D";
import { Stars } from "./ui";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center pt-20 pb-10">
      {/* ambiente */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="glow-warm animate-drift absolute -top-40 right-[8%] h-[560px] w-[560px] rounded-full" />
        <div className="glow-brick animate-drift-2 absolute top-[30%] -left-40 h-[520px] w-[520px] rounded-full" />
        <div className="glow-sage animate-pulse-soft absolute right-[-10%] bottom-[-20%] h-[480px] w-[480px] rounded-full" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:gap-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* coluna de texto */}
        <div className="w-[351px] pl-0 pr-[18px] pb-[1px] pt-0 -ml-[3px] text-center lg:text-left">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brick/20 bg-white/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brick-deep shadow-sm backdrop-blur">
              Lançamento · Uma história real
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.12}
            className="mt-7 font-display text-4xl leading-[1.04] font-medium tracking-tight text-balance text-ink sm:text-5xl lg:text-[4.2rem]"
          >
            Quando as paredes caem,{" "}
            <span className="relative inline-block">
              <em className="font-display bg-gradient-to-r from-brick via-flame to-gold bg-clip-text font-light text-transparent">
                a liberdade floresce.
              </em>
              <svg
                className="absolute -bottom-2 left-0 w-full text-gold/70"
                viewBox="0 0 220 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 9C60 3.5 150 3.5 217 8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.24}
            className="mx-auto max-w-xl leading-relaxed text-ink-2 sm:text-lg lg:mx-0 text-center text-[15px] mt-[30px] pl-[7px] pr-0"
          >
            O relato corajoso de <strong className="font-semibold text-ink">Maria Salles</strong>:
            25 anos de silêncio dentro de um casamento, a vertigem de recomeçar aos 45 e o amor
            que nasceu de um simples <em className="font-display">“Boa Noite”</em> — às 1h47 de uma
            madrugada de outubro.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.30}
            className="mx-auto mt-5 max-w-xl text-[14px] leading-relaxed text-ink-3 sm:text-[15px] lg:mx-0 border-l-2 border-brick/40 pl-4 italic"
          >
            Uma obra, escrita no exato momento em que a vida acontece. Cada capítulo nasce da percepção do <strong className="font-semibold text-ink-2">“Até amanhã”</strong>, transformando experiências em reflexões. Mais do que um relato, é um registro da jornada de autoconhecimento, da busca pela consciência e da construção de clareza sobre os caminhos que ainda estão por vir.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.36}
            className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row lg:justify-start sm:justify-center"
          >
            <Link
              to="/leitura"
              className="btn-shine focus-ring group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-brick-deep via-brick to-flame px-8 py-4 text-[15px] font-semibold text-paper shadow-xl shadow-brick/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brick/40 sm:w-auto"
            >
              <BookOpen size={17} className="transition-transform duration-300 group-hover:-rotate-6" />
              Ler livro
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.48}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center"
          >
            <div className="flex -space-x-2.5" aria-hidden>
              {["AP", "JM", "CE", "FS"].map((n, i) => (
                <span
                  key={n}
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-paper text-[10px] font-bold text-paper shadow-md"
                  style={{
                    background: ["#8f3b1f", "#5b7a68", "#dfa14c", "#4a4238"][i],
                  }}
                >
                  {n}
                </span>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <Stars size={15} />
              <p className="mt-1 text-[13px] font-medium text-ink-3">
                <strong className="font-semibold text-ink">4,9/5</strong> — leitores da pré-venda em
                todo o Brasil
              </p>
            </div>
          </motion.div>
        </div>

        {/* livro 3D + chips flutuantes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto scale-[0.78] sm:scale-95 lg:scale-100"
          style={{ width: 400, maxWidth: "100%" }}
        >
          <Book3D />

          {/* chip: mensagem boa noite */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="animate-floaty pointer-events-none absolute -left-8 top-10 hidden sm:block"
            aria-hidden
          >
            <div className="rounded-2xl rounded-bl-md border border-ink/8 bg-white/85 px-4 py-3 shadow-xl shadow-ink/10 backdrop-blur-md">
              <p className="text-[12.5px] font-medium text-ink">Boa Noite. 🌙</p>
              <p className="mt-1 text-[10px] font-medium tracking-wide text-ink-3">
                Uanderson · 25 out 2025, 01:47
              </p>
            </div>
          </motion.div>

          {/* chip: avaliação */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="animate-floaty-slow pointer-events-none absolute -right-6 bottom-16 hidden sm:block"
            aria-hidden
          >
            <div className="rounded-2xl border border-ink/8 bg-white/85 px-4 py-3 shadow-xl shadow-ink/10 backdrop-blur-md">
              <Stars size={13} />
              <p className="mt-1.5 font-display text-[13px] italic text-ink">
                “Este livro me devolveu a voz.”
              </p>
            </div>
          </motion.div>

          {/* chip: recomeço */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="pointer-events-none absolute -top-3 right-6"
            aria-hidden
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-flame px-3.5 py-2 text-[11px] font-bold text-night shadow-lg shadow-gold/40">
              <Heart size={12} className="fill-night" />
              Recomeço aos 45
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
        aria-hidden
      >
        <div className="flex h-11 w-6.5 items-start justify-center rounded-full border-2 border-ink/15 p-1.5">
          <motion.span
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-brick"
          />
        </div>
      </motion.div>
    </section>
  );
}
