import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RELATED_PRODUCTS = [
  {
    id: 1,
    name: "Beach Lightroom Presets",
    price: "€8.99",
    image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
  },
  {
    id: 2,
    name: "Travel Journal Template",
    price: "€5.99",
    image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
  },
  {
    id: 3,
    name: "Pastel Instagram Covers",
    price: "€4.99",
    image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
  },
];

export default function RelatedProducts() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-primary-700 dark:text-sky-300 mb-6">
        You Might Also Like 🐚
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {RELATED_PRODUCTS.map((p) => (
          <Card
            key={p.id}
            className="overflow-hidden bg-white dark:bg-slate-800 hover:shadow-lg transition-all rounded-2xl border border-sky-100 dark:border-slate-700"
          >
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h3 className="font-semibold text-primary-700 dark:text-sky-200">{p.name}</h3>
              <p className="text-slate-600 dark:text-slate-400">{p.price}</p>

              <Button variant="outline" size="sm" className="mt-3 rounded-full w-full">
                View Product
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
