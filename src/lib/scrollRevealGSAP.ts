export function initScrollReveals() {
  const gsap = (window as any).gsap;

  if (typeof gsap === "undefined") {
    console.warn("[scroll-reveal-gsap] GSAP não encontrado. Exibindo elementos normalmente.");
    document.querySelectorAll<HTMLElement>("[data-anim]").forEach((el) => {
      el.style.opacity = "1";
    });
    return;
  }

  const reveals = document.querySelectorAll<HTMLElement>("[data-anim]");
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target as HTMLElement;
        if (el.classList.contains("sr-visible")) return;

        const animType = el.getAttribute("data-anim");
        const delay = parseFloat(el.getAttribute("data-anim-delay") || "0");
        const duration = parseFloat(el.getAttribute("data-anim-duration") || "0.8");

        let from: Record<string, any> = {};
        const to: Record<string, any> = {
          opacity: 1,
          duration: duration,
          delay: delay,
          ease: "power2.out",
        };

        switch (animType) {
          case "fade-up":
            from = { opacity: 0, y: 30 };
            break;
          case "fade-left":
            from = { opacity: 0, x: -40 };
            break;
          case "fade-right":
            from = { opacity: 0, x: 40 };
            break;
          case "fade-in":
            from = { opacity: 0 };
            break;
          case "zoom-in":
            from = { opacity: 0, scale: 0.9 };
            break;
          case "slide-up":
            from = { opacity: 0, y: 50 };
            to.ease = "power3.out";
            break;
          default:
            from = { opacity: 0, y: 20 };
        }

        gsap.fromTo(el, from, to);
        el.classList.add("sr-visible");
        observer.unobserve(el);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  reveals.forEach((el) => {
    if (!el.classList.contains("sr-visible")) {
      observer.observe(el);
    }
  });
}
