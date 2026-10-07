import React from "react";
import { experienceData } from "../data/experience.js";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[var(--bg-primary)] border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 tracking-wider uppercase mb-2">
            <span className="w-6 h-[1px] bg-emerald-500" />
            <span>Career History</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
            Work Experience
          </h2>

          <p className="mt-2 text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
            Real-world full-stack development experience building and deploying production software.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[var(--border)] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative group">

              {/* Timeline Indicator Dot */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                item.current
                  ? "bg-emerald-500 border-[var(--bg-primary)] ring-4 ring-emerald-500/20"
                  : "bg-[var(--surface-hover)] border-[var(--border-hover)] group-hover:border-emerald-400 group-hover:bg-[var(--surface)]"
              }`} />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-200 space-y-4">

                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-display">
                        {item.role}
                      </h3>

                      {item.current && (
                        <span className="text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mt-1 flex-wrap">
                      <span className="text-[var(--text-primary)] font-medium">{item.company}</span>
                      <span className="text-[var(--text-muted)]">·</span>

                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[var(--text-muted)]" />
                        {item.location}
                      </span>

                      <span className="text-[var(--text-muted)]">·</span>

                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[var(--text-muted)]" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs text-[var(--text-secondary)] self-start sm:self-auto font-mono">
                    {item.type}
                  </span>
                </div>

                {/* Brief description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                    Key Responsibilities & Deliverables:
                  </span>

                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="leading-normal">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-3 border-t border-[var(--border)] flex items-center gap-2 flex-wrap text-xs">
                  <span className="text-[var(--text-muted)] font-medium">Tech used:</span>

                  {item.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded-md bg-[var(--surface-hover)] text-[var(--text-secondary)] border border-[var(--border)] font-mono text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}