import Herosection from "./Herosection";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="w-full bg-[#080C14] bg-grid-pattern relative min-h-screen">
      {/* SECTION 1: HERO */}
      <section id="home">
        <Herosection />
      </section>

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
