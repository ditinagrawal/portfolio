export default function ProjectDetailLoading() {
  return (
    <section className="py-20">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b border-zinc-200 pb-4">
        <div className="min-w-0 space-y-2">
          <div className="h-7 w-48 animate-pulse rounded bg-zinc-200" />
          <div className="h-4 w-72 animate-pulse rounded bg-zinc-100" />
        </div>
        <div className="h-8 w-16 animate-pulse rounded bg-zinc-200/60" />
      </div>

      {/* Banner Image */}
      <div className="mb-8 h-56 w-full animate-pulse rounded-xl bg-zinc-200 md:h-72" />

      {/* Tech Stack + Links */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-7 w-20 animate-pulse rounded-md bg-zinc-100"
            />
          ))}
        </div>
        <div className="ml-auto flex items-center gap-x-4">
          <div className="h-8 w-28 animate-pulse rounded-md bg-zinc-100" />
          <div className="h-8 w-28 animate-pulse rounded-md bg-zinc-100" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5">
        <div className="h-5 w-full animate-pulse rounded bg-zinc-100" />
        <div className="h-5 w-11/12 animate-pulse rounded bg-zinc-100" />
        <div className="h-5 w-4/5 animate-pulse rounded bg-zinc-100" />
        <div className="h-5 w-full animate-pulse rounded bg-zinc-100" />
        <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-100" />
        <div className="mt-8 h-5 w-full animate-pulse rounded bg-zinc-100" />
        <div className="h-5 w-5/6 animate-pulse rounded bg-zinc-100" />
        <div className="h-5 w-full animate-pulse rounded bg-zinc-100" />
        <div className="h-5 w-2/3 animate-pulse rounded bg-zinc-100" />
      </div>
    </section>
  );
}
