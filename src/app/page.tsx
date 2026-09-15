import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import WhyUs from "@/components/WhyUs";
import Reveal from "@/components/Reveal";
import { PROPERTIES } from "@/data/properties";

export const metadata: Metadata = {
  title: "Prestige Realty — Find Your Dream Home",
  description:
    "ZUNO Prestige Realty: searchable villas, apartments, penthouses and family homes with verified photos, transparent monthly pricing, and local expert agents.",
  openGraph: {
    title: "Prestige Realty — Find Your Dream Home",
    description:
      "Search verified homes across Texas, New York, California and Florida. Transparent pricing, local experts, instant tours.",
    url: "https://zuno-estate.vercel.app/",
  },
};

// SSR: server-render the listing page for speed + SEO
export default async function HomePage() {
  const properties = PROPERTIES;

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-5 pb-2 pt-10 sm:px-8 sm:pt-14">
        <Reveal>
          <h1 className="font-display max-w-[640px] text-[46px] font-bold uppercase leading-[0.95] tracking-wide text-neutral-950 sm:text-[72px]">
            Your dream location starts here
          </h1>
          <p className="mt-4 max-w-[520px] text-[13.5px] leading-6 text-neutral-500">
            Whether it&apos;s a quiet escape, a cultural adventure, or a
            beachfront paradise — we help you find the perfect spot and make
            every moment truly your own.
          </p>
        </Reveal>

        <div className="mt-8">
          <HomeClient initial={properties} />
        </div>
      </section>

      <div className="mt-14">
        <WhyUs />
      </div>
    </>
  );
}
