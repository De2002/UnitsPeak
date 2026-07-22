import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Apply saved theme before first paint to avoid flash
;(() => {
  const stored = localStorage.getItem("unitspeak-theme");
  const preferLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = stored === "light" || stored === "dark" ? stored : "light";
  if (theme === "light") {
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.add("dark");
  }
})()

createRoot(document.getElementById("root")!).render(<App />);
