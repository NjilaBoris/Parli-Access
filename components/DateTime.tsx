"use client";

import { useEffect, useState } from "react";

export function DateTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const dateStr = now?.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const timeStr = now?.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div
      className="flex flex-col items-end justify-center leading-tight text-[#c9c2bd] transition-colors hover:text-white"
      aria-label={now ? `Current date and time: ${dateStr}, ${timeStr}` : undefined}
    >
      <span className="text-[9px] font-mono whitespace-nowrap xs:text-[10px] sm:text-[11px] lg:text-xs">
        {dateStr ?? "\u00A0"}
      </span>
      <span className="text-[9px] font-mono whitespace-nowrap tabular-nums xs:text-[10px] sm:text-[11px] lg:text-xs">
        {timeStr ?? "\u00A0"}
      </span>
    </div>
  );
}