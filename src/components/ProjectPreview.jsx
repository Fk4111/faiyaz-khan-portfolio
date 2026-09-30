import React, { useState } from "react";
import { 
  CheckCircle2, 
  ExternalLink, 
  FileText, 
  Download, 
  Check, 
  Copy, 
  Send, 
  Users, 
  Cpu, 
  Search, 
  ShieldCheck,
  TrendingUp,
  Activity
} from "lucide-react";

export default function ProjectPreview({ projectId }) {
  // Specific interactive states for mock previews
  const [copiedTagline, setCopiedTagline] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  if (projectId === "knk-partners") {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[340px] rounded-xl bg-zinc-950 border border-zinc-800/90 overflow-hidden flex flex-col font-sans select-none shadow-xl">
        {/* Browser Topbar */}
        <div className="px-3 py-2 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-[11px] text-zinc-300 font-mono flex items-center gap-1.5 max-w-[220px] sm:max-w-xs truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>app.knkpartners.com/verification</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">S2S ACTIVE</span>
        </div>

        {/* Dashboard Inner Canvas */}
        <div className="p-4 space-y-3.5 flex-1 bg-gradient-to-b from-zinc-950 to-zinc-900/80 text-xs">
          {/* Header Metric Row */}
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
            <div>
              <div className="font-semibold text-zinc-100 text-sm font-display">
                Verification Workflow Engine
              </div>
              <div className="text-[10px] text-zinc-400">
                Multi-Vendor Operations & Audit Trail
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-[10px]">
                API Sync: 99.8%
              </span>
            </div>
          </div>

          {/* Workflow Stages */}
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
              <div className="text-[10px] text-zinc-400">Received</div>
              <div className="text-base font-bold text-zinc-100 font-mono">142</div>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
              <div className="text-[10px] text-zinc-400">Vendor Queue</div>
              <div className="text-base font-bold text-amber-400 font-mono">28</div>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
              <div className="text-[10px] text-zinc-400">S2S Callback</div>
              <div className="text-base font-bold text-cyan-400 font-mono">14</div>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
              <div className="text-[10px] text-zinc-400">Verified</div>
              <div className="text-base font-bold text-emerald-400 font-mono">876</div>
            </div>
          </div>

          {/* Sample Cases Table */}
          <div className="rounded-lg border border-zinc-800/90 overflow-hidden bg-zinc-950/60">
            <table className="w-full text-left text-[11px]">
              <thead className="bg-zinc-900/80 text-zinc-400 border-b border-zinc-800">
                <tr>
                  <th className="py-1.5 px-2.5 font-medium">Case ID</th>
                  <th className="py-1.5 px-2.5 font-medium">Check Type</th>
                  <th className="py-1.5 px-2.5 font-medium">Status</th>
                  <th className="py-1.5 px-2.5 font-medium text-right">Report</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50 text-zinc-300">
                <tr>
                  <td className="py-1.5 px-2.5 font-mono text-zinc-400">#KNK-9481</td>
                  <td className="py-1.5 px-2.5">Employment Check</td>
                  <td className="py-1.5 px-2.5 text-emerald-400 font-medium">✓ Verified</td>
                  <td className="py-1.5 px-2.5 text-right text-zinc-400 font-mono">PDF</td>
                </tr>
                <tr>
                  <td className="py-1.5 px-2.5 font-mono text-zinc-400">#KNK-9482</td>
                  <td className="py-1.5 px-2.5">Academic Record</td>
                  <td className="py-1.5 px-2.5 text-amber-400 font-medium">⟳ Vendor Assigned</td>
                  <td className="py-1.5 px-2.5 text-right text-zinc-400 font-mono">Pending</td>
                </tr>
                <tr>
                  <td className="py-1.5 px-2.5 font-mono text-zinc-400">#KNK-9483</td>
                  <td className="py-1.5 px-2.5">Address Verification</td>
                  <td className="py-1.5 px-2.5 text-cyan-400 font-medium">⇄ S2S Callback</td>
                  <td className="py-1.5 px-2.5 text-right text-zinc-400 font-mono">PDF</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Audit Log Terminal Preview */}
          <div className="p-2 rounded bg-black/70 border border-zinc-800/80 font-mono text-[10px] text-zinc-400 truncate">
            <span className="text-emerald-400">[AUDIT]</span> Status Pull API triggered for 24 batches · 0 errors · Export generated
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "aptechnosys") {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[340px] rounded-xl bg-zinc-950 border border-zinc-800/90 overflow-hidden flex flex-col font-sans select-none shadow-xl">
        {/* Browser Topbar */}
        <div className="px-3 py-2 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-[11px] text-zinc-300 font-mono flex items-center gap-1.5 max-w-[220px] sm:max-w-xs truncate">
            <span>aptechnosys-website-nine.vercel.app</span>
          </div>
          <span className="text-[10px] text-blue-400 font-mono">Next.js 14</span>
        </div>

        {/* Website Preview Canvas */}
        <div className="p-4 sm:p-5 flex-1 bg-gradient-to-b from-[#0b0f19] to-zinc-950 flex flex-col justify-between text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800/70 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                A
              </div>
              <span className="font-semibold text-white tracking-tight">Aptechnosys</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-zinc-400">
              <span>Services</span>
              <span>Portfolio</span>
              <span>Careers</span>
            </div>
          </div>

          <div className="space-y-2 py-2">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[10px] font-medium">
              Enterprise IT Consulting & Engineering
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white font-display tracking-tight leading-snug">
              Modernizing Enterprise Systems with Next.js Architecture
            </h4>
            <p className="text-zinc-400 text-xs line-clamp-2">
              Corporate website re-engineered with SSR, Resend transactional contact flow, responsive layout and dark/light UI.
            </p>
          </div>

          {/* Web Vitals Pill Bar */}
          <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-zinc-300 font-medium">Core Web Vitals</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px] text-emerald-400">
              <span>99 Perf</span>
              <span>100 SEO</span>
              <span>100 A11y</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "whatsapp-clone") {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[340px] rounded-xl bg-zinc-950 border border-zinc-800/90 overflow-hidden flex flex-col font-sans select-none shadow-xl">
        {/* Browser Topbar */}
        <div className="px-3 py-2 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-[11px] text-zinc-300 font-mono truncate">
            whatsapp-web-clone.app
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">SOCKET CONNECTED</span>
        </div>

        {/* WhatsApp App Mockup */}
        <div className="flex-1 flex overflow-hidden text-xs">
          {/* Left mini contacts drawer */}
          <div className="w-2/5 border-r border-zinc-800/80 bg-zinc-950 p-2 space-y-1.5 hidden sm:block">
            <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 flex items-center gap-1">
              <Search className="w-3 h-3 text-zinc-500" />
              <span>Search chats...</span>
            </div>

            <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800/80">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-zinc-100 text-[11px]">Engineering Team</span>
                <span className="text-[9px] text-emerald-400 font-mono">11:42</span>
              </div>
              <div className="text-[10px] text-zinc-400 truncate mt-0.5">
                Faiyaz: Socket latency is down to 24ms
              </div>
            </div>

            <div className="p-2 rounded hover:bg-zinc-900/40">
              <div className="flex items-center justify-between">
                <span className="font-medium text-zinc-300 text-[11px]">Client Review</span>
                <span className="text-[9px] text-zinc-500 font-mono">Yesterday</span>
              </div>
              <div className="text-[10px] text-zinc-500 truncate">Demo scheduled for 4 PM</div>
            </div>
          </div>

          {/* Right Chat Pane */}
          <div className="flex-1 bg-[#0a0e14] p-3 flex flex-col justify-between">
            {/* Chat header */}
            <div className="pb-2 border-b border-zinc-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                  ET
                </div>
                <div>
                  <div className="font-semibold text-zinc-100 text-xs">Engineering Team</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Online · WebSocket Live</div>
                </div>
              </div>
            </div>

            {/* Message bubbles */}
            <div className="space-y-2 py-3">
              <div className="max-w-[80%] rounded-lg p-2 bg-zinc-900 text-zinc-300 text-[11px]">
                <div className="text-[9px] text-emerald-400 font-semibold mb-0.5">Rahul (Lead)</div>
                Did we verify the token refresh flow on reconnection?
              </div>

              <div className="max-w-[85%] ml-auto rounded-lg p-2 bg-emerald-950/80 border border-emerald-800/60 text-emerald-100 text-[11px]">
                Yes, JWT refresh rotation triggers automatically when socket handshakes.
                <div className="text-[9px] text-emerald-400/80 text-right mt-0.5 font-mono">11:42 AM ✓✓</div>
              </div>
            </div>

            {/* Input bar */}
            <div className="pt-2 border-t border-zinc-800/80 flex items-center gap-2">
              <input
                readOnly
                value="Alex is typing..."
                className="flex-1 bg-zinc-900/80 border border-zinc-800 rounded px-2.5 py-1 text-[11px] text-zinc-400 italic"
              />
              <button className="p-1 rounded bg-emerald-500 text-zinc-950">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "ai-tagline-generator") {
    const handleCopy = (text, id) => {
      setCopiedTagline(id);
      navigator.clipboard.writeText(text);
      setTimeout(() => setCopiedTagline(null), 1800);
    };

    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[340px] rounded-xl bg-zinc-950 border border-zinc-800/90 overflow-hidden flex flex-col font-sans select-none shadow-xl">
        {/* Browser Topbar */}
        <div className="px-3 py-2 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-[11px] text-zinc-300 font-mono truncate">
            ai-tagline-generator.app
          </div>
          <span className="text-[10px] text-violet-400 font-mono">REST + Mongo</span>
        </div>

        {/* App Workspace */}
        <div className="p-4 sm:p-5 flex-1 bg-gradient-to-b from-[#130d22] to-zinc-950 flex flex-col justify-between text-xs space-y-3">
          <div>
            <div className="text-[11px] text-violet-400 font-semibold uppercase tracking-wider mb-1">
              AI Creative Slogan Studio
            </div>
            <div className="text-zinc-200 font-medium">Prompt: "Sustainable Coffee Roastery in Mumbai"</div>
          </div>

          {/* Generated results */}
          <div className="space-y-2">
            {[
              { id: 1, text: "Brew with Purpose, Sip with Pride" },
              { id: 2, text: "Conscious Beans for Pure Minds" },
              { id: 3, text: "Earth-First Espresso Crafted in Mumbai" }
            ].map((tag) => (
              <div
                key={tag.id}
                onClick={() => handleCopy(tag.text, tag.id)}
                className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800/80 hover:border-violet-500/50 flex items-center justify-between cursor-pointer group transition-all"
              >
                <span className="text-zinc-200 text-xs font-medium">"{tag.text}"</span>
                <span className="text-[10px] text-zinc-500 group-hover:text-violet-400 flex items-center gap-1">
                  {copiedTagline === tag.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60 text-[10px] text-zinc-400 font-mono">
            <span>Latency: ~410ms</span>
            <span className="text-violet-300">Cached in MongoDB</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "certificate-portal") {
    return (
      <div className="w-full h-full min-h-[260px] rounded-xl bg-zinc-950 border border-zinc-800/90 p-5 flex flex-col justify-between text-xs font-sans shadow-xl">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span className="font-semibold text-white">Credential Verification Engine</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
            VERIFIED
          </span>
        </div>

        <div className="space-y-2 py-2">
          <div className="text-[11px] text-zinc-500 font-mono">CERT ID: #ACJ-2024-8849-FK</div>
          <div className="text-sm font-bold text-zinc-100 font-display">Full Stack Web Development Certification</div>
          <p className="text-xs text-zinc-400">
            Cryptographic proof verified against database ledger with automated server-side PDF generation.
          </p>
        </div>

        <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-[10px] text-zinc-500">AccioJob Credential Authority</span>
          <button className="flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs">
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    );
  }

  if (projectId === "equity-backtester") {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[340px] rounded-xl bg-zinc-950 border border-zinc-800/90 overflow-hidden flex flex-col font-sans select-none shadow-xl">
        {/* Browser Topbar */}
        <div className="px-3 py-2 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-[11px] text-zinc-300 font-mono truncate">
            equity-backtester.internal/analytics
          </div>
          <span className="text-[10px] text-teal-400 font-mono">FastAPI + Pandas</span>
        </div>

        {/* Quant Dashboard Canvas */}
        <div className="p-4 sm:p-5 flex-1 bg-gradient-to-b from-[#0a141a] to-zinc-950 flex flex-col justify-between text-xs space-y-3">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-teal-400 font-semibold uppercase tracking-wider">
                Quantitative Portfolio Engine
              </span>
              <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 text-[10px] font-mono">
                Periodic Rebalance: ACTIVE
              </span>
            </div>
            <div className="text-zinc-200 font-medium mt-1">Fundamental Screening & Sharpe Optimization</div>
          </div>

          {/* Performance KPIs */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
              <div className="text-[10px] text-zinc-400">Strategy CAGR</div>
              <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">+24.8%</div>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
              <div className="text-[10px] text-zinc-400">Sharpe Ratio</div>
              <div className="text-sm sm:text-base font-bold text-teal-300 font-mono">1.82</div>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
              <div className="text-[10px] text-zinc-400">Max Drawdown</div>
              <div className="text-sm sm:text-base font-bold text-amber-400 font-mono">-8.4%</div>
            </div>
          </div>

          {/* Holdings allocation preview */}
          <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800/80 pb-1">
              <span>Top Portfolio Allocation</span>
              <span>Weight</span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-zinc-300 font-mono">
              <span className="text-zinc-200">RELIANCE · IT / Tech / Energy</span>
              <span className="text-emerald-400">28.5%</span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-zinc-300 font-mono">
              <span className="text-zinc-200">TCS · Software Services</span>
              <span className="text-emerald-400">24.0%</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-zinc-800/60 text-[10px] text-zinc-400 font-mono">
            <span>Data: Yahoo Finance Streams</span>
            <span className="text-teal-400">PostgreSQL + SQLAlchemy</span>
          </div>
        </div>
      </div>
    );
  }

  // ChefKart
  return (
    <div className="w-full h-full min-h-[260px] rounded-xl bg-zinc-950 border border-zinc-800/90 p-5 flex flex-col justify-between text-xs font-sans shadow-xl">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs">
            CK
          </div>
          <span className="font-semibold text-white">ChefKart Mobile Client</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 text-[10px] font-mono">
          React Native
        </span>
      </div>

      <div className="space-y-2 py-2">
        <div className="text-sm font-bold text-zinc-100 font-display">On-Demand Domestic Cook Booking</div>
        <div className="flex items-center gap-2 text-[11px] text-zinc-400">
          <span className="text-rose-400">★ 4.9 Rating</span>
          <span>·</span>
          <span>Verified Chefs in Mumbai</span>
        </div>
        <p className="text-xs text-zinc-400">
          Mobile interface featuring chef discovery, customized meal calendar schedules, and Redux Toolkit state.
        </p>
      </div>

      <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
        <span className="text-[10px] text-zinc-500 font-mono">iOS & Android Build</span>
        <span className="text-xs text-rose-400 font-medium">Booking Flow Active</span>
      </div>
    </div>
  );
}
