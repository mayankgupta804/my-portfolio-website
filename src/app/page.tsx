"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  DESIGN_THEMES,
  DesignMode,
  PORTFOLIO_DATA,
} from "@/data/portfolio-data";
import {
  BeyondTheIdeSection,
  DistributedNodeGraph,
} from "@/components/InteractiveVisualizers";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { CommandPalette } from "@/components/CommandPalette";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Flame,
  FolderGit2,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Radio,
  Search,
  Server,
  Shield,
  Sparkles,
  Terminal,
} from "lucide-react";

export default function PortfolioPage() {
  const [mode, setMode] = useState<DesignMode>("orbital");
  const [cmdOpen, setCmdOpen] = useState(false);
  const [selectedExpIndex, setSelectedExpIndex] = useState<number>(0);

  const activeTheme =
    DESIGN_THEMES.find((t) => t.id === mode) || DESIGN_THEMES[0];
  const { personal, metrics, engineRoom, caseStudies, experience, githubRepos, education } =
    PORTFOLIO_DATA;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Theme-adaptive wrapper styles
  const pageBgClass =
    mode === "orbital"
      ? "bg-[#05070D] bg-orbital-grid text-zinc-100"
      : mode === "industrial"
      ? "bg-[#0B0C0E] bg-industrial-grid text-zinc-100"
      : mode === "spatial"
      ? "bg-[#06040F] text-zinc-100"
      : "bg-[#070C18] bg-blueprint-grid text-zinc-100";

  const cardClass =
    mode === "orbital"
      ? "rounded-2xl border border-cyan-500/25 bg-[#090D18]/85 backdrop-blur-xl shadow-[0_0_35px_rgba(0,240,255,0.05)]"
      : mode === "industrial"
      ? "rounded-xl border-2 border-zinc-800 bg-[#121418] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.8)]"
      : mode === "spatial"
      ? "rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl shadow-[0_12px_40px_rgba(168,85,247,0.08)]"
      : "rounded-none border border-blue-500/40 bg-[#0A1122]/90 shadow-[4px_4px_0px_rgba(37,99,235,0.35)]";

  const accentBadgeClass =
    mode === "orbital"
      ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300"
      : mode === "industrial"
      ? "bg-orange-500/15 border-orange-500/50 text-orange-300"
      : mode === "spatial"
      ? "bg-purple-500/15 border-purple-400/40 text-purple-200"
      : "bg-blue-600/20 border-lime-400/60 text-lime-300";

  const primaryBtnClass =
    mode === "orbital"
      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.35)]"
      : mode === "industrial"
      ? "bg-orange-500 text-black hover:bg-orange-400 shadow-[0_0_25px_rgba(255,69,0,0.4)]"
      : mode === "spatial"
      ? "bg-gradient-to-r from-purple-500 to-emerald-400 text-slate-950 hover:opacity-95 shadow-[0_0_25px_rgba(168,85,247,0.35)]"
      : "bg-[#CCFF00] text-slate-950 hover:bg-lime-300 shadow-[3px_3px_0px_#2563EB]";

  const headingFont =
    mode === "orbital" || mode === "blueprint" ? "font-display" : "font-sans";

  return (
    <div className={`min-h-screen transition-colors duration-500 relative pb-36 ${pageBgClass}`}>
      {/* Ambient Background Glow Orbs */}
      {mode === "spatial" && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
          <div className="absolute -top-32 left-1/4 w-[36rem] h-[36rem] rounded-full bg-purple-600/20 blur-[140px]" />
          <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] rounded-full bg-emerald-500/15 blur-[140px]" />
          <div className="absolute bottom-10 left-1/3 w-[32rem] h-[32rem] rounded-full bg-indigo-600/15 blur-[150px]" />
        </div>
      )}
      {mode === "orbital" && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[24rem] rounded-full bg-cyan-500/10 blur-[150px]" />
          <div className="absolute bottom-1/4 right-0 w-[28rem] h-[28rem] rounded-full bg-amber-500/5 blur-[130px]" />
        </div>
      )}

      {/* Top Futuristic Telemetry / Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div
                className="h-9 w-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm border transition-all"
                style={{
                  borderColor: activeTheme.accentHex,
                  backgroundColor: `${activeTheme.accentHex}18`,
                  color: activeTheme.accentHex,
                }}
              >
                MG
              </div>
              <div>
                <div className="font-bold text-sm tracking-wide text-white flex items-center gap-1.5">
                  <span>{personal.domain}</span>
                  <span
                    className="h-2 w-2 rounded-full animate-pulse"
                    style={{ backgroundColor: activeTheme.accentHex }}
                  />
                </div>
                <div className="font-mono text-[10px] text-zinc-400 hidden sm:block">
                  {activeTheme.badge}
                </div>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-zinc-300">
            <a href="#engine-room" className="hover:text-white transition">
              Engine Room
            </a>
            <a href="#case-studies" className="hover:text-white transition">
              Case Studies
            </a>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
            <a href="#github" className="hover:text-white transition">
              Open Source
            </a>
            <a href="#beyond-ide" className="hover:text-white transition">
              Beyond the IDE
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setCmdOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 transition"
              title="Open Command Palette (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Search / Cmd+K</span>
            </button>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Mayank_Gupta_Resume.pdf"
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition ${primaryBtnClass}`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 space-y-20 sm:space-y-28">
        {/* ================= HERO SECTION ================= */}
        <section className="space-y-8">
          {/* Active Design Mode Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] font-mono text-xs">
            <div className="flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 animate-pulse" style={{ color: activeTheme.accentHex }} />
              <span className="text-zinc-300">
                ACTIVE UI PARADIGM:{" "}
                <strong className="text-white">{activeTheme.name}</strong>
              </span>
              <span className="hidden lg:inline text-zinc-500">
                — ({activeTheme.subtitle})
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {personal.location} ({personal.coordinates})
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Identity & Narrative */}
            <div className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between ${cardClass}`}>
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                  {/* Profile Portrait with Futuristic Frame */}
                  <div className="relative shrink-0">
                    <div
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 p-1 bg-black/60"
                      style={{ borderColor: activeTheme.accentHex }}
                    >
                      <Image
                        src={personal.avatarUrl}
                        alt={personal.name}
                        width={120}
                        height={120}
                        className="w-full h-full object-cover rounded-xl"
                        priority
                      />
                    </div>
                    <span
                      className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded font-mono text-[9px] font-bold uppercase tracking-wider bg-emerald-500 text-slate-950 shadow"
                    >
                      ONLINE
                    </span>
                  </div>

                  <div>
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[11px] mb-2 ${accentBadgeClass}`}
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>{personal.role} • 9+ Years Exp</span>
                    </div>
                    <h1
                      className={`text-3xl sm:text-5xl font-extrabold tracking-tight text-white ${headingFont}`}
                    >
                      {personal.name}
                    </h1>
                    <p className="font-mono text-xs sm:text-sm text-zinc-400 mt-1">
                      Go • Elixir • Distributed Systems • Microservices • Linux
                    </p>
                  </div>
                </div>

                {/* Headline */}
                <h2
                  className={`text-xl sm:text-2xl font-bold text-zinc-100 leading-snug mb-4 ${headingFont}`}
                >
                  {personal.headline}
                </h2>

                {/* Gemini Personality Quote */}
                <blockquote
                  className="p-4 rounded-xl border-l-4 bg-white/[0.03] text-sm text-zinc-300 leading-relaxed mb-6"
                  style={{ borderLeftColor: activeTheme.accentHex }}
                >
                  “{personal.aboutQuote}”
                </blockquote>
              </div>

              {/* Action CTA Row */}
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Mayank_Gupta_Resume.pdf"
                    className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition ${primaryBtnClass}`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume (PDF)</span>
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 font-mono text-xs text-white flex items-center gap-2 transition"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 font-mono text-xs text-white flex items-center gap-2 transition"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={`mailto:${personal.email}`}
                    className="px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 font-mono text-xs text-white flex items-center gap-2 transition"
                  >
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>{personal.email}</span>
                  </a>
                </div>

                {/* 4 Impact Telemetry Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                  {metrics.map((m) => (
                    <div
                      key={m.code}
                      className="p-3 rounded-xl border border-white/10 bg-black/40"
                    >
                      <div className="font-mono text-[10px] text-zinc-500">{m.code}</div>
                      <div
                        className={`text-xl sm:text-2xl font-extrabold mt-0.5 ${headingFont}`}
                        style={{ color: activeTheme.accentHex }}
                      >
                        {m.value}
                      </div>
                      <div className="text-xs font-semibold text-white mt-0.5">
                        {m.label}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
                        {m.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Distributed Systems Node Graph */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <DistributedNodeGraph mode={mode} />
            </div>
          </div>
        </section>

        {/* ================= THE ENGINE ROOM ================= */}
        <section id="engine-room" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
                <Cpu className="w-4 h-4" />
                <span>LAYER_01 // THE ENGINE ROOM</span>
              </div>
              <h2 className={`text-2xl sm:text-4xl font-bold text-white mt-1 ${headingFont}`}>
                Core Stack & Systems Architecture
              </h2>
            </div>
            <p className="font-mono text-xs text-zinc-400 max-w-md">
              Primary expertise in Go & Elixir microservices, vector databases, real-time recommendation engines, and cloud-native SRE on Linux.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Polyglot Languages Proficiency */}
            <div className={`lg:col-span-6 p-6 ${cardClass}`}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4" style={{ color: activeTheme.accentHex }} />
                  <span>Programming Languages (Descending Order of Exp)</span>
                </h3>
                <span className="font-mono text-xs text-zinc-400">POLYGLOT_RUNTIME</span>
              </div>

              <div className="space-y-4">
                {engineRoom.coreStack.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-white">{lang.name}</span>
                      <span className="font-mono text-xs text-zinc-400">{lang.role}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${lang.level}%`,
                          background: `linear-gradient(90deg, ${activeTheme.accentHex}, ${activeTheme.secondaryHex})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Systems Architecture Pillars & Infra Matrix */}
            <div className="lg:col-span-6 space-y-6">
              <div className={`p-6 ${cardClass}`}>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4" style={{ color: activeTheme.accentHex }} />
                  <span>Systems Architecture & AI-Augmented R&D</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {engineRoom.architecture.map((arch) => (
                    <div
                      key={arch}
                      className="p-3 rounded-xl border border-white/10 bg-white/[0.03] flex items-start gap-2.5 text-xs text-zinc-200"
                    >
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: activeTheme.accentHex }}
                      />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {engineRoom.infrastructure.map((group) => (
                  <div key={group.category} className={`p-5 ${cardClass}`}>
                    <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md text-xs font-mono border border-white/10 bg-white/5 text-zinc-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= FLAGSHIP CASE STUDIES ================= */}
        <section id="case-studies" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400">
                <Shield className="w-4 h-4" />
                <span>LAYER_02 // PRODUCTION ARCHITECTURE HIGHLIGHTS</span>
              </div>
              <h2 className={`text-2xl sm:text-4xl font-bold text-white mt-1 ${headingFont}`}>
                Flagship Engineering Case Studies
              </h2>
            </div>
            <p className="font-mono text-xs text-zinc-400 max-w-md">
              Mission-critical distributed platforms delivered for Gojek, HDFC Bank, and high-growth technology leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, index) => (
              <div
                key={cs.id}
                className={`p-6 sm:p-7 flex flex-col justify-between transition-transform hover:-translate-y-1 ${cardClass}`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-zinc-400">
                      0{index + 1} // {cs.organization} • {cs.period}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${accentBadgeClass}`}
                    >
                      {cs.metric}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold text-white mb-2.5 ${headingFont}`}>
                    {cs.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    {cs.summary}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {cs.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs text-zinc-300 flex items-start gap-2"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: activeTheme.accentHex }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded font-mono text-[11px] bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WORK EXPERIENCE TIMELINE ================= */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
                <Briefcase className="w-4 h-4" />
                <span>LAYER_03 // CAREER CHRONOLOGY (2017 – PRESENT)</span>
              </div>
              <h2 className={`text-2xl sm:text-4xl font-bold text-white mt-1 ${headingFont}`}>
                9+ Years of Production Impact
              </h2>
            </div>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Mayank_Gupta_Resume.pdf"
              className="font-mono text-xs text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>Download Full Resume PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Company Selector Tabs */}
            <div className="lg:col-span-4 space-y-2">
              {experience.map((exp, idx) => {
                const active = idx === selectedExpIndex;
                return (
                  <button
                    key={`${exp.company}-${exp.period}`}
                    onClick={() => setSelectedExpIndex(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      active
                        ? "bg-white/10 border-white/40 text-white shadow-lg"
                        : "bg-white/[0.02] border-white/10 text-zinc-400 hover:bg-white/[0.06] hover:text-zinc-200"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-base text-white">
                        {exp.company}
                      </span>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-zinc-300 mt-0.5">{exp.role}</div>
                    <div className="font-mono text-[11px] text-zinc-500 mt-1">
                      {exp.period}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Experience Detail Panel */}
            <div className={`lg:col-span-8 p-6 sm:p-8 ${cardClass}`}>
              {(() => {
                const exp = experience[selectedExpIndex];
                return (
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-white/10">
                      <div>
                        <div className="font-mono text-xs uppercase text-zinc-400">
                          {exp.location} • {exp.period}
                        </div>
                        <h3 className={`text-2xl font-bold text-white mt-1 ${headingFont}`}>
                          {exp.role} @ {exp.company}
                        </h3>
                      </div>
                      {exp.stack && (
                        <div className="flex flex-wrap gap-1.5">
                          {exp.stack.map((s) => (
                            <span
                              key={s}
                              className={`px-2.5 py-0.5 rounded font-mono text-xs border ${accentBadgeClass}`}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Multi-client structure (e.g., Josh Software -> Gojek & HDFC Bank) */}
                    {exp.clients ? (
                      <div className="space-y-6">
                        {exp.clients.map((client) => (
                          <div
                            key={client.name}
                            className="p-5 rounded-xl border border-white/10 bg-black/40 space-y-3"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h4 className="text-base sm:text-lg font-bold text-white">
                                {client.name}
                              </h4>
                              <span className="font-mono text-xs text-cyan-400">
                                {client.period}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {client.stack.map((st) => (
                                <span
                                  key={st}
                                  className="px-2 py-0.5 rounded font-mono text-[11px] bg-white/5 border border-white/10 text-zinc-300"
                                >
                                  {st}
                                </span>
                              ))}
                            </div>
                            <ul className="space-y-2 pt-1">
                              {client.bullets.map((b) => (
                                <li
                                  key={b}
                                  className="text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                                >
                                  <span
                                    className="h-1.5 w-1.5 rounded-full mt-2 shrink-0"
                                    style={{ backgroundColor: activeTheme.accentHex }}
                                  />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-3">
                        {exp.bullets?.map((b) => (
                          <li
                            key={b}
                            className="text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full mt-2 shrink-0"
                              style={{ backgroundColor: activeTheme.accentHex }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        {/* ================= BEYOND THE IDE (PERSONALITY & PASSIONS) ================= */}
        <section id="beyond-ide" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
                <Flame className="w-4 h-4" />
                <span>LAYER_04 // BEYOND THE IDE</span>
              </div>
              <h2 className={`text-2xl sm:text-4xl font-bold text-white mt-1 ${headingFont}`}>
                Mountains, Hiking, Fitness & Music
              </h2>
            </div>
            <p className="font-mono text-xs text-zinc-400 max-w-md">
              {PORTFOLIO_DATA.beyondTheIde.intro}
            </p>
          </div>

          <BeyondTheIdeSection mode={mode} />
        </section>

        {/* ================= OPEN SOURCE & GITHUB REPOS ================= */}
        <section id="github" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-purple-400">
                <FolderGit2 className="w-4 h-4" />
                <span>LAYER_05 // PUBLIC CODEBASES & EXPLORATIONS</span>
              </div>
              <h2 className={`text-2xl sm:text-4xl font-bold text-white mt-1 ${headingFont}`}>
                GitHub Repositories (@{personal.handle})
              </h2>
            </div>
            <a
              href={`${personal.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>View All 45+ Repositories on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {githubRepos.map((repo) => (
              <div
                key={repo.name}
                className={`p-5 flex flex-col justify-between transition-all hover:-translate-y-1 ${cardClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">
                      {repo.language}
                    </span>
                    <span
                      className="font-mono text-[10px]"
                      style={{ color: activeTheme.accentHex }}
                    >
                      {repo.highlight}
                    </span>
                  </div>
                  <h3 className="font-mono font-bold text-sm text-white mb-1.5 truncate">
                    {repo.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 font-mono text-xs">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-white flex items-center gap-1"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                  {repo.liveUrl && (
                    <a
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= EDUCATION & CORE COMPETENCIES ================= */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className={`lg:col-span-4 p-6 flex flex-col justify-between ${cardClass}`}>
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase text-cyan-400 mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>ACADEMIC FOUNDATION</span>
                </div>
                <h3 className={`text-xl font-bold text-white ${headingFont}`}>
                  {education.degree}
                </h3>
                <p className="text-sm text-zinc-300 mt-1">{education.institution}</p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-zinc-400">
                <span>GRADUATED</span>
                <span className="text-white">{education.graduated}</span>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.competencies.map((comp) => (
                <div key={comp.title} className={`p-5 ${cardClass}`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Award
                      className="w-4 h-4 shrink-0"
                      style={{ color: activeTheme.accentHex }}
                    />
                    <h4 className="font-bold text-sm text-white">{comp.title}</h4>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {comp.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FOOTER / DIRECT CONTACT ================= */}
        <footer className={`p-8 sm:p-10 ${cardClass}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-1">
                READY FOR HIGH-SCALE CHALLENGES // {personal.domain.toUpperCase()}
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold text-white ${headingFont}`}>
                Let’s Architect Resilient Systems Together.
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                Reach out directly via email, LinkedIn, or GitHub.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personal.email}`}
                className={`px-5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition ${primaryBtnClass}`}
              >
                <Mail className="w-4 h-4" />
                <span>{personal.email}</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 font-mono text-xs text-white flex items-center gap-2 transition"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 font-mono text-xs text-white flex items-center gap-2 transition"
              >
                <Github className="w-4 h-4" />
                <span>@{personal.handle}</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-500">
            <span>
              © {new Date().getFullYear()} {personal.name} ({personal.domain}). Built with Next.js & Tailwind CSS.
            </span>
            <span>
              Go • Elixir • Distributed Systems • Mountains, Fitness & Music
            </span>
          </div>
        </footer>
      </main>

      {/* Floating Design Lab Switcher Dock */}
      <DesignSwitcher
        currentMode={mode}
        onSelectMode={setMode}
        onOpenCommandPalette={() => setCmdOpen(true)}
      />

      {/* Interactive Cmd+K Command Palette */}
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onSelectMode={setMode}
      />
    </div>
  );
}
