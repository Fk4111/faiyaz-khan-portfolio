import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl p-6 sm:p-8 space-y-6 text-[var(--text-primary)]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top bar */}
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-1">
              <span>{project.type}</span>

              {project.badge && (
                <>
                  <span className="text-[var(--text-muted)]">·</span>
                  <span className="text-[var(--text-secondary)]">
                    {project.badge}
                  </span>
                </>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--text-primary)]">
              {project.title}
            </h2>

            <p className="text-sm text-[var(--text-secondary)] mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[var(--surface-hover)] hover:bg-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Narrative & Metrics */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
            Project Overview & Architecture
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {project.detailedDescription || project.description}
          </p>

          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)]"
                >
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                    {m.label}
                  </div>

                  <div className="text-sm font-semibold text-[var(--text-primary)] mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Key Features */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
            Core Features & Engineering Highlights
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
            Technologies & Tools Applied
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] text-xs font-mono text-emerald-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors shadow-sm"
              >
                <span>Live Project Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface-hover)] hover:bg-[var(--border)] text-[var(--text-primary)] border border-[var(--border-hover)] text-xs font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3 py-1.5 transition-colors cursor-pointer"
          >
            Close Window (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}