import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Star, CheckCircle, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
  name: "Coastal Study Planner — Digital Bundle",
  subtitle: "A peaceful, focused planner inspired by the sea (digital + print-ready)",
  price: "€29",
  compareAt: "€49",
  discount: "40% OFF",
  shortDescription:
    "A digital planner with coastal calm — designed to help you plan intentionally, stay focused, and study peacefully.",
  heroImage:
    "https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1400&fit=crop",
  gallery: [
    "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&h=600&auto=format&fit=crop",
    "https://images.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  ],
  items: [
    { id: "planner-pdf", name: "Coastal Planner PDF (50+ pages)", price: "€19", link: "https://affiliate.example.com/planner-pdf", short: "Printable and tablet-ready layouts." },
    { id: "habit-tracker", name: "90-Day Habit Tracker", price: "€9", link: "https://affiliate.example.com/habit-tracker", short: "Build consistent routines effortlessly." },
    { id: "playlist", name: "Curated Study Playlist (Bonus)", price: "Free", link: "https://affiliate.example.com/playlist", short: "Lo-fi and gentle ocean ambience mix." },
  ],
  whyILoveIt: [
    "Makes weekly planning feel calm and rewarding",
    "Flexible undated layouts for any term",
    "Tablet-friendly and print-ready formats",
    "Includes my personal goal and exam systems",
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
      q: "Is this planner printable?",
      a: "Yes! You can print it on A4 or Letter size paper, or use it digitally on your tablet or iPad.",
    },
    {
      q: "Can I reuse it every semester?",
      a: "Absolutely — it’s undated, so you can reuse it for every term or new academic year.",
    },
    {
      q: "Do I get lifetime access?",
      a: "Yes, once purchased, you’ll receive lifetime access and future updates at no extra cost.",
    },
    {
      q: "Is this suitable for students outside the Philippines?",
      a: "Yes — it’s 100% digital and can be used anywhere. Time zones don’t affect the planner’s layout.",
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

function RelatedProducts() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-primary-700 dark:text-sky-300 mb-6">
        You Might Also Like 🐚
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {RELATED_PRODUCTS.map((p) => (
          <Card
            key={p.id}
            className="overflow-hidden bg-white dark:bg-slate-800 hover:shadow-lg transition-all rounded-2xl border border-sky-100 dark:border-slate-700"
          >
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-primary-700 dark:text-sky-200">{p.name}</h3>
              <p className="text-slate-600 dark:text-slate-400">{p.price}</p>
              <Button variant="outline" size="sm" className="mt-3 rounded-full w-full">
                View Product
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetails(): JSX.Element {
  const { id } = useParams();
  const product = MOCK_PRODUCT;
  const [selectedImage, setSelectedImage] = useState<string>(product.heroImage);

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
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {product.shortDescription}
              </p>
              <div className="flex items-center gap-3">
                <RatingStars />
                <span className="text-sm text-slate-500 dark:text-slate-400">127 reviews</span>
              </div>
              <Button size="lg" className="w-full rounded-full">
                Buy Now — {product.price}
              </Button>
              <blockquote className="border-l-4 border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-slate-800 p-4 rounded-r-xl italic text-slate-600 dark:text-slate-300">
                “I created this planner after realizing how scattered my study weeks felt — this layout keeps me calm, focused, and aligned.”
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

              <FAQSection />
              <RelatedProducts />
            </div>

            {/* Sidebar */}
            <aside>
              <Card className="p-6 bg-white dark:bg-slate-800 sticky top-24 rounded-2xl transition-colors">
                <h4 className="font-semibold text-primary-700 dark:text-sky-300">
                  Order Summary
                </h4>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Digital Planner</span>
                    <span>{product.price}</span>
                  </div>
                  <div className="flex justify-between text-sky-600 dark:text-sky-400">
                    <span>Discount</span>
                    <span>-€20</span>
                  </div>
                  <div className="border-t border-sky-100 dark:border-slate-700 pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>{product.price}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 rounded-full">Checkout</Button>
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
