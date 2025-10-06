import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import profilePic from "@/assets/profile-pic.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-pacifico text-5xl md:text-6xl text-center mb-8 text-primary">
            About Me ✨
          </h1>
          
          <Card className="gradient-dreamy shadow-glow p-8 md:p-12 border-2 border-white/50 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src={profilePic}
                alt="Profile"
                className="w-48 h-48 rounded-full border-4 border-white shadow-float object-cover"
              />
              <div className="text-white text-center md:text-left">
                <h2 className="font-pacifico text-3xl mb-4">Hey there! 💕</h2>
                <p className="text-lg leading-relaxed">
                  Welcome to my little corner of the internet! I'm a student living my dream life in Germany, 
                  passionate about studying, self-improvement, and soaking up every moment of this beautiful journey. 
                  This space is where I share my study tips, favorite finds, travel adventures, and all the things 
                  that make life sparkle a little brighter. ✨
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card shadow-float border-2 border-primary/10 p-8 hover:shadow-glow transition-smooth">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-quicksand font-bold text-2xl mb-4 text-foreground">My Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Moving to Germany was a dream come true! From navigating university life to exploring 
                charming European cities, every day is an adventure. I love documenting my journey and 
                sharing what I learn along the way.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not studying, you'll find me planning my next trip, trying new cafes, 
                or creating content that hopefully inspires you too! 🌸
              </p>
            </Card>

            <Card className="bg-card shadow-float border-2 border-primary/10 p-8 hover:shadow-glow transition-smooth">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-quicksand font-bold text-2xl mb-4 text-foreground">What I Love</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>📚 Deep study sessions with cozy vibes</li>
                <li>✈️ Weekend trips to new cities</li>
                <li>🌸 Aesthetic stationery and planning</li>
                <li>☕ Discovering cute coffee shops</li>
                <li>💫 Personal growth and self-care</li>
                <li>📷 Photography and journaling</li>
                <li>🎨 Creating mood boards and digital art</li>
              </ul>
            </Card>
          </div>

          <Card className="gradient-ocean shadow-glow p-8 border-2 border-white/50 text-center">
            <h3 className="font-pacifico text-3xl text-white mb-4">
              Want to See My Aesthetic World? 🌊
            </h3>
            <p className="text-white/95 mb-6 text-lg">
              Check out my moodboard for all the dreamy vibes, quotes, and inspiration!
            </p>
            <Link to="/moodboard">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-bounce shadow-float"
              >
                View Moodboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
