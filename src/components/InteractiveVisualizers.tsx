"use client";

import React, { useState, useEffect } from "react";
import { DesignMode, PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  Activity,
  Compass,
  Dumbbell,
  Mountain,
  Music,
  Server,
  Wrench,
  Zap,
} from "lucide-react";

interface VisualizerProps {
  mode: DesignMode;
}

export function DistributedNodeGraph({ mode }: VisualizerProps) {
  const nodes = PORTFOLIO_DATA.engineRoom.systemNodes;
  const [selectedNode, setSelectedNode] = useState(nodes[0]);
  const [burstMode, setBurstMode] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => (t + 1) % 100);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  const accentColor =
    mode === "orbital"
      ? "text-cyan-400 border-cyan-500/40 bg-cyan-950/20"
      : mode === "industrial"
      ? "text-orange-400 border-orange-500/40 bg-zinc-900"
      : mode === "spatial"
      ? "text-purple-300 border-purple-500/30 bg-white/5"
      : "text-lime-300 border-blue-500/60 bg-slate-950";

  const activeRing =
    mode === "orbital"
      ? "ring-2 ring-cyan-400 border-cyan-400 bg-cyan-500/15"
      : mode === "industrial"
      ? "ring-2 ring-orange-500 border-orange-400 bg-orange-500/15"
      : mode === "spatial"
      ? "ring-2 ring-purple-400 border-purple-400 bg-purple-500/15"
      : "ring-2 ring-lime-400 border-lime-400 bg-blue-950/60";

  return (
    <div className="relative rounded-2xl border border-white/15 bg-black/50 backdrop-blur-xl p-5 sm:p-6 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.22) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                burstMode ? "bg-amber-400" : "bg-emerald-400"
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                burstMode ? "bg-amber-500" : "bg-emerald-500"
              }`}
            />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
            {burstMode
              ? "PEAK_LOAD_SIMULATION // 140K RPS"
              : "LIVE_DISTRIBUTED_TOPOLOGY // NOMINAL"}
          </span>
        </div>

        <button
          onClick={() => setBurstMode(!burstMode)}
          className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 border ${
            burstMode
              ? "bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              : "bg-white/5 border-white/15 text-zinc-300 hover:bg-white/10 hover:text-white"
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          {burstMode ? "Stress Test: ON (Go/Elixir Auto-Scale)" : "Simulate Peak Traffic"}
        </button>
      </div>

      {/* Node Topology Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
        {nodes.map((node, idx) => {
          const isSelected = selectedNode.id === node.id;
          const jitter = ((tick + idx * 7) % 5) - 2;
          const baseLat = parseFloat(node.latency);
          const liveLatency = burstMode
            ? (baseLat * 1.15 + jitter * 0.05).toFixed(2) + "ms"
            : (baseLat + jitter * 0.03).toFixed(2) + "ms";

          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`text-left p-3.5 rounded-xl border transition-all duration-200 relative group ${
                isSelected ? activeRing : "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                  NODE_0{idx + 1}
                </span>
                <span
                  className={`font-mono text-[10px] px-1.5 py-0.5 rounded border ${accentColor}`}
                >
                  {liveLatency}
                </span>
              </div>
              <div className="font-semibold text-sm text-white truncate group-hover:text-cyan-200 transition-colors">
                {node.label}
              </div>
              <div className="font-mono text-xs text-zinc-400 mt-0.5">{node.tech}</div>

              <div className="mt-2.5 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    burstMode
                      ? "bg-gradient-to-r from-amber-400 to-rose-500"
                      : mode === "orbital"
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                      : mode === "industrial"
                      ? "bg-gradient-to-r from-orange-500 to-amber-400"
                      : mode === "spatial"
                      ? "bg-gradient-to-r from-purple-400 to-emerald-400"
                      : "bg-gradient-to-r from-blue-500 to-lime-400"
                  }`}
                  style={{
                    width: `${burstMode ? 88 + (idx % 3) * 4 : 58 + ((tick + idx * 11) % 30)}%`,
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Telemetry Inspector */}
      <div className="relative z-10 rounded-xl border border-white/10 bg-black/60 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
              ACTIVE INSPECTOR // {selectedNode.label}
            </span>
          </div>
          <p className="text-xs text-zinc-300 mt-1">
            Runtime: <strong className="text-white">{selectedNode.tech}</strong> • Sustained
            Throughput:{" "}
            <strong className="text-emerald-400">
              {burstMode ? `2.4x (${selectedNode.throughput})` : selectedNode.throughput}
            </strong>{" "}
            • Zero-downtime worker supervision on Linux.
          </p>
        </div>
        <div className="flex items-center gap-3 self-end sm:self-center font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            SLA: 99.99%
          </span>
          <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
            P99: {selectedNode.latency}
          </span>
        </div>
      </div>
    </div>
  );
}

export function BeyondTheIdeSection({ mode }: VisualizerProps) {
  const { mountainsAndTravel, fitnessAndRunning, musicAndDiy } =
    PORTFOLIO_DATA.beyondTheIde;
  const [selectedStop, setSelectedStop] = useState(3);

  const strokeColor =
    mode === "industrial"
      ? "#f97316"
      : mode === "spatial"
      ? "#a855f7"
      : mode === "blueprint"
      ? "#ccff00"
      : "#10b981";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Card 1: Mountains, Travel & Hiking */}
      <div className="rounded-2xl border border-white/15 bg-black/55 backdrop-blur-xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Mountain className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
                {mountainsAndTravel.tag}
              </span>
            </div>
            <Compass className="w-4 h-4 text-zinc-500" />
          </div>

          <h3 className="text-lg font-bold text-white">
            {mountainsAndTravel.title}
          </h3>
          <p className="text-xs font-mono text-zinc-400 mt-0.5">
            {mountainsAndTravel.subtitle}
          </p>
          <p className="text-sm text-zinc-300 leading-relaxed mt-3 mb-5">
            {mountainsAndTravel.description}
          </p>

          {/* Subtle, calm mountain ridgeline illustration */}
          <div className="rounded-xl border border-white/10 bg-black/50 p-4 mb-4">
            <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 mb-2">
              <span>{mountainsAndTravel.trailPoints[selectedStop].place}</span>
              <span className="text-emerald-400">
                {mountainsAndTravel.trailPoints[selectedStop].elev}
              </span>
            </div>

            <svg viewBox="0 0 320 75" className="w-full h-16 overflow-visible">
              <path
                d="M 10 65 L 65 48 L 115 54 L 175 28 L 225 36 L 285 12 L 310 25"
                fill="none"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {[
                { x: 10, y: 65 },
                { x: 115, y: 54 },
                { x: 175, y: 28 },
                { x: 285, y: 12 },
              ].map((pt, idx) => (
                <circle
                  key={idx}
                  cx={pt.x}
                  cy={pt.y}
                  r={selectedStop === idx ? 5 : 3.5}
                  className="cursor-pointer transition-all"
                  fill={selectedStop === idx ? "#ffffff" : strokeColor}
                  onClick={() => setSelectedStop(idx)}
                />
              ))}
            </svg>

            <div className="grid grid-cols-4 gap-1.5 mt-3">
              {mountainsAndTravel.trailPoints.map((tp, idx) => (
                <button
                  key={tp.stage}
                  onClick={() => setSelectedStop(idx)}
                  className={`py-1 px-1.5 rounded font-mono text-[10px] border transition ${
                    selectedStop === idx
                      ? "bg-emerald-500/15 border-emerald-400/50 text-emerald-200"
                      : "bg-white/5 border-transparent text-zinc-400 hover:text-white"
                  }`}
                >
                  {tp.stage}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {mountainsAndTravel.highlights.map((item) => (
            <div
              key={item.label}
              className="p-3 rounded-xl border border-white/10 bg-white/[0.03]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-zinc-400">
                  {item.label}
                </span>
                <span className="font-semibold text-xs text-white">
                  {item.value}
                </span>
              </div>
              <div className="text-xs text-zinc-400 mt-1">{item.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Card 2: Working Out & Distance Running */}
      <div className="rounded-2xl border border-white/15 bg-black/55 backdrop-blur-xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-400">
                {fitnessAndRunning.tag}
              </span>
            </div>
            <Activity className="w-4 h-4 text-zinc-500" />
          </div>

          <h3 className="text-lg font-bold text-white">
            {fitnessAndRunning.title}
          </h3>
          <p className="text-xs font-mono text-zinc-400 mt-0.5">
            {fitnessAndRunning.subtitle}
          </p>
          <p className="text-sm text-zinc-300 leading-relaxed mt-3 mb-5">
            {fitnessAndRunning.description}
          </p>

          <div className="space-y-3">
            {fitnessAndRunning.pillars.map((pillar, idx) => (
              <div
                key={pillar.name}
                className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] flex items-start gap-3"
              >
                <div className="font-mono text-xs px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 mt-0.5">
                  0{idx + 1}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">
                    {pillar.name}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    {pillar.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-zinc-400">
          <span>ROUTINE</span>
          <span className="text-cyan-300">LIFT • RUN • HIKE</span>
        </div>
      </div>

      {/* Card 3: Rock, Metal & Hands-On DIY (Humble & Grounded) */}
      <div className="rounded-2xl border border-white/15 bg-black/55 backdrop-blur-xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-amber-400" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-amber-400">
                {musicAndDiy.tag}
              </span>
            </div>
            <Wrench className="w-4 h-4 text-zinc-500" />
          </div>

          <h3 className="text-lg font-bold text-white">{musicAndDiy.title}</h3>
          <p className="text-xs font-mono text-zinc-400 mt-0.5">
            {musicAndDiy.subtitle}
          </p>
          <p className="text-sm text-zinc-300 leading-relaxed mt-3 mb-5">
            {musicAndDiy.description}
          </p>

          {/* Subtle, minimal acoustic/guitar wave line instead of flashy spectrum bars */}
          <div className="rounded-xl border border-white/10 bg-black/50 p-3.5 mb-4">
            <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400 mb-1.5">
              <span>FAVORITE ROTATION</span>
              <span className="text-amber-300">ROCK • METAL • INSTRUMENTAL</span>
            </div>
            <svg viewBox="0 0 300 36" className="w-full h-8">
              <path
                d="M 5 18 Q 35 18, 55 18 Q 70 4, 85 32 Q 100 6, 115 30 Q 130 10, 145 26 Q 160 14, 175 22 Q 200 18, 295 18"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="1.75"
                strokeLinecap="round"
                opacity="0.75"
              />
            </svg>
          </div>

          <div className="space-y-3">
            {musicAndDiy.notes.map((note) => (
              <div
                key={note.title}
                className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <div className="font-semibold text-sm text-white">
                  {note.title}
                </div>
                <div className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {note.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-zinc-400">
          <span>APPROACH</span>
          <span className="text-amber-300">PLAY FOR FUN • STAY CURIOUS</span>
        </div>
      </div>
    </div>
  );
}
