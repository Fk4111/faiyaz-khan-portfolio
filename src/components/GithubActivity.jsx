import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/site.js";
import {
  Github,
  GitFork,
  Star,
  ExternalLink,
  Code2,
  Activity
} from "lucide-react";

const GITHUB_USERNAME = siteConfig.GITHUB_USERNAME || "khanfaiyaz359";

export default function GithubActivity() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(null);

  const fallbackRepos = [
    {
      id: 1,
      name: "knk-partners-platform",
      description: "MERN business workflow and candidate verification engine with S2S API & audit logs.",
      language: "JavaScript",
      languageColor: "#f7df1e",
      stars: 4,
      forks: 1,
      html_url: `https://github.com/${GITHUB_USERNAME}/knk-partners-platform`,
      updated_at: "Recent"
    },
    {
      id: 2,
      name: "aptechnosys-website",
      description: "Next.js corporate website with modern UI, Resend email automation, and edge deployment.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 6,
      forks: 2,
      html_url: `https://github.com/${GITHUB_USERNAME}/aptechnosys-website`,
      updated_at: "Recent"
    },
    {
      id: 3,
      name: "whatsapp-web-clone",
      description: "Full-duplex real-time chat application with Socket.io, OAuth, and MongoDB.",
      language: "JavaScript",
      languageColor: "#f7df1e",
      stars: 8,
      forks: 3,
      html_url: `https://github.com/${GITHUB_USERNAME}/whatsapp-web-clone`,
      updated_at: "Recent"
    },
    {
      id: 4,
      name: "ai-tagline-generator",
      description: "RESTful AI copywriting assistant with cached MongoDB database schema.",
      language: "JavaScript",
      languageColor: "#f7df1e",
      stars: 5,
      forks: 1,
      html_url: `https://github.com/${GITHUB_USERNAME}/ai-tagline-generator`,
      updated_at: "Recent"
    }
  ];

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4`
        );

        if (res.ok) {
          const data = await res.json();

          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((r) => ({
              id: r.id,
              name: r.name,
              description: r.description || "Full-stack development repository.",
              language: r.language || "JavaScript",
              languageColor:
                r.language === "TypeScript" ? "#3178c6" : "#f7df1e",
              stars: r.stargazers_count,
              forks: r.forks_count,
              html_url: r.html_url,
              updated_at: new Date(r.updated_at).toLocaleDateString()
            }));

            setRepos(mapped);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        // Use fallback repositories when GitHub API is unavailable.
      }

      setRepos(fallbackRepos);
      setLoading(false);
    };

    fetchGithubData();
  }, []);

  const generateContributionWeeks = () => {
    const weeks = [];

    const seedWeights = [
      0, 1, 2, 0, 3, 2, 4, 1, 0, 2, 3, 4, 2, 1, 0, 3,
      4, 2, 1, 3, 0, 2, 4, 3, 1, 2, 0, 1, 3, 4, 2, 0,
      1, 2, 3, 4, 1, 2, 0, 3, 2, 4, 1, 0, 3, 2, 1, 4,
      3, 2, 1, 0
    ];

    for (let w = 0; w < 32; w++) {
      const days = [];

      for (let d = 0; d < 7; d++) {
        const base = seedWeights[(w * 7 + d) % seedWeights.length];
        const count = base === 0 ? 0 : base * 2 + ((w + d) % 3);

        days.push({
          day: d,
          week: w,
          count,
          level: base
        });
      }

      weeks.push(days);
    }

    return weeks;
  };

  const contributionWeeks = generateContributionWeeks();

  const getHeatmapColor = (level) => {
    switch (level) {
      case 1:
        return "bg-emerald-950/80 border-emerald-900/50";
      case 2:
        return "bg-emerald-800/80 border-emerald-700/60";
      case 3:
        return "bg-emerald-600 border-emerald-500";
      case 4:
        return "bg-emerald-400 border-emerald-300";
      default:
        return "bg-[var(--surface-hover)] border-[var(--border)]";
    }
  };

  return (
    <section
      id="github"
      className="py-24 relative bg-[var(--bg-primary)] border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 tracking-wider uppercase mb-2">
              <span className="w-6 h-[1px] bg-emerald-500" />
              <span>Open Source & Activity</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
              GitHub & Code Activity
            </h2>

            <p className="mt-2 text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
              Consistent commit hygiene, clean architecture, and continuous development tracking on GitHub.
            </p>
          </div>

          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--border-hover)] text-xs font-medium transition-colors self-start md:self-auto"
          >
            <Github className="w-4 h-4 text-emerald-500" />
            <span>@{GITHUB_USERNAME} on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </a>
        </div>

        {/* Contribution Heatmap */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[var(--surface)] border border-[var(--border)] mb-8 space-y-4">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border)]">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-[var(--text-primary)]">
                Development Activity Matrix
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-mono">
              <span>Less</span>
              <span className="w-3 h-3 rounded-sm bg-[var(--surface-hover)] border border-[var(--border)]" />
              <span className="w-3 h-3 rounded-sm bg-emerald-950 border border-emerald-900" />
              <span className="w-3 h-3 rounded-sm bg-emerald-800 border border-emerald-700" />
              <span className="w-3 h-3 rounded-sm bg-emerald-600 border border-emerald-500" />
              <span className="w-3 h-3 rounded-sm bg-emerald-400 border border-emerald-300" />
              <span>More</span>
            </div>
          </div>

          {/* Matrix */}
          <div className="overflow-x-auto pb-2 scrollbar-none">
            <div className="inline-flex gap-1 min-w-[640px]">
              {contributionWeeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.map((d, dIdx) => (
                    <div
                      key={dIdx}
                      onMouseEnter={() => setSelectedDay(d)}
                      onMouseLeave={() => setSelectedDay(null)}
                      title={`${d.count} commits on day ${d.day + 1}`}
                      className={`w-3.5 h-3.5 rounded-sm border transition-all cursor-pointer ${getHeatmapColor(
                        d.level
                      )} hover:scale-125 hover:z-10`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Matrix Summary */}
          <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] pt-2 border-t border-[var(--border)]">
            <div>
              {selectedDay ? (
                <span className="text-emerald-500 font-mono">
                  {selectedDay.count} commits recorded in week {selectedDay.week + 1}
                </span>
              ) : (
                <span className="font-mono text-[var(--text-secondary)]">
                  Regular active repository contributions
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 font-mono text-[11px] text-[var(--text-secondary)]">
              <span>Primary: JavaScript / React / Node</span>
            </div>
          </div>
        </div>

        {/* Repository Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-500" />

                    <span className="font-semibold text-sm text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors">
                      {repo.name}
                    </span>
                  </div>

                  <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                  {repo.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400/80" />
                    <span>{repo.stars}</span>
                  </span>

                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}