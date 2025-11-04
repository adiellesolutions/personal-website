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
      month: "2010s",
      title: "The Dreamer Phase 🌙",
      text:
        "Little me in the Philippines, already daydreaming about science, books, and being that girl who chases big dreams. Fun fact: I once read that Einstein was German and thought, “bet, I’ll go there too.” 😂",
      img: journey2,
    },
    {
      month: "2019",
      title: "The Hustler Student 📚",
      text:
        "High school me: joining science orgs, quiz bees, leadership stuff — basically saying “yes” to everything because I wanted more than “just enough.” My mom saw that spark and supported me even if life wasn’t easy.",
      img: journey3,
    },
    {
      month: "2022",
      title: "Big Decisions ✈️",
      text:
        "While everyone else was planning safe routes, I said: nope, I’m flying to Europe Germany challenged me the most, so I picked it — no regrets (I guess 🫣)",
      img: journey4,
    },
    {
      month: "2024",
      title: "New Chapter 🇩🇪",
      text:
        "Moved to Germany at 20 with a suitcase, shaky German, and a whole lot of courage. Started my Ausbildung and the classic expat struggles: culture shocks and homesickness. days journaling in cozy Munich cafés — finding peace in slow mornings.",
      img: journey5,
    },
    {
      month: "2025",
      title: "Glow-Up & Grit Era 💪",
      text: "Learning to balance Ausbildung, traveling on a budget, studying German, creating content, and finding self-care routines that keep me from burning out. I also started sharing my story online — turns out, people actually relate (and here you are reading this 🥹).Started experimenting with content creation and digital art.",
      img: journey6,
    },
    {
      month: "Present",
      title: "Building Something Bigger 🌍",
      text:
        "Now 21, I’m trying to build something.. creating digital products, travel guides, German study tips, and lifestyle content. My goal? To help dreamers like me —the ones who feel underestimated, too young, or too scared — to still go for it.",
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

              <p className="text-muted-foreground leading-relaxed  mt-4 text-justify">
                Hi, I’m Dary! At 21, I packed my life into a suitcase and moved from the
                Philippines to Germany. Why? Because little me once saw that Einstein was
                German and thought, “bet, I’ll go there too.” 😂
              </p>

              <p className="text-muted-foreground leading-relaxed text-justify">
                I share the lessons, magic, and inspiration I’ve found in
                creating an aesthetic, intentional life — from cozy study vibes
                to adventures abroad.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4 text-justify">
                Now here I am: juggling Ausbildung, studying German (yes, even the scary
                grammar), traveling on a budget, and learning how to adult in a foreign country.
                It’s not always easy — I’ve cried over missed trains, burnt rice, and cultural
                shocks — but I’ve also learned resilience, independence, and how rewarding it
                feels to start over.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4 text-justify">
                I’m passionate about lifestyle, travel, science, and self-growth. My content is a mix of:
              </p>

              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mt-2 space-y-1 text-justify">
                <li>👗 OOTDs that make me feel alive</li>
                <li>✈️ Travel itineraries + random trips that keep me sane</li>
                <li>💆 Self-care routines (because self-love ≠ burnout)</li>
                <li>📚 German study + Ausbildung tips</li>
                <li>💌 Motivational reminders for dreamers like me</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mt-4 text-justify">
                This website? It’s not just my diary but also a reminder that even if you’re young,
                scared, or underestimated — you can still build a life worth bragging about. ✨
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
                      <p className="text-muted-foreground text-justify leading-relaxed">
                        {item.text}
                      </p>
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
