"use client";

import {
  Button,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
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
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);
  const [textOnImageOpen, setTextOnImageOpen] = useState(false);
  const [movementOpen, setMovementOpen] = useState(false);
  const [contrastOpen, setContrastOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [finishedOpen, setFinishedOpen] = useState(false);

  useEffect(() => {
    setCounter(Object.values(gamestate).reduce((a, b) => a + b, 0));
  }, [gamestate]);

  const checkForFinishedGame = () => {
    if (counter === 5) {
      setFinishedOpen(true);
    }
  };
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
            <Button
              className="bg-[#0070AD] text-white font-light p-2 text-xs rounded-md hover:bg-[#0068ad]"
              onClick={() => setLearnMoreOpen(true)}
            >
              learn about accessibility
            </Button>
            <Dialog
              open={learnMoreOpen}
              onClose={() => setLearnMoreOpen(false)}
              className="relative z-50"
            >
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
              <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-3xl space-y-4 border bg-white p-12">
                  <DialogTitle className="text-3xl lg:text-5xl font-light">
                    Learn more about accessibility
                  </DialogTitle>
                  <Description>
                    Accessibility focuses on making products and services
                    accessible to as many people as possible (regardless of
                    their health conditions or disabilities).
                  </Description>
                  <ul className="list-disc list-inside	">
                    When designing or developing a digital product, think of
                    people who:
                    <li>
                      have visual impairments (don’t see colour or have poor
                      sight)
                    </li>
                    <li>are older and don’t know technology well</li>
                    <li>have auditory disabilities </li>
                    <li>
                      have cognitive disorders (f.e. dyslexia, seizures,
                      epilepsy)
                    </li>
                    <li>are neurodivergent (ADHD, autism, anxiety)</li>
                  </ul>
                  <p>
                    Everyone can benefit from accessible solutions. Especially
                    because disabilities can also be temporary or situational
                    (think about suffering from an injury or a disease).
                  </p>
                  <p>
                    If you want to expand your accessibility knowledge, join{" "}
                    <a
                      className="underline font-bold"
                      href="https://teams.microsoft.com/l/channel/19%3A919ac1d58f2741da84ca78e463d62176%40thread.tacv2/General?groupId=c3183e62-61d5-4e9c-b5cf-5085148ca817&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61"
                    >
                      our Teams channel!
                    </a>
                  </p>
                </DialogPanel>
              </div>
            </Dialog>
          </div>
        </div>

        <div className="bg-white w-full grid grid-cols-3 p-8 rounded-xl border border-[#0070AD] shadow-inner gap-8">
          <Button
            className="col-span-3"
            onClick={() => {
              setTextOnImageOpen(true);
              setGameState({
                ...gamestate,
                textOnImage: 1,
              });
            }}
          >
            <img
              src={"/assets/banner.png"}
              alt="Interesting fact about parrots"
              className="w-full"
            ></img>
          </Button>
          <Dialog
            open={textOnImageOpen}
            onClose={() => {
              setTextOnImageOpen(false);
              checkForFinishedGame();
            }}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                <p>
                  Text shouldn’t be shown as an image. This is because users
                  with visual impairments use screen readers that read only
                  regular text.
                </p>
              </DialogPanel>
            </div>
          </Dialog>
          <Button
            className="col-span-1 flex justify-center items-center"
            onClick={() => {
              setMovementOpen(true);
              setGameState({
                ...gamestate,
                movement: 1,
              });
            }}
          >
            <img
              src="/assets/parrot.gif"
              alt="GIF of a dancing parrot with sunglasses"
              className="w-50"
            />
          </Button>
          <Dialog
            open={movementOpen}
            onClose={() => {
              setMovementOpen(false);
              checkForFinishedGame();
            }}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                <p>
                  Animated gifs are not accessible, when user has no possibility
                  to pause or stop them. Interfaces shouldn’t show flashing
                  content. This can cause discomfort in users with epilepsy.
                </p>
              </DialogPanel>
            </div>
          </Dialog>
          <div className="col-span-2">
            <Button
              onClick={() => {
                setContrastOpen(true);
                setGameState({
                  ...gamestate,
                  contrast: 1,
                });
              }}
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
            <Dialog
              open={contrastOpen}
              onClose={() => {
                setContrastOpen(false);
                checkForFinishedGame();
              }}
              className="relative z-50"
            >
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
              <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                  <p>
                    Normal text and background should have a contrast ratio of
                    at least 4.5:1.
                  </p>
                </DialogPanel>
              </div>
            </Dialog>
            <Button
              onClick={() => {
                setLinksOpen(true);
                setGameState({
                  ...gamestate,
                  links: 1,
                });
              }}
            >
              <a href="#" className="underline text-[#0070AD]">
                CLICK HERE
              </a>
            </Button>
            <Dialog
              open={linksOpen}
              onClose={() => {
                setLinksOpen(false);
                checkForFinishedGame();
              }}
              className="relative z-50"
            >
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
              <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                  <p>
                    Link’s text should announce where the link leads to and what
                    happens after clicking.
                  </p>
                </DialogPanel>
              </div>
            </Dialog>
          </div>
          <Button
            className="col-span-3"
            onClick={() => {
              setCarouselOpen(true);
              setGameState({
                ...gamestate,
                carousel: 1,
              });
            }}
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
          <Dialog
            open={carouselOpen}
            onClose={() => {
              setCarouselOpen(false);
              checkForFinishedGame();
            }}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                <p>
                  Users must be able to pause carousel movement because it can
                  be too fast or distracting.
                </p>
              </DialogPanel>
            </div>
          </Dialog>
        </div>
      </div>
      <Dialog
        open={finishedOpen}
        onClose={() => setFinishedOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Congratulations!</DialogTitle>
            <Description>You’ve found all 5 mistakes! 🎉</Description>
            <p>We hope you had fun.</p>
            <p>
              You certainly proved that you know some basic facts about
              accessibility.
            </p>
            <p>
              If you want to stay up to date, join{" "}
              <a
                className="underline font-bold"
                href="https://teams.microsoft.com/l/channel/19%3A919ac1d58f2741da84ca78e463d62176%40thread.tacv2/General?groupId=c3183e62-61d5-4e9c-b5cf-5085148ca817&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61"
              >
                our Teams channel!
              </a>
            </p>
          </DialogPanel>
        </div>
      </Dialog>
    </main>
  );
}
