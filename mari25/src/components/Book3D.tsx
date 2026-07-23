import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "../utils/cn";

/* ---------- Capa frontal com tipografia editorial ---------- */
export function CoverFace({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <img
        src="/images/cover-front.jpg"
        alt="Capa do livro Além das Muralhas — muralha em ruínas com flores nascendo entre as pedras"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* scrims para legibilidade */}
      <div className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-night/55 via-night/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-night/60 to-transparent" />

      <div className="absolute inset-0 flex flex-col items-center px-6 pt-8 pb-6 text-center">
        <p className="text-[8.5px] font-semibold uppercase tracking-[0.34em] text-gold-soft/90">
          Quando as paredes caem, a liberdade floresce
        </p>
        <h3 className="mt-3 font-display text-[30px] leading-[1.02] font-semibold text-paper drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          ALÉM DAS
          <br />
          MURALHAS
        </h3>
        <div className="mt-3 flex items-center gap-2 text-gold-soft">
          <span className="h-px w-6 bg-gold-soft/70" />
          <span className="font-display text-[11px] italic tracking-wide text-paper/95">
            O peso de 25 anos e o recomeço
          </span>
          <span className="h-px w-6 bg-gold-soft/70" />
        </div>
        <div className="mt-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.42em] text-paper">
            Maria Salles
          </p>
          <p className="mt-1.5 text-[7.5px] font-medium uppercase tracking-[0.28em] text-paper/60">
            Memórias de um recomeço
          </p>
        </div>
      </div>

      {/* brilho de lombada */}
      <div className="absolute inset-y-0 left-0 w-[10px] bg-gradient-to-r from-black/35 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[3px] bg-white/15" />
    </div>
  );
}

/* ---------- Contracapa com resumo editorial ---------- */
export function BackCoverFace({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <img
        src="/images/cover-back.jpg"
        alt="Contracapa do livro — jardim florido além da muralha ao entardecer"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/45 via-night/30 to-night/65" />

      <div className="absolute inset-0 flex flex-col px-5 pt-6 pb-5">
        <p className="text-center text-[8px] font-semibold uppercase tracking-[0.34em] text-gold-soft">
          Além das Muralhas
        </p>
        <div className="mt-3 rounded-xl border border-white/12 bg-night/45 p-4 backdrop-blur-[6px]">
          <p className="font-display text-[12.5px] leading-relaxed text-paper italic">
            “Por vinte e cinco anos, Maria viveu atrás de paredes invisíveis, erguidas pelo
            silêncio e pelo abuso emocional. Quando a estrutura desmoronou, ela descobriu que a
            liberdade não era um jardim pronto — era um terreno arado, vasto e assustador.”
          </p>
          <p className="mt-3 text-[10.5px] leading-relaxed text-paper/80">
            Um relato real sobre a vertigem da separação, a luta para proteger os filhos e a
            esperança que nasceu de um simples “Boa Noite”. Um convite para acreditar que existe
            vida — e amor — depois da dor.
          </p>
          <p className="mt-3 font-display text-[11px] font-semibold tracking-wide text-gold-soft">
            Nunca é tarde para escolher existir.
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-paper/90">
              Maria Salles
            </p>
            <p className="mt-0.5 text-[7px] uppercase tracking-[0.2em] text-paper/55">
              Biografia &amp; memórias
            </p>
          </div>
          {/* código de barras decorativo */}
          <div className="rounded-md bg-paper px-2 py-1.5" aria-hidden>
            <div className="flex h-5 items-stretch gap-[1.5px]">
              {[3, 1, 2, 1, 3, 2, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 2].map((w, i) => (
                <span key={i} className="bg-ink" style={{ width: w }} />
              ))}
            </div>
            <p className="mt-1 text-center text-[6.5px] font-semibold tracking-[0.18em] text-ink">
              978-65-0000-000-0
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-[10px] bg-gradient-to-l from-black/35 to-transparent" />
    </div>
  );
}

/* ---------- Livro 3D com tilt por ponteiro ---------- */
const W = 320;
const H = 480;
const T = 46;

export default function Book3D({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-30, -2]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -6]), {
    stiffness: 120,
    damping: 18,
  });

  const onMove = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn("perspective-2000 relative", className)}
      role="img"
      aria-label="Livro Além das Muralhas em 3D"
    >
      <motion.div
        style={{ rotateX, rotateY, width: W, height: H }}
        initial={{ opacity: 0, y: 60, rotateY: -46 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="preserve-3d mx-auto"
      >
        {/* frente */}
        <div
          className="absolute inset-0 overflow-hidden rounded-r-xl rounded-l-[4px] shadow-[0_30px_60px_-15px_rgba(20,14,10,0.55)]"
          style={{ transform: `translateZ(${T / 2}px)` }}
        >
          <CoverFace />
        </div>
        {/* verso */}
        <div
          className="spine-texture absolute inset-0 rounded-l-xl rounded-r-[4px]"
          style={{ transform: `rotateY(180deg) translateZ(${T / 2}px)` }}
        />
        {/* lombada */}
        <div
          className="spine-texture absolute top-0 h-full"
          style={{
            width: T,
            left: "50%",
            marginLeft: -T / 2,
            transform: `translateX(${-W / 2}px) rotateY(-90deg)`,
          }}
        >
          <div className="flex h-full items-center justify-center">
            <p
              className="font-display text-[13px] font-semibold tracking-[0.3em] text-paper/95"
              style={{ writingMode: "vertical-rl" }}
            >
              ALÉM DAS MURALHAS · MARIA SALLES
            </p>
          </div>
          <div className="absolute inset-y-0 left-0 w-px bg-white/15" />
          <div className="absolute inset-y-0 right-0 w-px bg-black/30" />
        </div>
        {/* corte das páginas */}
        <div
          className="pages-edge absolute top-[3px] bottom-[3px]"
          style={{
            width: T - 4,
            left: "50%",
            marginLeft: -(T - 4) / 2,
            transform: `translateX(${W / 2}px) rotateY(90deg)`,
          }}
        />
        {/* topo das páginas */}
        <div
          className="pages-edge absolute left-[3px] right-[3px]"
          style={{
            height: T - 4,
            top: "50%",
            marginTop: -(T - 4) / 2,
            transform: `translateY(${-H / 2}px) rotateX(90deg)`,
          }}
        />
      </motion.div>

      {/* sombra projetada */}
      <div
        className="absolute -bottom-12 left-1/2 h-14 w-[78%] -translate-x-1/2 rounded-[100%] bg-night/45 blur-2xl"
        aria-hidden
      />
    </div>
  );
}
