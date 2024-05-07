import type { MetaFunction } from "@remix-run/deno";
import { useNavigate } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "World Accessibility Day 2024 - Game" },
    { name: "description", content: "Accessibility Trivia Game" },
  ];
};

export default function Game() {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>CONGRATULATIONS</h1>
      <button onClick={() => navigate("/")}>Back to start</button>
    </div>
  );
}
