export default function BlogLoading() {
  return (
    <section className="space-y-8 py-20">
      <div className="space-y-1">
        <div className="h-8 w-32 animate-pulse rounded bg-zinc-200" />
        <div className="h-4 w-64 animate-pulse rounded bg-zinc-100" />
      </div>
      <div className="flex flex-col gap-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg px-4 py-2.5"
          >
            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-200" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-zinc-100" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <div className="h-6 w-14 animate-pulse rounded-md bg-zinc-100" />
                  <div className="h-6 w-16 animate-pulse rounded-md bg-zinc-100" />
                </div>
                <div className="h-3 w-20 animate-pulse rounded bg-zinc-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
