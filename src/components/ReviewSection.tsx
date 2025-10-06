import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const emojis = ["🌸", "🌟", "🍓", "🍰", "💌", "💕", "🐰", "🦋", "🎀", "📚"];

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("http://localhost/Personal-Website/backend/get_reviews.php");
        const data = await res.json();
        if (data.success) {
          const withEmoji = data.reviews.map((r: any) => ({
            ...r,
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
          }));
          setReviews(withEmoji);
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  const nextReview = () => {
    setIndex((prev) => (prev + 2) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 2 + reviews.length) % reviews.length);
  };

  let visibleReviews: any[] = [];
  if (reviews.length === 1) {
    visibleReviews = [reviews[0]];
  } else if (reviews.length > 1) {
    visibleReviews = [reviews[index], reviews[(index + 1) % reviews.length]];
  }

  return (
    <section id="reviews" className="py-16 md:py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="font-pacifico text-3xl md:text-5xl mb-4 text-primary">
          What People Are Saying
        </h2>
        <p className="text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
          Love from my amazing community 💕
        </p>

        {visibleReviews.length > 0 ? (
          <div className={`grid ${visibleReviews.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"} gap-6`}>
            {visibleReviews.map((review, idx) => (
              <Card key={idx} className="bg-card shadow-float border-2 border-primary/10 p-6 md:p-8 hover:shadow-glow transition-smooth">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(Number(review.rating))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-3xl">{review.emoji}</span>
                </div>

                <Quote className="w-6 h-6 text-primary/30 mb-3 mx-auto" />
                <p className="text-muted-foreground text-base mb-4 leading-relaxed italic">
                  {review.description}
                </p>

                <div className="border-t border-primary/10 pt-3">
                  <p className="font-quicksand font-bold text-foreground text-base">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No reviews yet 🌷 Be the first to leave one!</p>
        )}

        {reviews.length > 2 && (
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" onClick={prevReview}>
              <ChevronLeft className="w-5 h-5" /> Prev
            </Button>
            <Button variant="outline" onClick={nextReview}>
              Next <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;