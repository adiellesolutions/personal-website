import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Mount React App
const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");

const root = createRoot(container);
root.render(<App />);

// Smoothly hide loading screen after load
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  if (!loadingScreen) return;

  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    setTimeout(() => loadingScreen.remove(), 500);
  }, 400);
});
