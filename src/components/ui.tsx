import { motion } from "framer-motion";
import { Book, Star } from "lucide-react";
import { ReactNode } from "react";

export function LogoMark() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brick to-brick-deep text-paper shadow-md shadow-brick/20">
        <Book size={18} />
      </span>
      <span className="flex flex-col text-left">
        <span className="font-display text-base font-bold leading-tight tracking-tight text-ink">
          Além das Muralhas
        </span>
        <span className="text-[10px] font-semibold tracking-wider text-brick uppercase">
          Maria Salles
        </span>
      </span>
    </div>
  );
}

export function Stars({ size = 16 }: { size?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-gold">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isLeft = align === "left";
  return (
    <div className={`flex flex-col ${isLeft ? "items-start text-left" : "items-center text-center"}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brick/20 bg-brick/8 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-brick">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-2 sm:text-[17px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
