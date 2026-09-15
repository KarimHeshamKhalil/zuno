"use client";

import { useState } from "react";

export default function InquiryForm({ propertyTitle }: { propertyTitle: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  if (sent) {
    return (
      <div className="rounded-[24px] bg-neutral-950 p-7 text-white">
        <p className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0672c] text-xl">
          ✓
        </p>
        <h3 className="mt-4 text-lg font-extrabold">Inquiry sent</h3>
        <p className="mt-1.5 text-sm leading-6 text-white/65">
          Thanks — a local ZUNO agent will reply about{" "}
          <span className="font-semibold text-white">{propertyTitle}</span>{" "}
          within one business day.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-semibold text-[#f0672c] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-[24px] bg-neutral-950 p-7 text-white"
    >
      <h3 className="text-lg font-extrabold">Ask about this home</h3>
      <p className="mt-1 text-[13px] text-white/60">
        Free tour scheduling · No obligation
      </p>
      <div className="mt-5 space-y-3">
        <div>
          <label htmlFor="inq-name" className="sr-only">
            Full name
          </label>
          <input
            id="inq-name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Full name"
            autoComplete="name"
            className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm outline-none ring-1 ring-white/15 placeholder:text-white/40 focus:ring-2 focus:ring-[#f0672c]"
          />
        </div>
        <div>
          <label htmlFor="inq-email" className="sr-only">
            Email
          </label>
          <input
            id="inq-email"
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email address"
            autoComplete="email"
            className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm outline-none ring-1 ring-white/15 placeholder:text-white/40 focus:ring-2 focus:ring-[#f0672c]"
          />
        </div>
        <div>
          <label htmlFor="inq-msg" className="sr-only">
            Message
          </label>
          <textarea
            id="inq-msg"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={`Hi, I'd like to tour ${propertyTitle}…`}
            className="w-full resize-none rounded-2xl bg-white/10 px-4 py-3 text-sm outline-none ring-1 ring-white/15 placeholder:text-white/40 focus:ring-2 focus:ring-[#f0672c]"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-[#f0672c] py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 hover:bg-[#d65420]"
        >
          Request a tour
        </button>
        <p className="text-center text-[11px] text-white/40">
          By submitting you agree to our contact terms.
        </p>
      </div>
    </form>
  );
}
