import { useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroLight from "@/assets/hero-coastal.jpg";
import heroDark from "@/assets/hero-coastal2.jpg";
import profilepic from "@/assets/pictest.jpg";

const Hero = () => {
  const [isDark, setIsDark] = useState(false);
  const [active, setActive] = useState(1); // middle card focused by default

  useEffect(() => {
    const html = document.documentElement;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const compute = () => html.classList.contains("dark");
    setIsDark(compute());

    const handleClassChange = () => setIsDark(compute());
    const observer = new MutationObserver(handleClassChange);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    const handleMQ = () => {
      if (!html.classList.contains("dark")) setIsDark(false);
    };
    mq.addEventListener("change", handleMQ);

    return () => {
      observer.disconnect();
      mq.removeEventListener("change", handleMQ);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden font-quicksand transition-all duration-700"
    >
      {/* ===== Background Image (Crossfade) ===== */}
      <div className="absolute inset-0 -z-10">
        {/* Light Mode Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${heroLight})`,
            filter: "brightness(1.2) contrast(0.95)",
          }}
        />
        {/* Dark Mode Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${heroDark})`,
            filter: "brightness(0.9) contrast(1.05)",
          }}
        />
      </div>

      {/* ===== Mode-Specific Overlays ===== */}
      {!isDark ? (
        <>
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#fffafd]/20 via-[#fffefe]/15 to-[#f7fdff]/20 backdrop-blur-[8px]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_30%_25%,rgba(255,182,193,0.12),transparent)]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b0f1a]/80 via-[#1c2233]/70 to-[#181627]/90 backdrop-blur-[8px]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_70%_70%,rgba(0,0,0,.45),transparent)]" />
        </>
      )}

      {/* Floating sparkles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <span className="absolute left-[10%] top-[15%] w-1.5 h-1.5 bg-white/50 rounded-full blur-[1px]" />
        <span className="absolute left-[40%] top-[10%] w-1 h-1 bg-white/40 rounded-full" />
        <span className="absolute right-[20%] top-[25%] w-2 h-2 bg-white/35 rounded-full" />
        <span className="absolute left-[30%] bottom-[20%] w-1.5 h-1.5 bg-white/35 rounded-full" />
        <span className="absolute right-[12%] bottom-[14%] w-1 h-1 bg-white/30 rounded-full" />
      </div>

      {/* ===== Content ===== */}
      <div className="container mx-auto max-w-7xl px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white/90 mb-6 font-medium">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Welcome to my digital sanctuary</span>
            </div>

            <div className="relative inline-block mb-6 pb-5">
              <h1 className="font-pacifico left-1 text-5xl sm:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,.25)] leading-[1.1] relative z-10">
                Hi, I’m Dary 🌸
              </h1>
            </div>

            <p className="text-lg md:text-xl text-secondary font-semibold mb-3">
              — Filipina, Traveler, and Glow-Up Bestie
            </p>

            <p className="text-white/90 max-w-2xl leading-relaxed mb-8">
              Sharing my journey in Germany: study, self-care & adventures. ✨
            </p>

            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-bounce shadow-glow font-semibold text-lg px-8 py-6"
            >
              Explore My Digital Sanctuary
              <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
            </Button>
          </div>

          {/* RIGHT: Click-to-Center Polaroid (center slightly smaller) */}
<div className="relative flex justify-center md:justify-end">
  <div className="relative w-full max-w-[820px] h-[500px] md:h-[560px] flex items-center justify-center overflow-visible">
    <div className="absolute inset-0 -z-10 blur-3xl opacity-80
                    bg-[radial-gradient(60%_50%_at_50%_50%,rgba(255,182,193,.38),transparent_70%)]
                    dark:bg-[radial-gradient(60%_50%_at_50%_50%,rgba(255,214,246,.28),transparent_70%)]" />

    {[
      {
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop",
        caption: "Study break 📖",
        tape: "bg-yellow-200/90 dark:bg-amber-200/90",
        border: "border-amber-200/70 dark:border-amber-100/60",
        dot: "bg-yellow-300/80 dark:bg-amber-200/80",
      },
      {
        img: heroLight,
        caption: "Cozy cafe 💗",
        tape: "bg-sky-200/90 dark:bg-cyan-200/90",
        border: "border-sky-200/70 dark:border-cyan-100/60",
        dot: "bg-sky-300/80 dark:bg-cyan-200/80",
      },
      {
        img: profilepic,
        caption: "Morning walk ☀️",
        tape: "bg-pink-200/90 dark:bg-pink-300/90",
        border: "border-pink-200/70 dark:border-pink-100/60",
        dot: "bg-pink-300/80 dark:bg-pink-200/80",
      },
    ].map((c, i, arr) => {
      const prev = (active + arr.length - 1) % arr.length;
      const next = (active + 1) % arr.length;
      const isCenter = i === active;
      const isLeft = i === prev;
      const isRight = i === next;

      // center a bit smaller now; sides pulled slightly closer for overlap
      const wrapperClass = isCenter
        ? "z-50 translate-x-0 scale-[1.18] md:scale-[1.20] rotate-0 opacity-100"
        : isLeft
        ? "-translate-x-[190px] md:-translate-x-[225px] translate-y-[10px] scale-[0.82] -rotate-8 z-30 opacity-95"
        : " translate-x-[190px]  md:translate-x-[225px] translate-y-[10px] scale-[0.82]  rotate-8 z-30 opacity-95";

      return (
        <button
          key={i}
          type="button"
          onClick={() => setActive(i)}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(i)}
          aria-label={`Show ${c.caption}`}
          aria-pressed={isCenter}
          className={`group absolute transform-gpu focus:outline-none
                      transition-all duration-700 ease-[cubic-bezier(.45,.05,.55,.95)]
                      hover:z-[60] hover:opacity-100 ${wrapperClass}`}
          style={{ width: 280, height: 380 }}
        >
          {/* washi tape */}
          <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-3 rounded-[6px] ${c.tape}
                           shadow-[0_4px_10px_rgba(0,0,0,.08)]`} />
          {/* card */}
          <div className={`relative w-full h-full rounded-[24px] bg-white/95 dark:bg-[#fffafc]
                           shadow-[0_22px_70px_rgba(0,0,0,.25)] border ${c.border} overflow-hidden
                           transition-transform duration-700 group-hover:-translate-y-2`}>
            {/* photo */}
            <div className="mx-4 mt-4 h-[235px] rounded-[18px] overflow-hidden border border-black/5">
              <img
                src={c.img}
                alt={c.caption}
                className={`w-full h-full object-cover transition-transform duration-700
                            ${isCenter ? "scale-106" : "scale-95"}`}
                draggable={false}
              />
            </div>
            {/* caption */}
            <div className="px-4 pt-2">
              <div className="flex items-center gap-2">
                <span className={`inline-block w-2.5 h-2.5 rounded-full ${c.dot}`} />
                <p className="font-pacifico text-[19px] text-rose-500/90 dark:text-rose-500">
                  {c.caption}
                </p>
              </div>
            </div>
            {/* sticker */}
            <div className="absolute -right-2 -bottom-2 rotate-[6deg] select-none">
              
            </div>
          </div>
        </button>
      );
    })}
  </div>
</div>


          {/* END RIGHT */}
        </div>
      </div>
      {/* END container & grid */}
    </section>
  );
};

export default Hero;
