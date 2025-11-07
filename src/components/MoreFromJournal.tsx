import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

// ✅ Import your static images here
import BrugesImg from "@/assets/TravelPost1/4.jpg";
import GhentImg from "@/assets/TravelPost1/22.jpg";
import CologneImg from "@/assets/TravelPost1/1.jpg";

// ✅ Static journal entries (no `related` needed)
const JOURNAL_SUGGESTIONS = [
  { id: "bruges-christmas", name: "Bruges Christmas Market" },
  { id: "ghent-winter-lights", name: "Ghent Winter Lights" },
  { id: "cologne-markets", name: "Cologne Christmas Markets" },
];

// ✅ Image lookup table (same IDs, same keys)
const IMAGE_MAP: Record<string, string> = {
  "bruges-christmas": BrugesImg,
  "ghent-winter-lights": GhentImg,
  "cologne-markets": CologneImg,
};

export default function MoreFromJournal() {
  return (
    <div>
      <h3 className="font-quicksand font-semibold text-xl mb-4">
        More from the Journal
      </h3>

      <div className="flex gap-4 overflow-x-auto pb-3">
        {JOURNAL_SUGGESTIONS.map((item) => (
          <div key={item.id} className="min-w-[220px] flex-shrink-0">
            <Card className="p-0 overflow-hidden rounded-2xl">
              <img
                src={IMAGE_MAP[item.id]}
                alt={item.name}
                className="w-full h-36 object-cover"
              />

              <div className="p-3">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">Short guide</div>

                <div className="mt-3 flex justify-between items-center">
                  <Link to={`/travel/${item.id}`} className="text-pink-500 text-sm">
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
