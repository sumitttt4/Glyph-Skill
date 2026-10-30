"use client";
import { GodRays } from "@paper-design/shaders-react";
import { useScene } from "../../components/shaders";
export function NightShader() {
  const { still } = useScene();
  return (
    <GodRays
      style={{ width: "100%", height: "100%" }}
      colorBack="#000000"
      colorBloom="#d4ff3a"
      colors={["#d4ff3a", "#5b6b1a", "#ff4f9a", "#1a1a1a"]}
      density={0.35}
      spotty={0.4}
      midSize={0.18}
      midIntensity={0.5}
      intensity={0.7}
      bloom={0.35}
      offsetY={-0.55}
      speed={still ? 0 : 0.5}
    />
  );
}
