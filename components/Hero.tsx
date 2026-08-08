"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Slide data — swap `image` for your own assets in /public           */
/* ------------------------------------------------------------------ */

export type Slide = {
  image: string;
  tags: string[];
  title: string;
  date: string;
  href?: string;
};

const SLIDES: Slide[] = [
  {
    image: "/img1.jpeg",
    tags: ["Regions", "Database", "Critical Minerals", "United States", "News", "North America"],
    title: "Apple fuels America's critical supply chain comeback",
    date: "08 August, 2025",
    href: "/news/apple-critical-supply-chain",
  },
  {
    image: "/img2.jpg",
    tags: ["National Assembly", "Legislation", "Session"],
    title: "Parliament opens new session with landmark reform agenda",
    date: "05 August, 2025",
    href: "/news/new-session-reform-agenda",
  },
  {
    image: "/img3.jpg",
    tags: ["Committees", "Finance", "Public Hearing"],
    title: "Finance committee grills ministry over budget shortfall",
    date: "02 August, 2025",
    href: "/news/finance-committee-budget",
  },
  {
    image: "/img4.jpg",
    tags: ["Members", "Engage", "Community"],
    title: "MPs launch nationwide town-hall tour ahead of new term",
    date: "29 July, 2025",
    href: "/news/mp-townhall-tour",
  },
];

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 60;


export default function HeroSlider({ slides = SLIDES }: { slides?: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = slides.length;

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex(((next % count) + count) % count);
    },
    [index, count],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || reduceMotion || count <= 1) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((cur) => (cur + 1) % count);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, reduceMotion, count]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) next();
    else if (info.offset.x > SWIPE_THRESHOLD) prev();
  };

  const slide = slides[index];

  const imageVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: reduceMotion ? 0 : dir > 0 ? 40 : -40,
      scale: reduceMotion ? 1 : 1.04,
    }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({
      opacity: 0,
      x: reduceMotion ? 0 : dir > 0 ? -40 : 40,
      scale: reduceMotion ? 1 : 1.0,
    }),
  };

  return (
    <section
      className="group relative h-[100vh] min-h-[360px] xl:h-dvh w-full overflow-hidden bg-[#151110] sm:h-[78vh] sm:min-h-[420px] md:h-[100vh] md:min-h-[480px] lg:h-[746px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured stories"
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.5, ease: "easeInOut" },
            x: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: reduceMotion ? 0 : 6, ease: "linear" },
          }}
          drag={count > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="pointer-events-none select-none object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-2 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-black/55 group-hover:opacity-100 sm:flex sm:h-10 sm:w-10 lg:left-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute right-2 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-black/55 group-hover:opacity-100 sm:flex sm:h-10 sm:w-10 lg:right-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-10 sm:px-6 sm:pb-12 md:px-10 md:pb-14 lg:px-12">
        <div className="mx-auto max-w-[88rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
            >
              <ul className="mb-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[10.5px] text-[#d8d3cf] xs:text-[11px] sm:mb-3 sm:gap-x-2 sm:text-[12.5px]">
                {slide.tags.map((tag, i) => (
                  <li key={tag} className="flex items-center gap-1.5 sm:gap-2">
                    <span>{tag}</span>
                    {i < slide.tags.length - 1 && (
                      <span className="text-[#948d89]" aria-hidden="true">
                        |
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <Link href={slide.href ?? "#"} className="group/title inline-block">
                <h1 className="max-w-3xl text-[22px] font-bold leading-[1.15] text-white transition-colors xs:text-2xl sm:text-3xl sm:leading-tight md:text-[2.5rem] lg:text-5xl">
                  <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover/title:bg-[length:100%_2px]">
                    {slide.title}
                  </span>
                </h1>
              </Link>

              <p className="mt-2.5 text-[11.5px] text-[#c9c2bd] sm:mt-3 sm:text-[13px]">
                {slide.date}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {count > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 sm:bottom-5 sm:gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className="relative flex h-2.5 w-4 items-center justify-center sm:h-3 sm:w-5"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 sm:h-[7px] ${
                  i === index ? "w-4 bg-[#3ecf8e] sm:w-5" : "w-1.5 bg-white/50 hover:bg-white/75 sm:w-[7px]"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}