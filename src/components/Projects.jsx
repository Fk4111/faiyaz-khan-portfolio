import React, { useState } from "react";
import { projectsData } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";
import { Sparkles, Layers, Code2, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const featuredProjects = projectsData.filter((p) => p.featured);
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  const displayedFeatured = featuredProjects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "featured") return p.featured;
    if (filter === "fullstack") return p.technologies.includes("Node.js") && p.technologies.includes("MongoDB");
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
              <span className="w-6 h-[1px] bg-emerald-500" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              Production web applications, business platforms, and technical systems engineered with MERN and modern frameworks.
            </p>
          </div>

          {/* Interactive Filter Controls (Segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 rounded-lg border border-zinc-800 self-start md:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === "all"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === "featured"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === "fullstack"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              MERN Stack
            </button>
          </div>
        </div>

        {/* Featured Large Projects (Alternating Layout) */}
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

        {/* Secondary Projects Section */}
        {filter === "all" && secondaryProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-zinc-800/80">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white font-display">
                Additional Development Work
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
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
