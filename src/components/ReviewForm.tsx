import { useEffect, useState } from "react";
import { Star, CheckCircle, X } from "lucide-react";

const emojis = ["🌸", "🌟", "🍓", "🍰", "💌", "💕", "🐰", "🦋", "🎀", "📚"];

const ReviewForm = () => {
  const [form, setForm] = useState({ rating: "", description: "", name: "", email: "", location: "" });
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [modalEmoji, setModalEmoji] = useState<string>("🌸");

  // Auto-close timer reference
  useEffect(() => {
    let t: number | undefined;
    if (modalOpen && modalType === "success") {
      t = window.setTimeout(() => setModalOpen(false), 3500);
    }
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [modalOpen, modalType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleStarClick = (value: number) => {
    setForm({ ...form, rating: String(value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.rating) {
      openModal("Please choose a star rating ⭐", "error");
      return;
    }
    if (!form.description || !form.name || !form.email) {
      openModal("Please fill in all required fields 💌", "error");
      return;
    }

    try {
      const res = await fetch("http://localhost/Personal-Website/backend/submit_review.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        openModal("Thank you for your sweet review!", "success");
        // reset form
        setForm({ rating: "", description: "", name: "", email: "", location: "" });
        setHoverRating(null);
      } else {
        openModal(data.message || "Oopsie! Something went wrong.", "error");
      }
    } catch (err) {
      console.error(err);
      openModal("Network error — please try again later.", "error");
    }
  };

  const openModal = (message: string, type: "success" | "error") => {
    setModalMessage(message);
    setModalType(type);
    setModalEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-pink-50/80 backdrop-blur-lg p-8 shadow-lg rounded-3xl mt-12 max-w-xl mx-auto border-2 border-pink-200 relative overflow-hidden">
        {/* Cute background blobs */}
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-pink-200/30 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-200/30 rounded-full blur-2xl animate-pulse pointer-events-none"></div>

        <h3 className="text-3xl font-pacifico text-pink-600 mb-2 text-center">✨ Share Your Love ✨</h3>
        <p className="text-center text-pink-500 mb-6">The community would love to hear your thoughts 💌</p>

        {/* Rating */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-pink-600 mb-3">How many stars? ⭐</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => {
              const active = hoverRating !== null ? hoverRating >= star : Number(form.rating) >= star;
              return (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(null)}
                  aria-label={`${star} star`}
                  className="focus:outline-none"
                >
                  <Star className={`w-9 h-9 transition-transform ${active ? "fill-yellow-400 text-yellow-400 scale-110" : "text-pink-200"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-pink-600 mb-2">Your Email 💌</label>
          <input type="email" name="email" placeholder="Where can we reach you?" value={form.email} onChange={handleChange} className="w-full p-3 rounded-xl border-2 border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none bg-white" required />
        </div>

        {/* Review */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-pink-600 mb-2">Your Message 💭</label>
          <textarea name="description" placeholder="Spill your thoughts here..." value={form.description} onChange={handleChange} rows={4} className="w-full p-3 rounded-xl border-2 border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none resize-none bg-white" required />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-pink-600 mb-2">Your Name 🌷</label>
          <input type="text" name="name" placeholder="What should we call you?" value={form.name} onChange={handleChange} className="w-full p-3 rounded-xl border-2 border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none bg-white" required />
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-pink-600 mb-2">Where are you from? 🌍</label>
          <input type="text" name="location" placeholder="e.g., Manila, Philippines 💖" value={form.location} onChange={handleChange} className="w-full p-3 rounded-xl border-2 border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none bg-white" />
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
          Send My Review ✨
        </button>
      </form>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={closeModal} />

          <div className="relative bg-white rounded-2xl p-6 w-11/12 max-w-md mx-auto border-2 border-pink-100 shadow-2xl">
            <button onClick={closeModal} className="absolute top-3 right-3 p-1 rounded-full hover:bg-pink-50">
              <X className="w-5 h-5 text-pink-500" />
            </button>

            <div className={`flex flex-col items-center gap-3`}>
              <div className={`w-20 h-20 rounded-full flex items-center justify-center ${modalType === "success" ? "bg-pink-100" : "bg-red-100"}`}>
                {modalType === "success" ? <CheckCircle className="w-10 h-10 text-pink-500" /> : <X className="w-10 h-10 text-red-500" />}
              </div>

              <div className="text-2xl">{modalEmoji}</div>

              <h4 className="text-lg font-semibold text-foreground">{modalMessage}</h4>
              <p className="text-sm text-muted-foreground">{modalType === "success" ? "Your review is saved — thanks a bunch! 💖" : "Please try again or contact support."}</p>

              <div className="mt-4 w-full">
                <button onClick={closeModal} className="w-full py-2 rounded-full bg-pink-50 border border-pink-200 hover:bg-pink-100 transition">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewForm;
