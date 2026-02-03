import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="py-32 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-neutral-900 max-w-3xl mx-auto">
            Find your next
            <span className="block text-teal-500">tech opportunity</span>
          </h1>

          <p className="mt-8 text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Browse curated job opportunities in tech. Simple, fast, and focused
            on what really matters.
          </p>

          {/* CTA */}
          <div className="mt-12 flex justify-center gap-4">
            <Link
              href="/jobs"
              className="rounded-lg bg-teal-500 px-8 py-4 text-sm font-medium text-white hover:bg-teal-600 transition shadow-md hover:shadow-lg"
            >
              Browse jobs
            </Link>

            <Link
              href="/jobs"
              className="rounded-lg border border-teal-500 px-8 py-4 text-sm text-teal-500 hover:bg-teal-50 transition"
            >
              View latest offers
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
