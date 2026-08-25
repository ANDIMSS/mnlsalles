import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { LogoMark } from "./ui";

const LINKS = [
  { href: "/#livro", label: "O Livro" },
  { href: "/#capitulos", label: "Capítulos" },
  { href: "/#autora", label: "A Autora" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto transition-all duration-500",
          scrolled ? "max-w-6xl px-3 sm:px-5" : "max-w-7xl px-4 sm:px-6"
        )}
      >
        <nav
          aria-label="Navegação principal"
          className={cn(
            "mt-3 flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5",
            scrolled
              ? "border border-ink/8 bg-paper/80 shadow-[0_12px_40px_-16px_rgba(29,25,21,0.35)] backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          )}
        >
          <Link to="/" className="focus-ring shrink-0" aria-label="Ir para o início">
            <LogoMark />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="focus-ring group relative rounded-lg px-3.5 py-2 text-[13.5px] font-medium text-ink-2 transition-colors hover:text-ink"
                >
                  {l.label}
                  <span className="absolute inset-x-3.5 -bottom-px h-px origin-left scale-x-0 bg-brick transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <Link
              to="/leitura"
              className="btn-shine focus-ring group relative hidden items-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-paper shadow-lg shadow-ink/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/30 sm:inline-flex"
            >
              Ler Online
              <BookOpen size={15} className="transition-transform duration-300 group-hover:scale-110" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-paper/70 text-ink backdrop-blur-md lg:hidden"
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 overflow-hidden rounded-2xl border border-ink/8 bg-paper/95 p-2 shadow-2xl shadow-ink/20 backdrop-blur-xl lg:hidden"
            >
              <ul>
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.045 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="focus-ring flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-ink-2 transition-colors hover:bg-cream hover:text-ink"
                    >
                      {l.label}
                      <ArrowRight size={15} className="text-brick" />
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + LINKS.length * 0.045 }}
                >
                  <Link
                    to="/leitura"
                    onClick={() => setOpen(false)}
                    className="focus-ring flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-brick transition-colors hover:bg-brick/10"
                  >
                    Ler Online
                    <BookOpen size={15} />
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
