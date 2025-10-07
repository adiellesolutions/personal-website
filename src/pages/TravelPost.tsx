import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
  Sparkles,
  CloudSun,
} from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";

export default function TravelPost() {
  const { id } = useParams();
  useScrollToTop();

  const post = {
    id: "1",
    name: "Prague, Czech Republic 🏰",
    type: "City Break",
    duration: "3 days",
    date: "February 2025",
    region: "Europe",
    banner:
      "https://cdn.pixabay.com/photo/2016/01/19/17/39/prague-1149620_1280.jpg",
    rating: 4.9,
    content: `
      <h2>Day 1: Old Town Magic 🌟</h2>
      <p><strong>Morning:</strong> Started at the Astronomical Clock...</p>
      <p><strong>Afternoon:</strong> Walked through the Jewish Quarter and Spanish Synagogue.</p>
      <p><strong>Evening:</strong> Sunset at Charles Bridge is pure magic!</p>
      <h2>Day 2: Castle & Views 🏰</h2>
      <p><strong>Morning:</strong> Prague Castle opens at 9 AM - arrive early!</p>
      <p><strong>Evening:</strong> Took a river cruise at sunset 🌅</p>
    `,
    gallery: [
      "https://cdn.pixabay.com/photo/2015/08/25/03/50/prague-907444_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/12/10/21/01/charles-bridge-563103_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/09/23/08/09/prague-952846_1280.jpg",
    ],
    tips: [
      "Download offline maps 📱",
      "Learn basic Czech phrases 💬",
      "Book tickets online 🎟️",
      "Avoid currency exchange shops 💰",
    ],
    budget: {
      flights: "$250",
      accommodation: "$120 (3 nights)",
      food: "$60",
      activities: "$40",
    },
  };

  // --- Local interactive states ---
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  const [newComment, setNewComment] = useState({ name: "", text: "" });

  // --- Load states from localStorage ---
  useEffect(() => {
    setLiked(localStorage.getItem(`liked-${post.id}`) === "true");
    setSaved(localStorage.getItem(`saved-${post.id}`) === "true");
    const storedComments = localStorage.getItem(`comments-${post.id}`);
    if (storedComments) setComments(JSON.parse(storedComments));
  }, []);

  const toggleLike = () => {
    const newState = !liked;
    setLiked(newState);
    localStorage.setItem(`liked-${post.id}`, String(newState));
  };

  const toggleSave = () => {
    const newState = !saved;
    setSaved(newState);
    localStorage.setItem(`saved-${post.id}`, String(newState));
  };

  const handleRating = (value: number) => {
    setRating(value);
  };

  const addComment = () => {
    if (!newComment.name || !newComment.text) return;
    const updated = [...comments, newComment];
    setComments(updated);
    localStorage.setItem(`comments-${post.id}`, JSON.stringify(updated));
    setNewComment({ name: "", text: "" });
  };

  const sharePost = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-950 dark:to-gray-900 transition-all">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden rounded-b-3xl shadow-xl">
        <img
          src={post.banner}
          alt={post.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-pacifico mb-3 flex justify-center items-center gap-2"
          >
            {post.name}
            <Sparkles className="text-pink-300" />
          </motion.h1>

          <div className="flex justify-center flex-wrap gap-3 text-sm md:text-base">
            <Badge className="bg-white/20 backdrop-blur-sm">{post.type}</Badge>
            <Badge className="bg-white/20 backdrop-blur-sm flex items-center gap-1">
              <Clock size={14} /> {post.duration}
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm flex items-center gap-1">
              <Calendar size={14} /> {post.date}
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm flex items-center gap-1">
              <MapPin size={14} /> {post.region}
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left - Article */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          <Card className="p-8 bg-white/70 dark:bg-gray-800/80 backdrop-blur-md border border-pink-100 dark:border-gray-700 shadow-md">
            <div
              className="prose prose-lg max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Card>

          {/* Gallery */}
          <Card className="p-6 bg-white/60 dark:bg-gray-800/70">
            <h3 className="font-quicksand text-xl mb-4 text-pink-600">
              📸 Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {post.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="rounded-xl object-cover h-32 w-full hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </Card>

          {/* Tips */}
          <Card className="p-8 bg-gradient-to-br from-pink-100 to-blue-100 dark:from-pink-950 dark:to-blue-950 border-none">
            <h2 className="font-quicksand text-2xl font-bold mb-4 text-pink-700 dark:text-pink-300">
              💕 Quick Tips
            </h2>
            <ul className="space-y-2">
              {post.tips.map((tip, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-pink-500">•</span> {tip}
                </li>
              ))}
            </ul>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={toggleLike}
              className={`flex items-center gap-2 ${
                liked ? "bg-pink-600" : "bg-pink-500 hover:bg-pink-600"
              } text-white`}
            >
              <Heart size={18} fill={liked ? "white" : "none"} />{" "}
              {liked ? "Liked" : "Like"}
            </Button>

            <Button
              variant="outline"
              onClick={() => document.getElementById("comments")?.scrollIntoView()}
            >
              <MessageCircle size={18} /> Comment
            </Button>

            <Button
              variant="outline"
              onClick={toggleSave}
              className={saved ? "border-pink-500 text-pink-500" : ""}
            >
              <Bookmark size={18} /> {saved ? "Saved" : "Save"}
            </Button>

            <Button variant="outline" onClick={sharePost}>
              <Share2 size={18} /> Share
            </Button>
          </div>

          {/* Rating */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Rate this trip:</h4>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={24}
                  className={`cursor-pointer ${
                    star <= rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-400"
                  }`}
                  onClick={() => handleRating(star)}
                />
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <Card id="comments" className="p-6 bg-white/70 dark:bg-gray-800/80">
            <h4 className="text-lg font-bold mb-3 text-pink-600">💬 Comments</h4>
            <div className="space-y-3 mb-4">
              {comments.map((c, i) => (
                <div
                  key={i}
                  className="border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-gray-600 dark:text-gray-300">{c.text}</p>
                </div>
              ))}
              {comments.length === 0 && (
                <p className="text-gray-500 text-sm">No comments yet!</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Your name"
                value={newComment.name}
                onChange={(e) =>
                  setNewComment({ ...newComment, name: e.target.value })
                }
                className="p-2 border rounded-md dark:bg-gray-700"
              />
              <textarea
                placeholder="Write a comment..."
                value={newComment.text}
                onChange={(e) =>
                  setNewComment({ ...newComment, text: e.target.value })
                }
                className="p-2 border rounded-md h-20 dark:bg-gray-700"
              />
              <Button onClick={addComment} className="bg-pink-500 text-white">
                Post Comment
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Right - Sidebar */}
        <div className="space-y-6">
          {/* Weather */}
          <Card className="p-6 flex flex-col items-center gap-2 bg-white/70 dark:bg-gray-800/80">
            <CloudSun size={40} className="text-yellow-400" />
            <p className="text-2xl font-bold">14°C</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Sunny in Prague ☀️
            </p>
          </Card>

          {/* Budget */}
          <Card className="p-6 bg-white/70 dark:bg-gray-800/80">
            <h3 className="font-bold text-lg mb-3 text-pink-700">Trip Budget 💰</h3>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              {Object.entries(post.budget).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="capitalize">{key}</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Explore More */}
          <Card className="p-6 bg-gradient-to-br from-blue-100 to-pink-100 dark:from-blue-950 dark:to-pink-950 text-center">
            <h4 className="font-pacifico text-2xl mb-2 text-gray-800 dark:text-white">
              Want More Destinations?
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Discover curated guides & itineraries around the world!
            </p>
            <Link to="/travel">
              <Button className="bg-white text-pink-600 hover:bg-pink-50">
                Explore All Trips
              </Button>
            </Link>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
