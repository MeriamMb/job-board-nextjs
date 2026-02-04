import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Optimized background image */}
      <Image
        src="/hero-bg.jpeg"
        alt="Modern tech workspace with developers"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4">
        <section className="flex min-h-screen flex-col items-center justify-center text-center">
          <h1 className="max-w-4xl text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            Find your next
            <span className="block mt-3 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              tech opportunity
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-neutral-200 leading-relaxed">
            Browse curated tech jobs from modern companies. Apply easily and
            move forward in your career.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/jobs"
              className="rounded-xl bg-teal-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-600 hover:-translate-y-0.5"
            >
              Browse jobs
            </Link>

            <Link
              href="/jobs"
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              View latest offers
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
