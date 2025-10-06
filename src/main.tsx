import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Hide loading screen when app is ready
window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }
  }, 800);
});

createRoot(document.getElementById("root")!).render(<App />);