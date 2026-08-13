"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { IconHeartHandshake, IconHospital, IconRecycle, IconSchool } from "@tabler/icons-react";


type PollOption = {
  id: string;
  icon: React.ReactNode;
  label: string;
  accent: string; 
};

const POLL_OPTIONS: PollOption[] = [
  { id: "youth-employment", icon: <IconSchool stroke={2} />, label: "Youth employment", accent: "bg-sky-600" },
  { id: "rural-healthcare", icon: <IconHospital stroke={2} />, label: "Healthcare in rural areas", accent: "bg-rose-600" },
  { id: "gbv", icon: <IconHeartHandshake stroke={2} />, label: "Gender-based violence", accent: "bg-violet-600" },
  { id: "waste-management", icon: <IconRecycle stroke={2} />, label: "Waste management", accent: "bg-emerald-600" },
];

const INITIAL_VOTES: Record<string, number> = {
  "youth-employment": 0,
  "rural-healthcare": 0,
  gbv: 0,
  "waste-management": 0,
};

const MIN_SAMPLE_SIZE = 100;

function calculatePercentages(votes: Record<string, number>): Record<string, number> {
  const total = Object.values(votes).reduce((sum, v) => sum + v, 0);
  const denominator = Math.max(total, MIN_SAMPLE_SIZE);
  return Object.fromEntries(
    Object.entries(votes).map(([key, count]) => [key, Math.round((count / denominator) * 100)]),
  );
}

export default function ParliamentPoll() {
  const [votes, setVotes] = useState<Record<string, number>>(INITIAL_VOTES);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const percentages = useMemo(() => calculatePercentages(votes), [votes]);

  const totalVotes = useMemo(
    () => Object.values(votes).reduce((sum, v) => sum + v, 0),
    [votes],
  );

  function handleVote(id: string) {
    setVotes((prev) => {
      // If the user already voted for something else, move their vote.
      if (selectedId && selectedId !== id) {
        return {
          ...prev,
          [selectedId]: Math.max(0, prev[selectedId] - 1),
          [id]: prev[id] + 1,
        };
      }
      // First-time vote for this option.
      if (selectedId !== id) {
        return { ...prev, [id]: prev[id] + 1 };
      }
      // Clicking the same option again does nothing.
      return prev;
    });
    setSelectedId(id);
  }

  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-xl">
        <h2 className="text-[clamp(1.25rem,3.5vw,1.75rem)] font-bold leading-tight text-neutral-900">
          What should Parliament prioritize?
        </h2>
        <p className="mt-2 text-[13px] text-neutral-500 sm:text-sm">
          Tap an issue to cast your vote &middot; {totalVotes} vote{totalVotes === 1 ? "" : "s"} so far
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-3.5">
          {POLL_OPTIONS.map((option) => {
            const percent = percentages[option.id] ?? 0;
            const isSelected = selectedId === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleVote(option.id)}
                aria-pressed={isSelected}
                className={`relative flex w-full items-center gap-3 overflow-hidden rounded-xl p-3 text-left transition-colors sm:gap-4 sm:p-4 ${
                  isSelected ? "bg-orange-50" : "bg-neutral-100 hover:bg-neutral-200/70"
                }`}
              >
                {/* Animated fill bar */}
                <motion.div
                  className={`absolute inset-y-0 left-0 ${isSelected ? "bg-orange-100" : "bg-neutral-200"}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Selected-option accent tick on the far right */}
                {isSelected && (
                  <motion.div
                    layoutId="pollAccentTick"
                    className="absolute inset-y-0 right-0 w-1 bg-orange-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}

                {/* Icon badge */}
                <span
                  className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base text-white sm:h-10 sm:w-10 sm:text-lg ${option.accent}`}
                  aria-hidden="true"
                >
                  {option.icon}
                </span>

                {/* Label */}
                <span className="relative z-10 flex-1 truncate text-[13.5px] font-semibold text-neutral-900 sm:text-[15px]">
                  {option.label}
                </span>

                {/* Percentage */}
                <span
                  className={`relative z-10 shrink-0 font-mono text-sm font-bold sm:text-base ${
                    isSelected ? "text-orange-600" : "text-neutral-900"
                  }`}
                >
                  {percent}%
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-8 text-center font-serif text-lg italic text-neutral-700 sm:mt-10 sm:text-xl">
          Parliament belongs to everyone.
        </p>
      </div>
    </section>
  );
}