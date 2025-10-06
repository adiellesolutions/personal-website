import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ShopSection = () => {
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
    <section id="shop" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-pacifico text-4xl md:text-5xl text-center mb-4 text-primary">
          Shop My Favorites
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Cute finds I absolutely love 🛍️
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
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

        <div className="text-center">
          <Link to="/shop">
            <Button 
              className="bg-primary text-white hover:bg-primary/90 transition-bounce shadow-float px-8"
              size="lg"
            >
              Shop All
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
