import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const features = [
  "JWT-based authentication",
  "Protected API routes",
  "User-scoped health records",
  "Full CRUD operations",
  "7-day, 30-day, and all-time trends",
  "Responsive dashboard",
];

const stack = [
  "React",
  "TypeScript",
  "FastAPI",
  "SQLAlchemy",
  "PostgreSQL",
  "Vercel",
  "Render",
  "Neon",
];

export default function BioTrackPage() {
  return (
    <main className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />

      <section className="px-8 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Project / 2026
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            BioTrack
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-600 dark:text-neutral-400">
            A full-stack health tracking application built to help users record,
            manage, and visualize personal health metrics through a responsive
            dashboard.
          </p>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <a
              href="https://github.com/Mars-shah/BioTrack"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-neutral-900 pb-1 font-medium dark:border-white"
            >
              GitHub ↗
            </a>

            <a
              href="YOUR_LIVE_SITE_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 transition hover:text-neutral-900 dark:hover:text-white"
            >
              Live Site ↗
            </a>
          </div>
        </div>
      </section>


      <section className="px-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] overflow-hidden border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
            <Image
              src="/images/WebsitePreviewDash-3.png"
              alt="BioTrack dashboard"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-8 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Overview
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Turning health data into something easier to understand.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              BioTrack allows users to log personal health information including
              heart rate, weight, steps, and sleep. The application then presents
              that data through a dashboard with historical trends and recent
              metrics.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              I built the application as a full-stack project, connecting a React
              frontend to a FastAPI backend and PostgreSQL database while handling
              authentication, protected routes, and user-specific data.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 px-8 py-24 dark:border-neutral-800 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Core Features
          </p>

          <div className="mt-12 grid gap-x-12 gap-y-0 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="border-t border-neutral-200 py-6 text-lg dark:border-neutral-800"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] overflow-hidden border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
            <Image
              src="/images/WebsitePreviewDash-2.png"
              alt="BioTrack health trends interface"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 px-8 py-24 dark:border-neutral-800 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Stack
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 sm:grid-cols-3">
            {stack.map((item) => (
              <p
                key={item}
                className="border-b border-neutral-200 py-4 text-lg dark:border-neutral-800"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 px-8 py-24 dark:border-neutral-800 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Architecture
            </p>
          </div>

          <div>
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-wider text-neutral-500">
                  Frontend
                </p>
                <p className="mt-3 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                  React and TypeScript power the interface, dashboard, health
                  metric forms, and trend visualizations.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-neutral-500">
                  Backend
                </p>
                <p className="mt-3 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                  FastAPI provides REST endpoints for authentication, user data,
                  and health metric operations.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-neutral-500">
                  Database
                </p>
                <p className="mt-3 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                  PostgreSQL stores user accounts and personal health records,
                  accessed through SQLAlchemy.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-neutral-500">
                  Deployment
                </p>
                <p className="mt-3 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                  The frontend is deployed on Vercel, the backend on Render, and
                  the PostgreSQL database on Neon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 px-8 py-24 dark:border-neutral-800 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              What I Learned
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Building the full system was more valuable than building just the UI.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              This project helped me understand how authentication, frontend
              state, API routes, database queries, and deployment all connect in
              a real application.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              I also gained more experience debugging issues across different
              parts of the stack rather than treating the frontend and backend
              as separate projects.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-neutral-950 px-8 py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Next Project
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            More work coming soon.
          </h2>

          <a
            href="/projects"
            className="mt-10 inline-block border-b border-white pb-1 text-sm font-medium"
          >
            View All Projects →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}