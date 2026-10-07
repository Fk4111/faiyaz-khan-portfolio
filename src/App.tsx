import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import GithubActivity from "./components/GithubActivity.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ResumeModal from "./components/ResumeModal.jsx";

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (!theme) return;

    const root = document.documentElement;
    root.classList.add("theme-transition");

    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("portfolio-theme", theme);

    const timeout = setTimeout(() => root.classList.remove("theme-transition"), 300);
    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark");
  };

  if (!theme) {
    return <div className="min-h-screen" style={{ backgroundColor: "#f8fafc" }} />;
  }

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-emerald-500/20 selection:text-emerald-600 font-sans transition-colors duration-300">
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="main-content" className="relative">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Services />
        <GithubActivity />
        <Contact />
      </main>

      <Footer />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}