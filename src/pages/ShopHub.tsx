import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, GraduationCap, FileText, Calendar } from "lucide-react";
import AffiliateProducts from "@/components/AffiliateProducts";

/* =========================================
   Local helpers & placeholders used in hero
========================================= */
const PLACEHOLDER = {
  hero:
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1920&q=80",
} as const;

const Sparkle = ({ className = "", children }: { className?: string; children: any }) => (
  <div className={`absolute pointer-events-none ${className}`}>{children}</div>
);

/* =========================================
   Courses Section (kept here so we only have 2 files)
========================================= */
const CoursesSection = () => {
  const courses = [
    { id: 1, title: "Ultimate Study Guide", Icon: GraduationCap, description: "My complete system for acing exams and staying organized", price: "€19", gradient: "from-primary/90 via-primary/70 to-accent/80" },
    { id: 2, title: "Productivity Templates", Icon: FileText, description: "Aesthetic Notion templates for planning your dream life", price: "€12", gradient: "from-secondary/90 via-secondary/70 to-accent/80" },
    { id: 3, title: "Travel Itinerary Pack", Icon: Calendar, description: "Ready-to-use travel planners for your European adventures", price: "€15", gradient: "from-accent/90 via-accent/70 to-primary/80" },
  ] as const;

  return (
    <section id="courses" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-pacifico text-4xl md:text-5xl text-center mb-4 text-primary">Digital Products</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Templates & guides to help you thrive 💕</p>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group border-2 border-accent/20 bg-white/80 backdrop-blur shadow-float hover:shadow-glow transition-smooth overflow-hidden rounded-2xl"
            >
              <div className={`bg-gradient-to-br ${course.gradient} p-8 text-center`}>
                <course.Icon className="w-20 h-20 mx-auto text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-quicksand font-bold text-2xl text-white">{course.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4 min-h-[3rem]">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-primary">{course.price}</span>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-transform active:scale-[.98]">
                  Get This Template
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================
   Segmented Tabs (sticky; affiliate/digital)
========================================= */
type ShopTab = "affiliate" | "digital";
const SegmentedTabs = ({ value, onChange }: { value: ShopTab; onChange: (v: ShopTab) => void }) => {
  const isAffiliate = value === "affiliate";
  return (
    <div className="relative w-full max-w-[360px] mx-auto">
      <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-white/30 dark:border-gray-700 rounded-full px-1 py-1 shadow-md flex">
        <div
          className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-pink-400/90 dark:bg-pink-500/90 shadow transition-transform duration-300 ${
            isAffiliate ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <button
          onClick={() => onChange("affiliate")}
          className={`relative z-10 flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            isAffiliate ? "text-white" : "text-pink-600 dark:text-pink-300"
          }`}
        >
          Affiliate
        </button>
        <button
          onClick={() => onChange("digital")}
          className={`relative z-10 flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !isAffiliate ? "text-white" : "text-pink-600 dark:text-pink-300"
          }`}
        >
          Digital
        </button>
      </div>
    </div>
  );
};

/* =========================================
   Main Page
========================================= */
export default function ShopHub() {
  const [tab, setTab] = useState<ShopTab>("affiliate");

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-text-primary relative">
      {/* Nav */}
      <Navigation />

      {/* ===== Hero (kept) ===== */}
      <section id="hero" className="relative pt-28 md:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={PLACEHOLDER.hero}
            alt="Curated Shop Background"
            className="w-full h-full object-cover"
            onError={(e: any) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=2000&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        </div>

        <Sparkle className="top-20 left-16 text-2xl">✨</Sparkle>
        <Sparkle className="top-28 right-24 text-xl">🛍️</Sparkle>
        <Sparkle className="bottom-16 left-12 text-lg">🌸</Sparkle>
        <Sparkle className="bottom-28 right-16 text-2xl">💎</Sparkle>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-accent text-5xl md:text-7xl text-primary mb-4 drop-shadow-sm">My Curated Shop</h1>
          <p className="font-quicksand text-xl md:text-2xl text-text-primary mb-8 max-w-2xl mx-auto leading-relaxed">
            Handpicked treasures that bring coastal magic to your everyday life ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => scrollToId("featured")} className="text-lg px-8 py-6 rounded-full shadow-md">
              Shop Featured Items 🌊
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToId("categories")}
              className="text-lg px-8 py-6 rounded-full shadow-md"
            >
              Browse Categories 📖
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* ===== Sticky Tabs (kept; now focused on switching views) ===== */}
      <section className="sticky top-[85px] z-[60] flex justify-center px-4">
        <div className="bg-white/60 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg border border-white/30 dark:border-gray-700 rounded-2xl w-full max-w-5xl transition-all duration-300">
          <div className="px-4 py-3">
            <SegmentedTabs value={tab} onChange={setTab} />
          </div>
        </div>
      </section>

      {/* ===== Content area switch (Affiliate / Digital) ===== */}
      {tab === "affiliate" ? <AffiliateProducts /> : <CoursesSection />}

      {/* ===== Categories (kept) ===== */}
      <section id="categories" className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-quicksand text-4xl md:text-5xl text-primary mb-4">Shop by Category 🌊</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">Discover curated collections for every aspect of your coastal lifestyle</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { key: "lifestyle", emoji: "🌸", title: "Lifestyle Essentials", desc: "Beautiful items that elevate your daily routines." },
              { key: "study", emoji: "📚", title: "Study & Productivity", desc: "Boost productivity with selected tools & resources." },
              { key: "travel", emoji: "✈️", title: "Travel Essentials", desc: "Everything you need for wanderlust-worthy journeys." },
            ].map((c) => (
              <div key={c.key} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-lg transition text-center group">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                  <span className="text-3xl">{c.emoji}</span>
                </div>
                <h3 className="font-quicksand text-2xl text-primary mb-4">{c.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">{c.desc}</p>
                <Button
                  variant="secondary"
                  className="rounded-full w-full"
                  onClick={() => {
                    const el = document.getElementById("featured");
                    if (el && tab !== "affiliate") window.alert("Switch to Affiliate to filter by category 😊");
                    // No cross-component state lift to keep two-file constraint
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore {c.title.split(" ")[0]}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Trust Signals (kept) ===== */}
      <section className="py-16 bg-gradient-to-br from-surface to-primary/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md">
            <div className="text-center mb-8">
              <h3 className="font-quicksand text-2xl text-primary mb-2">Shop with Confidence 🛡️</h3>
              <p className="text-text-secondary">Your trust is my priority.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { emoji: "🔒", t: "Secure Shopping", d: "SSL encrypted checkout" },
                { emoji: "💝", t: "Curated with Love", d: "Personally tested items" },
                { emoji: "🌟", t: "Quality Guaranteed", d: "30-day satisfaction" },
                { emoji: "💌", t: "Transparent Affiliate", d: "Clear & honest reviews" },
              ].map((x, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4 text-2xl">{x.emoji}</div>
                  <h4 className="font-quicksand text-lg text-primary mb-1">{x.t}</h4>
                  <p className="text-sm text-text-secondary">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 p-4 bg-primary/10 rounded-lg text-sm text-text-secondary">
              <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. I may earn a small commission if you purchase, at no extra cost to you. I only recommend products I love and use. 💕
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
