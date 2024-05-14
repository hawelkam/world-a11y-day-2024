import Link from "next/link";
import { Button } from "@headlessui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl flex flex-col items-start gap-6">
        <h2 className="font-bold bg-[#2B0A3D] text-white p-3 w-fit mb-6">
          World Accessibility Day 2024
        </h2>
        <h1 className="text-3xl lg:text-5xl font-light">
          Find 5 accessibility mistakes on the next screen
        </h1>
        <p>
          If something seems inaccessible, click on it to find out whether
          you're right.
        </p>
        <Link href="/game">
          <Button className="rounded-xl border border-solid border-[#2B0A3D] p-4 w-40 hover:bg-[#2B0A3D] hover:text-white">
            Let's start
          </Button>
        </Link>
      </div>
    </main>
  );
}
