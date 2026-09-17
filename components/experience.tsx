import Image from "next/image";

const experiences = [
  {
    year: "2026 — PRESENT",
    image: "/logos/cansbx.png",
    organization: "McMaster Aviation Space Systems",
    role: "CAN-SBX Embedded Software & Science",
    description:
      "Contributing to embedded software architecture, sensor integration, and scientific development for a high-altitude balloon payload.",
  },
  {
    year: "2023 — PRESENT",
    image: "/logos/restaurant.png",
    organization: "Local Restaurant",
    role: "Marketing & Website Design",
    description:
      "Working across website design, digital marketing, content strategy, and online growth.",
  },
  {
    year: "2019 — 2024",
    image: "/logos/aircadets.png",
    organization: "Royal Canadian Air Cadets",
    role: "Warrant Officer Second Class",
    description:
      "Led operations and parade sequences for a squadron of 100+ cadets alongside other senior officers, instructed participants in aviation principles and survival skills.",
  },
];

export default function Experience() {
  return (
    <section className="fade-up delay-4 border-t border-neutral-200 px-8 py-16 dark:border-neutral-800 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Experience
        </p>

        <div className="mt-8">
          {experiences.map((experience) => (
            <div
              key={experience.organization}
              className="grid gap-6 border-t border-neutral-200 py-8 dark:border-neutral-800 md:grid-cols-[1fr_2fr]"
            >
              <div>
                <p className="text-sm text-neutral-500">
                  {experience.year}
                </p>

                <div className="relative mt-5 h-32 w-36">
                  <Image
                    src={experience.image}
                    alt={`${experience.organization} logo`}
                    fill
                    sizes="144px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {experience.organization}
                </h3>

                <p className="mt-2 text-neutral-500">
                  {experience.role}
                </p>

                <p className="mt-5 max-w-2xl leading-7 text-neutral-600 dark:text-neutral-400">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}