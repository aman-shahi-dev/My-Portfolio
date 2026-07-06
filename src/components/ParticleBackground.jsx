import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../context/ThemeContext";

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

export const ParticleBackground = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const particleColor = isDark ? "#ffffff" : "#000000";
  const lineColor = isDark ? "#ffffff" : "#111827";

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          push: { quantity: 4 },
          grab: {
            distance: 180,
            links: { opacity: 0.8, color: particleColor },
          },
        },
      },
      particles: {
        color: { value: particleColor },
        paint: {
          color: { value: particleColor },
          fill: {
            color: { value: particleColor },
            enable: true,
            opacity: isDark ? 0.6 : 1,
          },
          stroke: {
            color: { value: particleColor },
            width: 0,
          },
        },
        stroke: { color: { value: particleColor }, width: 0 },
        links: {
          color: lineColor,
          distance: 150,
          enable: true,
          opacity: isDark ? 0.5 : 0.7,
          width: 1.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1.2,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 80,
        },
        opacity: { value: isDark ? 0.6 : 1 },
        shape: { type: "circle" },
        size: { value: { min: 2, max: 4 } },
      },
      detectRetina: true,
    }),
    [isDark, lineColor, particleColor],
  );

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        key={theme}
        id="tsparticles"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
        options={options}
      />
    </ParticlesProvider>
  );
};
