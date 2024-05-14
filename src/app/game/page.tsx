import { Button } from "@headlessui/react";

export default function Game() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl flex flex-col items-start gap-6">
        <h2 className="font-bold bg-[#2B0A3D] text-white p-3 w-fit mb-6">
          Find 5 accessibility mistakes
        </h2>
        <p>
          If something seems inaccessible, click on it to find out whether
          you're right. When you see a hint, click anywhere to resume the game.
        </p>
        <p>0 / 5</p>
        <Button>learn about accessibility</Button>
        <div className="bg-white w-full grid grid-cols-3 p-8 rounded-xl border border-[#0070AD] shadow-inner">
          <Button className="col-span-3">Interesting fact about parrots</Button>
          <Button className="col-span-1">GIF</Button>
          <div className="col-span-2">
            <Button>TEXT</Button>
            <Button>LINK</Button>
          </div>
          <Button className="col-span-3">CAROUSEL</Button>
        </div>
      </div>
    </main>
  );
}
