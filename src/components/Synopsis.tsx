import { Reveal, SectionHeading } from "./ui";

export default function Synopsis() {
  return (
    <section id="sinopse" className="relative scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="A história por trás do livro"
          title={
            <>
              Quando as paredes caem, a <em className="font-light text-brick">liberdade floresce</em>
            </>
          }
        />

        <Reveal delay={0.1}>
          <div className="mt-12 space-y-6 text-[16.5px] leading-[1.85] text-ink-2">
            <p>
              Em <strong className="font-semibold text-ink">Além das Muralhas: O Peso de 25 Anos e o Recomeço</strong>, Maria Salles compartilha sem reservas os bastidores de duas décadas e meia vivendo à sombra de um casamento sufocante. O que parecia uma vida familiar estruturada escondia, na verdade, uma teia invisível de controle e invalidação emocional.
            </p>
            <p>
              Com uma escrita visceral, sensível e corajosa, a autora passa a limpo as memórias dolorosas, o medo da incerteza, os desafios da maternidade solo e o sopro de esperança que a fez dar o passo decisivo rumo à libertação após os 45 anos de idade.
            </p>
            <p>
              Este não é apenas um livro de memórias. É um abraço caloroso em forma de páginas para qualquer pessoa que precisa se lembrar de que a vida nunca acaba enquanto houver vontade de recomeçar.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
