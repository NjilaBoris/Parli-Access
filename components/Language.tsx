"use client";

import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/app/i18n/navigation";

const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value });
  };

  return (
    <div className="relative flex items-center gap-1 rounded-full border border-white/10 px-2 text-[#c9c2bd] transition-colors hover:text-white sm:gap-1.5 sm:px-2.5">
      <Globe className="h-[13px] w-[13px] shrink-0 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
      <select
        aria-label="Select language"
        value={locale}
        onChange={handleChange}
        className="h-8 cursor-pointer appearance-none bg-transparent pr-1 text-[10px] text-inherit outline-none xs:text-[11px] sm:h-9 sm:text-xs"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-[#1c1716] text-white">
            {lang.short}
          </option>
        ))}
      </select>
    </div>
  );
}