"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import { deputiesData } from "@/data";
import { MP, REGIONS } from "@/constant";

interface Deputy {
  name: string;
  image: string; // e.g. "MBAPTE-Jean-Baptiste.jpg"
}

type Accent = "cream" | "white" | "gradient" | "gold" | "dark";

interface TeamMember {
  id: string;
  name: string;
  image: string; // full source URL
  sourceUrl: string; // where clicking the card should go
  accent: Accent;
}

interface MPDetail {
  mp: MP;
  regionName: string;
  divisionName: string;
  divisionSeats: number;
  constituencyName: string;
  constituencySeats: number;
  subDivisions?: string;
}

const SOURCE_BASE = "https://www.assnat.cm/images/photosDepute/legislature10";

const ACCENT_CYCLE: Accent[] = ["cream", "white", "gradient", "gold", "white"];

const deputies = deputiesData as Deputy[];

const team: TeamMember[] = deputies.map((deputy, index) => {
  const imageUrl = `${SOURCE_BASE}/${deputy.image}`;
  return {
    id: deputy.image,
    name: deputy.name,
    image: imageUrl,
    sourceUrl: imageUrl,
    accent: ACCENT_CYCLE[index % ACCENT_CYCLE.length],
  };
});

const accentStyles: Record<Accent, string> = {
  cream: "bg-orange-50/90 ring-1 ring-orange-100",
  white: "bg-white/95 ring-1 ring-slate-100",
  gradient: "bg-gradient-to-r from-orange-100/90 to-rose-100/90 ring-1 ring-orange-200",
  gold: "bg-amber-100/90 ring-1 ring-amber-200",
  dark: "bg-slate-900 ring-1 ring-slate-800",
};

const textStyles: Record<Accent, { name: string }> = {
  cream: { name: "text-slate-900" },
  white: { name: "text-slate-900" },
  gradient: { name: "text-slate-900" },
  gold: { name: "text-slate-900" },
  dark: { name: "text-white" },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -12, scale: 0.96, transition: { duration: 0.25 } },
};

// ---------------------------------------------------------------------------
// MP lookup: matches a deputy's display name (from deputiesData) against the
// richer REGIONS tree, which carries constituency / division / region /
// committee / party. The two datasets were scraped separately and their name
// formatting doesn't always line up (accents, "epse" vs "ep.", hyphens vs
// spaces, the odd typo), so this does a normalized exact match first and
// falls back to a token-overlap match. A handful of entries may still come
// back unmatched or slightly off given known source-data quirks — worth
// spot-checking against the "Worth spot-checking" note in the REGIONS file.
// ---------------------------------------------------------------------------

function normalizeName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents
    .toUpperCase()
    .replace(/\b(EPSE|EP|EPOUSE|NEE|NÉE)\b\.?/g, " ")
    .replace(/[^A-Z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function buildMPIndex(): Map<string, MPDetail> {
  const index = new Map<string, MPDetail>();
  for (const region of REGIONS) {
    for (const division of region.divisions) {
      for (const constituency of division.constituencies) {
        for (const mp of constituency.mps) {
          if (!mp.name) continue;
          const key = normalizeName(mp.name);
          if (!key || index.has(key)) continue;
          index.set(key, {
            mp,
            regionName: region.name,
            divisionName: division.name,
            divisionSeats: division.seats,
            constituencyName: constituency.name,
            constituencySeats: constituency.seats,
            subDivisions: constituency.subDivisions,
          });
        }
      }
    }
  }
  return index;
}

function findMPDetail(name: string, index: Map<string, MPDetail>): MPDetail | null {
  const key = normalizeName(name);
  const direct = index.get(key);
  if (direct) return direct;

  const queryTokens = key.split(" ").filter(Boolean);
  const queryTokenSet = new Set(queryTokens);
  let best: MPDetail | null = null;
  let bestScore = 0;

  for (const [candidateKey, detail] of index) {
    const candidateTokens = candidateKey.split(" ").filter(Boolean);
    let shared = 0;
    for (const token of candidateTokens) {
      if (queryTokenSet.has(token)) shared++;
    }
    const score = shared / Math.max(queryTokens.length, candidateTokens.length, 1);
    if (score > bestScore) {
      bestScore = score;
      best = detail;
    }
  }

  return bestScore >= 0.5 ? best : null;
}


const modalVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 16, scale: 0.96, transition: { duration: 0.2 } },
};

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-wide text-[#0B3B2E]/60">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-slate-800">{value}</dd>
    </div>
  );
}

function DeputyDetailModal({
  member,
  detail,
  onClose,
}: {
  member: TeamMember;
  detail: MPDetail | null;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#F7F3EA] shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg leading-none text-slate-600 shadow transition hover:bg-white"
        >
          &times;
        </button>

        <div className="relative h-64 w-full bg-slate-200">
          <img src={member.image} alt={member.name}   className="object-cover h-full w-full" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-4 pt-12">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">{member.name}</h3>
            {detail?.mp.party && <p className="mt-0.5 text-sm text-white/80">{detail.mp.party}</p>}
          </div>
        </div>

        <div className="max-h-[50vh] overflow-y-auto px-6 py-5">
          {detail ? (
            <dl className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <DetailItem label="Region" value={detail.regionName} />
                <DetailItem label="Division" value={detail.divisionName} />
                <DetailItem label="Constituency" value={detail.constituencyName} />
                <DetailItem label="Seats in constituency" value={String(detail.constituencySeats)} />
                {detail.subDivisions && <DetailItem label="Sub-divisions" value={detail.subDivisions} />}
                {detail.mp.party && <DetailItem label="Party" value={detail.mp.party} />}
              </div>
              {detail.mp.committee && (
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-[#0B3B2E]/60">Committee</dt>
                  <dd className="mt-1 text-sm text-slate-700">{detail.mp.committee}</dd>
                </div>
              )}
            </dl>
          ) : (
            <p className="text-sm text-slate-500">
              We couldn&apos;t match this member to constituency data yet.
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CurrentLegislatureSection() {
  const [activeFilter] = useState<"View all">("View all");
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const mpIndex = useMemo(() => buildMPIndex(), []);
  const selectedDetail = selected ? findMPDetail(selected.name, mpIndex) : null;

  const visibleMembers = activeFilter === "View all" ? team : team;

  return (
    <section className="w-full bg-[#f4f1ec] px-4 py-16 sm:px-6 md:py-28 lg:py-35">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={headingVariants}
          className="max-w-2xl text-center"
        >
          <h2 className="text-3xl leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Current Legislature
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-500 sm:text-base">
            Members of the National Assembly of Cameroon.
          </p>
        </motion.div>

        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mt-10 grid w-full grid-cols-2 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {visibleMembers.map((member) => (
              <motion.button
                key={member.id}
                type="button"
                onClick={() => setSelected(member)}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                className="group block w-full text-left"
                title={`View details for ${member.name}`}
              >
                <div className="relative aspect-[3/3.4] w-full overflow-hidden rounded-2xl bg-slate-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />

                  <div
                    className={`absolute inset-x-3 bottom-3 rounded-xl px-3 py-2.5 backdrop-blur-sm sm:px-4 sm:py-3 ${accentStyles[member.accent]}`}
                  >
                    <p className={`truncate text-sm font-semibold sm:text-base ${textStyles[member.accent].name}`}>
                      {member.name}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <DeputyDetailModal member={selected} detail={selectedDetail} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}