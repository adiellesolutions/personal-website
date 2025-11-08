import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TravelSection = () => {
  const destinations = [
    {
      id: 5,
      name: "Milan, Lake Como (Bellagio), & Lake Iseo",
      description: "A trip made for two — from historical Milan city walks, to fairytale Bellagio alleyways, to cruising across Lake Iseo like movie characters. Calm mornings, slow meals, scenic views, and memories that feel soft and warm.",
      emoji: "🗼",
    },
    {
      id: 4,
      name: "Germany – Hamburg, Düsseldorf, Cochem & Frankfurt",
      description: "Explore Germany’s vibrant cities and charming towns, from Frankfurt’s riverside skyline to Hamburg’s magical Christmas markets. Insider tips and packing essentials make traveling easy and stylish.",
      emoji: "🏔️",
    },
    {
      id: 3,
      name: "Luxembourg City, Luxembourg",
      description: "Luxembourg City feels like walking inside a softly lit fairytale — stone bridges, pastel buildings, and calm café corners. It’s the kind of place where you can explore slowly, breathe deeply, and fall in love with the quiet.",
      emoji: "🏰",
    },
  ];

  return (
    <section id="travel" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-pacifico text-4xl md:text-5xl text-center mb-4 text-primary">
          Travel Diaries
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Adventures from around Europe ✈️
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {destinations.map((destination) => (
            <Link key={destination.id} to={`/TravelPost/TravelPost${destination.id}`}>
              <Card className="group bg-card shadow-float border-2 border-primary/10 p-6 hover:shadow-glow transition-smooth text-center h-full">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-bounce">
                  {destination.emoji}
                </div>
                <h3 className="font-quicksand font-bold text-xl text-foreground mb-2">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {destination.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="gradient-sunset shadow-glow p-8 md:p-12 border-2 border-white/50 text-center">
          <MapPin className="w-16 h-16 mx-auto text-white mb-6 animate-float" />
          <h3 className="font-pacifico text-3xl text-white mb-4">
            Complete Travel Guides 🗺️
          </h3>
          <p className="text-white/95 mb-6 text-lg max-w-lg mx-auto">
            Get my detailed itineraries, budget tips, and all the hidden gems 
            for your next European adventure!
          </p>
          <Link to="/travel">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-bounce shadow-float"
            >
              Explore Travel Diaries
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default TravelSection;
