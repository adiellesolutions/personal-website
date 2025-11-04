import { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import product1 from "@/assets/product1.png";
import product2 from "@/assets/product2.png";
import product3 from "@/assets/product3.png";
import product4 from "@/assets/product4.png";
import product5 from "@/assets/product5.png";
import product6 from "@/assets/product6.png";




/* =========================
   Types (local to this file)
========================= */
type Category = "all" | "lifestyle" | "study" | "travel";
type PriceBand = "all" | "0-25" | "25-50" | "50-100" | "100+";

type Product = {
  id: number;
  name: string;
  type: "Affiliate" | "Digital";
  price: number;
  description: string;
  image: string;
  category: Exclude<Category, "all">;
  rating: number;
  reviews: number;
  labels?: string[];
  link?: string;               // ← added
};

/* =========================
   Data (all-in-one here)
========================= */
const PLACEHOLDER = {
  vestshort: product1,
  hairclip: product2,
  coat: product3,
  slipper: product4,
  dress: product5,
  shirt:product6,
} as const;

const productsRaw: Product[] = [
  { 
    id: 1, 
    name: "Francila Premium Vest + Shorts Set 👗", 
    type: "Affiliate", 
    price: 22.27, 
    description: "Boss babe vibes but still comfy chic!", 
    image: PLACEHOLDER.vestshort, 
    category: "lifestyle", 
    rating: 4.9, 
    reviews: 127, 
    labels: ["Featured", "Free Shipping"],
    link: "Product1"    // 👈 Custom link here
  },
  { 
    id: 2, 
    name: "Butterfly Hair Clip 🦋", 
    type: "Affiliate", 
    price: 2.68, 
    description: "Turn every messy bun into a fairycore look!", 
    image: PLACEHOLDER.hairclip, 
    category: "lifestyle", 
    rating: 4.8, 
    reviews: 89, 
    labels: ["Best Seller"],
    link: "Product2"
  },
  { 
    id: 3, 
    name: "Classic Black Wool Coat 🧥", 
    type: "Affiliate", 
    price: 45.99, 
    description: "Your timeless “put together” coat for all seasons.", 
    image: PLACEHOLDER.coat, 
    category: "lifestyle", 
    rating: 4.8, 
    reviews: 94, 
    labels: ["Trending"],
    link: "Product3"
  },
  { 
    id: 4, 
    name: "Blue Bow Slippers 💙", 
    type: "Affiliate", 
    price: 9.88, 
    description: "Cute + cozy = the slippers you didn't know you need!", 
    image: PLACEHOLDER.slipper, 
    category: "lifestyle", 
    rating: 5.0, 
    reviews: 23, 
    labels: ["New Arrival", "Sustainable"],
    link: "https://yourlinkhere.com/slippers"
  },
  { 
    id: 5, 
    name: "Soleia Yellow 2-Piece Dress ☀️", 
    type: "Affiliate", 
    price: 40.99, 
    description: "The sunshine dress for your dreamy summer moments!", 
    image: PLACEHOLDER.dress, 
    category: "lifestyle", 
    rating: 4.7, 
    reviews: 156, 
    labels: ["Bestseller"],
    link: "https://yourlinkhere.com/dress"
  },
  { 
    id: 6, 
    name: "TRNVIE White Tailored Shirt 🤍", 
    type: "Affiliate", 
    price: 10.19, 
    description: "That “clean girl aesthetic” office-to-dinner top!", 
    image: PLACEHOLDER.shirt, 
    category: "lifestyle", 
    rating: 4.9, 
    reviews: 67, 
    labels: ["Premium", "Course Included"],
    link: "https://yourlinkhere.com/shirt"
  },
];


/* =========================
   Tiny UI helpers (local)
========================= */
const Pill = ({ children, className = "", ...props }: any) => (
  <button className={`filter-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${className}`} {...props}>
    {children}
  </button>
);

function ProductCard({
  p,
  isWishlisted,
  onToggleWishlist,
  onAddCompare,
  onTrack,
}: {
  p: Product;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
  onAddCompare: (id: number) => void;
  onTrack: (name: string) => void;
}) {
  return (
    <Card className="product-card-fade group bg-card/90 border border-primary/10 shadow-float hover:shadow-glow transition-smooth overflow-hidden h-full rounded-2xl">
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
            onClick={() => onToggleWishlist(p.id)}
            className="bg-white/90 p-2 rounded-full hover:bg-white transition"
            aria-label="Wishlist"
          >
            {isWishlisted ? "❤️" : "🤍"}
          </button>
          <button
            onClick={() => onAddCompare(p.id)}
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
            <span className="text-2xl font-bold text-primary">€{p.price}</span>
            {p.labels?.includes("Course Included") && (
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">🎓 Course Included</span>
            )}
            {p.labels?.includes("Free Shipping") && (
              <span className="bg-success/10 text-success-700 px-2 py-1 rounded-full text-xs font-medium">🚚 Free Shipping</span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
        <Link to={`/ProductDetails/Product${p.id}`}>
  <Button variant="secondary" onClick={() => onTrack(p.name)}>
    View Details
  </Button>
</Link>

</div>

      </div>
    </Card>
  );
}

/* =========================
   Filters block (local)
========================= */
function AffiliateFilters({
  search,
  setSearch,
  category,
  setCategory,
  priceBand,
  setPriceBand,
}: {
  search: string;
  setSearch: (s: string) => void;
  category: Category;
  setCategory: (c: Category) => void;
  priceBand: PriceBand;
  setPriceBand: (p: PriceBand) => void;
}) {
  return (
    <div className="sticky top-[85px] z-[60] flex justify-center px-4">
      <div className="bg-white/60 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg border border-white/30 dark:border-gray-700 rounded-2xl w-full max-w-5xl transition-all duration-300">
        <div className="px-6 pb-4 pt-4">
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
                  onClick={() => setCategory(key as Category)}
                  className={`text-xs sm:text-sm px-4 py-2 ${
                    category === key ? "bg-pink-400 text-white shadow" : "bg-pink-100 text-pink-600 hover:bg-pink-200"
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
                onChange={(e) => setPriceBand(e.target.value as PriceBand)}
                className="text-sm px-3 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-400 focus:outline-none"
              >
                <option value="all">All</option>
                <option value="0-25">€0–25</option>
                <option value="25-50">€25–50</option>
                <option value="50-100">€50–100</option>
                <option value="100+">€100+</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Main export: Affiliate view
========================= */
export default function AffiliateProducts() {
  // UI state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [priceBand, setPriceBand] = useState<PriceBand>("all");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [compare, setCompare] = useState<number[]>([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const toastRef = useRef<HTMLDivElement | null>(null);

  // Derived list
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
  }, [category, priceBand, search]);

  // Toast helper
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

  // Soft fade-in
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
  }, [products.length, category, priceBand, search]);

  // Wishlist / Compare
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

  return (
    <>
      {/* Filters (no tabs here) */}
      <AffiliateFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        priceBand={priceBand}
        setPriceBand={setPriceBand}
      />

      {/* Grid */}
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
              <ProductCard
                key={p.id}
                p={p}
                isWishlisted={wishlist.includes(p.id)}
                onToggleWishlist={toggleWishlist}
                onAddCompare={addCompare}
                onTrack={(name) => showToast(`Price tracking enabled for ${name} 📊`)}
              />
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <Button
              variant="secondary"
              className="rounded-full px-8 py-4"
              onClick={() => showToast("Loading more coastal treasures… ✨")}
            >
              Load More Treasures ✨
            </Button>
          </div>
        </div>
      </main>

      {/* Wishlist Modal */}
      <Modal open={showWishlist} onClose={() => setShowWishlist(false)} title="Your Wishlist 💕">
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
      </Modal>

      {/* Compare Modal */}
      <Modal open={showCompare} onClose={() => setShowCompare(false)} title="Product Comparison ⚖️">
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
                    <span className="text-primary ml-2">€{item.price}</span>
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
      </Modal>

      {/* Quick action buttons (optional, keep here to keep it self-contained) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col space-y-4">
        <button onClick={() => setShowWishlist(true)} className="bg-secondary/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110">
          ❤️
        </button>
        <button onClick={() => setShowCompare(true)} className="bg-accent/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110">
          ⚖️
        </button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-primary/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110">
          ↑
        </button>
      </div>

      {/* Toast */}
      <div
        ref={toastRef}
        className="fixed top-24 right-6 bg-primary text-white px-5 py-3 rounded-full shadow-lg z-[65] transition-all duration-300 opacity-0 translate-y-2"
      />
    </>
  );
}

/* Simple Modal component (local) */
function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-xl shadow-lg">
        <div className="text-center">
          <h3 className="font-quicksand text-2xl text-primary mb-4">{title}</h3>
          {children}
        </div>
        <button
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
    </div>
  );
}
