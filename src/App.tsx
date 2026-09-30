import React, { useState } from "react";
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

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-emerald-500/20 selection:text-emerald-300 font-sans">
      {/* Fixed Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Single-Page Content Flow */}
      <main id="main-content" className="relative">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Tech Stack Section */}
        <TechStack />

        {/* 4. Experience Timeline */}
        <Experience />

        {/* 5. Featured Projects Showcase */}
        <Projects />

        {/* 6. What I Build / Services */}
        <Services />

        {/* 7. GitHub & Activity */}
        <GithubActivity />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
