import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface RelatedItem {
  id: string;
  name: string;
  cover: string;
}

interface RelatedCarouselProps {
  related: RelatedItem[];
}

export default function MoreFromJournal({ related }: RelatedCarouselProps) {
  return (
    <div>
      <h3 className="font-quicksand font-semibold text-xl mb-4">
        More from the Journal
      </h3>

      <div className="flex gap-4 overflow-x-auto pb-3">
        {related.map((r) => (
          <div key={r.id} className="min-w-[220px] flex-shrink-0">
            <Card className="p-0 overflow-hidden rounded-2xl">
              <img src={r.cover} alt={r.name} className="w-full h-36 object-cover" />

              <div className="p-3">
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-gray-500">Short guide</div>

                <div className="mt-3 flex justify-between items-center">
                  <Link to={`/travel/${r.id}`} className="text-pink-500 text-sm">
                    Read
                  </Link>
                  <div className="text-xs text-gray-400">5 min</div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
