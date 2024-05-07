import type { MetaFunction } from "@remix-run/deno";
import { useNavigate } from "@remix-run/react";
import Button from "react-bootstrap/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "World Accessibility Day 2024" },
    { name: "description", content: "Accessibility Trivia Game" },
  ];
};

export default function Index() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h2>World Accessibility Day 2024</h2>
      <div>
        <h1>Find 5 accessibility mistakes on the next screen</h1>
        <p>
          If something seems inaccessible, click on it to find out whether
          you're right.
        </p>
      </div>
      <Button variant="outline-primary">Primary</Button>
      <button onClick={() => navigate("/game")}>Let's start</button>
    </div>
  );
}
