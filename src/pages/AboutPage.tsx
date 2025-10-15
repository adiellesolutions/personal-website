import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import profilePic from "@/assets/profile-pic.jpg";
import journey1 from "@/assets/1.jpg";
import journey2 from "@/assets/2.jpg";
import journey3 from "@/assets/3.jpg";
import journey4 from "@/assets/4.jpg";
import journey5 from "@/assets/5.jpg";
import journey6 from "@/assets/6.jpeg";
import polaroid1 from "@/assets/7.jpg";
import polaroid2 from "@/assets/8.jpg";
import polaroid3 from "@/assets/9.jpg";

const AboutPage = () => {
  // lightbox state for polaroids
  const [selected, setSelected] = useState<null | { img: string; caption: string }>(null);

  const timeline = [
    {
      month: "September 2022",
      title: "The Big Move 🌤️",
      text:
        "Packed my life into two suitcases and moved to Munich. Scared but excited to start this new chapter of growth and discovery.",
      img: journey2,
    },
    {
      month: "December 2022",
      title: "Language Learning Magic 📚",
      text:
        "Discovered that learning German can be fun with patience, community, and creativity.",
      img: journey3,
    },
    {
      month: "March 2023",
      title: "Spring Blossoms 🌸",
      text:
        "Fell in love with cherry blossoms and new routines that inspired calm productivity.",
      img: journey4,
    },
    {
      month: "June 2023",
      title: "Café Days ☕",
      text:
        "Spent days journaling in cozy Munich cafés — finding peace in slow mornings.",
      img: journey5,
    },
    {
      month: "October 2023",
      title: "Creative Sparks 🎨",
      text: "Started experimenting with content creation and digital art.",
      img: journey6,
    },
    {
      month: "February 2024",
      title: "New Horizons ✈️",
      text:
        "Traveled across Europe and learned how growth comes with stepping outside comfort zones.",
      img: journey1,
    },
  ];

  const polaroids = [
    { img: polaroid1, caption: "My aesthetic workspace in Munich ✨" },
    { img: polaroid2, caption: "Weekend adventure in the Alps 🏔️" },
    { img: polaroid3, caption: "Study session with kawaii vibes 📚" },
  ];

  // one place to tweak the “box” look per section
  const sectionBox =
    "bg-card/85 backdrop-blur rounded-3xl border border-primary/20 shadow-float";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-24 pb-24 px-4">
        {/* ====== HERO (boxed) ====== */}
        <section className="container mx-auto max-w-6xl mb-12">
          <div className={`${sectionBox} p-8 md:p-10`}>
            <div className="grid md:grid-cols-2 items-center gap-10 md:gap-14">
              <div>
                <h1 className="font-pacifico text-5xl md:text-6xl leading-tight mb-4">
                  Hey, I’m <span className="text-secondary">Dary</span>! 🌸
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  Welcome to my story of gentle growth and beautiful
                  transformations. ✨ Small changes can create big transformations,
                  and every step deserves to be celebrated.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I share the lessons, magic, and inspiration I’ve found in
                  creating an aesthetic, intentional life — from cozy study vibes
                  to adventures abroad.
                </p>
              </div>
              <div>
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full max-w-sm mx-auto rounded-3xl border border-white/30 shadow-glow object-cover"
                />
              </div>
            </div>
          </div>
        </section>

     

        {/* ====== TIMELINE (boxed + hover interactions) ====== */}
        <section className="container mx-auto max-w-6xl mb-16">
          <div className={`${sectionBox} p-8 md:p-10`}>
            <div className="text-center mb-10">
              <h2 className="font-pacifico text-4xl mb-2">My Life Journey</h2>
              <p className="text-muted-foreground">
                A timeline of growth, adventures, and beautiful discoveries 🌈
              </p>
            </div>

            <div className="relative">
              {/* center line */}
              <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] bg-primary/25 rounded-full" />

              <div className="space-y-14">
                {timeline.map((item, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div key={idx} className="relative grid md:grid-cols-2 items-center gap-8 group">
                      {/* center dot */}
                      <span
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all"
                        aria-hidden="true"
                      />

                      {/* text card */}
                      <div
                        className={[
                          "p-6 rounded-2xl border border-primary/20 bg-card/90 backdrop-blur",
                          "transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-glow group-hover:border-primary/40",
                          isEven ? "md:pr-10" : "md:order-2 md:pl-10",
                        ].join(" ")}
                      >
                        <p className="text-xs tracking-wide font-semibold mb-1 text-secondary">
                          {item.month}
                        </p>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.text}</p>
                      </div>

                      {/* image */}
                      <div className={isEven ? "md:order-2" : "md:order-1"}>
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full rounded-2xl object-cover border border-white/20 shadow-dreamy transition-transform duration-300 group-hover:-translate-y-1"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

       

        {/* ====== Polaroid Gallery with Lightbox ====== */}
<section className="container mx-auto max-w-6xl mb-20 text-center relative">
  <h2 className="font-pacifico text-4xl text-secondary mb-2">Life in Polaroids</h2>
  <p className="text-muted-foreground mb-12">Capturing beautiful moments from my journey 📸</p>

  {/* Lightbox Overlay */}
  {selected && (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999] transition-smooth"
      role="dialog"
      aria-modal="true"
      onClick={() => setSelected(null)}
    >
      <div
        className="bg-white/95 rounded-2xl shadow-glow p-4 max-w-3xl w-[90%] cursor-default animate-[fadeZoom_0.35s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selected.img}
          alt={selected.caption}
          className="w-full h-auto rounded-lg object-cover mb-4"
        />
        <p className="text-center font-handwritten text-muted-foreground text-base">
          {selected.caption}
        </p>
      </div>

      <button
        onClick={() => setSelected(null)}
        className="absolute top-6 right-8 text-white text-3xl font-bold hover:scale-110 transition"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  )}

  {/* Polaroid Grid */}
  <div className="grid md:grid-cols-3 gap-10 justify-center">
    {polaroids.map((photo, i) => (
      <button
        key={i}
        type="button"
        onClick={() => setSelected(photo)}
        className={[
          "relative bg-white rounded-2xl shadow-float p-4",
          i === 0 ? "rotate-[3deg]" : i === 1 ? "-rotate-[2deg]" : "rotate-[1deg]",
          "hover:rotate-0 hover:scale-105 transition-all duration-500 text-left",
        ].join(" ")}
      >
        <img src={photo.img} alt={photo.caption} className="rounded-md mb-4 object-cover w-full" />
        <p className="font-handwritten text-muted-foreground text-sm">{photo.caption}</p>
      </button>
    ))}
  </div>
</section>

        {/* ====== CTA (boxed) ====== */}
        <section className="container mx-auto max-w-5xl">
          <Card className="gradient-ocean shadow-glow p-8 border-2 border-white/30 text-center rounded-3xl">
            <h3 className="font-pacifico text-3xl text-white mb-4">
              Want to See My Aesthetic World? 🌊
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Check out my moodboard for all the dreamy vibes, quotes, and inspiration!
            </p>
            <Link to="/moodboard">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-bounce shadow-float"
              >
                View Moodboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
