"use client";

import React, { useState } from "react";
import { DESIGN_THEMES, DesignMode } from "@/data/portfolio-data";
import { ChevronDown, ChevronUp, Layers, Sparkles, Terminal } from "lucide-react";

interface DesignSwitcherProps {
  currentMode: DesignMode;
  onSelectMode: (mode: DesignMode) => void;
  onOpenCommandPalette: () => void;
}

export function DesignSwitcher({
  currentMode,
  onSelectMode,
  onOpenCommandPalette,
}: DesignSwitcherProps) {
  const [expanded, setExpanded] = useState(true);
  const activeTheme = DESIGN_THEMES.find((t) => t.id === currentMode) || DESIGN_THEMES[0];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-3xl">
      <div className="rounded-2xl border border-white/20 bg-zinc-950/90 backdrop-blur-2xl shadow-[0_12px_50px_rgba(0,0,0,0.85)] p-2.5 sm:p-3">
        <div className="flex items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full animate-pulse"
              style={{ backgroundColor: activeTheme.accentHex }}
            />
            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-300">
              DESIGN LAB SWITCHER:{" "}
              <strong className="text-white">{activeTheme.name}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 font-mono text-[11px] text-zinc-300 transition"
            >
              <Terminal className="w-3 h-3" />
              <span>Cmd+K</span>
            </button>
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-1 rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition"
              aria-label="Toggle design switcher"
            >
              {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {expanded && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2.5 pt-2.5 border-t border-white/10">
            {DESIGN_THEMES.map((theme) => {
              const isSelected = theme.id === currentMode;
              return (
                <button
                  key={theme.id}
                  onClick={() => onSelectMode(theme.id)}
                  className={`text-left p-2.5 rounded-xl border transition-all ${
                    isSelected
                      ? "bg-white/15 border-white/40 text-white shadow-lg scale-[1.01]"
                      : "bg-white/[0.03] border-white/10 text-zinc-400 hover:bg-white/[0.08] hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-mono text-[11px] font-bold text-white truncate">
                      {theme.shortName}
                    </span>
                    <span
                      className="h-2 w-2 rounded-full shrink-0"
                      style={{ backgroundColor: theme.accentHex }}
                    />
                  </div>
                  <div className="text-[10px] text-zinc-400 line-clamp-1">
                    {theme.subtitle}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
