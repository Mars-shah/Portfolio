export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-8 py-24 text-neutral-900 dark:bg-neutral-950 dark:text-white md:py-32"
    >
      <div className="fade-up delay-2 mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            About
          </p>
        </div>

        <div>
          <p className="fade-up delay-4 mt-8 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            I&apos;m an engineering student interested in software, biomedical
            technology, and building products that connect the two. I enjoy
            working across frontend, backend, and data to turn ideas into
            functional applications. I'm currently working on making Biotrack an app, and working on a game on my spare time! 
          </p>
        </div>
      </div>
    </section>
  );
}