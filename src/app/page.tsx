'use client';

import React from 'react';
import Link from 'next/link';
import {
  Droplets,
  Thermometer,
  Wind,
  Flower2,
  Users,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  HeartPulse,
  Volume2
} from 'lucide-react';
import { useWellness } from '@/context/WellnessContext';

export default function ZenSanctuaryOverviewPage() {
  const { thermalBaths, soundBathActive, toggleSoundBath } = useWellness();

  return (
    <div className="min-h-screen bg-[#f7f9f6] text-[#2d3748] pb-24">
      {/* Serene Hero Pavilion */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf1ec] via-[#f3f7f4] to-[#f7f9f6] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#e2ece3]">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            {/* Soft Botanical Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#cce0d2] text-[#40685e] text-xs font-mono font-medium mb-4 shadow-sm">
              <Flower2 className="w-3.5 h-3.5 text-[#52796f]" />
              <span>NATURAL THERMAL GEOTHERMAL SPRINGS // KYOTO ALPS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#2d3748] leading-tight">
              SANCTUARY OF <span className="text-[#52796f]">SERENE WATERS</span>
            </h1>
            <p className="mt-4 text-[#5a6a64] text-base sm:text-lg leading-relaxed font-sans">
              Enter a realm of profound restorative stillness. Where deep-trench sea minerals, geothermal spring waters, and handcrafted botanical infusions synchronize body and mind.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/therapies/"
                className="px-6 py-3.5 bg-[#84a98c] hover:bg-[#6b9073] text-white font-medium text-sm rounded-2xl shadow-md shadow-[#84a98c]/20 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>EXPLORE HOLISTIC RITUALS</span>
              </Link>
              <Link
                href="/apothecary/"
                className="px-6 py-3.5 bg-white hover:bg-[#f2f7f3] text-[#40685e] border border-[#cbd5cb] font-medium text-sm rounded-2xl transition-all flex items-center gap-2"
              >
                <Flower2 className="w-4 h-4 text-[#84a98c]" />
                <span>BOTANICAL APOTHECARY</span>
              </Link>
            </div>
          </div>

          {/* Zen Breath Guided Meditation Card */}
          <div className="w-full lg:w-96 bg-white/90 border border-[#d6e5d8] rounded-3xl p-6 shadow-xl relative overflow-hidden pastel-card">
            <div className="flex items-center justify-between border-b border-[#edf3ed] pb-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#40685e]">
                <Wind className="w-4 h-4 text-[#84a98c]" />
                <span>RESTORATIVE PRANAYAMA</span>
              </div>
              <span className="text-[11px] text-[#718096] font-mono">LIVE CADENCE</span>
            </div>

            {/* Breathing Visualizer Sphere */}
            <div className="w-28 h-28 mx-auto my-4 rounded-full bg-gradient-to-tr from-[#cbe0d0] to-[#e4eef6] border-2 border-white shadow-lg flex items-center justify-center zen-breath">
              <span className="text-xs font-serif font-bold text-[#40685e]">BREATHE</span>
            </div>

            <div className="text-center space-y-1 mb-4">
              <div className="text-xs font-mono text-[#52796f] uppercase">432 Hz Solfeggio Resonance</div>
              <p className="text-[11px] text-[#718096]">
                Natural frequency tuned to cellular biological repair and vagal nerve harmony.
              </p>
            </div>

            <button
              onClick={toggleSoundBath}
              className={`w-full py-2.5 rounded-2xl text-xs font-medium transition-all flex items-center justify-center gap-2 ${
                soundBathActive
                  ? 'bg-[#84a98c] text-white'
                  : 'bg-[#edf3ed] text-[#40685e] hover:bg-[#e2ede3]'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{soundBathActive ? 'PAUSE SOUND BATH' : 'ENGAGE 432 HZ SOUND BATH'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Thermal Baths Pavilion Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#2d3748]">
              THERMAL HYDROTHERAPY SPRINGS
            </h2>
            <p className="text-xs sm:text-sm text-[#5a6a64] mt-1">
              Geothermal mineral water baths with continuous cascade filtration and temperature regulation.
            </p>
          </div>
          <span className="text-xs font-mono text-[#52796f] bg-[#eaf2eb] px-3 py-1 rounded-full border border-[#cde0cf]">
            3 SPRINGS ACTIVE // CHEMICAL-FREE MINERALS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {thermalBaths.map((bath) => (
            <div
              key={bath.id}
              className="bg-white/80 border border-[#d6e5d8] rounded-3xl p-6 shadow-lg pastel-card pastel-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#eef4ee] pb-3 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#edf4ed] text-[#40685e] border border-[#d2e3d3]">
                    HYDRO POOL
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#52796f]">
                    <Thermometer className="w-4 h-4 text-[#84a98c]" />
                    <span className="font-bold font-mono">{bath.temperatureC}°C</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-serif text-[#2d3748] mb-2">{bath.name}</h3>
                <p className="text-xs text-[#5a6a64] leading-relaxed mb-4">{bath.ambientVibe}</p>

                <div className="p-3 bg-[#f8faf8] rounded-2xl border border-[#e8efe8] space-y-2 text-xs">
                  <div className="text-[10px] text-[#718096] uppercase font-mono">Mineral Signature:</div>
                  <div className="text-xs text-[#2d3748] font-medium">{bath.mineralProfile}</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#edf3ed] flex items-center justify-between text-xs text-[#5a6a64]">
                <div className="flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#84a98c]" />
                  <span>{bath.recommendedDurationMin} MIN SOAK</span>
                </div>

                <div className="flex items-center gap-1 font-mono">
                  <Users className="w-3.5 h-3.5 text-[#52796f]" />
                  <span>{bath.activeGuests}/{bath.capacityGuests} GUESTS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
