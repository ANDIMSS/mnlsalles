import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Bookmark,
  Layers,
  Mail,
  Repeat,
  Ruler,
  Type,
} from "lucide-react";
import { useState } from "react";
import { BackCoverFace, CoverFace } from "./Book3D";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "./ui";

const SPECS = [
  { icon: BookOpen, title: "184 páginas", text: "Miolo em papel pólen 80g — macio aos olhos, perfeito para longas sessões de leitura." },
  { icon: Layers, title: "Capa premium", text: "Laminação fosca aveludada com verniz localizado sobre as flores e o título." },
  { icon: Ruler, title: "14 × 21 cm", text: "O formato clássico que cabe na bolsa, na cabeceira e em todos os momentos da vida." },
  { icon: Type, title: "Tipografia confortável", text: "Projeto editorial revisado por profissionais, com respiros pensados para emocionar." },
  { icon: Mail, title: "A carta na íntegra", text: "Inclui, sem cortes, a carta de Uanderson do Capítulo 7 — para reler sempre que precisar." },
  { icon: Bookmark, title: "Marcador exclusivo", text: "Acompanha um marcador com a frase “Eu mereço mais” impressa em hot stamping dourado." },
];

export default function Showcase() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="exemplar" className="relative scroll-mt-28 overflow-hidden bg-cream/70 py-24 sm:py-32">
      <div className="glow-warm pointer-events-none absolute top-1/3 left-[-10%] h-[480px] w-[480px] rounded-full" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Capa & contracapa"
          title={
            <>
              Uma edição à altura <em className="font-light text-brick">da história</em>
            </>
          }
          description="Cada detalhe foi pensado para honrar a jornada: da arte da capa — a muralha que cai e floresce — ao resumo editorial da contracapa."
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* flip capa / contracapa */}
          <Reveal className="flex flex-col items-center">
            <div className="perspective-1400" style={{ width: 300, height: 452 }}>
              <motion.div
                className="preserve-3d relative h-full w-full cursor-pointer"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.85, ease: [0.32, 0.72, 0.24, 1] }}
                onClick={() => setFlipped((v) => !v)}
                role="button"
                tabIndex={0}
                aria-label={flipped ? "Ver capa do livro" : "Ver contracapa do livro"}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFlipped((v) => !v);
                  }
                }}
              >
                <div className="backface-hidden absolute inset-0 overflow-hidden rounded-xl shadow-[0_40px_80px_-25px_rgba(20,14,10,0.5)] ring-1 ring-black/10">
                  <CoverFace />
                </div>
                <div
                  className="backface-hidden absolute inset-0 overflow-hidden rounded-xl shadow-[0_40px_80px_-25px_rgba(20,14,10,0.5)] ring-1 ring-black/10"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <BackCoverFace />
                </div>
              </motion.div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setFlipped(false)}
                className={cn(
                  "focus-ring rounded-full px-5 py-2.5 text-[12.5px] font-semibold transition-all duration-300",
                  !flipped
                    ? "bg-ink text-paper shadow-lg shadow-ink/25"
                    : "border border-ink/15 bg-white/60 text-ink-2 hover:border-brick/40 hover:text-ink"
                )}
              >
                Capa
              </button>
              <button
                type="button"
                onClick={() => setFlipped(true)}
                className={cn(
                  "focus-ring inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12.5px] font-semibold transition-all duration-300",
                  flipped
                    ? "bg-ink text-paper shadow-lg shadow-ink/25"
                    : "border border-ink/15 bg-white/60 text-ink-2 hover:border-brick/40 hover:text-ink"
                )}
              >
                <Repeat size={13} />
                Contracapa
              </button>
            </div>
            <p className="mt-3 text-[12px] font-medium text-ink-3">
              Toque no livro para virar
            </p>
          </Reveal>

          {/* especificações */}
          <Stagger className="grid gap-4 sm:grid-cols-2" gap={0.08}>
            {SPECS.map((s) => (
              <StaggerItem key={s.title}>
                <div className="group h-full rounded-2xl border border-line bg-white/65 p-6 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_45px_-22px_rgba(223,161,76,0.4)]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-sand to-cream text-brick-deep ring-1 ring-line transition-all duration-400 group-hover:from-brick group-hover:to-brick-deep group-hover:text-paper group-hover:ring-brick/40">
                    <s.icon size={19} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-4 font-display text-[17px] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-2">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem className="sm:col-span-2">
              <a
                href="#edicoes"
                className="btn-shine focus-ring group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl bg-ink px-7 py-5 text-paper shadow-xl shadow-ink/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>
                  <span className="block font-display text-lg font-semibold">Garanta o seu exemplar</span>
                  <span className="mt-0.5 block text-[12.5px] text-paper/60">Edição de lançamento com brindes exclusivos</span>
                </span>
                <ArrowRight size={20} className="shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
