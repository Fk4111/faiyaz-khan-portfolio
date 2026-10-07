import React from "react";
import ProjectPreview from "./ProjectPreview.jsx";
import { ArrowUpRight, Github, CheckCircle2, Maximize2, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index, onSelect }) {
  const isReversed = index % 2 === 1;

  if (!project.featured) {
    return (
      <div className="group rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-hover)] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/10">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">
              {project.type}
            </span>

            {project.badge && (
              <span className="text-[11px] font-mono text-[var(--text-secondary)] bg-[var(--surface-hover)] px-2 py-0.5 rounded border border-[var(--border)]">
                {project.badge}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] font-display group-hover:text-emerald-500 transition-colors">
              {project.title}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="pt-2">
            <ProjectPreview projectId={project.id} />
          </div>

          <ul className="space-y-1.5 pt-2 text-xs text-[var(--text-secondary)]">
            {project.features.slice(0, 3).map((feat, fIdx) => (
              <li key={fIdx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-[var(--border)] space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded bg-[var(--surface-hover)] text-[11px] text-[var(--text-secondary)] font-mono border border-[var(--border)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2 pt-1">
            <button
              onClick={() => onSelect(project)}
              className="text-xs font-medium text-emerald-500 hover:text-emerald-400 flex items-center gap-1 cursor-pointer"
            >
              <span>View Details</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
                  aria-label={`${project.title} GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
                  aria-label={`${project.title} Live Demo`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-hover)] p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
        
        <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative group/preview rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
            <ProjectPreview projectId={project.id} />
          </div>
        </div>

        <div className={`lg:col-span-5 space-y-4 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 uppercase tracking-wider">
              <span>{project.type}</span>

              {project.badge && (
                <>
                  <span className="text-[var(--text-muted)]">·</span>
                  <span className="text-[var(--text-secondary)] font-mono text-[11px]">
                    {project.badge}
                  </span>
                </>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-display tracking-tight group-hover:text-emerald-500 transition-colors">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              {project.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-2 pt-1">
            <span className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Core Highlights:
            </span>

            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
              {project.features.slice(0, 4).map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="leading-tight">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md bg-[var(--surface-hover)] text-[11px] text-[var(--text-secondary)] font-mono border border-[var(--border)]"
              >
                {tech}
              </span>
            ))}

            {project.technologies.length > 6 && (
              <span className="px-2 py-1 text-[11px] text-[var(--text-muted)] font-mono">
                +{project.technologies.length - 6} more
              </span>
            )}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors shadow-sm"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--surface-hover)] hover:bg-[var(--border)] text-[var(--text-primary)] border border-[var(--border-hover)] text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              <span>View Details</span>
              <Maximize2 className="w-3 h-3 text-emerald-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}