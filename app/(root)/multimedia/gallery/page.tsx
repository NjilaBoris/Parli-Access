"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Replace every `src` below with your own gallery images.            */
/*  Recommended source size: ~600x800px portrait photos.               */
/* ------------------------------------------------------------------ */

type Photo = {
  src: string;
  alt: string;
  className: string; // position + size, per breakpoint
  rotate: number;
  z?: number;
};

const desktopPhotos: Photo[] = [
  // outer ring — hidden until lg
  {
    src: "/img1.jpeg",
    alt: "Person sitting on a bench outdoors",
    className: "left-[2%] top-[2%] w-[13%] aspect-[3/4]",
    rotate: -14,
  },
  {
    src: "/img2.jpg",
    alt: "Yellow desk in a field",
    className: "right-[2%] top-[0%] w-[13%] aspect-[3/4]",
    rotate: 12,
  },
  {
    src: "/img3.jpg",
    alt: "Field of white daisies",
    className: "left-[0%] top-[24%] w-[15%] aspect-[3/4]",
    rotate: -10,
  },
  {
    src: "/img4.jpg",
    alt: "Two people in blue jackets against a blue wall",
    className: "right-[0%] top-[22%] w-[15%] aspect-[3/4]",
    rotate: 10,
  },
  {
    src: "/img5.jpg",
    alt: "Field of yellow flowers",
    className: "left-[3%] bottom-[3%] w-[14%] aspect-[3/4]",
    rotate: 14,
  },
  {
    src: "/img6.jpg",
    alt: "Woman lying in a field of yellow flowers",
    className: "right-[3%] bottom-[2%] w-[14%] aspect-[3/4]",
    rotate: -12,
  },
  // inner ring — visible from md
  {
    src: "/img7.jpg",
    alt: "Person reflected in still water",
    className: "left-[27%] top-[6%] w-[13%] aspect-[3/4]",
    rotate: -6,
    z: 10,
  },
  {
    src: "/img8.jpg",
    alt: "Woman standing in a green field",
    className: "left-[43.5%] top-[2%] w-[13%] aspect-[4/5]",
    rotate: 0,
    z: 10,
  },
  {
    src: "/img9.jpg",
    alt: "Man wearing sunglasses",
    className: "right-[27%] top-[6%] w-[13%] aspect-[3/4]",
    rotate: 8,
    z: 10,
  },
  {
    src: "/img10.jpg",
    alt: "Person standing in a wide open field",
    className: "left-[19%] top-[38%] w-[13%] aspect-[3/4]",
    rotate: -6,
    z: 10,
  },
  {
    src: "/img11.jpg",
    alt: "Person in a pink flower field",
    className: "right-[19%] top-[36%] w-[13%] aspect-[3/4]",
    rotate: 7,
    z: 10,
  },
  {
    src: "/img12.jpg",
    alt: "Man photographed against a blue wall",
    className: "left-[30%] bottom-[4%] w-[12%] aspect-[3/4]",
    rotate: -8,
    z: 10,
  },
  {
    src: "/img13.jpg",
    alt: "Abstract red-toned portrait",
    className: "left-[45%] bottom-[0%] w-[12%] aspect-[3/4]",
    rotate: 3,
    z: 10,
  },
  {
    src: "/img14.jpg",
    alt: "Person holding flowers in a field",
    className: "right-[29%] bottom-[3%] w-[12%] aspect-[3/4]",
    rotate: 9,
    z: 10,
  },
];

const mobilePhotos: Photo[] = [
  { src: "/img7.jpg", alt: "Person reflected in still water", className: "", rotate: -6 },
  { src: "/img9.jpg", alt: "Man wearing sunglasses", className: "", rotate: 6 },
  { src: "/img11.jpg", alt: "Person in a pink flower field", className: "", rotate: -5 },
  { src: "/img14.jpg", alt: "Person holding flowers in a field", className: "", rotate: 7 },
];

const NAV_LINKS = ["Home", "Showcase", "Awards"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
};

const photoIn: Variants = {
  hidden: (rotate: number) => ({ opacity: 0, scale: 0.7, rotate: rotate * 2.2 }),
  visible: (rotate: number) => ({
    opacity: 1,
    scale: 1,
    rotate,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function GalleryHero() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <section className="bg-[#F0EBDE] px-3 py-6 xs:px-4 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-black/5 bg-[#F7F3EA] shadow-xl shadow-black/10 sm:rounded-[2.25rem]">
        {/* ---------------------------------------------------------- */}
        {/* Nav                                                        */}
        {/* ---------------------------------------------------------- */}
        <motion.nav
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="relative z-30 flex items-center justify-between gap-3 px-4 py-4 sm:px-8 sm:py-6"
        >
          <span className="font-serif text-lg font-bold tracking-tight text-[#1a1a1a] sm:text-xl">
            CLICK
          </span>

          <ul className="hidden items-center gap-8 text-[13.5px] font-medium text-[#3a3a3a] sm:flex">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <Link href="#" className="transition-colors hover:text-black">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-orange-500/30 transition-transform hover:scale-105 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Reserve
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setNavOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] sm:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </motion.nav>

        {navOpen && (
          <div className="relative z-30 flex flex-col gap-1 px-4 pb-4 sm:hidden">
            {NAV_LINKS.map((label) => (
              <Link
                key={label}
                href="#"
                className="rounded-lg px-2 py-2 text-sm font-medium text-[#3a3a3a] hover:bg-black/5"
              >
                {label}
              </Link>
            ))}
          </div>
        )}

        {/* ---------------------------------------------------------- */}
        {/* Mobile / tablet layout (< md): simple staggered grid        */}
        {/* ---------------------------------------------------------- */}
        <div className="relative z-10 px-4 pb-8 pt-2 md:hidden">
          <div className="grid grid-cols-2 gap-3 xs:gap-4">
            {mobilePhotos.slice(0, 2).map((p, i) => (
              <motion.div
                key={p.src}
                initial="hidden"
                animate="visible"
                custom={p.rotate}
                variants={photoIn}
                style={{ rotate: p.rotate }}
                className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black/5 shadow-md shadow-black/10"
              >
                <Image src={p.src} alt={p.alt} fill sizes="45vw" className="object-cover" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="relative z-20 -my-3 flex flex-col items-center text-center xs:-my-4"
          >
            <h1
              className="font-serif font-bold leading-[1.05] tracking-tight text-[#1a1a1a]"
              style={{ fontSize: "clamp(1.75rem, 1.35rem + 3vw, 2.5rem)" }}
            >
              Explore Museum
            </h1>
            <Link
              href="#"
              className="mt-4 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/30 transition-transform hover:scale-105"
            >
              Start now
            </Link>
          </motion.div>

          <div className="mt-3 grid grid-cols-2 gap-3 xs:mt-4 xs:gap-4">
            {mobilePhotos.slice(2, 4).map((p) => (
              <motion.div
                key={p.src}
                initial="hidden"
                animate="visible"
                custom={p.rotate}
                variants={photoIn}
                style={{ rotate: p.rotate }}
                className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black/5 shadow-md shadow-black/10"
              >
                <Image src={p.src} alt={p.alt} fill sizes="45vw" className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* Desktop layout (>= md): full scattered collage              */}
        {/* ---------------------------------------------------------- */}
        <div className="relative z-10 hidden aspect-[16/11] w-full md:block lg:aspect-[16/9]">
          {desktopPhotos.map((p, i) => {
            const isOuter = i < 6;
            return (
              <motion.div
                key={p.src}
                initial="hidden"
                animate="visible"
                custom={p.rotate}
                variants={photoIn}
                transition={{ delay: 0.15 + i * 0.04 }}
                whileHover={{ scale: 1.06, rotate: 0, zIndex: 40 }}
                style={{ zIndex: p.z ?? 10 }}
                className={`absolute overflow-hidden rounded-xl bg-black/5 shadow-lg shadow-black/15 sm:rounded-2xl ${p.className} ${
                  isOuter ? "hidden lg:block" : ""
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 13vw, 15vw"
                  className="object-cover"
                />
              </motion.div>
            );
          })}

          {/* Center text block */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUp}
            className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
          >
            <h1
              className="font-serif font-bold leading-[1.05] tracking-tight text-[#1a1a1a]"
              style={{ fontSize: "clamp(1.75rem, 1rem + 2.8vw, 2.75rem)" }}
            >
              Explore Museum
            </h1>
            <Link
              href="#"
              className="mt-4 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/30 transition-transform hover:scale-105 lg:px-7 lg:py-3"
            >
              Start now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}