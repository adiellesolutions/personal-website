import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Thumbnail1 from "@/assets/product1.png";
import Thumbnail2 from "@/assets/product2.png";
import Thumbnail3 from "@/assets/product3.png";
import Thumbnail4 from "@/assets/product4.png";
import Thumbnail5 from "@/assets/product5.png";
import Thumbnail6 from "@/assets/product6.png";

const RELATED_PRODUCTS = [
  { id: 1, name: "Francila Premium Vest + Shorts Set", price: "€22.27", image: Thumbnail1 },
  { id: 2, name: "Butterfly Hair Clip", price: "€2.68", image: Thumbnail2 },
  { id: 3, name: "Classic Black Wool Coat ", price: "€45.99", image: Thumbnail3 },
  { id: 4, name: "Blue Bow Slippers", price: "€9.88", image: Thumbnail4 },
  { id: 5, name: "Soleia Yellow 2-Piece Dress", price: "€40.99", image: Thumbnail5 },
  { id: 6, name: "TRNVIE White Tailored Shirt", price: "€10.19", image: Thumbnail6 },
];

// Fisher–Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function RelatedProducts() {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/ProductDetails/Product${id}`);
  };

  // Shuffle products once per render
  const shuffledProducts = shuffleArray(RELATED_PRODUCTS);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-primary-700 dark:text-sky-300 mb-6">
        You Might Also Like 🐚
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shuffledProducts.map((p) => (
          <Card
            key={p.id}
            className="overflow-hidden bg-white dark:bg-slate-800 hover:shadow-lg transition-all rounded-2xl border border-sky-100 dark:border-slate-700 cursor-pointer"
            onClick={() => handleClick(p.id)}
          >
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h3 className="font-semibold text-primary-700 dark:text-sky-200 line-clamp-1">{p.name}</h3>
              <p className="text-slate-600 dark:text-slate-400">{p.price}</p>

              <Button
                variant="outline"
                size="sm"
                className="mt-3 rounded-full w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(p.id);
                }}
              >
                View Product
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
