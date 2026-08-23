"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/data/dictionary";

type TabType = "perf" | "stack" | "ownership";

export function HeroSimulator() {
  const { lang } = useLanguage();
  const t = dictionary.heroSimulator;
  const [activeTab, setActiveTab] = useState<TabType>("perf");

  return (
    <div className="w-full rounded-3xl border border-line bg-surface/90 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
      {/* Header del Simulador con status en vivo */}
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
          </div>
          <span className="ml-2 font-mono text-xs text-muted">bytebridge.core</span>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {t.status[lang]}
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="mt-4 flex rounded-xl border border-line bg-background/60 p-1">
        <button
          onClick={() => setActiveTab("perf")}
          className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-[background-color,color] duration-150 active:scale-95 ${
            activeTab === "perf"
              ? "bg-accent text-accent-ink shadow-xs"
              : "text-muted hover:text-foreground"
          }`}
        >
          {t.tabPerformance[lang]}
        </button>
        <button
          onClick={() => setActiveTab("stack")}
          className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-[background-color,color] duration-150 active:scale-95 ${
            activeTab === "stack"
              ? "bg-accent text-accent-ink shadow-xs"
              : "text-muted hover:text-foreground"
          }`}
        >
          {t.tabStack[lang]}
        </button>
        <button
          onClick={() => setActiveTab("ownership")}
          className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-[background-color,color] duration-150 active:scale-95 ${
            activeTab === "ownership"
              ? "bg-accent text-accent-ink shadow-xs"
              : "text-muted hover:text-foreground"
          }`}
        >
          {t.tabSecurity[lang]}
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-5 min-h-[190px]">
        {/* Tab 1: Performance / Speed */}
        {activeTab === "perf" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-3.5">
                <p className="text-[11px] font-medium text-muted">{t.speedLabel[lang]}</p>
                <p className="mt-1 font-display text-2xl font-extrabold text-accent">
                  {t.speedValue[lang]}
                </p>
                <p className="text-[10px] text-muted/70">{t.speedSub[lang]}</p>
              </div>

              <div className="rounded-2xl border border-line bg-background/50 p-3.5">
                <p className="text-[11px] font-medium text-muted">{t.lighthouseScore[lang]}</p>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-display text-2xl font-extrabold text-foreground">100</span>
                  <span className="text-xs font-bold text-accent">/ 100</span>
                </div>
                <p className="text-[10px] text-muted/70">{t.lighthousePerfect[lang]}</p>
              </div>
            </div>

            {/* Barra de métricas Core Web Vitals */}
            <div className="rounded-2xl border border-line bg-background/40 p-3.5 space-y-2">
              <div className="flex justify-between text-[11px]">
                <span className="text-muted">First Contentful Paint (FCP)</span>
                <span className="font-mono font-bold text-accent">0.3s · Óptimo</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-line overflow-hidden">
                <div className="h-full w-full rounded-full bg-accent" />
              </div>
              <div className="flex justify-between text-[10px] text-muted/60">
                <span>Cumulative Layout Shift: 0.0</span>
                <span>Total Blocking Time: 0ms</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Modern Stack */}
        {activeTab === "stack" && (
          <div className="space-y-2.5 animate-in fade-in duration-200">
            {t.stackItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl border border-line bg-background/50 p-3"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                    ⚡
                  </span>
                  <div>
                    <p className="text-xs font-bold text-foreground">{item.name}</p>
                    <p className="text-[10px] text-muted">{item.desc[lang]}</p>
                  </div>
                </div>
                <span className="rounded-md border border-line bg-surface px-2 py-0.5 text-[10px] font-mono text-accent">
                  v-latest
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Ownership & Freedom */}
        {activeTab === "ownership" && (
          <div className="space-y-2.5 animate-in fade-in duration-200">
            {t.ownershipItems.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-line bg-background/50 p-3.5 space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-accent text-sm font-bold">✓</span>
                  <p className="text-xs font-bold text-foreground">{item.name[lang]}</p>
                </div>
                <p className="text-[11px] text-muted pl-5">{item.desc[lang]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
