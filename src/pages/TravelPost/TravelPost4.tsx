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
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";
import ItinerarySection from "@/components/ItinerarySection";
import HeroImg from "@/assets/TravelPost4/Dusseldorf/3.jpg";
import img1 from "@/assets/TravelPost4/Dusseldorf/4.jpg";
import img2 from "@/assets/TravelPost4/Cochem/2.jpg";
import img3 from "@/assets/TravelPost4/Cochem/3.jpg";
import img4 from "@/assets/TravelPost4/Frankfurt/5.jpg";
import img5 from "@/assets/TravelPost4/Frankfurt/6.jpg";
import img6 from "@/assets/TravelPost4/Hamburg/2.jpg";
import img7 from "@/assets/TravelPost4/Hamburg/4.jpg";

export default function TravelPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  useScrollToTop();

  // ----------------
  // Static Post Data
  // ----------------
  const post = {
    id: id ?? "oslo-tjome-3-days",
    name: "Germany – Hamburg, Düsseldorf, Cochem & Frankfurt",
    type: "City + Coastal Road Trip",
    duration: "3 Days",
    date: "May–September",
    region: "Europe",
    banner: HeroImg,
    rating: 4.9,
    readingMinutes: 8,
    hashtags: ["OsloTravel", "ScandinavianRoadTrip", "TjømeNorway", "VerdensEnde"],
    gallery: [img1, img2, img3, img4, img5, img6, img7],
    itinerary: [
      {
        id: "day-1",
        title: "Oslo City & Ekeberg Views",
        sections: [
          {
            when: "Morning",
            text: "Slow breakfast at home or grab pastries & coffee at Baker Hansen 🥐☕. Drive along Karl Johans gate → The Royal Palace → Oslo Opera House (walk on the roof!).",
          },
          {
            when: "Late Morning",
            text: "Visit the MUNCH Museum next to the Opera. See *The Scream* and learn about Edvard Munch’s inspiration from Oslo’s landscapes.",
          },
          {
            when: "Midday",
            text: "Drive 10–15 min to Ekebergparken. Park near Ekebergrestauranten. Wander through the sculpture park and enjoy panoramic views over Oslofjord.",
          },
          {
            when: "Lunch (Optional)",
            text: "Dine at Ekebergrestauranten — glass walls + scenery = chef’s kiss ✨",
          },
          {
            when: "Evening",
            text: "Drive to Aker Brygge / Tjuvholmen. Dinner by the harbor at Olivia Aker Brygge or Louise Restaurant. Sunset fjord walk 🌅",
          },
        ],
      },
      {
        id: "day-2",
        title: "Road Trip to Tjøme (Coastal Escape)",
        sections: [
          {
            when: "Morning (Leave ~08:00)",
            text: "Drive south from Oslo (~1h 45m) via E18. Stop at Tønsberg — Norway’s oldest town — for a short harbor walk or visit Tønsberg Tower.",
          },
          {
            when: "Midday",
            text: "Continue to Tjøme Island → drive to Verdens Ende ('World’s End'). Boardwalks, smooth seaside rocks, and the iconic stone lighthouse.",
          },
          {
            when: "Lunch",
            text: "Seafood lunch at Spiseriet Verdens Ende — fresh, local, and right by the ocean 🌊",
          },
          {
            when: "Golden Hour / Drive Back",
            text: "Enjoy slow coastal roads returning to Oslo. Optional coffee stop in Tønsberg (Café Babel or Bare Barista).",
          },
        ],
      },
      {
        id: "day-3",
        title: "Oslo Slow Day / Local Life",
        sections: [
          {
            when: "Morning",
            text: "Relax at home with your Tita 💕 or stroll through Grünerløkka’s cafés and vintage shops.",
          },
          {
            when: "Lunch",
            text: "Try Mathallen Food Hall — international food stalls + local treats.",
          },
          {
            when: "Afternoon",
            text: "Walk along Akerselva River or visit Vigeland Sculpture Park for art-in-nature.",
          },
          {
            when: "Evening",
            text: "Chill night in, cozy dinner, tea, and early rest — perfect ending to a slow Scandinavian escape.",
          },

          
        ],
      },
    ],
    content:
      "Explore Germany’s vibrant cities and charming towns, from Frankfurt’s riverside skyline to Hamburg’s magical Christmas markets. Insider tips and packing essentials make traveling easy and stylish.",
    overview:
      "A 1–3 day adventure across Frankfurt, Cochem, Düsseldorf, and Hamburg. Highlights include river walks, historic Altstadt streets, cozy cafés, festive markets, and must-try local treats. This guide combines insider tips, budget-friendly suggestions, and packing essentials to ensure a smooth and enjoyable trip.",
     
    budget: {
      Transportation: "€49 Deutschlandticket ",
      Food: "€20–80 per meal ",
      Accommodation: " €50–120/night",
      Activities: "€5–20 per attraction ",
      Extras: "€5–20 (souvenirs, snacks, cafés)"
    },
    
  
    };

  // ----------------
  // UI States
  // ----------------
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [activeToc, setActiveToc] = useState(post.itinerary[0].id);
  const tocRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
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

  // ----------------
  // Small Components
  // ----------------
  const Gallery = () => (
    <div className="relative">
      <div className="overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
        <img
          src={post.gallery[galleryIndex]}
          alt={`gallery-${galleryIndex}`}
          className="w-full max-h-[1050px] object-contain rounded-xl transition-all" loading="lazy"
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
      <ItinerarySection placeId={post.id} placeName={post.name} duration={post.duration} />
    </div>
  );

  const Sidebar = () => (
    <aside className="space-y-6 sticky top-28">
      <Card className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-pink-100 dark:border-gray-700">
        <h4 className="font-semibold text-lg text-primary">Hashtags</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {post.duration} • {post.date} • {post.region}
        </p>

        <div className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
          {post.hashtags.map((tag, i) => (
            <p key={i}>#{tag}</p>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => {
              const shareData = {
                title: "Trip Hashtags ✨",
                text: "Check out these travel hashtags!",
                url: window.location.href,
              };
              if (navigator.share) navigator.share(shareData);
              else navigator.clipboard.writeText(window.location.href);
            }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-gray-700/60 hover:bg-white/80 dark:hover:bg-gray-700 transition text-sm"
          >
            Share
          </button>
        </div>
      </Card>

      <Card className="p-4 bg-white/70 dark:bg-gray-800/80 backdrop-blur-md border border-pink-100 dark:border-gray-700">
      <h4 className="font-semibold mb-3">Budget Est.</h4>
      <ul className="text-sm space-y-2">
        {Object.entries(post.budget).map(([k, v]) => (
          <li key={k} className="flex justify-between">
            <span className="capitalize">{k}</span>
            <span className="font-semibold">{v}</span>
          </li>
        ))}
      </ul>
</Card>

    </aside>
  );

  // ----------------
  // Germany Travel Carousel (inline)
  // ----------------
  const GermanyTravelCarousel = () => {
    const [index, setIndex] = useState(0);
    const germanyPlaces = [
      {
        name: "Frankfurt",
        insiderTips: ["Walk by the Main River during sunset — skyline glow is unmatched 💙"],
        packing: ["Comfortable walking shoes 👟", "Layered outfits 🧥"],
      },
      {
        name: "Cochem",
        insiderTips: ["Use Deutschlandticket for transport", "Visit the castle & Altstadt"],
        packing: ["Comfy shoes 👟", "Satin skirt + white blouse 👗"],
      },
      {
        name: "Düsseldorf",
        insiderTips: ["Autumn is chilly — layer your outfit", "Perfect day for café hopping"],
        packing: ["Beige skirt + beige vest 🍂"],
      },
      {
        name: "Hamburg",
        insiderTips: ["Visit Speicherstadt at night – fairy-lit canals", "Try Franzbrötchen 🥐"],
        packing: ["Warm layered outfits 🧥", "Comfortable walking shoes 👟"],
      },
    ];
    const place = germanyPlaces[index];

    return (
      <Card className="p-6 mt-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-pink-50 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{place.name}</h2>
          <div className="flex gap-2">
            <button onClick={() => setIndex((i) => (i - 1 + germanyPlaces.length) % germanyPlaces.length)}>
              <ChevronLeft />
            </button>
            <button onClick={() => setIndex((i) => (i + 1) % germanyPlaces.length)}>
              <ChevronRight />
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mt-2">Insider Tips</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            {place.insiderTips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>

          <h3 className="font-semibold mt-4">Packing Essentials</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            {place.packing.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </Card>
    );
  };

  // ----------------
  // Render
  // ----------------
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-950 dark:to-gray-900 transition-all">
      <Navigation />

      {/* Hero */}
      <div className="relative h-[48vh] md:h-[56vh] lg:h-[60vh] overflow-hidden rounded-b-3xl shadow-xl">
        <img src={HeroImg} alt={post.name} className="object-cover w-full h-full" loading="lazy"/>
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
                onClick={() => navigate(-1)}
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
              <h2>Overview</h2>
              <p>{post.overview}</p>

              {/* Germany Travel Slider */}
              <GermanyTravelCarousel />
            </div>
          </Card>

          <MoreFromJournal />
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
