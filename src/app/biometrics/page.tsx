'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  HeartPulse,
  Activity,
  Moon,
  Sun,
  Flame,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Play,
  Pause
} from 'lucide-react';
import { useWellness } from '@/context/WellnessContext';

export default function BiometricsCircadianPage() {
  const { activeSession } = useWellness();

  // Hydrothermal Sauna Timer
  const [saunaSeconds, setSaunaSeconds] = useState<number>(900); // 15 mins default
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRunning && saunaSeconds > 0) {
      interval = setInterval(() => {
        setSaunaSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, saunaSeconds]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#f7f9f6] text-[#2d3748] pb-24 font-sans">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#eaf1ec] via-[#f3f7f4] to-[#f7f9f6] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#e2ece3]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#52796f] font-medium">
              <HeartPulse className="w-4 h-4 text-[#84a98c] animate-pulse" />
              <span>CIRCADIAN RHYTHM, HRV RECOVERY & AUTONOMIC TELEMETRY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#2d3748] mt-1">
              WELLNESS BIOMETRICS <span className="text-[#52796f]">CONSOLE</span>
            </h1>
          </div>

          <div className="text-xs font-mono text-[#52796f] bg-white px-3.5 py-2 rounded-2xl border border-[#d6e5d8] shadow-sm">
            GUEST: <strong className="text-[#2d3748]">{activeSession.guestName}</strong>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Biometrics Vital Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/85 border border-[#d6e5d8] rounded-3xl p-7 shadow-lg pastel-card">
              <div className="flex items-center justify-between border-b border-[#edf3ed] pb-3 mb-6">
                <h2 className="text-xl font-bold font-serif text-[#2d3748] flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#84a98c]" />
                  <span>AUTONOMIC NERVOUS SYSTEM RECOVERY</span>
                </h2>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#e9f2eb] text-[#40685e] border border-[#d2e3d3]">
                  RMSSD: 78 MS (OPTIMAL)
                </span>
              </div>

              {/* HRV Meter & Cortisol Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f9fbf9] p-5 rounded-2xl border border-[#e5efe5] space-y-1">
                  <div className="text-xs font-mono text-[#718096] uppercase">HEART RATE VARIABILITY (HRV)</div>
                  <div className="text-3xl font-black text-[#40685e] font-mono">78 ms</div>
                  <p className="text-xs text-[#52796f] pt-1">
                    Parasympathetic vagal tone dominant; high somatic stress resilience.
                  </p>
                </div>

                <div className="bg-[#f9fbf9] p-5 rounded-2xl border border-[#e5efe5] space-y-1">
                  <div className="text-xs font-mono text-[#718096] uppercase">SALIVARY CORTISOL TREND</div>
                  <div className="text-2xl font-black text-[#84a98c] font-mono">-42% DROP</div>
                  <p className="text-xs text-[#52796f] pt-1">
                    Marked reduction following 432 Hz crystal sound bath & Hinoki cedar soak.
                  </p>
                </div>
              </div>

              {/* Sleep Architecture Graph */}
              <div className="mt-6 pt-6 border-t border-[#edf3ed]">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-bold text-[#2d3748] uppercase tracking-wider font-mono">
                    CIRCADIAN SLEEP ARCHITECTURE (LAST NIGHT)
                  </span>
                  <span className="text-[#52796f] font-mono">8H 24M TOTAL REST</span>
                </div>

                {/* Sleep Phases Bar */}
                <div className="w-full h-8 rounded-2xl bg-[#edf3ed] overflow-hidden flex text-[10px] font-mono text-white font-semibold">
                  <div className="bg-[#52796f] h-full flex items-center justify-center" style={{ width: '28%' }}>
                    DEEP 28%
                  </div>
                  <div className="bg-[#84a98c] h-full flex items-center justify-center" style={{ width: '26%' }}>
                    REM 26%
                  </div>
                  <div className="bg-[#a3c4ab] h-full flex items-center justify-center text-[#2d3748]" style={{ width: '40%' }}>
                    LIGHT 40%
                  </div>
                  <div className="bg-[#cadbc8] h-full flex items-center justify-center text-[#2d3748]" style={{ width: '6%' }}>
                    AWAKE 6%
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 mt-3 text-center text-xs text-[#5a6a64] font-mono">
                  <div>DEEP: 2h 21m</div>
                  <div>REM: 2h 11m</div>
                  <div>LIGHT: 3h 22m</div>
                  <div>AWAKE: 30m</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hydrothermal Sauna & Plunge Timer (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/90 border border-[#d6e5d8] rounded-3xl p-7 shadow-xl pastel-card text-center relative">
              <h3 className="text-xl font-serif font-bold text-[#2d3748] mb-1 flex items-center justify-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" />
                <span>INFRARED CEDAR SAUNA TIMER</span>
              </h3>
              <p className="text-xs text-[#5a6a64] mb-6">
                Contrast thermotherapy session timer (Optimal 15-20 min hyperthermia).
              </p>

              {/* Timer Dial */}
              <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-[#edf4ed] to-[#f7faf7] border-4 border-[#84a98c]/30 flex flex-col items-center justify-center mx-auto shadow-inner">
                <div className="text-4xl font-black font-mono text-[#2d3748]">{formatTime(saunaSeconds)}</div>
                <div className="text-[10px] font-mono text-[#718096] uppercase mt-1">78°C / 20% HUMIDITY</div>
              </div>

              {/* Timer Controls */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <button
                  onClick={() => setTimerRunning(!timerRunning)}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-semibold shadow-sm transition-all flex items-center gap-1.5 ${
                    timerRunning
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-[#84a98c] hover:bg-[#6b9073] text-white'
                  }`}
                >
                  {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{timerRunning ? 'PAUSE TIMER' : 'START SAUNA SESSION'}</span>
                </button>

                <button
                  onClick={() => {
                    setTimerRunning(false);
                    setSaunaSeconds(900);
                  }}
                  className="px-4 py-2.5 bg-[#edf3ed] text-[#5a6a64] hover:bg-[#e2ece2] rounded-2xl text-xs font-medium transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-[#edf3ed] text-left text-xs text-[#5a6a64] space-y-1 font-sans">
                <div className="font-semibold text-[#2d3748]">Thermal Protocol Checklist:</div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#84a98c]" />
                  <span>Drink 250ml mineral electrolyte infusion before entering</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#84a98c]" />
                  <span>Immediate transition to 8°C Glacial Cold Plunge for 60 seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
