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
  Cloud,
  CheckCircle2
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
    <section id="services" className="py-24 relative bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            <span className="w-6 h-[1px] bg-emerald-500" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
            What I Build
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            Specialized engineering services focused on high-performance web systems, APIs, and modern user experiences.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group p-6 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-base font-bold text-white font-display group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Deliverables snippet */}
              <div className="mt-5 pt-4 border-t border-zinc-800/60 space-y-1.5">
                {service.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <span className="w-1 h-1 rounded-full bg-emerald-400/80" />
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
