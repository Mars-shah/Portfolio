import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-neutral-950 px-8 py-24 text-white md:py-32"
    >
      <div className="fade-up delay-4 mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Contact
        </p>

        <div className="mt-10 grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Contact Me!
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
              I&apos;m always open to talking about software, and new opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <a
              href="mailto:shahmarut01@gmail.com"
              className="inline-flex items-center gap-2 text-lg transition hover:text-neutral-400"
            >
              Email <ArrowUpRight size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/marut-shah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg transition hover:text-neutral-400"
            >
              LinkedIn <ArrowUpRight size={15} />
            </a>

            <a
              href="https://github.com/Mars-shah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg transition hover:text-neutral-400"
            >
              GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}