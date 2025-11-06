import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";

const MoodboardPage = () => {
  useScrollToTop();
  const quotes = [
    "Live in the sunshine, swim in the sea, drink the wild air ✨",
    "She believed she could, so she did 💫",
    "Collect moments, not things 🌸",
    "Dream big, sparkle more, shine bright ⭐",
    "Be a voice, not an echo 💕",
    "Create your own sunshine ☀️",
  ];

  const aestheticCards = [
    { emoji: "🌊", title: "Coastal Dreams", color: "gradient-ocean" },
    { emoji: "🌸", title: "Soft & Pretty", color: "gradient-sunset" },
    { emoji: "✨", title: "Sparkle More", color: "gradient-dreamy" },
    { emoji: "📚", title: "Study Vibes", color: "gradient-ocean" },
    { emoji: "☕", title: "Cozy Moments", color: "gradient-sunset" },
    { emoji: "🎀", title: "Girly Things", color: "gradient-dreamy" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-pacifico text-5xl md:text-6xl mb-4 text-primary">
              My Moodboard 🎨
            </h1>
            <p className="text-muted-foreground text-lg">
              All the aesthetic vibes, quotes, and inspiration that make my heart happy ✨
            </p>
          </div>

          {/* Aesthetic Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aestheticCards.map((card, index) => (
              <Card
                key={index}
                className={`${card.color} p-8 border-2 border-white/50 shadow-float hover:shadow-glow transition-smooth group cursor-pointer`}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-bounce">
                  {card.emoji}
                </div>
                <h3 className="font-pacifico text-2xl text-white">
                  {card.title}
                </h3>
              </Card>
            ))}
          </div>

          {/* Quotes */}
          <div className="mb-12">
            <h2 className="font-pacifico text-4xl text-center mb-8 text-primary">
              Quotes I Love 💕
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-float border-2 border-primary/10 p-6 hover:shadow-glow transition-smooth group"
                >
                  <Sparkles className="w-8 h-8 text-primary mb-4 group-hover:animate-float" />
                  <p className="font-quicksand text-lg text-foreground italic">
                    "{quote}"
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Playlist Section */}
          <PlaylistSection />

          {/* Closing Card */}
          <Card className="gradient-dreamy shadow-glow p-12 border-2 border-white/50 text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Heart className="w-12 h-12 text-white animate-float" />
              <Star className="w-12 h-12 text-white animate-float" style={{ animationDelay: "0.5s" }} />
              <Sparkles className="w-12 h-12 text-white animate-float" style={{ animationDelay: "1s" }} />
            </div>
            <h3 className="font-pacifico text-3xl text-white mb-4">
              More Coming Soon! ✨
            </h3>
            <p className="text-white/95 text-lg">
              I'm always adding new aesthetic finds, playlists, and mood boards.
              Follow me on socials to see updates first! 💖
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// 🎵 Playlist Section Component
function PlaylistSection() {
  const playlists = {
    "🇧🇪 Belgium": "https://open.spotify.com/playlist/0fAjqR8W08ycQWWOcI575a?si=Hu1X5DwkSbmJrr9CuQe-Nw&pi=NAaW8iicQumD4",
    "Coastal Dreams": "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U?utm_source=generator",
    "Morning Energy": "https://open.spotify.com/embed/playlist/37i9dQZF1DXc5e2bJhV6pu?utm_source=generator",
    "Evening Calm": "https://open.spotify.com/embed/playlist/37i9dQZF1DWZZbwlv3Vmtr?utm_source=generator",
    "Others": "https://open.spotify.com/embed/playlist/37i9dQZF1DWSkMjlBZAZ07?utm_source=generator",
  };

  const [current, setCurrent] = useState("Study Vibes");

  return (
    <Card className="bg-card shadow-float border-2 border-primary/10 p-8 mb-12">
      <h2 className="font-pacifico text-4xl text-center mb-6 text-primary">
        My Playlists 🎵
      </h2>

      {/* Playlist Choices */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {Object.keys(playlists).map((name) => (
          <Button
            key={name}
            variant={current === name ? "default" : "outline"}
            onClick={() => setCurrent(name)}
          >
            {name}
          </Button>
        ))}
      </div>

      {/* Spotify Embed */}
      <div className="max-w-3xl mx-auto">
        <iframe
          style={{ borderRadius: "12px" }}
          src={playlists[current]}
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </Card>
  );
}

export default MoodboardPage;