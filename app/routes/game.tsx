import type { MetaFunction } from "@remix-run/deno";

export const meta: MetaFunction = () => {
  return [
    { title: "World Accessibility Day 2024 - Game" },
    { name: "description", content: "Accessibility Trivia Game" },
  ];
};

export default function Game() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>FIND THEM ALL</h1>
    </div>
  );
}
