import { useState } from "react";
import { ChevronDown, ChevronUp, Star, Camera } from "lucide-react";

const TimelineEvent = ({ title, location, date, days, description, rating, photos, img }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-2 w-full md:w-[45%]">
    <div className="flex items-center gap-3">
      <img src={img} alt={title} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h3 className="font-semibold">{title}, {location}</h3>
        <p className="text-sm text-gray-500">{date} • {days} days</p>
      </div>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
    <div className="flex justify-between items-center text-sm text-gray-500">
      <span className="flex items-center gap-1 text-yellow-500 font-semibold"><Star size={16}/> {rating}</span>
      <span className="flex items-center gap-1"><Camera size={16}/> {photos} photos</span>
    </div>
  </div>
);

const TimelineYear = ({ year, summary, details, children, isOpen, onToggle }) => (
  <div className="flex items-start gap-6">
    {/* Year Bubble */}
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-r from-pink-300 to-blue-300 text-white font-bold px-4 py-2 rounded-full shadow-md">
        {year}
      </div>
      <div className="w-1 h-full bg-pink-200"></div>
    </div>

    {/* Year Content */}
    <div className="flex-1 space-y-3">
      <div 
        className="bg-white shadow rounded-2xl p-4 flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <div>
          <h2 className="font-semibold">{summary}</h2>
          <p className="text-sm text-gray-500">{details}</p>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && <div className="flex flex-wrap gap-4">{children}</div>}
    </div>
  </div>
);

export default function TimelineSection() {
  const [openYear, setOpenYear] = useState(null);

  return (
    <section className="py-10">
      <div className="space-y-10">
        {/* 2024 */}
        <TimelineYear
          year="2024"
          summary="2 Destinations Explored"
          details="24 days of adventures • Greece, Japan"
          isOpen={openYear === "2024"}
          onToggle={() => setOpenYear(openYear === "2024" ? null : "2024")}
        >
          <TimelineEvent
            title="Santorini"
            location="Greece"
            date="June"
            days="10"
            description="Witnessed breathtaking sunsets and explored ancient volcanic landscapes."
            rating="4.9"
            photos="127"
            img="https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png"
          />
          <TimelineEvent
            title="Kyoto"
            location="Japan"
            date="March"
            days="14"
            description="Cherry blossom season and traditional tea ceremonies in ancient temples."
            rating="4.8"
            photos="203"
            img="https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png"
          />
        </TimelineYear>

        {/* 2023 */}
        <TimelineYear
          year="2023"
          summary="4 Destinations Explored"
          details="71 days of adventures • Iceland, Indonesia, France, Thailand"
          isOpen={openYear === "2023"}
          onToggle={() => setOpenYear(openYear === "2023" ? null : "2023")}
        >
          <TimelineEvent
            title="Paris"
            location="France"
            date="April"
            days="7"
            description="Explored the Eiffel Tower and indulged in pastries."
            rating="4.7"
            photos="88"
            img="https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png"
          />
        </TimelineYear>
      </div>
    </section>
  );
}
