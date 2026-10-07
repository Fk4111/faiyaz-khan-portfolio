import React from "react";
import { servicesData } from "../data/services.js";
import {
  Layout,
  Layers,
  Server,
  BarChart3,
  Briefcase,
  Globe,
  Cpu,
  Cloud
} from "lucide-react";

export default function Services() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-teal-400" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-violet-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-rose-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-indigo-400" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 relative bg-[var(--bg-primary)] border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 tracking-wider uppercase mb-2">
            <span className="w-6 h-[1px] bg-emerald-500" />
            <span>Core Competencies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
            What I Build
          </h2>

          <p className="mt-2 text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
            Specialized engineering services focused on high-performance web systems, APIs, and modern user experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group p-6 rounded-2xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-base font-bold text-[var(--text-primary)] font-display group-hover:text-emerald-500 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Deliverables */}
              <div className="mt-5 pt-4 border-t border-[var(--border)] space-y-1.5">
                {service.deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)]"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500/80 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}