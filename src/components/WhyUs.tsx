"use client";

import Reveal from "./Reveal";

const ITEMS = [
  {
    title: "Curated, verified listings",
    text: "Every home is toured and verified by a local ZUNO agent — no stale listings, no surprises at the door.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
  },
  {
    title: "Local experts on call",
    text: "Neighborhood-level guidance on pricing, schools, and commute — from agents who actually live there.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Transparent pricing",
    text: "Clear monthly breakdowns, fees up front, and negotiation support so you never overpay.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-[44px] font-bold uppercase leading-none tracking-wide sm:text-[56px]">
            Why us
          </h2>
          <p className="mt-4 text-[13.5px] leading-6 text-neutral-500">
            Whether it&apos;s a quiet escape, a cultural adventure, or a
            beachfront paradise — we help you find the perfect spot and make
            every moment truly your own.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="group h-full rounded-3xl bg-[#f4efe3] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white transition-colors group-hover:bg-[#f0672c]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-[17px] font-extrabold">{item.title}</h3>
                <p className="mt-2 text-[13.5px] leading-6 text-neutral-600">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div
            id="faq"
            className="mt-12 grid gap-6 rounded-3xl bg-neutral-950 p-8 text-white sm:p-10 md:grid-cols-2 md:items-center"
          >
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#f0672c]">
                Ready to move?
              </p>
              <h3 className="font-display mt-2 text-[32px] uppercase leading-[1.05] sm:text-[40px]">
                Your dream location starts here
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                Tell us where you want to be and a local expert will send a
                shortlist within 24 hours. No spam, no pressure.
              </p>
            </div>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <input
                id="cta-email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-full bg-white/10 px-5 py-3.5 text-sm text-white outline-none ring-1 ring-white/15 placeholder:text-white/40 focus:ring-2 focus:ring-[#f0672c]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#f0672c] px-7 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 hover:bg-[#d65420]"
              >
                Get started
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
