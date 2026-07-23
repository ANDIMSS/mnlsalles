import { Heart, Mail } from "lucide-react";
import { LogoMark } from "./ui";

const InstagramIcon = (props: { size?: number }) => (
  <svg width={props.size ?? 17} height={props.size ?? 17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = (props: { size?: number }) => (
  <svg width={props.size ?? 17} height={props.size ?? 17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M15.5 3.5h-2.8a4 4 0 0 0-4 4v2.7H6v3.6h2.7v6.7h3.6v-6.7h2.9l.5-3.6h-3.4V7.8a1.4 1.4 0 0 1 1.4-1.4h2.2Z" />
  </svg>
);

const YoutubeIcon = (props: { size?: number }) => (
  <svg width={props.size ?? 17} height={props.size ?? 17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
    <path d="m10.2 9.3 5 2.7-5 2.7Z" fill="currentColor" stroke="none" />
  </svg>
);

const NAV = [
  { href: "#livro", label: "O Livro" },
  { href: "#capitulos", label: "Capítulos" },
  { href: "#autora", label: "A Autora" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Perguntas frequentes" },
];

const EDITIONS = [
  { href: "#edicoes", label: "E-book — R$ 19,90" },
  { href: "#edicoes", label: "Livro Físico — R$ 49,90" },
  { href: "#edicoes", label: "Jornada Completa — R$ 89,90" },
  { href: "#exemplar", label: "Ver capa & contracapa" },
];

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram de Maria Salles", href: "#" },
  { icon: FacebookIcon, label: "Facebook de Maria Salles", href: "#" },
  { icon: YoutubeIcon, label: "YouTube de Maria Salles", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night-2 pt-16 pb-8 text-paper/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <LogoMark dark />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-paper/55">
              Um relato real sobre derrubar muralhas invisíveis, proteger quem se ama e descobrir
              que a liberdade floresce — sempre.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-paper/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Explorar o site">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-soft/80">Explorar</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="focus-ring text-[13.5px] font-medium text-paper/60 transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Edições do livro">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-soft/80">Edições</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {EDITIONS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="focus-ring text-[13.5px] font-medium text-paper/60 transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-soft/80">Contato</h3>
            <a
              href="mailto:contato@mariasalles.com.br"
              className="focus-ring mt-5 inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[13px] font-medium text-paper/75 transition-all hover:border-gold/40 hover:text-gold"
            >
              <Mail size={15} className="shrink-0 text-gold" />
              contato@mariasalles.com.br
            </a>
            <p className="mt-5 text-[12.5px] leading-relaxed text-paper/45">
              Se você vive uma situação de violência, você não está sozinho(a):{" "}
              <strong className="font-semibold text-paper/70">180</strong> (Central de Atendimento à
              Mulher) · <strong className="font-semibold text-paper/70">188</strong> (CVV).
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-7 sm:flex-row">
          <p className="text-[12px] text-paper/40">
            © 2026 Maria Salles · Além das Muralhas. Todos os direitos reservados.
          </p>
          <p className="inline-flex items-center gap-1.5 text-[12px] text-paper/40">
            Feito com coragem, café e <Heart size={12} className="fill-brick text-brick" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
