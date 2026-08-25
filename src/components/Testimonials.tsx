import { Star, Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const TESTIMONIALS = [
  {
    name: "Ana Clara M.",
    role: "Leitora · São Paulo/SP",
    text: "Devorei o livro em duas noites. A escrita da Maria é de uma sensibilidade ímpar. Me vi em tantas páginas e senti que finalmente não estava sozinha.",
  },
  {
    name: "Juliana R.",
    role: "Psicóloga · Rio de Janeiro/RJ",
    text: "Recomendo este livro para todas as minhas pacientes em processo de reconstrução emocional. Uma obra de utilidade pública sobre coragem e amor próprio.",
  },
  {
    name: "Beatriz S.",
    role: "Leitora · Belo Horizonte/MG",
    text: "Um relato emocionante e visceral. Ver a Maria se redescobrir me deu a força que eu precisava para encarar meus próprios recomeços com dignidade.",
  },
  {
    name: "Camila T.",
    role: "Professora · Curitiba/PR",
    text: "Cada página parece um abraço acolhedor e um despertar de libertação. Impossível ler sem se emocionar e querer compartilhar essa coragem.",
  },
  {
    name: "Fernanda L.",
    role: "Advogada · Porto Alegre/RS",
    text: "Uma narrativa profunda e verdadeira. Mostra que romper as paredes da própria vida é libertador. Leitura transformadora!",
  },
  // Extra items to fill out columns
  {
    name: "Roberto V.",
    role: "Leitor · Brasília/DF",
    text: "Maria prova que existe vida além do medo. A forma como ela narra as inseguranças de mudar a rota aos 40 é inspiradora.",
  },
];

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-line bg-paper p-8 shadow-sm transition-all hover:shadow-lg">
      <div>
        <div className="flex items-center gap-1 text-gold mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-gold" />
          ))}
        </div>
        <Quote size={28} className="text-brick/20 mb-3" />
        <p className="text-[15px] leading-relaxed text-ink-2 italic">
          "{t.text}"
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-line/60">
        <p className="font-display font-bold text-ink">{t.name}</p>
        <p className="text-xs text-ink-3">{t.role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const col1 = [TESTIMONIALS[0], TESTIMONIALS[3]];
  const col2 = [TESTIMONIALS[1], TESTIMONIALS[4]];
  const col3 = [TESTIMONIALS[2], TESTIMONIALS[5]];

  return (
    <section id="depoimentos" className="relative scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Depoimentos"
            title={
              <>
                O que dizem os <em className="font-light text-brick">leitores</em>
              </>
            }
            subtitle="Histórias reais de pessoas que se emocionaram e se inspiraram com a jornada de Maria Salles."
          />
        </Reveal>

        <div className="mt-16 relative h-[650px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 h-full">
            
            {/* Coluna 1 */}
            <div className="marquee-paused-vertical h-full overflow-hidden">
              <div className="flex flex-col gap-6 animate-marquee-vertical motion-reduce:animate-none motion-reduce:transform-none" style={{ animationDuration: "50s" }}>
                {[...col1, ...col1, ...col1].map((t, idx) => (
                  <TestimonialCard key={idx} t={t} />
                ))}
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="marquee-paused-vertical hidden sm:block h-full overflow-hidden">
              <div className="flex flex-col gap-6 animate-marquee-vertical-reverse motion-reduce:animate-none motion-reduce:transform-none" style={{ animationDuration: "60s" }}>
                {[...col2, ...col2, ...col2].map((t, idx) => (
                  <TestimonialCard key={idx} t={t} />
                ))}
              </div>
            </div>

            {/* Coluna 3 */}
            <div className="marquee-paused-vertical hidden lg:block h-full overflow-hidden">
              <div className="flex flex-col gap-6 animate-marquee-vertical motion-reduce:animate-none motion-reduce:transform-none" style={{ animationDuration: "70s" }}>
                {[...col3, ...col3, ...col3].map((t, idx) => (
                  <TestimonialCard key={idx} t={t} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
