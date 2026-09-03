import React, { useEffect, useState } from "react";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Preloader from "./components/Pre";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";
import ContactMe from "./components/Email/Email";

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader isLoading={isLoading} />
      <div className={`relative min-h-screen bg-[#f7f6f2] text-slate-900 font-body ${isLoading ? "overflow-hidden h-screen" : ""}`}>
        <Navbar />
        <ScrollToTop />
        <main className="relative pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
