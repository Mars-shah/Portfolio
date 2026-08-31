import Image from "next/image";

export default function Education() {
  return (
    <section className="border-t border-neutral-200 px-8 py-16 dark:border-neutral-800 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Education
        </p>

        <div className="mt-8 grid gap-6 border-t border-neutral-200 py-8 dark:border-neutral-800 md:grid-cols-[1fr_2fr]">
          
          <div>
            <p className="text-sm text-neutral-500">
              2024 — 2029
            </p>
            <div className="relative mt-5 h-32 w-36">
            <Image
                src="/logos/maclogo.png"
                alt="McMaster University logo"
                fill
                sizes="144px"
                className="object-contain"
            />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              McMaster University
            </h3>

            <p className="mt-2 text-neutral-500">
              B.Eng.BME — Integrated Software & Biomedical Engineering
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-neutral-600 dark:text-neutral-400">
              Integrated Biomedical Engineering & Health Sciences with a
              specialization in software engineering.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}