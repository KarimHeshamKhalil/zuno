"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Places", href: "/#places" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f4efe3]/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
          : "bg-[#f4efe3]"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-[26px] font-bold tracking-wide text-[#f0672c]"
          aria-label="ZUNO home"
        >
          ZUNO
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[14px] font-medium text-neutral-800 transition-colors hover:text-[#f0672c]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full bg-neutral-900 transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-full bg-neutral-900 transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-full bg-neutral-900 transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-[#f4efe3] px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[15px] font-medium hover:bg-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
