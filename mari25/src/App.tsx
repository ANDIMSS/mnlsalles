import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Book } from "lucide-react";
import { useState } from "react";
import Author from "./components/Author";
import Benefits from "./components/Benefits";
import Chapters from "./components/Chapters";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Letter from "./components/Letter";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Showcase from "./components/Showcase";
import SocialProof from "./components/SocialProof";
import Synopsis from "./components/Synopsis";
import Testimonials from "./components/Testimonials";

/* Barra fixa de conversão para mobile */
function StickyBuyBar() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 640));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 md:hidden"
        >
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-night/92 px-4 py-3 shadow-2xl shadow-night/40 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brick to-brick-deep text-paper">
                <Book size={17} />
              </span>
              <span>
                <span className="block text-[11px] font-semibold text-paper/60">
                  Livro físico + e-book
                </span>
                <span className="block font-display text-[17px] leading-tight font-bold text-gold">
                  R$ 49,90
                </span>
              </span>
            </div>
            <a
              href="#edicoes"
              className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-flame px-5 py-2.5 text-[13px] font-bold text-night shadow-lg shadow-gold/25"
            >
              Comprar
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-paper font-sans text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Synopsis />
        <Chapters />
        <Showcase />
        <Benefits />
        <Letter />
        <Author />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBuyBar />
    </div>
  );
}
