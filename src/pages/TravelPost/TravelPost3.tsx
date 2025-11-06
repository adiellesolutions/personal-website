import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MoreFromJournal from "@/components/MoreFromJournal";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  Star,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";
import ItinerarySection from "@/components/ItinerarySection";
import HeroImg from "@/assets/TravelPost1/20.jpg";
import img1 from "@/assets/TravelPost1/19.jpg";
import img2 from "@/assets/TravelPost1/16.jpg";
import img3 from "@/assets/TravelPost1/14.jpg";

// =====================
// TravelPost (static)
// =====================

export default function TravelPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  useScrollToTop();

  // --- Static post data (replace with API later) ---
  const post = {
    id: id ?? "prague-2025",
    name: "Liège, Belgium",
    type: "Christmas Market Adventure",
    duration: "2 days",
    date: " ",
    region: "Europe",
    banner: "https://cdn.pixabay.com/photo/2016/01/19/17/39/prague-1149620_1280.jpg",
    rating: 4.9,
    readingMinutes: 8,
    gallery: [img1, img2, img3],
    itinerary: [
      {
        id: "day-1",
        title: "Day 1 — Old Town Magic",
        sections: [
          { when: "Morning", text: "Astronomical Clock, trdelník at the square." },
          { when: "Afternoon", text: "Jewish Quarter and Spanish Synagogue." },
          { when: "Evening", text: "Charles Bridge sunset and riverside dinner." },
        ],
      },
      {
        id: "day-2",
        title: "Day 2 — Castle & Views",
        sections: [
          { when: "Morning", text: "Prague Castle early visit, St. Vitus Cathedral." },
          { when: "Afternoon", text: "Golden Lane and castle gardens." },
          { when: "Evening", text: "Sunset river cruise." },
        ],
      },
      
    ],
    content: `Liège during Christmas turns into a cozy, sparkling village filled with warm lights, food stalls, and festive music. This quick 2-day getaway is perfect if you’re coming from Frankfurt and want to soak in holiday magic without rushing.`,
    tips: [
      "Download offline maps — WiFi can be spotty",
      "Learn basic Czech phrases — locals appreciate it",
      "Book castle tickets online to skip queues",
      "Avoid currency exchange kiosks — use ATMs",
      "Pack layers — weather changes quickly",
    ],
    budget: {
      Accommodation: "€63 (good for 4)",
      Transportation: "€30",
      Food: "€40",
      
    },
    related: [
      { id: "budapest-2024", name: "Budapest, Hungary", cover: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" },
      { id: "vienna-2023", name: "Vienna, Austria", cover: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" },
      { id: "prague-night", name: "Prague — Night Walks", cover: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" },
    ],
  };

  // --- UI State (static interactions only) ---
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(324);
  const [saved, setSaved] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, author: "Ava", text: "This guide makes me want to book a trip! ✨" },
    { id: 2, author: "Luca", text: "Love the tips — very helpful." },
  ]);
  const [commentText, setCommentText] = useState("");

  // For gallery carousel (simple):
  const [galleryIndex, setGalleryIndex] = useState(0);
  

  const [activeToc, setActiveToc] = useState(post.itinerary[0].id);
  const tocRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    // Observe section intersection to set active TOC (static friendly)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveToc(entry.target.id);
        });
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    Object.values(tocRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // --- Handlers ---
  function toggleLike() {
    setLiked((s) => !s);
    setLikes((n) => (liked ? n - 1 : n + 1));
  }

  function handleSave() {
    setSaved((s) => !s);
  }

  function addComment() {
    if (!commentText.trim()) return;
    const newComment = { id: Date.now(), author: "You", text: commentText.trim() };
    setComments((c) => [newComment, ...c]);
    setCommentText("");
  }

  // --- Small components inside file for clarity ---
  const Gallery = () => (
<div className="relative">
  <div className="overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
    <img
      src={post.gallery[galleryIndex]}
      alt={`gallery-${galleryIndex}`}
      className="w-full max-h-[1050px] object-contain rounded-xl transition-all"
    />
  </div>


      <div className="absolute inset-y-0 left-2 flex items-center">
        <button
          onClick={() => setGalleryIndex((i) => (i - 1 + post.gallery.length) % post.gallery.length)}
          aria-label="Previous"
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800/75 shadow hover:scale-105 transition-transform"
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="absolute inset-y-0 right-2 flex items-center">
        <button
          onClick={() => setGalleryIndex((i) => (i + 1) % post.gallery.length)}
          aria-label="Next"
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800/75 shadow hover:scale-105 transition-transform"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="mt-3 flex gap-2 justify-center">
        {post.gallery.map((_, i) => (
          <button
            key={i}
            onClick={() => setGalleryIndex(i)}
            className={`w-2 h-2 rounded-full ${i === galleryIndex ? "bg-pink-500" : "bg-gray-300/60"}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );

  const Itinerary = () => (
    <div className="space-y-6">

    <ItinerarySection placeId={post.id} placeName={post.name} duration={post.duration}/>

    </div>
  );

  const Sidebar = () => (
    <aside className="space-y-6 sticky top-28">
  {/* Hashtags Card */}
  <Card className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-pink-100 dark:border-gray-700">
    <div className="flex items-start gap-3">
      <div className="flex-1">
        <h4 className="font-semibold text-lg text-primary">Hashtags</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          3 days • February 2025 • Europe
        </p>

        <div className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
          <p>#LiegeMagic</p>
          <p>#BelgiumDiaries</p>
          <p>#WinterGlow</p>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
          Posting your trip photos? Use my hashtag so I can see your adventures! ✨
        </p>

        {/* Share button */}
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => {
              const shareData = {
                title: "Trip Hashtags ✨",
                text: "Check out these travel hashtags!",
                url: window.location.href,
              };

              if (navigator.share) {
                navigator
                  .share(shareData)
                  .then(() => console.log("Shared successfully"))
                  .catch((err) =>
                    console.log("Share canceled or failed:", err)
                  );
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard! ✨");
              }
            }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-gray-700/60 hover:bg-white/80 dark:hover:bg-gray-700 transition text-sm"
          >
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>

      {/* Right Side (Reading time retained) */}
      <div className="text-right">
        <div className="text-xs text-gray-500 mt-2">3 min read</div>
      </div>
    </div>
  </Card>


 
  

      {/* Budget */}
      <Card className="p-4 bg-white/70 dark:bg-gray-800/80 backdrop-blur-md border border-pink-100 dark:border-gray-700">
        <h4 className="font-semibold mb-3">Budget Est.</h4>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
          {Object.entries(post.budget).map(([k, v]) => (
            <li key={k} className="flex justify-between">
              <span className="capitalize">{k}</span>
              <span className="font-semibold">{v}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">Save Trip</Button>
        </div>
      </Card>
    </aside>
  );

 /* const Comments = () => (
    <Card className="p-4 h-70">
      <h4 className="font-semibold mb-3">Comments</h4>
      <div className="space-y-3 h-2">

        <div className="space-y-3">
          <div className="space-y-2 h-55 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            {comments.map((c) => (
              <div
                key={c.id}
                className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold">{c.author}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {c.text}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {new Date(c.id).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Card>
  );*/

  // --- Render ---
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-950 dark:to-gray-900 transition-all">
      <Navigation />

      {/* Hero */}
      <div className="relative h-[48vh] md:h-[56vh] lg:h-[60vh] overflow-hidden rounded-b-3xl shadow-xl">
        <img src={HeroImg} alt={post.name} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12 text-white max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <Badge className="bg-white/20 text-white border-white/40">{post.type}</Badge>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <Clock size={14} /> {post.duration}
              <Calendar size={14} /> {post.date}
            </div>
          </div>
          <h1 className="font-pacifico text-3xl md:text-5xl pb-5">{post.name}</h1>
          <p className="mt-2 text-sm text-white/90 max-w-xl">{post.content}</p>
        </div>
      </div>

      {/* Main */}
      <main className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Article */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)} // ✅ This goes back to previous page
                className="flex items-center gap-2 text-pink-500 hover:text-pink-600"
              >
                <ArrowLeft size={18} /> Back
              </Button>
              <div className="text-sm text-gray-600 dark:text-gray-300">{post.readingMinutes} min read • {post.date}</div>
            </div>
          </div>

          <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-pink-50 dark:border-gray-700">
            <Gallery />

            <div className="mt-6 prose prose-lg dark:prose-invert max-w-none text-justify">
              {/* Rich content (static) — you can swap with dangerouslySetInnerHTML if needed */}
              <h2>Overview</h2>
              <p>
                Over two days, you’ll explore Liège’s charming old town, enjoy the famous
                Christmas Market at Place du Marché, and taste local treats like Liège
                waffles and Pèkèt. On Day 2, slow down with brunch, climb Montagne de Bueren
                for panoramic views, visit La Batte Market, and stroll along Parc de la
                Boverie before heading home. A trip that feels like stepping into a European
                holiday movie ✨🎄
              </p>

              <h2 className="mt-6">Insider Tips</h2>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Visited the oldest Christmas Market in Belgium 🎄</li>
                <li>Try Liège waffles & coffee — heavenly combo ☕️🧇</li>
                <li>
                  Money-saving hack: brought adobo from Germany 🤣 iconic Filipino move!
                </li>
              </ul>

              {/* Added Packing Essentials Section */}
              <h2 className="mt-6">Packing Essentials</h2>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Cozy coat, beret & gloves 🧤</li>
                <li>Warm outfit for Christmas market photos ❄️</li>
                <li>Anti-theft bag & powerbank 🔋</li>
                <li>Sunglasses (for day) & cap/beanie (for cold)</li>
              </ul>
            </div>


            <div className="mt-6">
              <Itinerary />
            </div>
          </Card>

          {/* 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Comments />

              <Card className="p-6 h-[18rem] md:h-[22rem] flex flex-col">
                <h4 className="font-semibold mb-3">Practical Info</h4>

                <div className="flex-1 overflow-y-auto pr-2 show-scrollbar">
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Currency: Czech koruna (CZK)</li>
                    <li>Language: Czech</li>
                    <li>Transport: Trams, metro</li>
                    <li>Plug type: Type E (230V)</li>
                    <li>Emergency: 112</li>
                    <li>Time zone: CET (UTC+1)</li>
                    <li>Best time to visit: April — October</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <Button className="bg-pink-500 text-white w-full">
                    Download Printable Itinerary (PDF)
                  </Button>
                </div>
              </Card>
            </div>
          */}


          <MoreFromJournal related={post.related}/>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Sidebar />

        </div>
      </main>

      <Footer />
    </div>
  );
}
