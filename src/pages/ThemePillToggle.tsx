import { useEffect, useState } from "react";
import { Sun, Cloud, Moon } from "lucide-react";

type Mode = "morning" | "evening";

function getInitialMode(): Mode {
  const saved = (localStorage.getItem("theme-pill") as Mode | null) ?? null;
  if (saved) return saved;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "evening" : "morning";
}

function applyMode(mode: Mode) {
  document.documentElement.classList.toggle("dark", mode === "evening");
  localStorage.setItem("theme-pill", mode);
}

export default function ThemePillToggle() {
  const [mode, setMode] = useState<Mode>(getInitialMode);

  useEffect(() => applyMode(mode), [mode]);

  const isEvening = mode === "evening";

  // background gradients from your palette
  const trackBg = isEvening
    ? "bg-[linear-gradient(135deg,hsl(203_42%_74%)_0%,hsl(206_38%_76%)_100%)]" // coastal blue night
    : "bg-[linear-gradient(135deg,hsl(33_71%_84%)_0%,hsl(13_43%_76%)_100%)]"; // sunrise peach

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEvening}
      onClick={() => setMode(isEvening ? "morning" : "evening")}
      title={isEvening ? "Evening (click for Morning)" : "Morning (click for Evening)"}
      className={[
        "relative inline-flex select-none items-center",
        "w-16 h-8", // smaller pill size
        "rounded-full p-[3px]",
        "shadow-[0_2px_6px_rgba(0,0,0,0.15)]",
        "transition-all duration-300 ease-out",
        trackBg,
        "ring-1 ring-inset ring-white/40 dark:ring-white/20",
      ].join(" ")}
    >
      {/* ☀️ Morning icons */}
      <div
        className="pointer-events-none absolute right-2 flex items-center gap-0.5 text-white/95 transition-opacity duration-300"
        style={{ opacity: isEvening ? 0 : 1 }}
      >
        <Cloud className="w-3 h-3 -mr-0.5" />
        <Sun className="w-3.5 h-3.5" />
      </div>

      {/* 🌙 Evening icons */}
      <div
        className="pointer-events-none absolute left-2 flex items-center gap-0.5 text-white transition-opacity duration-300"
        style={{ opacity: isEvening ? 1 : 0 }}
      >
        <Moon className="w-3.5 h-3.5" />
        <span className="block w-[2px] h-[2px] bg-white/80 rounded-full" />
      </div>

      {/* glossy knob */}
      <div
        className={[
          "relative z-10 h-6 w-6 rounded-full",
          "bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#ffffff_35%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0.55)_65%,rgba(255,255,255,0.25)_100%)]",
          "shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_2px_4px_rgba(0,0,0,0.2)]",
          "transition-transform duration-300 ease-out",
          isEvening ? "translate-x-[32px]" : "translate-x-0",
        ].join(" ")}
      />
    </button>
  );
}
