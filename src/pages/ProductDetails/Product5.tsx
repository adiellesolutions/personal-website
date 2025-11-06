import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Star, CheckCircle, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import product51 from "@/assets/product5.png";
import product52 from "@/assets/product52.png";
import product53 from "@/assets/product53.png";
import product54 from "@/assets/product54.png";
import useScrollToTop from "@/hooks/useScrollToTop";
import RelatedProducts from "@/components/RelatedProducts";



type ProductItem = {
  id: string;
  name: string;
  price: string;
  link?: string;
  short: string;
};

type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  compareAt?: string;
  discount?: string;
  shortDescription: string;
  heroImage: string;
  gallery: string[];
  items: ProductItem[];
  whyILoveIt: string[];
  testimonials: { name: string; role: string; quote: string; avatar?: string }[];
};

const MOCK_PRODUCT: Product = {
  
  id: "coastal-planner",
  name: "Soleia Yellow 2-Piece Dress",
  subtitle: "The sunshine dress for your dreamy summer moments",
  price: "€40.99",
 // compareAt: "€49",
//discount: "40% OFF",
  shortDescription:
    "Bright, breezy, and beautifully effortless — the Soleia Yellow 2-Piece Dress is made for those golden-hour days. With its flattering fit and flowy design, it brings out that sunshine glow wherever you go. Perfect for brunch dates, picnics, or spontaneous summer adventures, this set makes every moment feel like a warm daydream.",
  heroImage:
    product51,
  gallery: [
    product52, product53, product54
  ],
  items: [
    { id: "planner-pdf", name: "Coastal Planner PDF (50+ pages)", price: "€19", link: "https://affiliate.example.com/planner-pdf", short: "Printable and tablet-ready layouts." },
    { id: "habit-tracker", name: "90-Day Habit Tracker", price: "€9", link: "https://affiliate.example.com/habit-tracker", short: "Build consistent routines effortlessly." },
    { id: "playlist", name: "Curated Study Playlist (Bonus)", price: "Free", link: "https://affiliate.example.com/playlist", short: "Lo-fi and gentle ocean ambience mix." },
  ],
  whyILoveIt: [
    "Radiates sunshine energy — instantly lifts your mood ☀️",
    "Flattering two-piece design that highlights your silhouette beautifully",
    "Lightweight and breathable — perfect for warm, dreamy days",
    "Effortlessly feminine and versatile for brunches, vacations, or sunset strolls ✨",
  ],
  
  
  testimonials: [
    {
      name: "Ana (Iloilo)",
      role: "College Senior",
      quote: "This planner made me excited to plan again — it keeps my focus steady and helps me finish more study sessions.",
      avatar: "https://images.pixabay.com/photo/2024/02/28/07/42/european-8601103_1280.jpg",
    },
    {
      name: "Miguel",
      role: "Graduate Student",
      quote: "The clean layouts and habit tracker helped me stay consistent during thesis season.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
  ],
};

const RELATED_PRODUCTS = [
  {
    id: "minimal-notion",
    name: "Minimal Notion Dashboard",
    price: "€19",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
  },
  {
    id: "ocean-focus-kit",
    name: "Ocean Focus Kit",
    price: "€15",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
  },
  {
    id: "sunset-journal",
    name: "Sunset Gratitude Journal",
    price: "€22",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800",
  },
];

function RatingStars({ value = 5 }: { value?: number }) {
  return (
    <div className="flex items-center" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 transition-colors ${i < value ? "text-sky-400 dark:text-sky-300" : "text-slate-400 dark:text-slate-600"}`}
        />
      ))}
    </div>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "What material is the Soleia Yellow 2-Piece Dress made of?",
      a: "It’s made from a lightweight, flowy fabric that feels soft on the skin and moves beautifully with every step — perfect for summer days.",
    },
    {
      q: "Is it true to size?",
      a: "Yes! It fits true to size and flatters most body types. If you prefer a more relaxed fit, you can size up for extra comfort.",
    },
    {
      q: "Can I wear it for both casual and special occasions?",
      a: "Absolutely! Style it with sandals for a casual brunch or add heels and accessories for a romantic sunset dinner — it’s effortlessly versatile.",
    },
    {
      q: "How do I care for the dress?",
      a: "Hand wash or use a gentle cycle in cold water. Avoid bleach and tumble drying to keep its color bright and fabric smooth.",
    },
  ];





  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Card className="p-6 bg-white dark:bg-slate-800 rounded-2xl transition-colors duration-300">
      <h2 className="text-2xl font-semibold text-primary-700 dark:text-sky-300 mb-4">
        Frequently Asked Questions 🌴
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center py-3 text-left font-medium text-primary-700 dark:text-sky-200"
            >
              {faq.q}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-slate-600 dark:text-slate-400 text-sm px-1 pb-3"
                >
                  {faq.a}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default function ProductDetails(): JSX.Element {
  const { id } = useParams();
  const product = MOCK_PRODUCT;
  const [selectedImage, setSelectedImage] = useState<string>(product.heroImage);
useScrollToTop();
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <Navigation />
      <main className="pt-24 pb-12 px-4 transition-all">
        <div className="max-w-6xl mx-auto space-y-12">
          <Link to="/shop" className="inline-flex items-center text-sky-700 dark:text-sky-300 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
          </Link>

          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-sky-100 dark:border-slate-700 transition-colors">
                <img src={selectedImage} alt={product.name} className="w-full h-96 object-cover rounded-xl" />
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {[product.heroImage, ...product.gallery].map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(src)}
                      className={`rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === src
                          ? "border-sky-400 dark:border-sky-300"
                          : "border-transparent"
                      }`}
                    >
                      <img src={src} alt="thumb" className="w-full h-20 object-cover" />
                    </button>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <Badge className="bg-sky-100 dark:bg-sky-900 text-primary-700 dark:text-sky-200">
                  Digital Planner
                </Badge>
                <h1 className="text-4xl font-bold text-primary-700 dark:text-sky-200 mt-2">
                  {product.name}
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">{product.subtitle}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-primary-700 dark:text-sky-200">
                  {product.price}
                </span>
                {product.compareAt && (
                  <span className="line-through text-slate-500 dark:text-slate-500">
                    {product.compareAt}
                  </span>
                )}
                {product.discount && (
                  <span className="text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-900 px-3 py-1 rounded-full text-sm">
                    {product.discount}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-6">
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
        {product.shortDescription}
      </p>

      {/* 
      <div className="flex items-center gap-3">
        <RatingStars />
        <span className="text-sm text-slate-500 dark:text-slate-400">127 reviews</span>
      </div>
      */}

      <a
        href="https://onelink.shein.com/17/53001es1ksvy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" className="w-full rounded-full">
          Buy Now — {product.price}
        </Button>
  </a>
</div>


              <blockquote className="border-l-4 border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-slate-800 p-4 rounded-r-xl italic text-slate-600 dark:text-slate-300">
                “Use my code 6W534 to get an exclusive discount! 💕”
              </blockquote>
            </motion.div>
          </section>

          {/* Main content */}
          <section className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-8">
              <Card className="p-6 bg-white dark:bg-slate-800 rounded-2xl transition-colors duration-300">
                <h2 className="text-2xl font-semibold text-primary-700 dark:text-sky-300 mb-4">
                  Why I Love It 💕
                </h2>
                <ul className="space-y-3">
                  {product.whyILoveIt.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sky-500 dark:text-sky-300" />
                      <span className="text-slate-700 dark:text-slate-300">{r}</span>
                    </li>
                  ))}
                </ul>
              </Card>

            {/*}
              <Card className="p-6 bg-white dark:bg-slate-800 rounded-2xl transition-colors duration-300">
                <h2 className="text-2xl font-semibold text-primary-700 dark:text-sky-300 mb-4">
                  Testimonials
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.testimonials.map((t, i) => (
                    <div
                      key={i}
                      className="bg-sky-50 dark:bg-slate-900 p-4 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-primary-700 dark:text-sky-200">
                            {t.name}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                        </div>
                      </div>
                      <p className="italic text-slate-700 dark:text-slate-300">
                        “{t.quote}”
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
                  */}

              <FAQSection />
              <RelatedProducts />
            </div>

            {/* Sidebar */}
              <aside>
                <Card className="p-6 bg-white dark:bg-slate-800 sticky top-24 rounded-2xl transition-colors">
                  <h4 className="font-semibold text-primary-700 dark:text-sky-300">
                    Shopping Info
                  </h4>

                  <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>
                      All products featured here are from trusted affiliate stores.  
                      Clicking <span className="font-medium text-sky-500">“Buy Now”</span> will take you
                      directly to the official website to complete your purchase.
                    </p>

                    <p className="pt-2 border-t border-sky-100 dark:border-slate-700 text-sm">
                      💡 <span className="text-sky-500">Tip:</span> Use my code{" "}
                      <span className="font-semibold text-pink-400">6W534</span> for exclusive discounts on select items!
                    </p>
                  </div>
                </Card>
              </aside>

          </section>

          {/* Affiliate disclosure */}
          <section className="p-6 bg-yellow-50 dark:bg-slate-900 rounded-2xl transition-colors">
            <h3 className="font-semibold text-primary-700 dark:text-sky-300">
              Affiliate Disclosure
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              This page contains affiliate links — I may earn a small commission at no cost to you.
              I only recommend tools I truly use and love. 🌊
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
