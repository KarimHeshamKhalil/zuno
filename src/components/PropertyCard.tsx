"use client";

import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/data/properties";
import { formatPrice } from "@/data/properties";

export default function PropertyCard({
  property,
  index = 0,
}: {
  property: Property;
  index?: number;
}) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="card-enter group relative block overflow-hidden rounded-[22px] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.14)]"
      style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
      aria-label={`${property.title}, ${property.address}`}
    >
      <div className="img-zoom relative aspect-[4/4.4] overflow-hidden sm:aspect-[4/4.6]">
        <Image
          src={property.images[0]}
          alt={`${property.title} — ${property.address}, ${property.city}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading={index < 3 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute right-4 top-4 flex items-center gap-2">
          {property.isNew && (
            <span className="rounded-full bg-[#f0672c] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow">
              New
            </span>
          )}
          <button
            type="button"
            aria-label="Save property"
            onClick={(e) => e.preventDefault()}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-md transition-transform hover:scale-110 active:scale-95"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>

        <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
          <div className="min-w-0">
            <p className="truncate text-[14px] font-bold text-neutral-900">
              {property.title}
            </p>
            <p className="truncate text-[11px] text-neutral-500">
              {property.address}, {property.city}, {property.state}
            </p>
            <p className="mt-1 flex items-center gap-2 text-[11px] font-medium text-neutral-600">
              <span>{property.beds} bd</span>
              <span aria-hidden>·</span>
              <span>{property.baths} ba</span>
              <span aria-hidden>·</span>
              <span>{property.sqft.toLocaleString()} sqft</span>
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[16px] font-extrabold text-neutral-900">
              {formatPrice(property)}
            </p>
            <p className="text-[10px] text-neutral-500">per month</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
