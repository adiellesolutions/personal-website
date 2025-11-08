import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ShopSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const products = [
    {
      id: 1,
      name: "Aesthetic Desk Accessories",
      description: "Transform your study space into a dreamy sanctuary",
      type: "Affiliate",
    },
    {
      id: 2,
      name: "Pastel Study Supplies",
      description: "Cute stationery that makes studying more fun",
      type: "Affiliate",
    },
    {
      id: 3,
      name: "Travel Essentials Kit",
      description: "Everything you need for weekend adventures",
      type: "Favorite",
    },
  ];

  return (
    <section
      id="shop"
      className="
        py-20 px-4 
        bg-gradient-to-br from-pink-50 via-white to-blue-50 
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-800
        transition-colors duration-500
      "
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <h2 className="font-pacifico text-4xl md:text-5xl text-center mb-4 text-primary dark:text-pink-300">
          Shop My Favorites
        </h2>
        <p className="text-center text-muted-foreground dark:text-gray-300 mb-12 text-lg">
          Cute finds I absolutely love 🛍️
        </p>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <Card
              key={product.id}
              onClick={() => handleNavigate(`/shop/${product.id}`)}
              className="
                group cursor-pointer 
                bg-card/90 dark:bg-gray-900 
                shadow-float border-2 border-primary/10 dark:border-gray-700 
                overflow-hidden hover:shadow-glow transition-smooth h-full
              "
            >
              <div className="gradient-ocean dark:gradient-night p-6">
                <Badge className="bg-white/20 text-white border-white/40 mb-3">
                  {product.type}
                </Badge>
                <h3 className="font-quicksand font-bold text-xl text-white mb-2 group-hover:scale-105 transition-bounce">
                  {product.name}
                </h3>
              </div>
              <div className="p-6">
              <p className="text-muted-foreground dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center text-primary dark:text-pink-400 font-medium group-hover:translate-x-1 transition-smooth">
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Shop All Button */}
        <div className="text-center">
          <Button
            onClick={() => handleNavigate("/shop")}
            className="
              bg-primary text-white hover:bg-primary/90 
              dark:bg-pink-500 dark:hover:bg-pink-600
              transition-bounce shadow-float px-8
            "
            size="lg"
          >
            Shop All
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
