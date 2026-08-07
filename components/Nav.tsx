"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "News & Update", href: "/news" },
  {
    label: "National Assembly",
    href: "/national-assembly",
    submenu: [
      {
        label: "History of the National Assembly",
        href: "/national-assembly/history",
        description: "Origins and evolution of the institution",
      },
      {
        label: "Functioning of the National Assembly",
        href: "/national-assembly/functioning",
        description: "How sessions, votes, and procedures work",
      },
      {
        label: "Organization",
        href: "/national-assembly/organization",
        description: "Bureau, secretariat, administrative structure",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    submenu: [
      { label: "Standing Orders", href: "/resources/standing-orders" },
      { label: "Constitution", href: "/resources/constitution" },
      { label: "Electoral Code", href: "/resources/electoral-code" },
      {
        label: "Policy Debrief (briefing series)",
        href: "/resources/policy-debrief",
      },
    ],
  },
  {
    label: "Members",
    href: "/members",
    submenu: [
      {
        label: "Legislative procedure",
        href: "/members/legislative-procedure",
      },
    ],
  },
  {
    label: "Multimedia",
    href: "/multimedia",
    submenu: [
      { label: "Podcast", href: "/multimedia/podcast" },
      { label: "Gallery", href: "/multimedia/gallery" },
    ],
  },
  { label: "Engage", href: "/engage", 
    submenu: [
      { label: "Write to your MP", href: "/engage/write-to-your-mp" },
      { label: "Polls", href: "/engage/polls" },
    ],
   },
   {
    label: "Parliamentary Dashboard",
    href: "/parliamentary-dashboard"
   },
   {
    label: "Blog",
    href: "/blog"
   },
   {
    label: "About Us",
    href: "/about-us"
   },

   {
    label: "Contact Us",
    href: "/contact-us"
   }

];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSubOpen(null);
  };

  return (
    <header className="w-full bg-[#151110] px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
      <nav className="mx-auto flex max-w-[88rem] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={closeMobile}
        >
          <span className="text-base font-semibold tracking-tight text-white sm:text-lg md:text-xl">
            PARLI ACCESS
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.submenu && setOpenMenu(link.label)}
              onMouseLeave={() => link.submenu && setOpenMenu(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-[13px] text-[#c9c2bd] transition-colors hover:text-white xl:text-[15px]"
              >
                {link.label}
                {link.submenu && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openMenu === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {link.submenu && (
                <AnimatePresence>
                  {openMenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#1c1716] shadow-2xl shadow-black/40 sm:w-80"
                    >
                      <div className="p-2">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/5"
                          >
                            <p className="text-[13px] font-medium text-white sm:text-[14px]">
                              {item.label}
                            </p>
                            {"description" in item && item.description && (
                              <p className="mt-0.5 text-[12px] text-[#948d89] sm:text-[12.5px]">
                                {item.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mx-auto mt-4 flex max-w-7xl flex-col gap-1 border-t border-white/10 pt-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.submenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileSubOpen((cur) =>
                            cur === link.label ? null : link.label,
                          )
                        }
                        className="flex w-full items-center justify-between py-3 text-left text-[15px] text-[#c9c2bd] transition-colors hover:text-white sm:text-base"
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                            mobileSubOpen === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileSubOpen === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pb-2 pl-4">
                              {link.submenu.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={closeMobile}
                                  className="rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                                >
                                  <p className="text-[13px] font-medium text-white sm:text-[14px]">
                                    {item.label}
                                  </p>
                                  {"description" in item &&
                                    item.description && (
                                      <p className="mt-0.5 text-[11.5px] text-[#948d89] sm:text-[12px]">
                                        {item.description}
                                      </p>
                                    )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className="block py-3 text-[15px] text-[#c9c2bd] transition-colors hover:text-white sm:text-base"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
