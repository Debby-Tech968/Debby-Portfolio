import Herosection from "./Herosection";
import TechMarquee from "./TechMarquee";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="w-full bg-black relative min-h-screen overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <section id="home">
        <Herosection />
      </section>

      {/* TECH STACK MARQUEE TICKER (REACT-FAST-MARQUEE) */}
      <TechMarquee />

      {/* SECTION 2: ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* SECTION 3: SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      {/* SECTION 4: PROJECTS */}
      <section id="projects">
        <Project />
      </section>

      {/* SECTION 5: CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
};

export default Home;
