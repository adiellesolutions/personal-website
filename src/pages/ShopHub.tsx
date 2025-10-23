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

  const digitalItems = [
    {
      title: "✨ Study Organizer Template",
      desc: "Plan smarter and prettier with this Notion-based template — designed for students who want both focus and flair!",
      price: "₱249",
      category: "student",
      image:
        "https://images.unsplash.com/photo-1602526219046-84e27f9dc9db?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "🧠 Productivity Dashboard",
      desc: "Stay on top of your goals, tasks, and dreams with this clean but cute Notion setup.",
      price: "₱199",
      category: "productivity",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "🎨 Creative Content Planner",
      desc: "Ideal for content creators who want to stay organized while keeping aesthetics in check.",
      price: "₱299",
      category: "creator",
      image:
        "https://images.unsplash.com/photo-1612831816579-05ef7d1a4450?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "💰 Finance Tracker",
      desc: "Track your savings and expenses in style — aesthetic budgeting made simple.",
      price: "₱179",
      category: "finance",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437d4?auto=format&fit=crop&w=600&q=80",
    },
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 scroll-smooth">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-28 pb-20 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="font-pacifico text-5xl md:text-6xl text-primary drop-shadow-sm">
            Dary’s Curated Finds 🌷
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            A cozy collection of affiliate favorites and digital goods — blending cuteness,
            creativity, and calm energy ✨
          </p>

          {/* TOGGLE BUTTONS */}
          <div className="flex justify-center md:justify-start gap-4 bg-white/70 backdrop-blur-md rounded-full p-1 shadow-inner border border-pink-200 w-fit mx-auto md:mx-0">
            <Button
              onClick={() => setTab("affiliate")}
              className={`rounded-full text-sm px-5 py-3 transition-all ${
                tab === "affiliate"
                  ? "bg-pink-400 text-white"
                  : "bg-transparent text-primary hover:bg-pink-100"
              }`}
            >
              Affiliate Finds 🛍️
            </Button>
            <Button
              onClick={() => setTab("digital")}
              className={`rounded-full text-sm px-5 py-3 transition-all ${
                tab === "digital"
                  ? "bg-pink-400 text-white"
                  : "bg-transparent text-primary hover:bg-pink-100"
              }`}
            >
              Digital Items 💾
            </Button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="flex-1 relative">
          <div className="absolute -top-6 -left-8 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-60"></div>
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
            alt="Shop aesthetic"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="relative px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* SIDEBAR */}
          <aside className="md:col-span-1 space-y-6 md:sticky md:top-28 h-fit">
            <Card className="bg-white/80 backdrop-blur-md p-6 text-center shadow-md rounded-2xl border-2 border-pink-200">
              <Sparkles className="mx-auto text-pink-400 w-6 h-6 mb-2" />
              <h3 className="font-quicksand text-lg font-bold text-primary mb-2">
                Curated for You
              </h3>
              <p className="text-sm text-muted-foreground">
                Handpicked items I personally use and adore — with affiliate links for transparency 💖
              </p>
            </Card>

            {/* UPDATED QUICK LINKS */}
            <Card className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-2xl shadow-sm">
              <h4 className="font-bold mb-3 text-primary text-center">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={() => {
                      setTab("affiliate");
                      setTimeout(() => scrollToSection("trending"), 100);
                    }}
                    className="hover:text-primary transition-colors"
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
                    className="hover:text-primary transition-colors"
                  >
                    💾 Digital Items
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("reviews")}
                    className="hover:text-primary transition-colors"
                  >
                    💬 Reviews
                  </button>
                </li>
              </ul>
            </Card>
          </aside>

          {/* MAIN CONTENT */}
          <main className="md:col-span-3 space-y-20">
            {/* AFFILIATE TAB */}
            {tab === "affiliate" && (
              <section id="trending">
                <h2 className="font-pacifico text-4xl text-primary mb-6">
                  🌼 Trending Picks
                </h2>
                <AffiliateProducts />
              </section>
            )}

            {/* DIGITAL TAB */}
            {tab === "digital" && (
              <section id="digital" className="relative">
                <h2 className="font-pacifico text-4xl text-primary mb-6">
                  💾 Digital Treasures
                </h2>

                {/* FLOATING FILTER BAR */}
                <div className="sticky top-24 z-20 mb-8">
                  <div className="bg-white/80 backdrop-blur-md border border-pink-200 rounded-full shadow-md px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* SEARCH */}
                    <div className="relative w-full sm:w-1/2">
                      <Search className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search digital items..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-pink-200 rounded-full focus:ring-2 focus:ring-pink-300 bg-white/80"
                      />
                    </div>

                    {/* FILTER */}
                    <div className="relative w-full sm:w-40">
                      <Filter className="absolute left-2 top-2.5 text-muted-foreground w-4 h-4" />
                      <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="pl-8 pr-4 py-2 w-full border border-pink-200 rounded-full bg-white/80 focus:ring-2 focus:ring-pink-300 text-sm"
                      >
                        <option value="all">All Categories</option>
                        <option value="student">Student</option>
                        <option value="productivity">Productivity</option>
                        <option value="creator">Creator</option>
                        <option value="finance">Finance</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* ITEM CARDS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems.map((item, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden border border-pink-200 rounded-2xl hover:shadow-lg transition-all bg-white/80 backdrop-blur-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-5 space-y-3">
                        <h3 className="font-quicksand font-bold text-lg text-primary">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-primary">{item.price}</span>
                          <Button className="text-xs rounded-full">
                            Get Now <Download className="w-3 h-3 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* LOAD MORE BUTTON */}
                {visibleCount < digitalItems.length && (
                  <div className="text-center mt-10">
                    <Button
                      onClick={() => setVisibleCount((prev) => prev + 3)}
                      className="rounded-full bg-pink-400 hover:bg-pink-500 text-white px-6 py-3"
                    >
                      Load More Treasures ✨
                    </Button>
                  </div>
                )}
              </section>
            )}

            {/* REVIEWS */}
            <section
              id="reviews"
              className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-pink-200"
            >
              <h2 className="font-pacifico text-3xl text-primary mb-6 text-center">
                💬 Customer Reviews
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Lea G.",
                    quote:
                      "Everything here feels so intentional and adorable — it’s like shopping in a dream 💕",
                  },
                  {
                    name: "Kim A.",
                    quote:
                      "I love the templates! Clean, useful, and totally aesthetic 🌸",
                  },
                  {
                    name: "Jan R.",
                    quote:
                      "The affiliate recommendations are honest and reliable. You can tell there’s care behind it!",
                  },
                ].map((r, i) => (
                  <Card
                    key={i}
                    className="bg-pink-50/60 p-6 rounded-2xl text-center shadow-sm"
                  >
                    <p className="italic text-muted-foreground mb-3">
                      “{r.quote}”
                    </p>
                    <h4 className="font-quicksand font-semibold text-primary">
                      {r.name}
                    </h4>
                    <div className="flex justify-center mt-2 text-yellow-400">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400" />
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </main>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-16 text-center bg-gradient-to-r from-pink-100 to-purple-100">
        <h3 className="font-pacifico text-4xl text-primary mb-4">
          💝 Thank You for Visiting
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Each click, download, and purchase supports small creators like me — thank you for being part of this cozy creative journey 🌷
        </p>
      </section>

      <Footer />
    </div>
  );
}
