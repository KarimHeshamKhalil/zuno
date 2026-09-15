export default function MapEmbed({
  address,
  city,
  state,
  lat,
  lng,
}: {
  address: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
}) {
  const query = encodeURIComponent(`${address}, ${city}, ${state}`);
  // No API key required — Google Maps Embed via output=embed
  const src = `https://www.google.com/maps?q=${query}&z=14&output=embed`;
  return (
    <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-[16px] font-extrabold">Location</h2>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-semibold text-[#f0672c] hover:underline"
        >
          Open in Google Maps →
        </a>
      </div>
      <iframe
        title={`Map of ${address}, ${city}`}
        src={src}
        width="100%"
        height="340"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[340px] w-full border-0"
        allowFullScreen
      />
      <p className="px-6 py-4 text-[13px] text-neutral-500">
        {address}, {city}, {state} · {lat.toFixed(4)}, {lng.toFixed(4)}
      </p>
    </div>
  );
}
