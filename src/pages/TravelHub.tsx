import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import TimelineSection from "@/components/TravelTimelineSection";


const TravelHub = () => {
  const destinations = [
    {
      id: 1,
      name: "Prague, Czech Republic 🏰",
      type: "City Break",
      duration: "3 days",
      description: "Fairytale castles, cobblestone streets, and the most magical sunsets!",
      highlights: ["Charles Bridge", "Old Town Square", "Prague Castle"],
    },
    {
      id: 2,
      name: "Amsterdam, Netherlands 🌷",
      type: "Weekend Trip",
      duration: "2 days",
      description: "Bike rides along canals, tulip fields, and the cutest cafes everywhere!",
      highlights: ["Canal Tour", "Anne Frank House", "Bloemenmarkt"],
    },
    {
      id: 3,
      name: "Vienna, Austria 🎵",
      type: "Cultural Trip",
      duration: "4 days",
      description: "Imperial palaces, classical music, and the most beautiful architecture!",
      highlights: ["Schönbrunn Palace", "St. Stephen's Cathedral", "Naschmarkt"],
    },
    {
      id: 4,
      name: "Swiss Alps, Switzerland 🏔️",
      type: "Adventure",
      duration: "5 days",
      description: "Breathtaking mountain views, crystal-clear lakes, and picture-perfect villages!",
      highlights: ["Interlaken", "Jungfraujoch", "Lake Lucerne"],
    },
    {
      id: 5,
      name: "Barcelona, Spain 🌊",
      type: "Beach & Culture",
      duration: "4 days",
      description: "Gaudí's masterpieces, Mediterranean vibes, and endless tapas!",
      highlights: ["Sagrada Familia", "Park Güell", "Gothic Quarter"],
    },
    {
      id: 6,
      name: "Munich, Germany 🥨",
      type: "Local Favorite",
      duration: "Day Trip",
      description: "My go-to city for weekend adventures - beer gardens, museums, and charm!",
      highlights: ["Marienplatz", "English Garden", "Nymphenburg Palace"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-pacifico text-5xl md:text-6xl mb-4 text-primary">
              Travel Diaries ✈️
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore Europe with me - one adventure at a time! 🗺️✨
            </p>
          </div>

          
          {/* Call Timeline Section */}
          <TimelineSection />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <Link key={destination.id} to={`/travel/${destination.id}`}>
                <Card className="group bg-card shadow-float border-2 border-primary/10 overflow-hidden hover:shadow-glow transition-smooth h-full">
                  <div className="gradient-dreamy p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-white/20 text-white border-white/40">
                        {destination.type}
                      </Badge>
                      <span className="text-white/90 text-sm">{destination.duration}</span>
                    </div>
                    <h3 className="font-quicksand font-bold text-xl text-white mb-2 group-hover:scale-105 transition-bounce">
                      {destination.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">
                      {destination.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-medium text-foreground">Top Highlights:</p>
                      {destination.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3 text-primary" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-smooth">
                      Read Travel Guide
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="gradient-sunset shadow-glow p-8 md:p-12 mt-12 border-2 border-white/50 text-center">
            <h3 className="font-pacifico text-3xl text-white mb-4">
              Travel Tips & Guides 🎒
            </h3>
            <p className="text-white/95 text-lg max-w-2xl mx-auto mb-6">
              Want budget travel tips, packing hacks, and hidden gems? 
              Check out my detailed travel guides and itineraries!
            </p>
            <Link to="/courses">
              <Button className="bg-white text-primary hover:bg-white/90 transition-bounce">
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
