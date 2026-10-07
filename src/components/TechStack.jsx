// import React, { useState } from "react";
// import { skillsData, skillCategories } from "../data/skills.js";
// import { 
//   Code2, 
//   Server, 
//   Database, 
//   ShieldCheck, 
//   Terminal, 
//   Cloud, 
//   Search, 
//   Layers, 
//   Cpu, 
//   Sparkles,
//   Check
// } from "lucide-react";

// export default function TechStack() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredSkills = skillsData.filter((skill) => {
//     const matchesCategory =
//       activeCategory === "all" || skill.category === activeCategory;
//     const matchesSearch =
//       skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       skill.description.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const getCategoryIcon = (category) => {
//     switch (category) {
//       case "frontend":
//         return <Layers className="w-4 h-4 text-cyan-400" />;
//       case "backend":
//         return <Server className="w-4 h-4 text-emerald-400" />;
//       case "auth":
//         return <ShieldCheck className="w-4 h-4 text-amber-400" />;
//       case "tools":
//         return <Terminal className="w-4 h-4 text-violet-400" />;
//       case "deployment":
//         return <Cloud className="w-4 h-4 text-blue-400" />;
//       case "other":
//         return <Database className="w-4 h-4 text-teal-400" />;
//       default:
//         return <Code2 className="w-4 h-4 text-zinc-400" />;
//     }
//   };

//   return (
//     <section id="skills" className="py-24 relative bg-[#09090b] border-t border-zinc-900">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
//           <div>
//             <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
//               <span className="w-6 h-[1px] bg-emerald-500" />
//               <span>Technical Capabilities</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
//               Tech Stack & Toolkit
//             </h2>
//             <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
//               Practical technologies I leverage to build production web applications from database layer to user interface.
//             </p>
//           </div>

//           {/* Search Input */}
//           <div className="relative w-full md:w-64">
//             <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search skill (e.g. Next.js, JWT)..."
//               className="w-full pl-9 pr-4 py-2 bg-zinc-900/90 border border-zinc-800 rounded-lg text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-colors"
//             />
//           </div>
//         </div>

//         {/* Filter Tabs (Interactive Segmented Control) */}
//         <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
//           {skillCategories.map((cat) => {
//             const isActive = activeCategory === cat.id;
//             return (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveCategory(cat.id)}
//                 className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
//                   isActive
//                     ? "bg-zinc-800 text-white border border-zinc-700 shadow-sm"
//                     : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent"
//                 }`}
//               >
//                 {cat.label}
//               </button>
//             );
//           })}
//         </div>

//         {/* Skills Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredSkills.map((skill, index) => (
//             <div
//               key={index}
//               className="group p-4.5 rounded-xl bg-zinc-900/50 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
//             >
//               <div>
//                 <div className="flex items-center justify-between mb-2.5">
//                   <div className="flex items-center gap-2.5">
//                     <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
//                       {getCategoryIcon(skill.category)}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-zinc-100 text-sm group-hover:text-white transition-colors">
//                         {skill.name}
//                       </h3>
//                       <span className="text-[11px] text-zinc-500 capitalize">
//                         {skill.category}
//                       </span>
//                     </div>
//                   </div>

//                   {skill.featured && (
//                     <span className="text-[10px] font-medium text-emerald-400/90 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
//                       Primary
//                     </span>
//                   )}
//                 </div>

//                 <p className="text-xs text-zinc-400 leading-relaxed mt-2">
//                   {skill.description}
//                 </p>
//               </div>

//               <div className="mt-4 pt-3 border-t border-zinc-800/50 flex items-center justify-between text-[11px] text-zinc-500">
//                 <span>Proficiency</span>
//                 <span className="text-zinc-300 font-medium">{skill.proficiency}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredSkills.length === 0 && (
//           <div className="py-12 text-center text-zinc-500 text-sm">
//             No technologies found matching "{searchQuery}".
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Cloud,
  Layers,
  ArrowRight,
  Check,
} from "lucide-react";

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
        return <Code2 className="w-4 h-4 text-zinc-400" />;
    }
  };

  const activeSkills = skillsData[activeCategory] || [];

  const visibleSkills = showAll
    ? activeSkills
    : activeSkills.filter((skill) => skill.featured);

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 bg-[#09090b] border-t border-zinc-900 overflow-hidden"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[250px]
          bg-emerald-500/5
          rounded-full
          blur-[120px]
          pointer-events-none
        "
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
            <span className="w-6 h-px bg-emerald-500" />
            <span>Technical Skills</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
            Technologies I Work With
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            A focused selection of technologies I use to build modern,
            scalable and production-ready web applications.
          </p>
        </div>

        {/* =====================================================
            CATEGORY TABS
        ===================================================== */}
        <div
          className="
            flex
            gap-2
            overflow-x-auto
            pb-2
            mb-8
            scrollbar-none
          "
        >
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
                className={`
                  flex
                  items-center
                  gap-2
                  shrink-0
                  px-4
                  py-2
                  rounded-lg
                  text-xs
                  sm:text-sm
                  font-medium
                  border
                  transition-all
                  duration-200
                  cursor-pointer
                  ${
                    isActive
                      ? "bg-zinc-800 text-white border-zinc-700"
                      : "bg-transparent text-zinc-500 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700"
                  }
                `}
              >
                {getCategoryIcon(category.id)}
                {category.label}
              </button>
            );
          })}
        </div>

        {/* =====================================================
            SKILLS
        ===================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {visibleSkills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                flex
                items-center
                gap-3
                p-4
                rounded-xl
                bg-zinc-900/50
                border
                border-zinc-800
                hover:border-zinc-700
                hover:bg-zinc-900
                transition-all
                duration-200
              "
            >
              {/* Icon */}
              <div
                className="
                  w-9
                  h-9
                  shrink-0
                  rounded-lg
                  bg-zinc-800
                  border
                  border-zinc-700
                  flex
                  items-center
                  justify-center
                  group-hover:scale-105
                  transition-transform
                "
              >
                {getCategoryIcon(activeCategory)}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-zinc-100 truncate">
                    {skill.name}
                  </h3>

                  {skill.featured && (
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  )}
                </div>

                <p className="mt-0.5 text-[11px] text-zinc-500 leading-relaxed line-clamp-1">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            VIEW MORE
        ===================================================== */}
        {activeSkills.length > visibleSkills.length && (
          <div className="flex justify-center mt-7">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-lg
                text-xs
                sm:text-sm
                font-medium
                text-zinc-400
                hover:text-white
                border
                border-zinc-800
                hover:border-zinc-700
                hover:bg-zinc-900
                transition-all
                cursor-pointer
              "
            >
              {showAll ? "Show Less" : "View More Skills"}

              <ArrowRight
                className={`
                  w-3.5
                  h-3.5
                  transition-transform
                  ${showAll ? "-rotate-90" : "group-hover:translate-x-0.5"}
                `}
              />
            </button>
          </div>
        )}

        {/* =====================================================
            STACK SUMMARY
        ===================================================== */}
        <div
          className="
            mt-10
            pt-6
            border-t
            border-zinc-900
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-3
          "
        >
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Cloud className="w-3.5 h-3.5 text-emerald-400" />

            <span>
              Full-stack development • APIs • Databases • Deployment
            </span>
          </div>

          <a
            href="#projects"
            className="
              inline-flex
              items-center
              gap-1.5
              text-xs
              font-medium
              text-emerald-400
              hover:text-emerald-300
              transition-colors
            "
          >
            See these skills in action
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}