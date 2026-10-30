"use client";
import { useEffect, useState } from "react";
import {
  Dithering,
  GrainGradient,
  MeshGradient,
} from "@paper-design/shaders-react";
// Shaders take literal colors, so they follow the theme and motion
// preference from the document instead of CSS variables.
export function useScene() {
  const [dark, setDark] = useState(false);
  const [still, setStill] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const read = () => setDark(root.dataset.theme === "dark");
    read();
    const observer = new MutationObserver(read);
    observer.observe(root, { attributeFilter: ["data-theme"] });
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setStill(motion.matches);
    sync();
    motion.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", sync);
    };
  }, []);
  return { dark, still };
}
const fill = { width: "100%", height: "100%" };
export function HeroShader() {
  const { dark, still } = useScene();
  return (
    <MeshGradient
      className="shader"
      style={fill}
      colors={
        dark
          ? ["#000000", "#21417f", "#3d2c7c", "#174f40", "#6a441c"]
          : ["#8fb4ff", "#c4b0f5", "#9fe0c8", "#f6c88e", "#5f8df2"]
      }
      distortion={0.85}
      swirl={0.55}
      grainMixer={0.12}
      grainOverlay={dark ? 0.18 : 0.1}
      speed={still ? 0 : 0.22}
    />
  );
}
const stageShapes = ["warp", "dots", "ripple", "sphere"] as const;
const stageInk = {
  light: ["#6f9de8", "#9d86d6", "#5fb39a", "#d89e5c"],
  dark: ["#6fa4f0", "#9d86d6", "#5fb39a", "#d89e5c"],
};
export function StageShader({ index }: { index: number }) {
  const { dark, still } = useScene();
  return (
    <Dithering
      className="shader"
      style={fill}
      colorBack={dark ? "#0b0b0c" : "#ffffff"}
      colorFront={stageInk[dark ? "dark" : "light"][index]}
      shape={stageShapes[index]}
      type="4x4"
      size={2}
      scale={0.9}
      speed={still ? 0 : 0.35}
    />
  );
}
export function CtaShader() {
  const { dark, still } = useScene();
  return (
    <GrainGradient
      className="shader"
      style={fill}
      colorBack={dark ? "#000000" : "#0f1d38"}
      colors={["#5f8df2", "#b5d5ff", "#9d86d6", "#5fb39a", "#f0b46a"]}
      shape="corners"
      softness={0.6}
      intensity={0.5}
      noise={0.35}
      speed={still ? 0 : 0.4}
    />
  );
}
