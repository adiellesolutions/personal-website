import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

// =====================
// TravelPost (static)
// =====================

export default function TravelPost() {
  const { id } = useParams();
  useScrollToTop();

  // --- Static post data (replace with API later) ---
  const post = {
    id: id ?? "prague-2025",
    name: "Prague, Czech Republic 🏰",
    type: "City Break",
    duration: "3 days",
    date: "February 2025",
    region: "Europe",
    banner:
      "https://cdn.pixabay.com/photo/2016/01/19/17/39/prague-1149620_1280.jpg",
    rating: 4.9,
    readingMinutes: 8,
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/21/12/59/prague-1845560_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/13/29/prague-1033647_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/23/00/33/prague-1854684_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/06/08/09/42/prague-3468552_1280.jpg",
    ],
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
      {
        id: "day-3",
        title: "Day 3 — Local Favorites",
        sections: [
          { when: "Morning", text: "Vyšehrad peaceful stroll and views." },
          { when: "Afternoon", text: "Karlín cafés and concept stores." },
          { when: "Evening", text: "Malá Strana wine cellar dinner." },
        ],
      },
    ],
    content: `Prague stole my heart from the moment I arrived! This fairytale city is everything you imagine and more. Read the itinerary and tips below for a compact long-weekend plan.`,
    tips: [
      "Download offline maps — WiFi can be spotty",
      "Learn basic Czech phrases — locals appreciate it",
      "Book castle tickets online to skip queues",
      "Avoid currency exchange kiosks — use ATMs",
      "Pack layers — weather changes quickly",
    ],
    budget: {
      flights: "$250",
      accommodation: "$120 (3 nights)",
      food: "$60",
      activities: "$40",
    },
    related: [
      { id: "budapest-2024", name: "Budapest, Hungary", cover: "https://cdn.pixabay.com/photo/2016/10/08/18/35/budapest-1725337_1280.jpg" },
      { id: "vienna-2023", name: "Vienna, Austria", cover: "https://cdn.pixabay.com/photo/2014/07/10/16/25/vienna-389043_1280.jpg" },
      { id: "prague-night", name: "Prague — Night Walks", cover: "https://cdn.pixabay.com/photo/2017/08/06/09/49/prague-2593199_1280.jpg" },
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
      <div className="overflow-hidden rounded-xl">
        <img
          src={post.gallery[galleryIndex]}
          alt={`gallery-${galleryIndex}`}
          className="w-full h-64 md:h-80 object-cover rounded-xl"
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
      <h2 className="font-quicksand text-2xl font-bold text-pink-700">Itinerary</h2>
      <div className="grid gap-4">
        {post.itinerary.map((day) => (
          <article
            key={day.id}
            id={day.id}
            ref={(el) => (tocRefs.current[day.id] = el)}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-pink-50 dark:border-gray-700"
          >
            <h3 className="font-semibold text-lg mb-2">{day.title}</h3>
            <div className="grid gap-2 sm:grid-cols-3">
              {day.sections.map((s, idx) => (
                <div key={idx} className="p-3 bg-pink-50 dark:bg-gray-900 rounded-lg">
                  <div className="font-semibold text-sm text-pink-600">{s.when}</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">{s.text}</div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  const Sidebar = () => (
    <aside className="space-y-6 sticky top-28">
      {/* Summary card */}
      <Card className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-pink-100 dark:border-gray-700">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <h4 className="font-semibold text-lg">Trip Summary</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{post.duration} • {post.date} • {post.region}</p>
            <div className="mt-3 flex items-center gap-2">
              <button onClick={toggleLike} className={`flex items-center gap-2 px-3 py-1 rounded-full ${liked ? "bg-pink-50 text-pink-600" : "bg-white/60 dark:bg-gray-700/60"}`}>
                <Heart size={16} /> {likes}
              </button>
              <button onClick={handleSave} className={`flex items-center gap-2 px-3 py-1 rounded-full ${saved ? "bg-yellow-50 text-yellow-600" : "bg-white/60 dark:bg-gray-700/60"}`}>
                <Bookmark size={16} /> {saved ? "Saved" : "Save"}
              </button>
              <button
                onClick={() => {
                  const shareData = {
                    title: document.title,
                    text: "Check out this travel post!",
                    url: window.location.href,
                  };

                  if (navigator.share) {
                    navigator
                      .share(shareData)
                      .then(() => console.log("Shared successfully"))
                      .catch((err) => console.log("Share canceled or failed:", err));
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard! ✨");
                  }
                }}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-gray-700/60 hover:bg-white/80 dark:hover:bg-gray-700 transition"
              >
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">Rating</div>
            <div className="flex items-center gap-1 mt-1 font-semibold text-pink-600">{post.rating} <Star size={14} /></div>
            <div className="text-xs text-gray-500 mt-2">{post.readingMinutes} min read</div>
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

  const Comments = () => (
    <Card className="p-4">
      <h4 className="font-semibold mb-3">Comments</h4>
      <div className="space-y-3">
        <div className="flex gap-2">
          <input
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Share a quick tip or question..."
            className="flex-1 rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700"
          />
          <Button onClick={addComment} className="rounded-full bg-pink-500 text-white">Post</Button>
        </div>

        <div className="space-y-2">
          {comments.map((c) => (
            <div key={c.id} className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{c.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{c.text}</div>
                </div>
                <div className="text-xs text-gray-400">{new Date(c.id).toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );

  const RelatedCarousel = () => (
    <div>
      <h3 className="font-quicksand font-semibold text-xl mb-4">More from the Journal</h3>
      <div className="flex gap-4 overflow-x-auto pb-3">
        {post.related.map((r) => (
          <div key={r.id} className="min-w-[220px] flex-shrink-0">
            <Card className="p-0 overflow-hidden rounded-2xl">
              <img src={r.cover} alt={r.name} className="w-full h-36 object-cover" />
              <div className="p-3">
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-gray-500">Short guide</div>
                <div className="mt-3 flex justify-between items-center">
                  <Link to={`/travel/${r.id}`} className="text-pink-500 text-sm">Read</Link>
                  <div className="text-xs text-gray-400">5 min</div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );

  // --- Render ---
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-950 dark:to-gray-900 transition-all">
      <Navigation />

      {/* Hero */}
      <div className="relative h-[48vh] md:h-[56vh] lg:h-[60vh] overflow-hidden rounded-b-3xl shadow-xl">
        <img src="https://petapixel.com/assets/uploads/2022/06/what-is-landscape-photography.jpg" alt={post.name} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12 text-white max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <Badge className="bg-white/20 text-white border-white/40">{post.type}</Badge>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <Clock size={14} /> {post.duration}
              <Calendar size={14} /> {post.date}
            </div>
          </div>
          <h1 className="font-pacifico text-3xl md:text-5xl">{post.name}</h1>
          <p className="mt-2 text-sm text-white/90 max-w-xl">{post.content}</p>
        </div>
      </div>

      {/* Main */}
      <main className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Article */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="flex items-center gap-2 text-pink-500">
                <ArrowLeft /> Back
              </Button>
              <div className="text-sm text-gray-600 dark:text-gray-300">{post.readingMinutes} min read • {post.date}</div>
            </div>
          </div>

          <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-pink-50 dark:border-gray-700">
            <Gallery />

            <div className="mt-6 prose prose-lg dark:prose-invert max-w-none">
              {/* Rich content (static) — you can swap with dangerouslySetInnerHTML if needed */}
              <h2>Overview</h2>
              <p>
                Prague is a charming city with cobbled streets, pastel facades and cathedral spires. It's perfect for a 2–4 day break.
              </p>

              <h2>Must-Do's</h2>
              <ul>
                <li>Visit Charles Bridge early morning</li>
                <li>Wander Old Town Square and the Astronomical Clock</li>
                <li>Climb to Prague Castle for panoramic views</li>
              </ul>
            </div>

            <div className="mt-6">
              <Itinerary />
            </div>
          </Card>

          <RelatedCarousel />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Comments />

            <Card className="p-6">
              <h4 className="font-semibold mb-3">Practical Info</h4>
              <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>Currency: Czech koruna (CZK)</li>
                <li>Language: Czech (English widely spoken in tourist areas)</li>
                <li>Transport: Trams, metro — buy a 3-day pass for convenience</li>
                <li>Plug type: Type E (230V)</li>
              </ul>

              <div className="mt-4">
                <Button className="bg-pink-500 text-white w-full">Download Printable Itinerary (PDF)</Button>
              </div>
            </Card>
          </div>
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
