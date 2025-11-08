import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Star, Download, Search, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AffiliateProducts from "@/components/AffiliateProducts";

export default function ShopHub() {
  const [tab, setTab] = useState("affiliate");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedItem, setSelectedItem] = useState(null); // ← add this

  const digitalItems = [
    {
      title: "✨ A1 German Course – The Foundation",
      shortDesc: "For absolute beginners who want to start speaking and understanding German in daily life.",
      details: [
        "Bite-sized lessons (so you won’t get overwhelmed)",
        "Everyday phrases I personally used when I first arrived in Germany",
        "My own activity book (fun + simple, perfect if you get bored with heavy textbooks!)"
      ],
      price: "PRICING SOON",
      category: "Course",
      image: "https://images.unsplash.com/photo-1602526219046-84e27f9dc9db?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "✨ A2 German Course – Building Confidence",
      shortDesc: "Continue your journey to express yourself confidently in everyday conversations.",
      details: [
        "Grammar explained in easy terms",
        "Real-life examples (messages, small talk, workplace convos)",
        "Free activity book with practice exercises to make learning less stressful"
      ],
      price: "PRICING SOON",
      category: "Course",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "💌 Email Drafts – Ausbildung & Student Edition",
      shortDesc: "Ready-to-edit email templates for students and trainees who need to sound confident and professional.",
      details: [
        "Templates for Ausbildung applications and inquiries.",
        "Excuse letters for school or work (sick leave, absences, etc.).",
        "Formal request emails for extensions, schedules, and permissions.",
        "Tone and format guidance to make your message sound natural and polite."
      ],
      price: "PRICING SOON",
      category: "Template",
      image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba5?auto=format&fit=crop&w=600&q=80",
    }
    ,
    {
      title: "💰 Budgeting Sheets – Track Your Finances Abroad",
      shortDesc: "Simple and visual budgeting templates to help students and trainees manage their allowance or salary with ease.",
      details: [
        "Monthly tracker for income, savings, and expenses.",
        "Pre-filled categories for food, rent, transport, and leisure.",
        "Automatic summaries and insights for better spending habits.",
        "Perfect for those balancing school and part-time work abroad."
      ],
      price: "PRICING SOON",
      category: "Template",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=600&q=80",
    }
    ,
    {
      title: "📚 Study Planners – Stay Organized & Focused",
      shortDesc: "Digital planners to help you organize your study time and maintain balance with work or personal life.",
      details: [
        "Weekly and monthly layouts for subjects and goals.",
        "Track deadlines, exams, and progress visually.",
        "Built-in space for reflection and motivation notes.",
        "Ideal for students preparing for exams or balancing dual study programs."
      ],
      price: "PRICING SOON",
      category: "Template",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    }
    ,
    {
      title: "🗓️ Content Planners – Share Your Journey Online",
      shortDesc: "Plan, schedule, and organize your social media content like a pro — even as a busy student abroad.",
      details: [
        "Monthly posting calendar and idea tracker.",
        "Sections for captions, hashtags, and analytics.",
        "Helps you stay consistent without burnout.",
        "Perfect for students documenting their Ausbildung or study life online."
      ],
      price: "PRICING SOON",
      category: "Template",
      image: "https://images.unsplash.com/photo-1590608897129-79da98d159cc?auto=format&fit=crop&w=600&q=80",
    }
    ,
  ];
  
  

  const filteredItems = digitalItems
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) => (filter === "all" ? true : item.category === filter))
    .slice(0, visibleCount);

  // Smooth scroll to element
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-500 scroll-smooth">
    <Navigation />

    {/* HERO SECTION */}
    <section className="pt-28 pb-20 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="font-pacifico text-5xl md:text-6xl text-primary dark:text-pink-300 drop-shadow-sm transition-colors duration-500">
          Dary’s Curated Finds 🌷
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 max-w-xl leading-relaxed transition-colors duration-500">
          A cozy collection of affiliate favorites and digital goods — blending cuteness,
          creativity, and calm energy ✨
        </p>

        {/* TOGGLE BUTTONS */}
        <div className="flex justify-center md:justify-start gap-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-full p-1 shadow-inner border border-pink-200 dark:border-gray-700 w-fit mx-auto md:mx-0 transition-colors duration-500">
          <Button
            onClick={() => setTab("affiliate")}
            className={`rounded-full text-sm px-5 py-3 transition-all ${
              tab === "affiliate"
                ? "bg-pink-400 text-white"
                : "bg-transparent text-primary dark:text-gray-200 hover:bg-pink-100 dark:hover:bg-gray-700"
            }`}
          >
            Affiliate Finds 🛍️
          </Button>
          <Button
            onClick={() => setTab("digital")}
            className={`rounded-full text-sm px-5 py-3 transition-all ${
              tab === "digital"
                ? "bg-pink-400 text-white"
                : "bg-transparent text-primary dark:text-gray-200 hover:bg-pink-100 dark:hover:bg-gray-700"
            }`}
          >
            Digital Items 💾
          </Button>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="flex-1 relative">
        <div className="absolute -top-6 -left-8 w-24 h-24 bg-pink-200 dark:bg-pink-900 rounded-full blur-2xl opacity-60 transition-colors duration-500"></div>
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
          alt="Shop aesthetic"
          className="rounded-3xl shadow-xl w-full object-cover transition-all duration-500"
        />
      </div>
    </section>

    {/* CONTENT SECTION */}
    <section className="relative px-6 md:px-12 py-16 ">
      <div className="grid md:grid-cols-4 gap-10">
        {/* SIDEBAR */}
        <aside className="md:col-span-1 space-y-6 md:sticky md:top-28 h-fit">
          <Card className="space-y-2 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-center shadow-md rounded-2xl border-2 border-pink-200 dark:border-gray-700 transition-colors duration-500">
            <Sparkles className="mx-auto text-pink-400 w-6 h-6 mb-2" />
            <h3 className="font-quicksand text-lg font-bold text-primary dark:text-pink-300 mb-2 transition-colors duration-500">
              Curated for You
            </h3>
            <p className="space-y-2 p-3 text-sm text-muted-foreground dark:text-gray-300 transition-colors duration-500">
              Handpicked items I personally use and adore — with affiliate links for transparency 💖
            </p>
          </Card>

          {/* QUICK LINKS */}
          <Card className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl shadow-sm transition-colors duration-500">
            <h4 className="font-bold mb-3 text-primary dark:text-pink-300 text-center transition-colors duration-500">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-300 transition-colors duration-500">
              <li>
                <button
                  onClick={() => {
                    setTab("affiliate");
                    setTimeout(() => scrollToSection("trending"), 100);
                  }}
                  className="hover:text-primary dark:hover:text-pink-300 transition-colors"
                >
                  🌸 Trending Finds
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setTab("digital");
                    setTimeout(() => scrollToSection("digital"), 100);
                  }}
                  className="hover:text-primary dark:hover:text-pink-300 transition-colors"
                >
                  💾 Digital Items
                </button>
              </li>
            </ul>
          </Card>
        </aside>

        {/* MAIN CONTENT */}
        <main className="md:col-span-3 space-y-20">
          {tab === "affiliate" && (
            <section id="trending">
              <h2 className="font-pacifico text-4xl text-primary dark:text-pink-300 mb-6 transition-colors duration-500">
                🌼 Trending Picks
              </h2>
              <AffiliateProducts />
            </section>
          )}

          {tab === "digital" && (
            <section id="digital" className="relative">
              <h2 className="font-pacifico text-4xl text-primary dark:text-pink-300 mb-6 transition-colors duration-500">
                💾 Digital Treasures
              </h2>

              {/* FLOATING FILTER BAR */}
              <div className="sticky top-24 z-20 mb-8">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-pink-200 dark:border-gray-700 rounded-full shadow-md px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-500">
                  {/* SEARCH */}
                  <div className="relative w-full sm:w-1/2">
                    <Search className="absolute left-3 top-3 text-muted-foreground dark:text-gray-300 w-5 h-5 transition-colors duration-500" />
                    <input
                      type="text"
                      placeholder="Search digital items..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-pink-200 dark:border-gray-700 rounded-full focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-400 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 transition-colors duration-500"
                    />
                  </div>

                  {/* FILTER */}
                  <div className="relative w-full sm:w-40">
                    <Filter className="absolute left-2 top-2.5 text-muted-foreground dark:text-gray-300 w-4 h-4 transition-colors duration-500" />
                    <select
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className="pl-8 pr-4 py-2 w-full border border-pink-200 dark:border-gray-700 rounded-full bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-400 text-sm text-gray-700 dark:text-gray-200 transition-colors duration-500"
                    >
                      <option value="all">All Categories</option>
                      <option value="Course">Course</option>
                      <option value="Template">Template</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ITEM CARDS */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, i) => (
                  <Card
                    key={i}
                    className="overflow-hidden border border-pink-200 dark:border-gray-700 rounded-2xl hover:shadow-lg transition-all bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex flex-col justify-between p-6 transition-colors duration-500"
                  >
                    <h3 className="font-quicksand font-bold text-lg text-primary dark:text-pink-300 text-center mb-4 transition-colors duration-500">
                      {item.title}
                    </h3>
                    <Button
                      onClick={() => setSelectedItem(item)}
                      className="rounded-full text-sm bg-pink-400 text-white hover:bg-pink-500 mx-auto"
                    >
                      Coming Soon
                    </Button>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </section>

    <Footer />
  </div>
  );
}
