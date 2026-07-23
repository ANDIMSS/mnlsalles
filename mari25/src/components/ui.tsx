import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

/* ---------- Scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Staggered entrance ---------- */
export function Stagger({
  children,
  className,
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]",
            dark
              ? "border-white/15 bg-white/5 text-gold-soft"
              : "border-brick/20 bg-brick/5 text-brick-deep"
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-gold" : "bg-brick")} />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-6 font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance sm:text-5xl",
            dark ? "text-paper" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              dark ? "text-paper/65" : "text-ink-2"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Stars ---------- */
export function Stars({ className, size = 14 }: { className?: string; size?: number }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="fill-gold text-gold" strokeWidth={1.5} />
      ))}
    </span>
  );
}

/* ---------- Logo ---------- */
export function LogoMark({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-xl shadow-lg shadow-brick/25",
          "bg-gradient-to-br from-flame via-brick to-brick-deep"
        )}
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="h-5.5 w-5.5" fill="none">
          <path
            d="M9 25V14.5a7 7 0 0 1 14 0V25"
            stroke="#FBF7F0"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <circle cx="16" cy="10.5" r="2" fill="#DFA14C" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span
            className={cn(
              "block font-display text-[15px] font-semibold tracking-wide",
              dark ? "text-paper" : "text-ink"
            )}
          >
            ALÉM DAS MURALHAS
          </span>
          <span
            className={cn(
              "mt-1 block text-[10px] font-medium uppercase tracking-[0.26em]",
              dark ? "text-paper/50" : "text-ink-3"
            )}
          >
            Maria Salles
          </span>
        </span>
      )}
    </span>
  );
}
