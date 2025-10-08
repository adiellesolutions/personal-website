import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Lock, Star, Eye, Gift, Sparkles } from "lucide-react";

export default function BuyItinerarySection() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Card className="relative p-6 bg-white/90 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-2xl border border-pink-200 dark:border-gray-700 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 via-white/5 to-transparent dark:from-pink-900/10 pointer-events-none" />

      <div className="relative z-10 space-y-4">
        {/* HEADER */}
        <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 flex items-center gap-2">
          ✈️ 3-Day Prague Itinerary Guide
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Plan less, explore more 🌸 This all-in-one travel guide helps you experience Prague like a local — from charming cafés to hidden spots, with printable planners and budget tips.
        </p>

        {/* FEATURE LIST */}
        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-pink-400" size={16} /> Interactive map & routes
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-pink-400" size={16} /> 3-day itinerary + local insights
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-pink-400" size={16} /> Budget + transport guide
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-pink-400" size={16} /> Café & restaurant list ☕
            </li>
          </ul>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-pink-400" size={16} /> Packing checklist + planner (PDF)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-pink-400" size={16} /> Bonus: “Day Trips from Prague” mini guide
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-pink-400" size={16} /> Offline-friendly format
            </li>
          </ul>
        </div>

        {/* PRICE BOX */}
        <div className="mt-6 bg-gradient-to-r from-pink-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 border border-pink-200/60 dark:border-gray-700 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left">
            <h4 className="font-bold text-lg text-pink-600 dark:text-pink-400">
              $9 • Instant Access 💕
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              One-time purchase • Lifetime updates
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto text-pink-600 border-pink-300 hover:bg-pink-50 dark:hover:bg-gray-700"
              onClick={() => setShowPreview(true)}
            >
              <Eye size={16} className="mr-2" /> Preview Sample
            </Button>
            <Button className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-md hover:scale-[1.02] transition-transform">
              💖 Buy Now
            </Button>
          </div>
        </div>

        {/* BONUSES & TRUST */}
        <div className="text-sm mt-3 flex items-center justify-between flex-wrap gap-2">
          <span className="flex items-center text-pink-500 dark:text-pink-400 gap-1">
            <Gift size={14} /> Includes 2 bonus mini-guides!
          </span>
          <span className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
            <Lock size={12} className="mr-1" />
            Secure checkout • Instant download
          </span>
        </div>

        {/* RATINGS */}
        <div className="flex items-center justify-center gap-1 text-yellow-400 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} />
          ))}
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
            1,200+ happy travelers
          </span>
        </div>

        {/* PERSONAL NOTE */}
        <div className="bg-pink-50/50 dark:bg-gray-900/50 rounded-lg p-3 mt-4 text-sm text-gray-700 dark:text-gray-300 italic">
          <Sparkles className="inline w-4 h-4 text-pink-400 mr-1" />
          “Made with love to help you explore Prague with ease and glow — Dary 💕”
        </div>
      </div>

      {/* Modal Preview */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-lg shadow-2xl relative animate-in fade-in-50 slide-in-from-bottom-5">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-pink-500 text-lg"
            >
              ✖
            </button>
            <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-3 flex items-center gap-2">
              <Eye size={18} /> Preview Sample
            </h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
              <p className="font-semibold text-pink-500 mb-2">Day 1: Old Town Magic 🌉</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-3">
                <li>Walk across Charles Bridge at sunrise</li>
                <li>Brunch at Café Louvre</li>
                <li>Evening stroll through the Astronomical Clock Square</li>
              </ul>
              <p className="font-semibold text-pink-500 mb-2">Day 2: Hidden Cafés & Sunset Views ☕</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>Vintage cafés in Vinohrady</li>
                <li>Picnic at Letná Park</li>
              </ul>
              <p className="mt-4 italic text-gray-400 text-center">
                Unlock the full version to access interactive maps, offline planner & bonus day trip tips 💕
              </p>
            </div>
            <Button className="w-full mt-5 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-base">
              💕 Get Full Itinerary for $9
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
