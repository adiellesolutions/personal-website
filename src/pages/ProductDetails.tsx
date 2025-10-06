import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Star } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();

  // Mock product data
  const product = {
    name: "Aesthetic Study Desk Setup 📚",
    type: "Affiliate Collection",
    price: "€45-120",
    description: "Transform your study space into a cozy, productive sanctuary! This is my complete desk setup that makes studying feel less like work and more like self-care.",
    items: [
      { name: "Minimalist Desk Lamp", price: "€45", reason: "Perfect lighting for late-night study sessions!" },
      { name: "Cute Desk Organizer Set", price: "€28", reason: "Keeps everything tidy and aesthetic ✨" },
      { name: "Cozy Desk Mat", price: "€35", reason: "Protects my desk and looks so pretty!" },
      { name: "Motivational Wall Prints", price: "€12", reason: "Daily inspiration that sparks joy 💕" },
    ],
    whyILoveIt: [
      "Makes my study space feel like a Pinterest board come to life",
      "Everything has its place - no more desk clutter!",
      "The lighting is perfect for video calls and study vlogs",
      "Quality items that will last through all of uni",
      "Creates the perfect cozy study atmosphere",
    ],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/shop">
            <Button variant="ghost" className="mb-6 text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Button>
          </Link>

          <Card className="gradient-ocean shadow-glow p-8 md:p-12 border-2 border-white/50 mb-8">
            <Badge className="bg-white/20 text-white border-white/40 mb-4">
              {product.type}
            </Badge>
            <h1 className="font-pacifico text-4xl md:text-5xl text-white mb-4">
              {product.name}
            </h1>
            <p className="text-3xl text-white/90 font-bold mb-6">
              {product.price}
            </p>
            <p className="text-white/95 text-lg leading-relaxed">
              {product.description}
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-card shadow-float border-2 border-primary/10 p-8">
              <h2 className="font-quicksand font-bold text-2xl text-primary mb-6">
                What's Included ✨
              </h2>
              <div className="space-y-4">
                {product.items.map((item, index) => (
                  <div key={index} className="border-l-4 border-primary/30 pl-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-foreground">{item.name}</h3>
                      <span className="text-primary font-bold">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.reason}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-card shadow-float border-2 border-primary/10 p-8">
              <h2 className="font-quicksand font-bold text-2xl text-primary mb-6">
                Why I Love It 💕
              </h2>
              <ul className="space-y-3">
                {product.whyILoveIt.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="gradient-dreamy shadow-glow p-8 md:p-12 border-2 border-white/50 text-center">
            <h3 className="font-pacifico text-3xl text-white mb-4">
              Ready to Glow Up Your Study Space? ✨
            </h3>
            <p className="text-white/95 mb-6 text-lg">
              Click below to check out these items! (Affiliate links - thank you for supporting me! 💕)
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-bounce shadow-float"
            >
              Shop Now
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-white/80 text-sm mt-4">
              I may earn a small commission at no extra cost to you ✨
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
