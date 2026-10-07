import React, { useEffect, useState } from "react";
import { siteConfig } from "../data/site.js";
import { experienceData } from "../data/experience.js";
import { skillsData } from "../data/skills.js";
import { projectsData } from "../data/projects.js";
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone,
  CheckCircle2, 
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Archive
} from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  const [photoSrc, setPhotoSrc] = useState(siteConfig.photoUrl);

  useEffect(() => {
    const saved = localStorage.getItem("fk_photo");
    if (saved) {
      setPhotoSrc(saved);
    } else {
      setPhotoSrc(siteConfig.photoUrl);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-10 space-y-8 text-zinc-200 print:bg-white print:text-black print:p-0 print:border-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800 print:hidden">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Curriculum Vitae · Faiyaz Khan</span>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <a
              href={siteConfig.resumePdfUrl}
              download="Faiyaz_Khan_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={siteConfig.zipUrl}
              download="faiyaz-khan-portfolio.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 text-xs font-medium transition-colors"
            >
              <Archive className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download Code ZIP</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-xs font-medium transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-8 text-xs sm:text-sm">
          
          {/* Header with Photo Thumbnail */}
          <div className="border-b border-zinc-800/80 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5 flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-white print:text-black">
                {siteConfig.name}
              </h1>
              <div className="text-base font-semibold text-emerald-400 font-display">
                Frontend & Backend Web Developer · {siteConfig.currentRole} @ {siteConfig.currentCompany}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  {siteConfig.location}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-zinc-500" />
                  {siteConfig.socials.phone}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  {siteConfig.socials.email}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-zinc-500" />
                  github.com/{siteConfig.GITHUB_USERNAME}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5 text-zinc-500" />
                  linkedin.com/in/faiyaz-khan-83489b234
                </span>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm pt-2 leading-relaxed">
                Seeking an entry or junior-level position as a Full Stack / Backend Developer in reputed industries. Eager to apply skills in React.js, Next.js, and Node.js (Express.js) related technologies to contribute to the development of user-friendly and efficient web applications.
              </p>
            </div>

            {/* Photo Avatar in Resume */}
            <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-zinc-700/80 shrink-0 bg-zinc-900 shadow-md">
              <img
                src={photoSrc}
                onError={() => setPhotoSrc(siteConfig.photoFallback || siteConfig.photoUrl)}
                alt="Faiyaz Khan"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Current Work */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800/80 pb-1">
              Current Work Experience
            </h2>

            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-bold text-zinc-100 text-sm">
                  Aptechnosys — Full Stack Developer
                </h3>
                <span className="text-zinc-400 font-mono text-xs">Since 5th March 2025 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 text-xs pl-1">
                <li>Currently working on building modern web applications using React.js, Next.js, and Node.js, Express.js, REST API, MongoDB.</li>
                <li>Actively developing responsive and scalable web solutions, focusing on performance, SEO optimization, and user-friendly interfaces.</li>
                <li>Elevated corporate web portal performance from 58% to 94% with 100% SEO + Best Practices using Next.js and Resend API.</li>
              </ul>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800/80 pb-1">
              Personal & Production Projects
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-zinc-100 text-sm">1. KNK Admin Panel – Court Verification Workflow System</h3>
                  <span className="text-xs text-zinc-400 font-mono">MERN Stack · 2.5 Months</span>
                </div>
                <p className="text-zinc-300 text-xs mt-0.5">
                  Built a MERN-based admin panel for court background verification with role-based access (Admin/User), case assignment, employee workload tracking, dashboard analytics, and real-time status workflow management.
                </p>
                <p className="text-zinc-400 text-[11px] mt-0.5">
                  <strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, JWT, Tailwind CSS, Joi, Cors, Axios, Nodemon, Rate Limiter, Compression, Helmet to secure HTTPS.
                  <br />
                  <strong>Links:</strong> Live: https://knk-partners.vercel.app · Backend: https://knkdashboard.onrender.com · GitHub: github.com/Fk4111/knk-Dashboard
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-zinc-100 text-sm">2. Aptechnosys – Corporate IT Services Website</h3>
                  <span className="text-xs text-zinc-400 font-mono">Next.js · Tailwind · Resend</span>
                </div>
                <p className="text-zinc-300 text-xs mt-0.5">
                  Designed and developed a modern, SEO-optimized corporate website for an IT services company using Next.js, JavaScript, Tailwind CSS, shadcn/ui, and Framer Motion. Built service showcases, project portfolio, client testimonials, FAQ, and a contact form integrated with Resend API for real-time email inquiries.
                </p>
                <p className="text-zinc-400 text-[11px] mt-0.5">
                  <strong>Performance:</strong> Elevated website from 58% to 94% performance and 100% SEO + Best Practices.
                  <br />
                  <strong>Links:</strong> Live: https://Aptechnosys.com · GitHub: github.com/Fk4111/aptechnosysWebsite
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-zinc-100 text-sm">3. Equity Backtester</h3>
                  <span className="text-xs text-zinc-400 font-mono">React.js · FastAPI · PostgreSQL</span>
                </div>
                <p className="text-zinc-300 text-xs mt-0.5">
                  Developed a full-stack stock backtesting application to analyze historical equity strategies using fundamental screening, portfolio ranking, and periodic rebalancing. Implemented performance metrics (CAGR, Sharpe Ratio, Max Drawdown), CSV export, PostgreSQL data storage, and Yahoo Finance data integration.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800/80 pb-1">
              Education & Certifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <div className="font-bold text-zinc-200">Bachelor of Science in Information Technology (B.Sc. IT)</div>
                <div className="text-zinc-400">Bhavna Trust Junior & Degree College · University of Mumbai</div>
                <div className="text-emerald-400 text-[11px] font-mono mt-0.5">Graduated 2022 · CGPA: 6.70</div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <div className="font-bold text-zinc-200">Full-Stack Development Certification</div>
                <div className="text-zinc-400">Aimerz.ai (11/2024)</div>
                <div className="text-zinc-400 text-[11px] mt-0.5">HTML, CSS, JavaScript (ES6+, DOM), React.js, Node.js, Express.js, MongoDB</div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <div className="font-bold text-zinc-200">Java Development Certification</div>
                <div className="text-zinc-400">Coding Ninjas (11/2022 - 03/2023)</div>
                <div className="text-zinc-400 text-[11px] mt-0.5">Core OOPS concepts, Data Structures, and Algorithms</div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <div className="font-bold text-zinc-200">Web & Software Development Internship</div>
                <div className="text-zinc-400">Afame Technologies (02-03-2024 to 02-07-2024)</div>
                <div className="text-zinc-400 text-[11px] mt-0.5">Hands-on real life software work projects</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-zinc-800/80 pb-1">
              Technical Stack & AI Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-zinc-200">Languages & Frontend: </strong>
                <span className="text-zinc-400">HTML5, CSS3, JavaScript (ES6+, DOM), React.js, Redux, Next.js, Bootstrap, Tailwind CSS</span>
              </div>
              <div>
                <strong className="text-zinc-200">Backend & Database: </strong>
                <span className="text-zinc-400">Node.js, Express.js, MongoDB, Mongoose, REST APIs, SQL, Socket.io</span>
              </div>
              <div>
                <strong className="text-zinc-200">DevOps & Deployment: </strong>
                <span className="text-zinc-400">Git & GitHub, Vercel, Netlify, Railway, Docker, Render</span>
              </div>
              <div>
                <strong className="text-zinc-200">AI Coding Workflows: </strong>
                <span className="text-zinc-400">Copilot, Cursor, Claude Code, Code Rabbit, ChatGPT, Perplexity</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer controls */}
        <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.resumePdfUrl}
              download="Faiyaz_Khan_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Copy</span>
            </a>

            <a
              href={siteConfig.zipUrl}
              download="faiyaz-khan-portfolio.zip"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-medium transition-colors"
            >
              <Archive className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download Code ZIP</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 text-xs font-medium transition-colors cursor-pointer"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
}

