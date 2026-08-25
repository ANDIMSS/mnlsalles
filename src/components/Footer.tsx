import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-night text-paper py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-bold text-paper">Além das Muralhas</p>
          <p className="mt-1 text-xs text-paper/60">
            © {new Date().getFullYear()} Maria Salles. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-paper/70">
          <span>Escrito com amor e coragem por Maria Salles</span>
          <Heart size={14} className="text-brick fill-brick" />
        </div>
      </div>
    </footer>
  );
}
