import React, { useState } from "react";
import { Code2, Server, Database, Terminal, Cloud, Layers, ArrowRight, Check } from "lucide-react";
import { skillsData, skillCategories } from "../data/skills.js";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [showAll, setShowAll] = useState(false);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "frontend":
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case "backend":
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "database":
        return <Database className="w-4 h-4 text-teal-400" />;
      case "tools":
        return <Terminal className="w-4 h-4 text-violet-400" />;
      default:
        return <Code2 className="w-4 h-4 text-[var(--text-muted)]" />;
    }
  };

  const activeSkills = skillsData[activeCategory] || [];
  const featuredSkills = activeSkills.filter((skill) => skill.featured);
  const visibleSkills = showAll ? activeSkills : featuredSkills;

  return (
    <section id="skills" className="relative py-20 sm:py-24 bg-[var(--bg-primary)] border-t border-[var(--border)] overflow-hidden">

      {/* Ambient background */}
      <div aria-hidden="true" className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 tracking-wider uppercase mb-2">
            <span className="w-6 h-px bg-emerald-500" />
            <span>Technical Skills</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
            Technologies I Work With
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            A focused selection of technologies I use to build modern, scalable and production-ready web applications.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setActiveCategory(category.id);
                  setShowAll(false);
                }}
                className={`flex items-center gap-2 shrink-0 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[var(--surface-hover)] text-[var(--text-primary)] border-[var(--border-hover)]"
                    : "bg-transparent text-[var(--text-muted)] border-[var(--border)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                }`}
              >
                {getCategoryIcon(category.id)}
                {category.label}
              </button>
            );
          })}
        </div>

        {/* SKILLS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {visibleSkills.map((skill) => (
            <div key={skill.name} className="group flex items-center gap-3 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] transition-all duration-200">

              {/* Icon */}
              <div className="w-9 h-9 shrink-0 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center group-hover:scale-105 transition-transform">
                {getCategoryIcon(activeCategory)}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] truncate">
                    {skill.name}
                  </h3>

                  {skill.featured && (
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  )}
                </div>

                <p className="mt-0.5 text-[11px] text-[var(--text-muted)] leading-relaxed line-clamp-1">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW MORE */}
        {activeSkills.length > featuredSkills.length && (
          <div className="flex justify-center mt-7">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] transition-all cursor-pointer"
            >
              {showAll ? "Show Less" : "View More Skills"}

              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showAll ? "-rotate-90" : "group-hover:translate-x-0.5"}`} />
            </button>
          </div>
        )}

        {/* STACK SUMMARY */}
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <Cloud className="w-3.5 h-3.5 text-emerald-500" />
            <span>Full-stack development • APIs • Databases • Deployment</span>
          </div>

          <a href="#projects" className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-500 hover:text-emerald-400 transition-colors">
            See these skills in action
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}