import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROPERTIES, getProperty, formatPrice } from "@/data/properties";
import PropertyGallery from "@/components/PropertyGallery";
import MapEmbed from "@/components/MapEmbed";
import InquiryForm from "@/components/InquiryForm";
import PropertyCard from "@/components/PropertyCard";

export async function generateStaticParams() {
  return PROPERTIES.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = getProperty(id);
  if (!p) return { title: "Property not found" };
  const title = `${p.title} — ${p.address}, ${p.city} | ZUNO Realty`;
  const description = `${p.beds} bd · ${p.baths} ba · ${p.sqft.toLocaleString()} sqft ${p.type.toLowerCase()} in ${p.city}, ${p.state} for $${p.price.toLocaleString()}/mo. ${p.description.slice(0, 140)}…`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: p.images[0], width: 1200, height: 630, alt: p.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [p.images[0]],
    },
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = getProperty(id);
  if (!property) notFound();

  const related = PROPERTIES.filter(
    (p) => p.id !== property.id && p.state === property.state,
  )
    .concat(PROPERTIES.filter((p) => p.id !== property.id))
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="text-[13px] text-neutral-500">
        <Link href="/" className="hover:text-[#f0672c]">
          Home
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <Link href="/#places" className="hover:text-[#f0672c]">
          Places
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span className="font-semibold text-neutral-800">{property.title}</span>
      </nav>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#f0672c]">
            {property.type} · {property.city}, {property.state}
          </p>
          <h1 className="font-display mt-2 text-[34px] uppercase leading-none sm:text-[52px]">
            {property.title}
          </h1>
          <p className="mt-2 text-[14px] text-neutral-500">
            {property.address}, {property.city}, {property.state}{" "}
            {property.zip}
          </p>
        </div>
        <div className="rounded-2xl bg-white px-6 py-4 shadow-sm">
          <p className="text-[26px] font-extrabold leading-none">
            {formatPrice(property)}
            <span className="ml-1 align-middle text-[13px] font-medium text-neutral-500">
              / mo
            </span>
          </p>
          <p className="mt-1 text-[12px] text-neutral-500">
            {property.beds} bd · {property.baths} ba ·{" "}
            {property.sqft.toLocaleString()} sqft
          </p>
        </div>
      </div>

      <div className="mt-6">
        <PropertyGallery images={property.images} title={property.title} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-6">
          {/* Specs */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: "Bedrooms", v: `${property.beds}` },
              { k: "Bathrooms", v: `${property.baths}` },
              { k: "Living area", v: `${property.sqft.toLocaleString()} ft²` },
              { k: "Built", v: `${property.yearBuilt}` },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl bg-white p-4 text-center shadow-sm"
              >
                <p className="text-[18px] font-extrabold">{s.v}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wider text-neutral-500">
                  {s.k}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[24px] bg-white p-7 shadow-sm">
            <h2 className="text-[16px] font-extrabold">About this home</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-neutral-600">
              {property.description}
            </p>
            <h3 className="mt-6 text-[14px] font-extrabold">
              Features & amenities
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {property.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 rounded-xl bg-[#f4efe3] px-4 py-2.5 text-[13px] font-medium"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0672c] text-[11px] font-bold text-white">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <MapEmbed
            address={property.address}
            city={property.city}
            state={property.state}
            lat={property.lat}
            lng={property.lng}
          />
        </div>

        <aside className="space-y-4 lg:sticky lg:top-[88px] lg:self-start">
          <div className="flex items-center gap-4 rounded-[24px] bg-white p-5 shadow-sm">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-neutral-200">
              <Image
                src={property.agent.avatar}
                alt={property.agent.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[15px] font-extrabold">
                {property.agent.name}
              </p>
              <p className="text-[12.5px] text-neutral-500">
                {property.agent.role}
              </p>
              <p className="mt-0.5 truncate text-[12.5px] font-semibold text-neutral-700">
                {property.agent.phone}
              </p>
            </div>
          </div>
          <InquiryForm propertyTitle={property.title} />
          <div className="rounded-[24px] bg-white p-5 text-[13px] leading-6 text-neutral-600 shadow-sm">
            <p className="font-extrabold text-neutral-900">Tour options</p>
            <p className="mt-1">
              In-person · Video call · Self-tour (smart lock). Available daily
              9am–7pm.
            </p>
          </div>
        </aside>
      </div>

      <section className="mt-14" aria-label="Similar homes">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-[26px] uppercase sm:text-[32px]">
            You may also like
          </h2>
          <Link
            href="/#places"
            className="text-[13px] font-bold text-[#f0672c] hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      </section>
    </article>
  );
}
