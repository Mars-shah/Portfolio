import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section className="bg-neutral-950 px-8 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            Featured Project
          </p>

          <p className="text-sm text-neutral-500">
            07 / 2026
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              BioTrack
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-400">
              A full-stack health tracking platform for recording and
              visualizing personal health metrics.
            </p>

            <p className="mt-8 text-sm uppercase tracking-wider text-neutral-500">
              React / FastAPI / PostgreSQL / Python
            </p>

            <div className="mt-10 flex gap-6">
              <a
                href="https://bio-track-amber.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-white pb-1 text-sm font-medium"
              >
                View Project →
              </a>

              <a
                href="https://github.com/Mars-shah/BioTrack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-400 transition hover:text-white"
              >
                GitHub ↗
              </a>
            </div>
          </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-neutral-800 bg-neutral-900">
              <Image
                src="/images/WebsitePreviewDash-3.png"
                alt="BioTrack dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
            </div>
        </div>
      </div>
    </section>
  );
}