"use client";

import { useMemo, useState } from "react";
import {
  LOCATIONS,
  PRICE_RANGES,
  PROPERTIES,
  TYPES,
  type Property,
} from "@/data/properties";
import PropertyCard from "./PropertyCard";

type SortKey = "newest" | "price-asc" | "price-desc" | "beds";

function matchesQuery(p: Property, q: string) {
  if (!q.trim()) return true;
  const hay = `${p.title} ${p.address} ${p.city} ${p.state} ${p.type}`.toLowerCase();
  return q
    .toLowerCase()
    .split(/\s+/)
    .every((w) => hay.includes(w));
}

export default function HomeClient({ initial }: { initial: Property[] }) {
  const [lookingFor, setLookingFor] = useState("Residence in Texas");
  const [type, setType] = useState<string>("All");
  const [priceIdx, setPriceIdx] = useState(0);
  const [location, setLocation] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");
  const [visible, setVisible] = useState(9);

  const results = useMemo(() => {
    const range = PRICE_RANGES[priceIdx];
    let list = (initial.length ? initial : PROPERTIES).filter((p) => {
      if (type !== "All" && p.type !== type) return false;
      if (location !== "All" && p.state !== location) return false;
      if (p.price < range.min || p.price > range.max) return false;
      if (!matchesQuery(p, query)) return false;
      if (
        lookingFor.trim() &&
        lookingFor !== "Residence in Texas" &&
        !matchesQuery(p, lookingFor)
      ) {
        // "Looking for" acts as a soft keyword when customized
        return false;
      }
      return true;
    });
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "beds":
        list = [...list].sort((a, b) => b.beds - a.beds);
        break;
      default:
        list = [...list].sort(
          (a, b) => Number(b.isNew ?? false) - Number(a.isNew ?? false),
        );
    }
    return list;
  }, [initial, type, location, priceIdx, query, lookingFor, sort]);

  const shown = results.slice(0, visible);

  const selectCls =
    "w-full appearance-none rounded-2xl bg-white px-4 py-3.5 pr-9 text-[13.5px] font-medium text-neutral-800 shadow-[0_2px_16px_rgba(0,0,0,0.05)] outline-none transition-all focus:ring-2 focus:ring-[#f0672c]/60 cursor-pointer";
  const labelCls =
    "mb-2 block text-[12px] font-extrabold uppercase tracking-[0.08em] text-neutral-900";

  return (
    <div id="places">
      {/* Filter bar — matches reference layout */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:grid-cols-[1.5fr_1fr_1.1fr_1fr_1.6fr_auto]">
        <div className="col-span-2 md:col-span-1 lg:col-span-1">
          <label htmlFor="lookingFor" className={labelCls}>
            Looking for
          </label>
          <input
            id="lookingFor"
            value={lookingFor}
            onChange={(e) => {
              setLookingFor(e.target.value);
              setVisible(9);
            }}
            placeholder="Residence in Texas"
            className="w-full rounded-2xl bg-white px-4 py-3.5 text-[13.5px] font-medium text-neutral-800 shadow-[0_2px_16px_rgba(0,0,0,0.05)] outline-none transition-all placeholder:text-neutral-400 focus:ring-2 focus:ring-[#f0672c]/60"
          />
        </div>

        <div>
          <label htmlFor="type" className={labelCls}>
            Type
          </label>
          <div className="relative">
            <select
              id="type"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                setVisible(9);
              }}
              className={selectCls}
            >
              <option value="All">All types</option>
              {TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <Chevron />
          </div>
        </div>

        <div>
          <label htmlFor="price" className={labelCls}>
            Price
          </label>
          <div className="relative">
            <select
              id="price"
              value={priceIdx}
              onChange={(e) => {
                setPriceIdx(Number(e.target.value));
                setVisible(9);
              }}
              className={selectCls}
            >
              {PRICE_RANGES.map((r, i) => (
                <option key={r.label} value={i}>
                  {r.label}
                </option>
              ))}
            </select>
            <Chevron />
          </div>
        </div>

        <div>
          <label htmlFor="location" className={labelCls}>
            Location
          </label>
          <div className="relative">
            <select
              id="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setVisible(9);
              }}
              className={selectCls}
            >
              <option value="All">United State</option>
              {LOCATIONS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            <Chevron />
          </div>
        </div>

        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <label htmlFor="search" className={labelCls}>
            Find specific property
          </label>
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              id="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(9);
              }}
              placeholder="Ex. Adam's Apartment"
              className="w-full rounded-2xl bg-white py-3.5 pl-10 pr-4 text-[13.5px] font-medium text-neutral-800 shadow-[0_2px_16px_rgba(0,0,0,0.05)] outline-none transition-all placeholder:text-neutral-400 focus:ring-2 focus:ring-[#f0672c]/60"
            />
          </div>
        </div>

        <div className="col-span-2 flex items-end md:col-span-2 lg:col-span-1">
          <button
            type="button"
            aria-label="More filters"
            title="More filters"
            onClick={() => {
              setLookingFor("Residence in Texas");
              setType("All");
              setPriceIdx(0);
              setLocation("All");
              setQuery("");
              setVisible(9);
            }}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-neutral-950 hover:text-white active:translate-y-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <line x1="4" y1="6" x2="20" y2="6" />
              <circle cx="9" cy="6" r="2.2" fill="white" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <circle cx="15" cy="12" r="2.2" fill="white" />
              <line x1="4" y1="18" x2="20" y2="18" />
              <circle cx="7" cy="18" r="2.2" fill="white" />
            </svg>
          </button>
        </div>
      </div>

      {/* Results header */}
      <div className="mt-10 flex items-center justify-between">
        <h2 className="font-display text-[20px] font-bold uppercase tracking-wide sm:text-[22px]">
          {results.length.toLocaleString()} results found
        </h2>
        <div className="relative flex items-center gap-2 text-[13px] text-neutral-500">
          <span className="hidden sm:inline">Sort by:</span>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              aria-label="Sort properties"
              className="cursor-pointer appearance-none bg-transparent pr-5 font-semibold text-neutral-800 outline-none"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="beds">Most beds</option>
            </select>
            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[10px]">
              ▼
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      {shown.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i % 9} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl bg-white p-12 text-center shadow-sm">
          <p className="font-display text-2xl uppercase">No matches found</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-neutral-500">
            Try widening the price range, clearing the search, or choosing a
            different location or type.
          </p>
          <button
            onClick={() => {
              setLookingFor("Residence in Texas");
              setType("All");
              setPriceIdx(0);
              setLocation("All");
              setQuery("");
            }}
            className="mt-6 rounded-full bg-[#f0672c] px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#d65420]"
          >
            Reset filters
          </button>
        </div>
      )}

      {visible < results.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + 6)}
            className="rounded-full bg-[#f0672c] px-9 py-3.5 text-[13.5px] font-bold text-white shadow-[0_10px_25px_rgba(240,103,44,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#d65420] hover:shadow-[0_14px_30px_rgba(240,103,44,0.45)] active:translate-y-0"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}

function Chevron() {
  return (
    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] text-neutral-500">
      ▼
    </span>
  );
}
