import { Heart, Star, BookOpen, Users } from "lucide-react";
import { Reveal } from "./ui";

const STATS = [
  { icon: BookOpen, number: "25Anos", label: "De silêncio transformados em obra" },
  { icon: Users, number: "1.000+", label: "Leitores impactados" },
  { icon: Star, number: "4.9/5", label: "Avaliação média de leitores" },
  { icon: Heart, number: "100%", label: "Depoimentos reais de coragem" },
];

export default function SocialProof() {
  return (
    <section className="border-y border-line bg-paper py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.08}>
              <div className="flex flex-col items-center text-center">
                <stat.icon size={22} className="text-brick mb-2" />
                <span className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  {stat.number}
                </span>
                <span className="mt-1 text-xs font-semibold text-ink-3 max-w-[180px]">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
