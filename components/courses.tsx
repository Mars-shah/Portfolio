const courses = [
  "Data Structures and Algorithms",
  "OOP Programming",
  "Discrete Mathematics I & II",
  "Calculus I, II, & III",
  "Computer Architecture",
  "Anatomy and Physiology",

];

export default function Courses() {
  return (
    <section className="bg-white px-8 py-24 text-neutral-900 dark:bg-neutral-950 dark:text-white md:py-32">
      <div className="fade-up delay-4 mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Courses
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
            {courses.map((course) => (
              <p
                key={course}
                className="border-b border-neutral-200 pb-3 text-lg dark:border-neutral-800"
              >
                {course}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}