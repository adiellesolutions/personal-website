import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Search, Star, LayoutGrid, List, Sparkles } from "lucide-react";
import TimelineSection from "@/components/TravelTimelineSection";
import useScrollToTop from "@/hooks/useScrollToTop";
import { motion, AnimatePresence } from "framer-motion";

const TravelHub = () => {
  useScrollToTop();

  const destinations = [
    {
      id: 1,
      name: "Norway – Oslo 🏰",
      type: "Family Visit + Winter Adventure",
      duration: "3 days",
      rating: 4.8,
      tags: ["Norway", "Roadtrip", "Fjord"],
      image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg",
      description: "Cold air, modern vibes, and fjord views 🏔 Oslo made me realize that peace and beauty can live in the same city.",
      highlights: ["Ekeberg", "Tjøme", "Vigeland"],
    },
    {
      id: 2,
      name: "Belgium – Liège Christmas Market 🌷",
      type: "Christmas Market Adventure",
      duration: "2 days",
      rating: 4.7,
      tags: ["Christmas", "Travel", "Europe"],
      image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg",
      description: "Bike rides along canals, tulip fields, and the cutest cafes!",
      highlights: ["Guillemins", "Bueren", "Boverie"],
    },
    {
      id: 3,
      name: "Luxembourg – Luxembourg City 🎵",
      type: "Spring City & Nature Walk",
      duration: "1 day",
      rating: 4.9,
      tags: ["Luxembourg City", "Old Town", "Fairytale Walks"],
      image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg",
      description: "Small but mighty! 🏰 Walking through Luxembourg felt like strolling inside a fairytale with a mix of old castles and modern chic.",
      highlights: ["Corniche", "Grund", "Adolphe Bridge"],
    },
    {
      id: 4,
      name: "Germany – Hamburg, Frankfurt & Aachen 🏔️",
      type: "Local Adventures",
      duration: "6 days",
      rating: 5.0,
      tags: ["Germany Trips", "City Hopping", "Train Travel"],
      image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg",
      description: "Hamburg gives mini-Venice waterfront vibes, Frankfurt is my skyscraper-filled study home, and Aachen mixes historic hot springs with sweet gingerbread charm.",
      highlights: ["Main River", "Aachen Dom", "Speicherstadt"],
    },
    {
      id: 5,
      name: "Italy – Milan, Como & Iseo 🌊",
      type: "3-Day Couple Coastal & City Adventure",
      duration: "3 days",
      rating: 4.8,
      tags: ["Lombardy Trip", "Couple Getaway", "Lakeside Romance"],
      image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg",
      description: "Milan is the fashion capital (with Jollibee!), Lake Como is the glamorous “rich auntie” of lakes, and Lake Iseo is the quiet romantic gem that feels like a private Italy.",
      highlights: ["Duomo", "Park Bellagio", "Iseo"],
    },
   
  ];



  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Name");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filters = ["All", ...new Set(destinations.map((d) => d.type))];

  const filtered = destinations
    .filter(
      (d) =>
        (filter === "All" || d.type === filter) &&
        (d.name.toLowerCase().includes(search.toLowerCase()) ||
          d.description.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      if (sort === "Name") return a.name.localeCompare(b.name);
      if (sort === "Duration") return parseInt(a.duration) - parseInt(b.duration);
      if (sort === "Rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff8fa] via-[#fffefd] to-[#f9fcff] dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-500">
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-pacifico text-5xl md:text-6xl text-primary dark:text-pink-300 mb-4 flex justify-center items-center gap-2">
              Travel Diaries ✈️ <Sparkles className="text-yellow-400 w-6 h-6" />
            </h1>
            <p className="text-muted-foreground dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Explore Europe with me — one dreamy destination at a time 🌸✨
            </p>
          </div>

          {/* Timeline Section */}
          <TimelineSection />

          {/* Search + Filter Bar */}
          <div className="sticky top-20 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-sm border border-pink-100 dark:border-gray-700 p-4 md:p-5 mb-10 transition-colors duration-500">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between w-full overflow-hidden">

              {/* Search Bar */}
              <div className="relative flex-1 min-w-[200px]">
                <Search
                  className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-300"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-full border border-pink-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-400 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200"
                />
              </div>

              {/* Filters */}
              <div className="relative w-full lg:max-w-[500px] flex-shrink overflow-hidden">
                <div
                  className="flex flex-nowrap gap-2 py-2 px-1 overflow-x-auto"
                >
                  {filters.map((type) => (
                    <Button
                      key={type}
                      size="sm"
                      onClick={() => setFilter(type)}
                      className={`flex-shrink-0 rounded-full text-xs sm:text-sm px-3 py-1 ${
                        filter === type
                          ? "bg-pink-400 text-white shadow dark:bg-pink-500"
                          : "bg-white border border-pink-200 text-pink-500 hover:bg-pink-50 dark:bg-gray-800 dark:border-gray-700 dark:text-pink-300 dark:hover:bg-gray-700"
                      }`}
                    >
                      {type}
                    </Button>
                  ))}
                </div>

                {/* Left Shadow */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-2 bg-gradient-to-r rounded-full from-white dark:from-gray-900"></div>

                {/* Right Shadow */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-2 bg-gradient-to-l rounded-full from-white dark:from-gray-900"></div>
              </div>

              {/* Sort + View Toggle */}
              <div className="flex items-center justify-center gap-2 flex-shrink-0 ">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-pink-200 dark:border-gray-700 rounded-full text-sm py-2 px-3 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-200 hover:bg-white/90 dark:hover:bg-gray-800/90 focus:ring-0 focus:outline-none"
                >
                  <option value="Name">Name</option>
                  <option value="Duration">Duration</option>
                  <option value="Rating">Rating</option>
                </select>

                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full hover:bg-pink-100 dark:hover:bg-gray-700"
                  onClick={() => setView(view === "grid" ? "list" : "grid")}
                >
                  {view === "grid" ? <List size={18} /> : <LayoutGrid size={18} />}
                </Button>
              </div>
            </div>
          </div>

          {/* Destinations Grid/List */}
          <AnimatePresence>
            <motion.div
              layout
              className={`grid gap-6 ${
                view === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {filtered.map((d) => (
                <motion.div
                  key={d.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Link to={`/TravelPost/TravelPost${d.id}`}>
                    <Card className="group bg-white/90 dark:bg-gray-900/80 border border-pink-100 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                      <img
                        src={d.image}
                        alt={d.name}
                        className="w-full h-48 sm:h-56 object-cover"
                      />
                      <div className="p-5 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                          <h3 className="font-quicksand font-semibold text-lg text-pink-700 dark:text-pink-300 leading-tight">
                            {d.name}
                          </h3>
                          <span className="flex items-center text-yellow-500 text-sm">
                            <Star size={14} className="mr-1" /> {d.rating}
                          </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {d.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {d.tags.map((tag) => (
                            <Badge
                              key={tag}
                              className="bg-pink-50 dark:bg-gray-800 text-pink-600 dark:text-pink-300 border border-pink-200 dark:border-gray-700 text-xs rounded-full"
                            >
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            Highlights:
                          </p>
                          {d.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                              <MapPin size={14} className="text-pink-400 dark:text-pink-300" /> {h}
                            </div>
                          ))}
                        </div>

                          <div className="flex items-center text-pink-600 dark:text-pink-400 font-medium mt-3 group-hover:translate-x-1 transition-all">
                            <Link to={`/TravelPost/TravelPost${d.id}`}>
                              <Button variant="secondary">
                                  Read Travel Guide <ArrowRight className="w-4 h-4 ml-1" />
                              </Button>
                            </Link>
                          </div>


                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center mt-16">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712139.png"
                alt="no results"
                className="mx-auto w-36 mb-4 opacity-80"
              />
              <p className="text-gray-500 dark:text-gray-400">No destinations found 💫 Try another search!</p>
            </div>
          )}

          {/* Tips Section */}
          <Card className="gradient-sunset p-8 md:p-12 mt-16 border-2 border-white/40 dark:border-gray-700 text-center rounded-3xl shadow-md">
            <h3 className="font-pacifico text-3xl text-white mb-4">
              Travel Tips & Guides 🎒
            </h3>
            <p className="text-white/95 text-lg max-w-2xl mx-auto mb-6">
              Want pastel-perfect travel guides, packing lists, and hidden gems?  
              Discover all my cozy itineraries and travel secrets!
            </p>
            <Link to="/courses">
              <Button className="bg-white text-primary dark:text-gray-900 hover:bg-white/90 rounded-full">
                Get Travel Guides
              </Button>
            </Link>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TravelHub;
