import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

const coverUrl = "https://assets.zyrosite.com/EdFKTcLdQSxzGH5L/design-com-milhas-aa-c-reas-95nouR8BdZnjA9Db.png";

export function CoverFace() {
  return (
    <div 
      className="absolute inset-0 h-full w-full overflow-hidden rounded-r-xl border border-white/20 shadow-2xl"
      style={{ backfaceVisibility: "hidden" }}
    >
      <img
        src={coverUrl}
        alt="Capa do livro Além das Muralhas"
        className="h-full w-full object-cover"
      />
      {/* Light Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />
    </div>
  );
}

export default function Book3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0, 0.5], [16, 6, -4]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0, 0.5], [-28, -18, -5]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="perspective-2000 group relative flex items-center justify-center p-8 sm:p-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        animate={{ y: [-8, 8, -8] }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="preserve-3d relative w-64 sm:w-72 md:w-80 aspect-[3/4.2] rounded-r-xl shadow-2xl shadow-ink/40"
      >
        <CoverFace />

        {/* Spine 3D Effect */}
        <div 
          className="spine-texture absolute top-0 bottom-0 left-0 w-8 rounded-l-md border-r border-white/10"
          style={{ transform: "translateX(-100%) rotateY(-90deg)", transformOrigin: "right" }}
        />

        {/* Pages Edge */}
        <div 
          className="pages-edge absolute top-1.5 bottom-1.5 right-0 w-8 rounded-r-sm opacity-90 shadow-inner"
          style={{ transform: "translateZ(-16px) rotateY(90deg)", transformOrigin: "right" }}
        />
        
        {/* Back Cover Depth */}
        <div 
          className="absolute inset-0 rounded-r-xl shadow-2xl overflow-hidden border border-white/10 bg-brick-deep/80"
          style={{ transform: "translateZ(-16px) rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <img
            src={coverUrl}
            alt="Contracapa do livro Além das Muralhas"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

