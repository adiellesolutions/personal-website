import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coastal.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-ocean opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 py-20">
        <div className="animate-float">
          <h1 className="font-pacifico text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
            Life with Dary
            <span className="inline-block ml-2 animate-pulse">✨</span>
          </h1>
          <p className="font-quicksand text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Filipina, traveler and glow-up bestie! 🌸
          </p>
        </div>
        
        <Button 
          onClick={scrollToAbout}
          size="lg"
          className="bg-white/90 text-primary hover:bg-white hover:scale-105 transition-bounce shadow-glow font-semibold text-lg px-8 py-6"
        >
          Explore My Coastal Sanctuary
          <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  );
};

export default Hero;
