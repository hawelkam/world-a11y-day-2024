"use client";

import { Button } from "@headlessui/react";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Game() {
  const [gamestate, setGameState] = useState({
    textOnImage: 0,
    movement: 0,
    contrast: 0,
    links: 0,
    carousel: 0,
  });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(Object.values(gamestate).reduce((a, b) => a + b, 0));
  }, [gamestate]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl flex flex-col items-start gap-6">
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="col-span-3 lg:col-span-5 flex flex-col gap-6">
            <h1 className="text-3xl lg:text-5xl">
              Find 5 accessibility mistakes
            </h1>
            <p>
              If something seems inaccessible, click on it to find out whether
              you're right. When you see a hint, click anywhere to resume the
              game.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="bg-white text-center align-middle rounded border border-[#272936] text-[#272936] h-8">
              {counter} / 5
            </p>
            <Button className="bg-[#0070AD] text-white font-light p-2 text-xs rounded-md hover:bg-[#0068ad]">
              learn about accessibility
            </Button>
          </div>
        </div>

        <div className="bg-white w-full grid grid-cols-3 p-8 rounded-xl border border-[#0070AD] shadow-inner gap-8">
          <Button
            className="col-span-3"
            onClick={() =>
              setGameState({
                ...gamestate,
                textOnImage: 1,
              })
            }
          >
            <img
              src={"/assets/banner.png"}
              alt="Interesting fact about parrots"
              className="w-full"
            ></img>
          </Button>
          <Button
            className="col-span-1 flex justify-center items-center"
            onClick={() =>
              setGameState({
                ...gamestate,
                movement: 1,
              })
            }
          >
            <img
              src="/assets/parrot.gif"
              alt="GIF of a dancing parrot with sunglasses"
              className="w-50"
            />
          </Button>
          <div className="col-span-2">
            <Button
              onClick={() =>
                setGameState({
                  ...gamestate,
                  contrast: 1,
                })
              }
              className="text-left text-[#929399]"
            >
              <p className="mb-4">
                The name 'Psittaciformes' comes from the ancient Greek for
                parrot, ψιττακός ('Psittacus'), whose origin is
                unclear. Ctesias (5th century BCE) recorded the
                name Psittacus after the Indian name for a bird, most likely a
                parakeet (now placed in the genus Psittacula). Pliny the
                Elder (23/24–79 CE) in his Natural History (book 10, chapter 58)
                noted that the Indians called the bird as "siptaces"; however,
                no matching Indian name has been traced. Popinjay is an older
                term for parrots, first used in English in the 1500s.
              </p>
              <p className="mb-4">
                Source: https://en.wikipedia.org/wiki/Parrot#Etymology
              </p>
            </Button>
            <Button
              onClick={() =>
                setGameState({
                  ...gamestate,
                  links: 1,
                })
              }
            >
              <a href="#" className="underline text-[#0070AD]">
                CLICK HERE
              </a>
            </Button>
          </div>
          <Button
            className="col-span-3"
            onClick={() =>
              setGameState({
                ...gamestate,
                carousel: 1,
              })
            }
          >
            <Carousel
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              autoPlay
              interval={800}
              infiniteLoop
              centerMode
              centerSlidePercentage={50}
              stopOnHover={false}
            >
              <div>
                <img src="/assets/Parrot1.png" alt="Parrot1" />
              </div>
              <div>
                <img src="/assets/Parrot2.png" alt="Parrot2" />
              </div>
              <div>
                <img src="/assets/Parrot3.png" alt="Parrot3" />
              </div>
              <div>
                <img src="/assets/Parrot4.png" alt="Parrot4" />
              </div>
            </Carousel>
          </Button>
        </div>
      </div>
    </main>
  );
}
