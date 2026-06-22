import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

// Phase 1: Preload audio data at module load via fetch().
// fetch() doesn't require a user gesture, so the WAV bytes
// are already in memory before the user ever clicks.
let audioUrl = null;
fetch("./mouse-click.wav")
  .then((res) => res.blob())
  .then((blob) => {
    audioUrl = URL.createObjectURL(blob);
  })
  .catch(() => {});

// Phase 2: Create the Audio element on first click (user gesture)
// using the pre-fetched blob URL — instant playback, no network wait.
let clickAudio = null;

const playClickSound = () => {
  try {
    if (!clickAudio && audioUrl) {
      clickAudio = new Audio(audioUrl);
      clickAudio.volume = 0.5;
    }
    if (clickAudio) {
      clickAudio.currentTime = 0;
      clickAudio.play().catch(() => {});
    }
  } catch (e) {
    // Silently fail if audio is unavailable
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    playClickSound();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
