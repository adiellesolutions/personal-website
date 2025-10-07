import { useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroLight from "@/assets/hero-coastal.jpg";
import heroDark from "@/assets/hero-coastal2.jpg";

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    // Only use HTML class as the source of truth
    const compute = () => html.classList.contains("dark");
    setIsDark(compute());

    const handleClassChange = () => setIsDark(compute());

    const observer = new MutationObserver(handleClassChange);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    // Optional: if system changes but site has no "dark" class, ignore
    mq.addEventListener("change", () => {
      if (!html.classList.contains("dark")) setIsDark(false);
    });

    return () => {
      observer.disconnect();
      mq.removeEventListener("change", () => {});
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
        ></div>

        {/* Dark Mode Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${heroDark})`,
            filter: "brightness(0.9) contrast(1.05)",
          }}
        ></div>
      </div>


      {/* ===== Mode-Specific Overlays ===== */}
      {!isDark ? (
        <>
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#fffafd]/20 via-[#fffefe]/15 to-[#f7fdff]/20 backdrop-blur-[8px]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_30%_25%,rgba(255,182,193,0.12),transparent)]" />
        </>
      ) : (
        <>
          {/* Dark mode dreamy tone */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b0f1a]/80 via-[#1c2233]/70 to-[#181627]/90 backdrop-blur-[8px]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_70%_70%,rgba(0,0,0,.45),transparent)]" />
        </>
      )}


      {/* Floating sparkles (unchanged) */}
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
          {/* LEFT SIDE: Text */}
          <div className="text-left">
            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white/90 mb-6 font-medium">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Welcome to my digital sanctuary</span>
            </div>

            {/* Headline with underline */}
            <div className="relative inline-block mb-6 pb-5">
              <h1 className="font-pacifico left-1 text-5xl sm:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,.25)] leading-[1.1] relative z-10">
                Hi, I’m Dary 🌸
              </h1>
              <span className="absolute left-0 bottom-0 w-3/4 h-[6px] rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 opacity-70" />
            </div>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-secondary font-semibold mb-3">
              — Filipina, Traveler, and Glow-Up Bestie
            </p>

            {/* Body text */}
            <p className="text-white/90 max-w-2xl leading-relaxed mb-8">
              Sharing my journey in Germany: study, self-care & adventures. ✨
            </p>

            {/* CTA Button */}
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-bounce shadow-glow font-semibold text-lg px-8 py-6"
            >
              Explore My Digital Sanctuary
              <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
            </Button>
          </div>

          {/* RIGHT SIDE: Polaroid Frame */}
          <div className="relative flex justify-center md:justify-end">
            <div className="mx-auto w-full max-w-[560px] rounded-3xl bg-black/85 shadow-[0_25px_80px_rgba(0,0,0,.5)] p-4 md:p-5 transform transition-transform duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-glow">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
                <img
                  src="https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png"
                  alt="Coastal sunrise"
                  className="w-full h-[300px] md:h-[360px] object-cover transition-all duration-700"
                />
              </div>
              <p className="text-center text-secondary mt-3 font-pacifico text-lg">
                Your sanctuary awaits ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
