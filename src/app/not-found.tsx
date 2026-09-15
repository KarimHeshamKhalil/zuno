import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-24 text-center sm:px-8">
      <p className="font-display text-[64px] uppercase leading-none">404</p>
      <p className="mt-3 text-neutral-500">
        This home seems to have moved. Let&apos;s find you another one.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-[#f0672c] px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#d65420]"
      >
        Back to listings
      </Link>
    </div>
  );
}
