import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    date: "07 / 2026",
    title: "BioTrack",
    description:
      "A full-stack health tracking platform for recording, organizing, and visualizing personal health metrics.",
    stack: "React / FastAPI / PostgreSQL / Python",
    image: "/images/WebsitePreviewDash-3.png",
    github: "https://github.com/Mars-shah/BioTrack",
    caseStudy: "/projects/bio-track",
    live: "https://bio-track-amber.vercel.app",
  },

  {
    date: "08 / 2026",
    title: "Portfolio",
    description:
      "A responsive personal portfolio built to showcase my software projects, engineering experience, and technical work.",
    stack: "Next.js / TypeScript / Tailwind CSS",
    image: "/images/PortfolioPreview.png",
    github: "https://github.com/Mars-shah/Portfolio",
    caseStudy: null,
    live: "https://marutshah.ca",
  },

    {
    date: "04 / 2025",
    title: "EZ-Step",
    description:
      "An assistive device that guides the flexion of the foot for individuals with foot drop, improving mobility and reducing the risk of falls.",
    stack: "Autocad / Presenting",
    image: "/images/DP4Preview.png",
    github: null,
    caseStudy: null,
    live: "https://marut0176.wixsite.com/marutshah/copy-of-about",
  },

];

export default function ProjectsPage() {
  return (
    <main className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />

      <section className="px-8 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Projects
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Things I&apos;ve built.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            A collection of projects focused on software, engineering, and
            building useful products.
          </p>
        </div>
      </section>

      <section className="px-8 pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-10 border-t border-neutral-200 py-12 dark:border-neutral-800 md:grid-cols-[0.9fr_1.1fr] md:items-center"
            >
              <div>
                <p className="text-sm text-neutral-500">
                  {project.date}
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  {project.title}
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>

                <p className="mt-8 text-sm uppercase tracking-wider text-neutral-500">
                  {project.stack}
                </p>

                <div className="mt-10 flex flex-wrap gap-6">
                  {project.caseStudy && (
                    <a
                      href={project.caseStudy}
                      className="border-b border-neutral-900 pb-1 text-sm font-medium dark:border-white"
                    >
                      View Case Study →
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-500 transition hover:text-neutral-900 dark:hover:text-white"
                    >
                      Live Site <ArrowUpRight size={15} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-500 transition hover:text-neutral-900 dark:hover:text-white"
                    >
                      GitHub <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  priority
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}