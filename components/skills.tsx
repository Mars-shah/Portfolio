const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Java",
  "Git",
  "Matlab",
  "Simbiology",
  "HTML/CSS",
  "C/C++",

];

export default function Skills() {
  return (
    <section className="bg-white px-8 py-24 text-neutral-900 dark:bg-neutral-950 dark:text-white md:py-32">
      <div className="fade-up delay-4 mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Technologies
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
            {skills.map((skill) => (
              <p
                key={skill}
                className="border-b border-neutral-200 pb-3 text-lg dark:border-neutral-800"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}