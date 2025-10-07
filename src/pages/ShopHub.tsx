import { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GraduationCap, FileText, Calendar, Download, Heart, Scale, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

/* =========================================
   Placeholder image URLs (swap any time)
========================================= */
const PLACEHOLDER = {
  hero:
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1920&q=80",
  studyDesk:
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80",
  jewelry:
    "https://images.unsplash.com/photo-1623006770456-4c4e33f5d9cf?auto=format&fit=crop&w=1200&q=80",
  skincare:
    "https://images.unsplash.com/photo-1600181954053-c4a87c3cc536?auto=format&fit=crop&w=1200&q=80",
  travel:
    "https://images.unsplash.com/photo-1582719478170-2bfc0c7f6d99?auto=format&fit=crop&w=1200&q=80",
  loungewear:
    "https://images.unsplash.com/photo-1554568218-0d3cf7a9a07a?auto=format&fit=crop&w=1200&q=80",
  gadgets:
    "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=1200&q=80",
} as const;

/* =========================================
   Mini helpers
========================================= */
const Sparkle = ({ className = "", children }: { className?: string; children: any }) => (
  <div className={`absolute pointer-events-none ${className}`}>{children}</div>
);

const Pill = ({ children, className = "", ...props }: any) => (
  <button
    className={`filter-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

/* =========================================
   Digital Products Section (unchanged)
========================================= */
const CoursesSection = () => {
  const courses = [
    { id: 1, title: "Ultimate Study Guide", icon: GraduationCap, description: "My complete system for acing exams and staying organized", price: "$19", gradient: "from-primary/90 via-primary/70 to-accent/80" },
    { id: 2, title: "Productivity Templates", icon: FileText, description: "Aesthetic Notion templates for planning your dream life", price: "$12", gradient: "from-secondary/90 via-secondary/70 to-accent/80" },
    { id: 3, title: "Travel Itinerary Pack", icon: Calendar, description: "Ready-to-use travel planners for your European adventures", price: "$15", gradient: "from-accent/90 via-accent/70 to-primary/80" },
  ];

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
                <course.icon className="w-20 h-20 mx-auto text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
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
   Segmented Toggle (NEW)
========================================= */
type ShopTab = "affiliate" | "digital";

const SegmentedTabs = ({
  value,
  onChange,
}: {
  value: ShopTab;
  onChange: (v: ShopTab) => void;
}) => {
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
const ShopHub = () => {
  // === NEW: which tab is active
  const [tab, setTab] = useState<ShopTab>("affiliate");

  // ===== Data (using placeholders)
  const productsRaw = [
    { id: 1, name: "Aesthetic Study Desk Setup 📚", type: "Affiliate", price: 45, description: "All the cozy items that make my study space dreamy and productive!", image: PLACEHOLDER.studyDesk, category: "study", rating: 4.9, reviews: 127, labels: ["Featured", "Free Shipping"] },
    { id: 2, name: "My Everyday Jewelry Collection ✨", type: "Affiliate", price: 32, description: "Dainty, minimal pieces that I wear every single day. Simple elegance!", image: PLACEHOLDER.jewelry, category: "lifestyle", rating: 4.8, reviews: 89, labels: ["Best Seller"] },
    { id: 3, name: "Favorite Skincare Routine 🌸", type: "Affiliate", price: 36, description: "The products that transformed my skin! Gentle, effective, and student-friendly.", image: PLACEHOLDER.skincare, category: "lifestyle", rating: 4.8, reviews: 94, labels: ["Trending"] },
    { id: 4, name: "Travel Essentials Kit ✈️", type: "Affiliate", price: 78, description: "Everything I pack for weekend trips and long adventures across Europe!", image: PLACEHOLDER.travel, category: "travel", rating: 5.0, reviews: 23, labels: ["New Arrival", "Sustainable"] },
    { id: 5, name: "Cozy Loungewear Collection 💕", type: "Affiliate", price: 24, description: "Cute and comfy pieces for study sessions and relaxing at home.", image: PLACEHOLDER.loungewear, category: "lifestyle", rating: 4.7, reviews: 156, labels: ["Bestseller"] },
    { id: 6, name: "Tech & Productivity Gadgets 💻", type: "Affiliate", price: 89, description: "The tech that makes my student life easier and more organized!", image: PLACEHOLDER.gadgets, category: "study", rating: 4.9, reviews: 67, labels: ["Premium", "Course Included"] },
  ];

  // ===== UI State
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"all" | "lifestyle" | "study" | "travel">("all");
  const [priceBand, setPriceBand] = useState<"all" | "0-25" | "25-50" | "50-100" | "100+">("all");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [compare, setCompare] = useState<number[]>([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const toastRef = useRef<HTMLDivElement | null>(null);

  // ===== Derived list (affiliate grid)
  const products = useMemo(() => {
    return productsRaw.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      const priceOk =
        priceBand === "all" ||
        (priceBand === "0-25" && p.price >= 0 && p.price <= 25) ||
        (priceBand === "25-50" && p.price > 25 && p.price <= 50) ||
        (priceBand === "50-100" && p.price > 50 && p.price <= 100) ||
        (priceBand === "100+" && p.price > 100);
      if (!priceOk) return false;

      if (!search.trim()) return true;
      const term = search.toLowerCase();
      return p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term);
    });
  }, [productsRaw, category, priceBand, search]);

  // ===== Toast
  const showToast = (msg: string) => {
    if (!toastRef.current) return;
    toastRef.current.textContent = msg;
    toastRef.current.classList.remove("opacity-0", "translate-y-2");
    toastRef.current.classList.add("opacity-100", "translate-y-0");
    setTimeout(() => {
      toastRef.current?.classList.add("opacity-0", "translate-y-2");
      toastRef.current?.classList.remove("opacity-100", "translate-y-0");
    }, 2200);
  };

  // ===== Soft fade-in
  useEffect(() => {
    const cards = document.querySelectorAll(".product-card-fade");
    cards.forEach((el, i) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(16px)";
      setTimeout(() => {
        (el as HTMLElement).style.transition = "all .6s ease";
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, i * 80);
    });
  }, [products.length, category, priceBand, search, tab]);

  // ===== Wishlist / Compare
  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    showToast(wishlist.includes(id) ? "Removed from wishlist" : "Added to wishlist 💕");
  };

  const addCompare = (id: number) => {
    if (compare.includes(id)) return showToast("Item already in comparison");
    if (compare.length >= 3) return showToast("You can compare up to 3 items");
    setCompare((prev) => [...prev, id]);
    showToast("Added to comparison ⚖️");
  };

  const removeCompare = (id: number) => setCompare((prev) => prev.filter((x) => x !== id));

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-text-primary relative">
      {/* Nav */}
      <Navigation />

      {/* Quick link floating icons (right) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col space-y-4">
        <button onClick={() => setShowWishlist(true)} className="bg-secondary/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110">
          <Heart className="w-5 h-5" />
        </button>
        <button onClick={() => setShowCompare(true)} className="bg-accent/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110">
          <Scale className="w-5 h-5" />
        </button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-primary/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110">
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* ===== Hero ===== */}
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

      {/* ===== Floating Toggle + (conditional) Filters ===== */}
<section className="sticky top-[85px] z-[60] flex justify-center px-4">
  <div className="bg-white/60 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg border border-white/30 dark:border-gray-700 rounded-2xl w-full max-w-5xl transition-all duration-300">
    {/* Segmented Tabs */}
    <div className="px-4 pt-3 pb-2">
      <SegmentedTabs value={tab} onChange={setTab} />
    </div>

    {/* Affiliate Filters */}
    {tab === "affiliate" && (
      <div className="px-6 pb-4">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 justify-between">
          {/* Search */}
          <div className="relative flex-1 w-full">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for coastal treasures..."
              className="w-full px-6 py-3 pl-10 rounded-full text-sm border border-gray-200 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-400"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300 text-lg">
              🔍
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {["all", "lifestyle", "study", "travel"].map((key) => (
              <Pill
                key={key}
                onClick={() => setCategory(key as any)}
                className={`text-xs sm:text-sm px-4 py-2 ${
                  category === key
                    ? "bg-pink-400 text-white shadow"
                    : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Pill>
            ))}
          </div>

          {/* Price Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">Price:</span>
            <select
              value={priceBand}
              onChange={(e) => setPriceBand(e.target.value as any)}
              className="text-sm px-3 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-400 focus:outline-none"
            >
              <option value="all">All</option>
              <option value="0-25">$0–25</option>
              <option value="25-50">$25–50</option>
              <option value="50-100">$50–100</option>
              <option value="100+">$100+</option>
            </select>
          </div>
        </div>
      </div>
    )}

    {/* Digital Filters (NEW) */}
    {tab === "digital" && (
      <div className="px-6 pb-4">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 justify-between">
          {/* Search */}
          <div className="relative flex-1 w-full">
            <input
              placeholder="Search for guides, courses, or templates..."
              className="w-full px-6 py-3 pl-10 rounded-full text-sm border border-gray-200 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-400"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300 text-lg">
              🔍
            </div>
          </div>

          {/* Type Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {["All", "Guides", "Templates", "Courses"].map((t) => (
              <Pill
                key={t}
                className={`text-xs sm:text-sm px-4 py-2 ${
                  t === "All"
                    ? "bg-pink-400 text-white shadow"
                    : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                }`}
              >
                {t}
              </Pill>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">Sort:</span>
            <select
              className="text-sm px-3 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-400 focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>
    )}
  </div>
</section>


      {/* ===== Content area switches, other features stay ===== */}
      {tab === "affiliate" ? (
        <main id="featured" className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="font-quicksand text-4xl md:text-5xl text-primary mb-4">Featured Favorites 💕</h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Items I absolutely can’t live without — curated for a cozy coastal vibe.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <Card
                  key={p.id}
                  className="product-card-fade group bg-card/90 border border-primary/10 shadow-float hover:shadow-glow transition-smooth overflow-hidden h-full rounded-2xl"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] w-full">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>

                    {/* badges */}
                    {p.labels?.[0] && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-secondary text-text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {p.labels[0]}
                        </span>
                      </div>
                    )}

                    {/* actions */}
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        onClick={() => toggleWishlist(p.id)}
                        className="bg-white/90 p-2 rounded-full hover:bg-white transition"
                        aria-label="Wishlist"
                      >
                        {wishlist.includes(p.id) ? "❤️" : "🤍"}
                      </button>
                      <button
                        onClick={() => addCompare(p.id)}
                        className="bg-white/90 p-2 rounded-full hover:bg-white transition"
                        aria-label="Compare"
                      >
                        ⚖️
                      </button>
                    </div>

                    {/* rating */}
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-success text-text-primary px-3 py-1 rounded-full text-xs font-medium">
                        ⭐ {p.rating.toFixed(1)} ({p.reviews} reviews)
                      </span>
                    </div>

                    {/* type badge */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-black/60 text-white border-white/30 backdrop-blur">{p.type}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-quicksand text-lg text-primary font-bold leading-tight">{p.name}</h3>
                    <p className="text-muted-foreground mt-1 mb-4 line-clamp-3">{p.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">${p.price}</span>
                        {p.labels?.includes("Course Included") && (
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                            🎓 Course Included
                          </span>
                        )}
                        {p.labels?.includes("Free Shipping") && (
                          <span className="bg-success/10 text-success-700 px-2 py-1 rounded-full text-xs font-medium">
                            🚚 Free Shipping
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link to={`/shop/${p.id}`} className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                      <Button variant="secondary" onClick={() => showToast(`Price tracking enabled for ${p.name} 📊`)}>
                        Track
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load more */}
            <div className="text-center mt-12">
              <Button variant="secondary" className="rounded-full px-8 py-4" onClick={() => showToast("Loading more coastal treasures… ✨")}>
                Load More Treasures ✨
              </Button>
            </div>
          </div>
        </main>
      ) : (
        /* DIGITAL VIEW — reuse your existing section */
        <CoursesSection />
      )}

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
                  onClick={() => setCategory(c.key as any)}
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

      {/* Footer (kept) */}
      <Footer />

      {/* ===== Wishlist Modal (kept) ===== */}
      {showWishlist && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg">
            <div className="text-center">
              <h3 className="font-quicksand text-2xl text-primary mb-4">Your Wishlist 💕</h3>
              <div className="space-y-3 mb-6">
                {wishlist.length === 0 ? (
                  <p className="text-text-secondary">Your wishlist is empty. Start adding items you love!</p>
                ) : (
                  wishlist.map((id) => {
                    const item = productsRaw.find((x) => x.id === id)!;
                    return (
                      <div key={id} className="flex items-center justify-between p-3 bg-surface rounded-lg">
                        <span className="text-text-primary">{item.name}</span>
                        <button
                          className="text-error-500 hover:text-error-700"
                          onClick={() => setWishlist((prev) => prev.filter((x) => x !== id))}
                        >
                          Remove
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
              <Button className="w-full" onClick={() => setShowWishlist(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}

      {/* ===== Comparison Modal (kept) ===== */}
      {showCompare && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-lg">
            <div className="text-center">
              <h3 className="font-quicksand text-2xl text-primary mb-4">Product Comparison ⚖️</h3>
              <div className="space-y-3 mb-6">
                {compare.length === 0 ? (
                  <p className="text-text-secondary">Add products to compare their features and prices!</p>
                ) : (
                  compare.map((id) => {
                    const item = productsRaw.find((x) => x.id === id)!;
                    return (
                      <div key={id} className="flex items-center justify-between p-3 bg-surface rounded-lg">
                        <div>
                          <span className="text-text-primary font-medium">{item.name}</span>
                          <span className="text-primary ml-2">${item.price}</span>
                        </div>
                        <button className="text-error-500 hover:text-error-700" onClick={() => removeCompare(id)}>
                          Remove
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
              <Button className="w-full" onClick={() => setShowCompare(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      <div
        ref={toastRef}
        className="fixed top-24 right-6 bg-primary text-white px-5 py-3 rounded-full shadow-lg z-[65] transition-all duration-300 opacity-0 translate-y-2"
      />
    </div>
  );
};

export default ShopHub;
