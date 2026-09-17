import Navbar from "@/components/navbar";
import Hero from  "@/components/hero";
import FeaturedProject from "@/components/FeaturedProject";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Experience from "@/components/experience";
import Education from "@/components/Education";
import Courses from "@/components/courses";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProject />
      <About />
      <Skills />
      <Courses />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}