import React, { useEffect, useState, useRef } from "react";
import { siteConfig } from "../data/site.js";
import { GraduationCap, Award, Code2, CheckCircle2, Server, Layers, Terminal, MapPin, Calendar, Briefcase } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 tracking-wider uppercase mb-2">
            <span className="w-6 h-[1px] bg-emerald-500" />
            <span>Profile & Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
            About Me
          </h2>

          <p className="mt-2 text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
            A developer who bridges client requirements, clean database modeling, and performant frontend architectures.
          </p>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm space-y-4">
              <p>
                I am a <strong className="text-[var(--text-primary)] font-semibold">Full Stack Developer at Aptechnosys</strong> based in Mumbai with <strong className="text-emerald-500 font-semibold">1.5+ years of practical development experience</strong>. My daily work revolves around turning business workflows into clean, dependable software using <strong className="text-[var(--text-primary)]">React.js, Next.js, Node.js, and MongoDB</strong>.
              </p>

              <p>
                My educational foundation is a <strong className="text-[var(--text-primary)]">B.Sc. in Information Technology (2022, CGPA: 6.70)</strong> from Bhavna Trust Junior & Degree College (University of Mumbai). I have complemented academic theory with rigorous professional training: <strong className="text-[var(--text-primary)]">Full-Stack Development certification from Aimerz.ai (2024)</strong>, <strong className="text-[var(--text-primary)]">Java & DSA from Coding Ninjas (2023)</strong>, and an intensive engineering internship at <strong className="text-[var(--text-primary)]">Afame Technologies</strong>.
              </p>

              <p>
                In my recent production roles, I have engineered the <strong className="text-[var(--text-primary)]">KNK Court Verification Admin Panel</strong> (multi-role case workflow with S2S APIs, Helmet & rate-limiting guards), elevated the <strong className="text-[var(--text-primary)]">Aptechnosys corporate web portal</strong> from 58% to 94% performance with 100% SEO, and built quantitative engines like the <strong className="text-[var(--text-primary)]">Equity Backtester</strong> with Python/FastAPI.
              </p>

              <div className="pt-2 border-t border-[var(--border)] flex flex-wrap gap-y-2 gap-x-6 text-xs text-[var(--text-secondary)]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Mumbai, India</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />
                  <span>B.Sc. IT (CGPA: 6.70)</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Aimerz.ai & Coding Ninjas Certified</span>
                </div>
              </div>
            </div>

            {/* Practical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">

              <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Server className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] text-sm">APIs & Backend</h3>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-normal">
                  Designing secure REST endpoints, middleware pipelines, and document schemas that scale predictably.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] text-sm">Responsive UI</h3>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-normal">
                  Writing clean React & Next.js components with strict responsiveness across all viewport breakpoints.
                </p>
              </div>

            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold font-display text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors tabular-nums">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                    {stat.label}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border)] text-xs text-[var(--text-secondary)] leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}

            {/* Accreditations */}
            <div className="col-span-2 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-emerald-500 uppercase tracking-wider">
                  Academic & Professional Credentials
                </span>

                <span className="text-[11px] text-[var(--text-muted)] font-mono">
                  Verified Records
                </span>
              </div>

              <div className="space-y-3">

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-500 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                      B.Sc. Information Technology (CGPA: 6.70)
                    </h4>

                    <p className="text-[11px] text-[var(--text-secondary)]">
                      Bhavna Trust Junior & Degree College · University of Mumbai (2022)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-500 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                      Full-Stack Development Certification
                    </h4>

                    <p className="text-[11px] text-[var(--text-secondary)]">
                      Aimerz.ai (11/2024) · Advanced MERN, DOM, Asynchronous JS & MongoDB
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-500 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                      Java Development & DSA Certification
                    </h4>

                    <p className="text-[11px] text-[var(--text-secondary)]">
                      Coding Ninjas (11/2022 - 03/2023) · Object-Oriented Programming & Data Structures
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-500 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                      Web & Software Development Internship
                    </h4>

                    <p className="text-[11px] text-[var(--text-secondary)]">
                      Afame Technologies (02/2024 - 07/2024) · Hands-on client software projects
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}