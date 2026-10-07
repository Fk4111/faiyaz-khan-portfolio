import React, { useState } from "react";
import { siteConfig } from "../data/site.js";
import { motion } from "motion/react";
import { ArrowRight, FileText, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";

export default function Hero({ onOpenResume }) {
  const [imgSrc, setImgSrc] = useState(siteConfig.photoUrl);
  const fileInputRef = React.useRef(null);

  React.useEffect(() => {
    const savedPhoto = localStorage.getItem("fk_photo");
    if (savedPhoto) setImgSrc(savedPhoto);
    else setImgSrc(siteConfig.photoUrl);
  }, []);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (typeof result === "string") {
          setImgSrc(result);
          localStorage.setItem("fk_photo", result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-grid-pattern w-full max-w-full">
      <div aria-hidden="true" className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] lg:w-[850px] h-[300px] sm:h-[400px] lg:h-[450px] bg-emerald-500/10 rounded-full blur-[110px] sm:blur-[130px] pointer-events-none animate-pulse-glow" />
      <div aria-hidden="true" className="absolute top-1/3 -right-32 sm:-right-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-w-0">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 min-w-0 w-full max-w-full">

            {/* Availability */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-inner">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>

              <span className="text-[11px] sm:text-xs font-semibold text-emerald-500 tracking-wide break-words">
                Full Stack Developer @ {siteConfig.currentCompany}
              </span>

              <span className="text-[var(--text-muted)] hidden sm:inline">·</span>

              <span className="text-xs text-[var(--text-secondary)] hidden sm:flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[var(--text-muted)] shrink-0" />
                {siteConfig.location}
              </span>
            </motion.div>

            {/* Main Headings */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-2 min-w-0">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] font-display leading-[1.05] break-words">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {siteConfig.name}
                </span>.
              </h1>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--text-secondary)] font-display leading-tight break-words">
                {siteConfig.title}
              </h2>
            </motion.div>

            {/* Supporting Pitch */}
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-sm sm:text-lg text-[var(--text-secondary)] font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              {siteConfig.tagline}
            </motion.p>

            {/* Detailed Bio */}
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {siteConfig.bio}
            </motion.p>

            {/* Core Stack */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 gap-y-1.5 text-xs text-[var(--text-muted)] pt-1 max-w-full">
              <span className="text-[var(--text-muted)] font-medium">Core Stack:</span>
              <span className="text-[var(--text-primary)]">React.js</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-primary)]">Next.js</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-primary)]">Node.js</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-primary)]">Express</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-primary)]">MongoDB</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-primary)]">REST APIs</span>
            </motion.div>

            {/* ACTION BUTTONS */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2 w-full max-w-full">

              <a href="#projects" onClick={scrollToProjects} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 group">
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a href={siteConfig.resumePdfUrl} download="Faiyaz_Khan_Resume.pdf" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)] font-medium text-sm border border-[var(--border)] hover:border-[var(--border-hover)] transition-all cursor-pointer">
                <Download className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="whitespace-nowrap">Download Resume (PDF)</span>
              </a>

              <button type="button" onClick={onOpenResume} className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 px-4 py-3 rounded-lg bg-[var(--surface-hover)] hover:bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium border border-[var(--border)] transition-all cursor-pointer">
                <FileText className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                <span>View CV</span>
              </button>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 text-[var(--text-secondary)] pt-2 w-full max-w-full">

              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 max-w-full text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <Github className="w-4 h-4 shrink-0" />
                <span className="break-all">github.com/Fk4111</span>
              </a>

              <span className="text-[var(--text-muted)] hidden sm:inline">·</span>

              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <Linkedin className="w-4 h-4 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <span className="text-[var(--text-muted)] hidden sm:inline">·</span>

              <a href={`mailto:${siteConfig.socials.email}`} className="flex items-center justify-center gap-1.5 max-w-full min-w-0 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="break-all text-center">{siteConfig.socials.email}</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — PHOTO */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="lg:col-span-5 flex justify-center w-full min-w-0">
            <div className="relative group w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">

              {/* Outer glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/30 via-blue-500/20 to-teal-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Main Card */}
              <div className="relative w-full min-w-0 rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-2.5 sm:p-3 shadow-2xl overflow-hidden">

                {/* Photo */}
                <div onClick={() => fileInputRef.current?.click()} title="Click to change / upload your photo" className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[var(--surface-hover)] border border-[var(--border)] cursor-pointer group/photo">
                  <img
                    src={imgSrc}
                    onError={() => {
                      if (imgSrc !== siteConfig.photoUrl) setImgSrc(siteConfig.photoUrl);
                    }}
                    alt="Faiyaz Khan - MERN Stack Developer"
                    className="w-full h-full object-cover object-[center_35%] group-hover/photo:scale-105 transition-transform duration-500"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Upload overlay */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-md text-[10px] text-white opacity-0 group-hover/photo:opacity-100 transition-opacity">
                    Change Photo
                  </div>

                  {/* Status */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-xs backdrop-blur-md bg-black/70 border border-white/10 p-2.5 rounded-lg shadow-lg min-w-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <div className="min-w-0">
                        <div className="text-white font-semibold text-xs leading-none">Faiyaz Khan</div>
                        <div className="text-white/70 text-[10px] mt-0.5 truncate">Aptechnosys · Mumbai</div>
                      </div>
                    </div>

                    <span className="shrink-0 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
                      Active
                    </span>
                  </div>
                </div>

                {/* Hidden upload */}
                <input type="file" ref={fileInputRef} onChange={handlePhotoUpload} accept="image/*" className="hidden" />

                {/* Card Sub-bar */}
                <div className="mt-3 px-1 py-1 flex items-center justify-between gap-2 text-[11px] text-[var(--text-muted)] font-mono">
                  <span>EXP: 1.5+ Years</span>
                  <button type="button" onClick={() => fileInputRef.current?.click()} className="text-emerald-500 hover:text-emerald-400 transition-colors text-[10px] underline cursor-pointer shrink-0">
                    Upload Photo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}