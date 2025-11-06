import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Eye, Gift, Sparkles } from "lucide-react";

interface ItinerarySectionProps {
  placeId: string;
  placeName: string;
  duration: string;
}

export default function ItinerarySection({ placeId, placeName, duration }: ItinerarySectionProps) {
  const [showPreview, setShowPreview] = useState(false);

  // Create clean filename for PDF
  const fileName = `${placeName
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()} Itinerary.pdf`;

  const pdfPath = `/itinerary/${placeName} Itinerary.pdf`;

 return (
    <>
      <Card className="relative p-6 bg-white/90 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-2xl border border-pink-200 dark:border-gray-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 via-white/5 to-transparent dark:from-pink-900/10 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 flex items-center gap-2">
            ✈️ {duration} {placeName} Itinerary Guide
          </h3>

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Plan less, explore more 🌸 This guide helps you experience {placeName} like a local —
            full of hidden cafés, scenic walks, maps, and printable planners.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle className="text-pink-400" size={16} /> Full {duration} itinerary + insider tips</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-pink-400" size={16} /> Budget & transport guide</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-pink-400" size={16} /> Food recommendations </li>
            </ul>

            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle className="text-pink-400" size={16} /> Printable planner checklist</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-pink-400" size={16} /> Bonus: Suggested day trips</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-pink-400" size={16} /> Offline-friendly PDF format</li>
            </ul>
          </div>

          <div className="mt-6 bg-gradient-to-r from-pink-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 border border-pink-200/60 dark:border-gray-700 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left">
              <h4 className="font-bold text-lg text-pink-600 dark:text-pink-400">
                Free Download 💕
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                No sign-up needed • Instantly yours
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="text-pink-600 border-pink-300 hover:bg-pink-50 dark:hover:bg-gray-700"
                onClick={() => setShowPreview(true)}
              >
                <Eye size={16} className="mr-2" /> Preview
              </Button>

              <a href={pdfPath} download>
                <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                  Download Itinerary
                </Button>
              </a>
            </div>
          </div>

          {/*<div className="flex items-center justify-center gap-1 text-yellow-400 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} />
            ))}
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              Loved by travelers ❤️
            </span>
            </div>*/}

          <div className="bg-pink-50/50 dark:bg-gray-900/50 rounded-lg p-3 mt-4 text-sm text-gray-700 dark:text-gray-300 italic">
            <Sparkles className="inline w-4 h-4 text-pink-400 mr-1" />
            “Made to help you explore beautifully — Dary 💕”
          </div>
        </div>
      </Card>

      {/* PDF Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-5xl h-[90vh] shadow-2xl flex flex-col relative">

            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h4 className="font-semibold text-pink-600 dark:text-pink-400 flex items-center gap-2">
                <Eye size={18} /> Preview — {placeName}
              </h4>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-500 hover:text-pink-500 text-xl"
              >
                ✖
              </button>
            </div>

            {/* Scrollable PDF Area */}
            <div className="flex-1 overflow-hidden rounded-b-2xl">
              <iframe
                src={`${pdfPath}#page=1&zoom=80`}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}