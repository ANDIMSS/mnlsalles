import Book3D from "./Book3D";
import { Reveal, SectionHeading } from "./ui";
import { Check } from "lucide-react";

export default function Showcase() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-cream/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Book3D />
          </Reveal>

          <Reveal delay={0.15}>
            <SectionHeading
              align="left"
              eyebrow="Edição especial"
              title={
                <>
                  Um livro feito com <em className="font-light text-brick">cuidado e afeto</em>
                </>
              }
              subtitle="Cada detalhe do projeto gráfico foi pensado para oferecer uma experiência de leitura acolhedora e transformadora."
            />

            <ul className="mt-8 space-y-4">
              {[
                "Papel Polen Soft 80g (conforto visual único)",
                "Capa com orelhas e acabamento fosco com verniz localizado",
                "Tipografia clássica com projeto editorial exclusivo",
                "Inclui marcador de página temático e dedicatória especial",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brick text-paper">
                    <Check size={14} />
                  </span>
                  <span className="text-[15px] font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
