'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Flower2,
  Droplets,
  Sparkles,
  CheckCircle2,
  Sliders,
  Scale,
  ShieldCheck,
  ChevronRight,
  HeartPulse
} from 'lucide-react';
import { useWellness } from '@/context/WellnessContext';

export default function BotanicalApothecaryPage() {
  const { botanicals, activeSession } = useWellness();

  // Formulation drops
  const [dropsHinoki, setDropsHinoki] = useState<number>(4);
  const [dropsLavender, setDropsLavender] = useState<number>(3);
  const [dropsChamomile, setDropsChamomile] = useState<number>(2);
  const [dropsBergamot, setDropsBergamot] = useState<number>(3);
  const [carrierOil, setCarrierOil] = useState<string>('Organic Golden Jojoba (Simmondsia chinensis)');
  const [bottledSuccess, setBottledSuccess] = useState<boolean>(false);

  const totalDrops = dropsHinoki + dropsLavender + dropsChamomile + dropsBergamot;

  const handleBottleFormula = () => {
    setBottledSuccess(true);
    setTimeout(() => setBottledSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#f7f9f6] text-[#2d3748] pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#eaf1ec] via-[#f3f7f4] to-[#f7f9f6] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#e2ece3]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#52796f] font-medium">
              <Droplets className="w-4 h-4 text-[#84a98c]" />
              <span>ORGANIC PHYTO-AROMATHERAPY & BOTANICAL APOTHECARY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#2d3748] mt-1">
              HERBAL BOTANICAL <span className="text-[#52796f]">APOTHECARY</span>
            </h1>
          </div>

          <span className="text-xs font-mono text-[#52796f] bg-white px-3.5 py-2 rounded-2xl border border-[#d6e5d8] shadow-sm">
            CERTIFIED 100% ORGANIC STEAM-DISTILLED PHYTOTHERAPY
          </span>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Botanical Oils Catalog (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/85 border border-[#d6e5d8] rounded-3xl p-7 shadow-lg pastel-card">
              <h2 className="text-xl font-bold font-serif text-[#2d3748] mb-4 flex items-center gap-2">
                <Flower2 className="w-5 h-5 text-[#84a98c]" />
                <span>PRIMARY PURE BOTANICAL ESSENCES</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {botanicals.map((bot) => (
                  <div
                    key={bot.id}
                    className="p-5 rounded-2xl border border-[#e2ede2] bg-[#fbfdfb] hover:bg-white transition-all space-y-2 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[#2d3748] text-base font-serif">{bot.name}</h3>
                      <span className="text-xs font-mono text-[#52796f] font-bold">
                        {bot.recommendedDrops} DROPS REC
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-[#718096] italic">{bot.botanicalName}</div>
                    <div className="text-xs text-[#5a6a64] leading-relaxed">{bot.scentNotes}</div>

                    <div className="pt-2 border-t border-[#edf4ed] text-[11px] text-[#40685e] font-medium">
                      {bot.primaryBenefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Formulation Blending Bar (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/90 border border-[#d6e5d8] rounded-3xl p-7 shadow-xl pastel-card relative">
              <h3 className="text-xl font-serif font-bold text-[#2d3748] mb-2 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-[#84a98c]" />
                <span>CUSTOM ELIXIR BLENDING BAR</span>
              </h3>
              <p className="text-xs text-[#5a6a64] mb-5">
                Fine-tune aromatic drops for your personal bath soak or body massage.
              </p>

              <div className="space-y-4 text-xs font-sans">
                {/* Sliders */}
                <div className="bg-[#f9fbf9] p-3.5 rounded-2xl border border-[#e5efe5] space-y-2">
                  <div className="flex justify-between text-[#2d3748] font-medium">
                    <span>Japanese Hinoki Cypress (Phytoncides):</span>
                    <strong className="text-[#40685e] font-mono">{dropsHinoki} drops</strong>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    value={dropsHinoki}
                    onChange={(e) => setDropsHinoki(parseInt(e.target.value))}
                    className="w-full accent-[#84a98c]"
                  />
                </div>

                <div className="bg-[#f9fbf9] p-3.5 rounded-2xl border border-[#e5efe5] space-y-2">
                  <div className="flex justify-between text-[#2d3748] font-medium">
                    <span>French Lavender Fine (Sleep & Calm):</span>
                    <strong className="text-[#40685e] font-mono">{dropsLavender} drops</strong>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    value={dropsLavender}
                    onChange={(e) => setDropsLavender(parseInt(e.target.value))}
                    className="w-full accent-[#84a98c]"
                  />
                </div>

                <div className="bg-[#f9fbf9] p-3.5 rounded-2xl border border-[#e5efe5] space-y-2">
                  <div className="flex justify-between text-[#2d3748] font-medium">
                    <span>Roman Chamomile Noble (Anti-Stress):</span>
                    <strong className="text-[#40685e] font-mono">{dropsChamomile} drops</strong>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    value={dropsChamomile}
                    onChange={(e) => setDropsChamomile(parseInt(e.target.value))}
                    className="w-full accent-[#84a98c]"
                  />
                </div>

                <div className="bg-[#f9fbf9] p-3.5 rounded-2xl border border-[#e5efe5] space-y-2">
                  <div className="flex justify-between text-[#2d3748] font-medium">
                    <span>Calabrian Bergamot FCF (Limbic Uplift):</span>
                    <strong className="text-[#40685e] font-mono">{dropsBergamot} drops</strong>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    value={dropsBergamot}
                    onChange={(e) => setDropsBergamot(parseInt(e.target.value))}
                    className="w-full accent-[#84a98c]"
                  />
                </div>

                {/* Carrier Oil Selection */}
                <div className="pt-2">
                  <label className="block text-[#5a6a64] font-medium mb-1">Cold-Pressed Botanical Carrier</label>
                  <select
                    value={carrierOil}
                    onChange={(e) => setCarrierOil(e.target.value)}
                    className="w-full bg-[#f9fbf9] border border-[#d6e5d8] rounded-xl px-3 py-2 text-[#2d3748] text-xs focus:outline-none focus:border-[#84a98c]"
                  >
                    <option value="Organic Golden Jojoba (Simmondsia chinensis)">Organic Golden Jojoba (Rapid Absorption)</option>
                    <option value="Japanese Camellia Tsubaki Oil (Camellia japonica)">Japanese Camellia Tsubaki Oil (Deep Hydration)</option>
                    <option value="Sweet Almond Virgin Oil (Prunus amygdalus)">Sweet Almond Virgin Oil (Sensitive Dermal Safe)</option>
                  </select>
                </div>

                {/* Formulation Summary */}
                <div className="p-4 bg-[#eef4ee] rounded-2xl border border-[#cfe0d0] text-center space-y-2 mt-4 font-mono">
                  <div className="text-[10px] text-[#718096] uppercase">TOTAL ESSENCE CONCENTRATION</div>
                  <div className="text-3xl font-bold text-[#40685e]">{totalDrops} DROPS (1.8% DILUTION)</div>
                  <div className="text-xs text-[#52796f]">
                    {totalDrops <= 14 ? 'OPTIMAL SAFE THERAPEUTIC DOSAGE' : 'HIGH INTENSITY SUITE FORMULA'}
                  </div>
                </div>

                {bottledSuccess && (
                  <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Formula compounded and dispatched to suite #{activeSession.suiteNumber}!</span>
                  </div>
                )}

                <button
                  onClick={handleBottleFormula}
                  className="w-full py-3 bg-[#84a98c] hover:bg-[#6b9073] text-white font-medium text-xs rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>BOTTLE CUSTOM BOTANICAL ELIXIR</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
