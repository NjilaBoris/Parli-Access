"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroPortal() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24 lg:py-28"
      >
        <motion.h1
          variants={fadeUp}
          className="text-balance  text-[clamp(2.25rem,1.6rem+3.2vw,4.25rem)] font-medium leading-[1.08] tracking-tight text-slate-950"
        >
          Parliament belongs to everyone.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-2xl text-balance text-[clamp(0.95rem,0.85rem+0.4vw,1.15rem)] leading-relaxed text-slate-600 sm:mt-6"
        >
          A civic technology platform helping citizens access parliamentary
          information, understand their representatives, and participate
          meaningfully in public affairs.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 md:flex-row xs:justify-center sm:mt-10 sm:gap-4"
        >
          <a
            href="/about"
            className="group inline-flex w-[13rem] items-center justify-center gap-2 rounded-full bg-slate-900 py-3 pl-6 pr-2 text-[clamp(0.85rem,0.8rem+0.15vw,0.95rem)] font-medium text-white shadow-sm transition-colors hover:bg-slate-800 xs:w-auto"
          >
            About Parli Access
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={2.5} />
            </span>
          </a>

          <a
            href="/contact"
            className="inline-flex w-[13rem] items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-[clamp(0.85rem,0.8rem+0.15vw,0.95rem)] font-medium text-slate-900 backdrop-blur-sm transition-colors hover:bg-white xs:w-auto"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}