import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-8 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-sm uppercase tracking-[0.22em] text-neutral-500">
          Software + Biomedical Engineering
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-7xl lg:text-8xl">
          Hi, I&apos;m Marut
        </h1>

        <div className="mt-10">
          <p className="max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            An engineering student focused on building software, thoughtful
            products, and technology with real-world applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900"
            >
              View Projects
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}