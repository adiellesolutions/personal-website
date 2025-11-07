import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";

// ✅ Import your static images here
import TP1Img from "@/assets/TravelPost1/16.jpg";
import TP2Img from "@/assets/TravelPost2/20.jpg";
import TP3Img from "@/assets/TravelPost3/10.jpg";
import TP4Img from "@/assets/TravelPost4/Dusseldorf/3.jpg";
import TP5Img from "@/assets/TravelPost5/8.jpg";

const JOURNAL_SUGGESTIONS = [
  { id: "1", name: "Oslo & Tjøme, Norway 🏰" },
  { id: "2", name: "Liège, Belgium 🌷" },
  { id: "3", name: "Luxembourg City, Luxembourg 🎵" },
  { id: "4", name: "Germany – Hamburg, Düsseldorf, Cochem & Frankfurt 🏔️" },
  { id: "5", name: "Milan, Lake Como (Bellagio), & Lake Iseo 🌊" },
];

const IMAGE_MAP: Record<string, string> = {
  "1": TP1Img,
  "2": TP2Img,
  "3": TP3Img,
  "4": TP4Img,
  "5": TP5Img,
};

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function MoreFromJournal() {
  const { id: currentId } = useParams<{ id: string }>();
  const shuffledSuggestions = shuffleArray(JOURNAL_SUGGESTIONS);

  return (
    <div>
      <h3 className="font-quicksand font-semibold text-xl mb-4">
        More from the Journal
      </h3>

      <div className="flex gap-4 overflow-x-auto pb-3">
        {shuffledSuggestions
          .filter((item) => item.id !== currentId) // Hide current page
          .map((item) => (
            <Link
              key={item.id}
              to={`/TravelPost/TravelPost${item.id}`}
              className="min-w-[220px] flex-shrink-0"
            >
              <Card className="p-0 overflow-hidden rounded-2xl cursor-pointer hover:shadow-lg transition">
                <img
                  src={IMAGE_MAP[item.id]}
                  alt={item.name}
                  className="w-full h-36 object-cover"
                />

                <div className="p-3">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-500">Short guide</div>

                  <div className="mt-3 flex justify-between items-center">
                    <div className="text-xs text-gray-400">5 min</div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
