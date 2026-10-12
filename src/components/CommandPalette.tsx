"use client";

import React, { useState, useEffect } from "react";
import { DESIGN_THEMES, DesignMode, PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  Briefcase,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Flame,
  Github,
  Linkedin,
  Mail,
  Palette,
  Search,
  X,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMode: (mode: DesignMode) => void;
}

export function CommandPalette({ isOpen, onClose, onSelectMode }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      category: "Switch Design Aesthetic",
      items: DESIGN_THEMES.map((t) => ({
        label: `Activate ${t.name}`,
        sub: t.subtitle,
        icon: Palette,
        action: () => {
          onSelectMode(t.id);
          onClose();
        },
      })),
    },
    {
      category: "Navigate Sections",
      items: [
        {
          label: "Jump to The Engine Room (Stack & Distributed Topology)",
          sub: "Go, Elixir, Kafka, Kubernetes, Vector DBs",
          icon: Cpu,
          action: () => {
            document.getElementById("engine-room")?.scrollIntoView({ behavior: "smooth" });
            onClose();
          },
        },
        {
          label: "Jump to Architecture Case Studies",
          sub: "Gojek Free Trial & Promotions, HDFC Kavach, Routematic",
          icon: Code2,
          action: () => {
            document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
            onClose();
          },
        },
        {
          label: "Jump to Work Experience Timeline (9+ Years)",
          sub: "Josh Software (Gojek / HDFC), Swymcorp, Squadcast, Routematic",
          icon: Briefcase,
          action: () => {
            document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            onClose();
          },
        },
        {
          label: "Jump to Beyond the IDE (Mountains, Hiking, Fitness & Music)",
          sub: "Uttarakhand Hikes, Travel, Strength & Running, Rock/Metal Guitar & DIY",
          icon: Flame,
          action: () => {
            document.getElementById("beyond-ide")?.scrollIntoView({ behavior: "smooth" });
            onClose();
          },
        },
      ],
    },
    {
      category: "Direct Links & Resume",
      items: [
        {
          label: "Download Official Resume (PDF)",
          sub: "Mayank_Gupta_Resume.pdf",
          icon: Download,
          action: () => {
            window.open(PORTFOLIO_DATA.personal.resumeUrl, "_blank");
            onClose();
          },
        },
        {
          label: "Open GitHub Profile (@mayankgupta804)",
          sub: PORTFOLIO_DATA.personal.github,
          icon: Github,
          action: () => {
            window.open(PORTFOLIO_DATA.personal.github, "_blank");
            onClose();
          },
        },
        {
          label: "Open LinkedIn Profile",
          sub: PORTFOLIO_DATA.personal.linkedin,
          icon: Linkedin,
          action: () => {
            window.open(PORTFOLIO_DATA.personal.linkedin, "_blank");
            onClose();
          },
        },
        {
          label: "Send Email to Mayank",
          sub: PORTFOLIO_DATA.personal.email,
          icon: Mail,
          action: () => {
            window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}`;
            onClose();
          },
        },
      ],
    },
  ];

  const filteredGroups = actions
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.sub.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-2xl rounded-2xl border border-white/20 bg-zinc-950 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
          <Search className="w-4 h-4 text-cyan-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, design theme, or section (e.g. 'Elixir', 'Drop G', 'Blueprint', 'Resume')..."
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-3 space-y-4">
          {filteredGroups.map((group) => (
            <div key={group.category}>
              <div className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                {group.category}
              </div>
              <div className="space-y-1 mt-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-white/10 transition group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 group-hover:text-cyan-400 group-hover:border-cyan-500/40">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <div className="text-sm font-medium text-white truncate">
                            {item.label}
                          </div>
                          <div className="text-xs text-zinc-400 truncate font-mono">
                            {item.sub}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
