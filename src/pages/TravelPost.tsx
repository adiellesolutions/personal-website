import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Clock, Heart } from "lucide-react";

const TravelPost = () => {
  const { id } = useParams();

  // Mock travel post data
  const post = {
    name: "Prague, Czech Republic 🏰",
    type: "City Break",
    duration: "3 days",
    date: "February 2025",
    content: `
      <p>Prague stole my heart from the moment I arrived! This fairytale city is everything you imagine and more. Here's my complete guide to making the most of your Prague adventure! ✨</p>
      
      <h2>Day 1: Old Town Magic 🌟</h2>
      <p><strong>Morning:</strong> Started at the famous Astronomical Clock in Old Town Square. Get there before 9 AM to beat the crowds! Grabbed a trdelník (traditional pastry) from a nearby stall - so good!</p>
      <p><strong>Afternoon:</strong> Wandered through the Jewish Quarter and visited the beautiful Spanish Synagogue. The history here is incredibly moving and important to experience.</p>
      <p><strong>Evening:</strong> Sunset at Charles Bridge is absolutely magical! Stay until the street lights come on for the most romantic atmosphere. Had dinner at a traditional Czech restaurant - try the goulash!</p>
      
      <h2>Day 2: Castle & Views 🏰</h2>
      <p><strong>Morning:</strong> Prague Castle opens at 9 AM - arrive early! The complex is HUGE, so wear comfortable shoes. St. Vitus Cathedral inside is breathtaking.</p>
      <p><strong>Afternoon:</strong> Walked down the charming Golden Lane (tiny colorful houses!) and explored the castle gardens. The views over Prague from up here are unreal!</p>
      <p><strong>Evening:</strong> Took a river cruise at sunset. Seeing the city from the water while the sun sets behind the castle? *Chef's kiss* Absolutely worth it!</p>
      
      <h2>Day 3: Local Favorites 💕</h2>
      <p><strong>Morning:</strong> Visited Vyšehrad - a quieter castle with stunning views and a peaceful cemetery. Way fewer tourists and equally beautiful!</p>
      <p><strong>Afternoon:</strong> Explored the hipster neighborhood of Karlín. Found the CUTEST cafes here! Stopped at Můj šálek kávy for the best coffee in Prague.</p>
      <p><strong>Evening:</strong> Last dinner in Malá Strana district. Found a cozy wine cellar restaurant - the atmosphere was so romantic and authentic!</p>
      
      <h2>Budget Tips 💰</h2>
      <ul>
        <li>Stay in Žižkov or Vinohrady for cheaper accommodation</li>
        <li>Buy a 3-day public transport pass - super convenient!</li>
        <li>Lunch menus at restaurants are way cheaper than dinner</li>
        <li>Many churches are free to enter</li>
        <li>Walk everywhere - the city isn't that big!</li>
      </ul>
      
      <h2>Where I Stayed 🏨</h2>
      <p>Found a cute Airbnb in Vinohrady for €40/night. Perfect location, walking distance to everything, and the neighborhood had amazing local restaurants!</p>
      
      <h2>Final Thoughts ✨</h2>
      <p>Prague exceeded all my expectations! It's perfect for a long weekend, incredibly romantic, and surprisingly affordable. The architecture, the food, the atmosphere - everything about this city is magical. Already planning my next visit!</p>
      
      <p>Have questions about Prague? DM me on Instagram! 💕</p>
    `,
    tips: [
      "Download offline maps - WiFi can be spotty",
      "Learn basic Czech phrases - locals appreciate it!",
      "Book castle tickets online to skip queues",
      "Avoid currency exchange places - use ATMs instead",
      "Pack layers - Prague weather is unpredictable",
    ],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link to="/travel">
            <Button variant="ghost" className="mb-6 text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Travel Hub
            </Button>
          </Link>

          <Card className="gradient-dreamy shadow-glow p-8 md:p-12 border-2 border-white/50 mb-8">
            <Badge className="bg-white/20 text-white border-white/40 mb-4">
              {post.type}
            </Badge>
            <h1 className="font-pacifico text-4xl md:text-5xl text-white mb-6">
              {post.name}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Europe</span>
              </div>
            </div>
          </Card>

          <Card className="bg-card shadow-float border-2 border-primary/10 p-8 md:p-12 mb-8">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-quicksand prose-headings:font-bold prose-headings:text-primary
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-strong:text-foreground
                prose-ul:text-muted-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Card>

          <Card className="bg-card shadow-float border-2 border-primary/10 p-8 mb-8">
            <h2 className="font-quicksand font-bold text-2xl text-primary mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Quick Tips
            </h2>
            <ul className="space-y-3">
              {post.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="gradient-ocean shadow-glow p-8 border-2 border-white/50 text-center">
            <h3 className="font-pacifico text-3xl text-white mb-4">
              Want More Travel Guides? 🗺️
            </h3>
            <p className="text-white/95 mb-6">
              Check out my complete travel itineraries and detailed guides!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/travel">
                <Button className="bg-white text-primary hover:bg-white/90 transition-bounce">
                  More Destinations
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Get Full Itineraries
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TravelPost;
