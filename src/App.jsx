import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Home from "./components/Home";

const RouteHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // If user lands on e.g. /about or /projects, smooth scroll to that section
    const path = location.pathname.replace("/", "");
    if (path && ["home", "about", "skills", "projects", "contact"].includes(path)) {
      setTimeout(() => {
        scroller.scrollTo(path, {
          smooth: true,
          duration: 600,
          offset: -70,
        });
      }, 100);
    }
  }, [location.pathname]);

  return <Home />;
};

const App = () => {
  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<RouteHandler />} />
        <Route path="/:section" element={<RouteHandler />} />
      </Routes>
    </div>
  );
};

export default App;
