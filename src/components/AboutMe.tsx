import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import profilePic from "@/assets/profile-pic.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-pacifico text-4xl md:text-5xl text-center mb-12 text-primary">
          About Me ✨
        </h2>
        
        <Card className="gradient-dreamy shadow-glow p-8 md:p-12 border-2 border-white/50">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src={profilePic}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-white shadow-float object-cover"
            />
            <div className="text-white text-center md:text-left">
              <h3 className="font-pacifico text-3xl mb-4">Hey there! 💕</h3>
              <p className="text-lg leading-relaxed mb-6">
              21, Filipina ✨ based in Germany 🇩🇪 — living proof that you can chase your
              dreams even when you're young, broke, and confused (but still fabulous). I share
              my journey of growth, studying abroad, OOTDs, self-care, and random
              adventures — basically figuring life out so you don't have to alone. 💌
              </p>
              <Link to="/about">
                <Button 
                  className="bg-white text-primary hover:bg-white/90 transition-bounce shadow-float"
                >
                  More About Me
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutMe;
