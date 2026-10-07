import React, { useState } from "react";
import { projectsData } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const featuredProjects = projectsData.filter((p) => p.featured);
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  const displayedFeatured = featuredProjects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "featured") return p.featured;
    if (filter === "fullstack") {
      return p.technologies.includes("Node.js") && p.technologies.includes("MongoDB");
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[var(--bg-primary)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 tracking-wider uppercase mb-2">
              <span className="w-6 h-[1px] bg-emerald-500" />
              <span>Selected Works</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
              Featured Projects
            </h2>

            <p className="mt-2 text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
              Production web applications, business platforms, and technical systems engineered with MERN and modern frameworks.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[var(--surface)] rounded-lg border border-[var(--border)] self-start md:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === "all"
                  ? "bg-[var(--surface-hover)] text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              All Projects
            </button>

            <button
              onClick={() => setFilter("featured")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === "featured"
                  ? "bg-[var(--surface-hover)] text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Featured
            </button>

            <button
              onClick={() => setFilter("fullstack")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === "fullstack"
                  ? "bg-[var(--surface-hover)] text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              MERN Stack
            </button>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12">
          {displayedFeatured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Secondary Projects */}
        {filter === "all" && secondaryProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[var(--border)]">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[var(--text-primary)] font-display">
                Additional Development Work
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                Verification tools and mobile prototypes built with React and React Native.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}