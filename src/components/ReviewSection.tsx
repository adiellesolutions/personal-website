import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Emma",
      location: "Berlin, Germany",
      rating: 5,
      text: "Her travel guides are SO detailed! I followed her Prague itinerary and it was perfect. All the hidden gems were amazing!",
      emoji: "🌟",
    },
    {
      name: "Sophie",
      location: "Amsterdam, Netherlands",
      rating: 5,
      text: "Love her study tips! My grades improved so much after following her routine. Plus, her aesthetic makes studying fun ✨",
      emoji: "📚",
    },
    {
      name: "Mia",
      location: "Vienna, Austria",
      rating: 5,
      text: "The shop recommendations are chef's kiss! Everything is so cute and actually useful. My desk setup is now Pinterest-worthy!",
      emoji: "💕",
    },
    {
      name: "Luna",
      location: "Munich, Germany",
      rating: 5,
      text: "Her vibe is immaculate! The pastel aesthetic, the helpful content, everything is just perfection. Total inspiration!",
      emoji: "🌸",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prev) => (prev + 2) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 2 + reviews.length) % reviews.length);
  };

  // Always grab 2 reviews
  const visibleReviews = [
    reviews[index],
    reviews[(index + 1) % reviews.length],
  ];

  return (
    <section
      id="reviews"
      className="py-16 md:py-20 px-4 bg-gradient-to-b from-background to-primary/5"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="font-pacifico text-3xl md:text-5xl mb-4 text-primary">
          What People Are Saying
        </h2>
        <p className="text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
          Love from my amazing community 💕
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {visibleReviews.map((review, idx) => (
            <Card
              key={idx}
              className="bg-card shadow-float border-2 border-primary/10 p-6 md:p-8 hover:shadow-glow transition-smooth"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-3xl">{review.emoji}</span>
              </div>

              <Quote className="w-6 h-6 text-primary/30 mb-3 mx-auto" />
              <p className="text-muted-foreground text-base mb-4 leading-relaxed italic">
                {review.text}
              </p>

              <div className="border-t border-primary/10 pt-3">
                <p className="font-quicksand font-bold text-foreground text-base">
                  {review.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {review.location}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" onClick={prevReview}>
            <ChevronLeft className="w-5 h-5" /> Prev
          </Button>
          <Button variant="outline" onClick={nextReview}>
            Next <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;