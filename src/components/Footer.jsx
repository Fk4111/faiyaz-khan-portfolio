import React from "react";
import { siteConfig } from "../data/site.js";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "GitHub", href: "#github" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-[var(--bg-secondary)] border-t border-[var(--border)] py-16 text-[var(--text-secondary)] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[var(--border)]">
          <div>
            <div className="flex items-center gap-2 text-[var(--text-primary)] font-display font-bold text-lg">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-500">
                FK
              </div>

              <span>{siteConfig.name}</span>
            </div>

            <p className="text-[var(--text-muted)] text-xs mt-1">
              {siteConfig.title} · Based in {siteConfig.location}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${siteConfig.socials.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-lg bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:text-emerald-500 border border-[var(--border)] transition-colors cursor-pointer ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-[var(--text-muted)] font-mono text-[11px]">
            Designed & Engineered for Production
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[var(--text-muted)] border-t border-[var(--border)]">
          <div>
            © 2026 {siteConfig.name}. All rights reserved.
          </div>

          <div>
            React · Next.js · Node.js · Express · MongoDB
          </div>
        </div>

      </div>
    </footer>
  );
}