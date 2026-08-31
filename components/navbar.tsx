export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 px-8 py-6 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="/" className="font-semibold tracking-tight">
          MARUT SHAH
        </a>

        <div className="flex gap-8 text-sm">
          <a
            href="/#about"
            className="transition hover:text-neutral-500"
          >
            About
          </a>

          <a
            href="/projects"
            className="transition hover:text-neutral-500"
          >
            Projects
          </a>

          <a
            href="/#contact"
            className="transition hover:text-neutral-500"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}