import React, { useEffect, useState, useRef } from "react";
import { siteConfig } from "../data/site.js";
import { 
  GraduationCap, 
  Award, 
  Code2, 
  CheckCircle2, 
  Server, 
  Layers, 
  Terminal,
  MapPin,
  Calendar,
  Briefcase
} from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative bg-[#09090b]">
      {/* Background divider line */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            <span className="w-6 h-[1px] bg-emerald-500" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            A developer who bridges client requirements, clean database modeling, and performant frontend architectures.
          </p>
        </div>

        {/* Top Grid: Bio Text & Stat Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 shadow-sm space-y-4">
              <p>
                I am a <strong className="text-white font-semibold">Full Stack Developer at Aptechnosys</strong> based in Mumbai with <strong className="text-emerald-400 font-semibold">1.5+ years of practical development experience</strong>. My daily work revolves around turning business workflows into clean, dependable software using <strong className="text-zinc-100">React.js, Next.js, Node.js, and MongoDB</strong>.
              </p>

              <p>
                My educational foundation is a <strong className="text-zinc-100">B.Sc. in Information Technology (2022, CGPA: 6.70)</strong> from Bhavna Trust Junior & Degree College (University of Mumbai). I have complemented academic theory with rigorous professional training: <strong className="text-zinc-100">Full-Stack Development certification from Aimerz.ai (2024)</strong>, <strong className="text-zinc-100">Java & DSA from Coding Ninjas (2023)</strong>, and an intensive engineering internship at <strong className="text-zinc-100">Afame Technologies</strong>.
              </p>

              <p>
                In my recent production roles, I have engineered the <strong className="text-zinc-100">KNK Court Verification Admin Panel</strong> (multi-role case workflow with S2S APIs, Helmet & rate-limiting guards), elevated the <strong className="text-zinc-100">Aptechnosys corporate web portal</strong> from 58% to 94% performance with 100% SEO, and built quantitative engines like the <strong className="text-zinc-100">Equity Backtester</strong> with Python/FastAPI.
              </p>

              <div className="pt-2 border-t border-zinc-800 flex flex-wrap gap-y-2 gap-x-6 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mumbai, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>B.Sc. IT (CGPA: 6.70)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Aimerz.ai & Coding Ninjas Certified</span>
                </div>
              </div>
            </div>

            {/* Practical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Server className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-zinc-200 text-sm">APIs & Backend</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Designing secure REST endpoints, middleware pipelines, and document schemas that scale predictably.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-zinc-200 text-sm">Responsive UI</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Writing clean React & Next.js components with strict responsiveness across all viewport breakpoints.
                </p>
              </div>
            </div>
          </div>

          {/* Stats & Key Metrics (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {siteConfig.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-bold font-display text-white group-hover:text-emerald-400 transition-colors tabular-nums">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-zinc-200">
                    {stat.label}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-800/60 text-xs text-zinc-400 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}

            {/* Accreditations summary card spanning full width */}
            <div className="col-span-2 p-5 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-zinc-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
                  Academic & Professional Credentials
                </span>
                <span className="text-[11px] text-zinc-500 font-mono">Verified Records</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200">B.Sc. Information Technology (CGPA: 6.70)</h4>
                    <p className="text-[11px] text-zinc-400">Bhavna Trust Junior & Degree College · University of Mumbai (2022)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200">Full-Stack Development Certification</h4>
                    <p className="text-[11px] text-zinc-400">Aimerz.ai (11/2024) · Advanced MERN, DOM, Asynchronous JS & MongoDB</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200">Java Development & DSA Certification</h4>
                    <p className="text-[11px] text-zinc-400">Coding Ninjas (11/2022 - 03/2023) · Object-Oriented Programming & Data Structures</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200">Web & Software Development Internship</h4>
                    <p className="text-[11px] text-zinc-400">Afame Technologies (02/2024 - 07/2024) · Hands-on client software projects</p>
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
