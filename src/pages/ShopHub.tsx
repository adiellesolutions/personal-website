import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const ShopHub = () => {
  const products = [
    {
      id: 1,
      name: "Aesthetic Study Desk Setup 📚",
      type: "Affiliate",
      price: "€45-120",
      description: "All the cozy items that make my study space dreamy and productive!",
    },
    {
      id: 2,
      name: "My Everyday Jewelry Collection ✨",
      type: "Affiliate",
      price: "€15-65",
      description: "Dainty, minimal pieces that I wear every single day. Simple elegance!",
    },
    {
      id: 3,
      name: "Favorite Skincare Routine 🌸",
      type: "Affiliate",
      price: "€20-80",
      description: "The products that transformed my skin! Gentle, effective, and perfect for students.",
    },
    {
      id: 4,
      name: "Travel Essentials Kit ✈️",
      type: "Affiliate",
      price: "€25-95",
      description: "Everything I pack for weekend trips and long adventures across Europe!",
    },
    {
      id: 5,
      name: "Cozy Loungewear Collection 💕",
      type: "Affiliate",
      price: "€30-75",
      description: "Cute and comfy pieces for study sessions and relaxing at home.",
    },
    {
      id: 6,
      name: "Tech & Productivity Gadgets 💻",
      type: "Affiliate",
      price: "€35-150",
      description: "The tech that makes my student life easier and more organized!",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-pacifico text-5xl md:text-6xl mb-4 text-primary">
              Shop My Favorites 🛍️
            </h1>
            <p className="text-muted-foreground text-lg">
              All the things I love and genuinely recommend! ✨
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link key={product.id} to={`/shop/${product.id}`}>
                <Card className="group bg-card shadow-float border-2 border-primary/10 overflow-hidden hover:shadow-glow transition-smooth h-full">
                  <div className="gradient-ocean p-6">
                    <Badge className="bg-white/20 text-white border-white/40 mb-3">
                      {product.type}
                    </Badge>
                    <h3 className="font-quicksand font-bold text-xl text-white mb-2 group-hover:scale-105 transition-bounce">
                      {product.name}
                    </h3>
                    <p className="text-white/90 text-lg font-medium">
                      {product.price}
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-smooth">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="gradient-sunset shadow-glow p-8 md:p-12 mt-12 border-2 border-white/50 text-center">
            <h3 className="font-pacifico text-3xl text-white mb-4">
              Disclosure 💕
            </h3>
            <p className="text-white/95 text-lg max-w-2xl mx-auto">
              Some links are affiliate links, which means I may earn a small commission at no extra cost to you. 
              I only recommend products I genuinely love and use! Your support helps me keep creating content. Thank you! ✨
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShopHub;
