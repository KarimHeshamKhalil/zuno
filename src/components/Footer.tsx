import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-[30px] font-bold tracking-wide text-[#f0672c]">
            ZUNO
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
            Whether it&apos;s a quiet escape, a cultural adventure, or a
            beachfront paradise — we help you find the perfect spot.
          </p>
          <div className="mt-5 flex gap-2">
            {["IG", "X", "FB", "LI"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold transition-colors hover:bg-[#f0672c]"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-white/40">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li><Link className="hover:text-white" href="/#places">All places</Link></li>
            <li><Link className="hover:text-white" href="/#places">Villas</Link></li>
            <li><Link className="hover:text-white" href="/#places">Apartments</Link></li>
            <li><Link className="hover:text-white" href="/#why-us">Why us</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-white/40">
            Company
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li><Link className="hover:text-white" href="/#faq">FAQ</Link></li>
            <li><Link className="hover:text-white" href="#">Agents</Link></li>
            <li><Link className="hover:text-white" href="#">Careers</Link></li>
            <li><Link className="hover:text-white" href="#">Press</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-white/40">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>hello@zuno.estate</li>
            <li>+1 (512) 555-0100</li>
            <li>600 Congress Ave, Austin TX</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 ZUNO Realty. All rights reserved.</p>
          <p>Privacy · Terms · Fair Housing</p>
        </div>
      </div>
    </footer>
  );
}
