import React from "react";
import Herosection from "./Herosection";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div
      className="bg-[#0D0D0D] w-full overflow-x-hidden overflow-y-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    >
      {/* HERO */}
      <section id="home">
        <Herosection />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Project />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
