import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/site.js";
import { Github, Linkedin, Mail, Menu, X, FileText, Sun, Moon } from "lucide-react";

export default function Navbar({ onOpenResume, theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ["hero", "about", "skills", "experience", "projects", "services", "github", "contact"];
      const currentPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentPos >= top && currentPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-[var(--glass-bg)] backdrop-blur-md border-b border-[var(--border)] shadow-lg shadow-black/5 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand */}
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="group flex items-center gap-2.5 text-[var(--text-primary)] hover:text-emerald-500 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-display font-bold text-sm text-emerald-500 group-hover:border-emerald-400 group-hover:scale-105 transition-all">FK</div>
            <span className="font-display font-semibold text-base sm:text-lg tracking-tight">Faiyaz Khan</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a key={link.id} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-colors relative ${isActive ? "text-emerald-500" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"}`}>
                  {link.label}
                  {isActive && <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-emerald-500 rounded-full" />}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] rounded-lg transition-colors border border-transparent hover:border-[var(--border)]">
              <Github className="w-4 h-4" />
            </a>

            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] rounded-lg transition-colors border border-transparent hover:border-[var(--border)]">
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Theme Toggle */}
            <button onClick={onToggleTheme} aria-label="Toggle theme" className="relative w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] border border-transparent hover:border-[var(--border)] transition-all duration-200 cursor-pointer">
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>

            <button onClick={onOpenResume} className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 transition-all cursor-pointer whitespace-nowrap">
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex sm:hidden items-center gap-2">
            <button onClick={onToggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] border border-transparent hover:border-[var(--border)] transition-all cursor-pointer">
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>

            <button onClick={onOpenResume} className="px-2.5 py-1 text-xs font-medium rounded text-emerald-500 bg-emerald-500/10 border border-emerald-500/30">Resume</button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500/50" aria-label="Toggle navigation menu" aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[var(--border)] bg-[var(--glass-bg)] backdrop-blur-xl px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeSection === link.id ? "text-emerald-500 bg-emerald-500/10 border border-emerald-500/20" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-hover)]" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>

              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-hover)]" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>

              <a href={`mailto:${siteConfig.socials.email}`} className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-hover)]" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button onClick={() => { setMobileMenuOpen(false); onOpenResume(); }} className="text-xs px-3 py-1.5 bg-emerald-500 text-zinc-950 font-semibold rounded-md hover:bg-emerald-400 transition-colors">
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}