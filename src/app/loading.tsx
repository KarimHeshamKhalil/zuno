export default function Loading() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8" aria-busy="true">
      <div className="h-12 w-2/3 animate-pulse rounded-xl bg-black/10" />
      <div className="mt-3 h-5 w-1/3 animate-pulse rounded-lg bg-black/10" />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[4/4.4] animate-pulse rounded-[22px] bg-black/10"
          />
        ))}
      </div>
    </div>
  );
}
