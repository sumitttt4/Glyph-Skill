import type { Metadata } from "next";
import "@fontsource-variable/inter/opsz.css";
import "../../../skills/design-skill/assets/starter.css";
import "../../../skills/design-skill/assets/product.css";
import { ExampleBar, DesignNotes } from "../example-frame";
import { Console } from "./console";
import "./console.css";
export const metadata: Metadata = {
  title: "Relay example",
  description:
    "A fictional delivery operations console, built with the Design Skill product kit.",
};
export default function RelayExample() {
  return (
    <>
      <ExampleBar slug="console" />
      <Console />
      <DesignNotes slug="console" />
    </>
  );
}
