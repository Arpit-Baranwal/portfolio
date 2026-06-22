import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UpcomingTalk from "@/components/UpcomingTalk"; // TEMP — remove after Jun 25, 2026
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <UpcomingTalk /> {/* TEMP — remove after Jun 25, 2026 */}
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Publications />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}
