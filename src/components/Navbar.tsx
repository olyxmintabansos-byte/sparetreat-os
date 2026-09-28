'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Droplets, Flower2, HeartPulse, Volume2, Wind, CheckCircle2 } from 'lucide-react';
import { useWellness } from '@/context/WellnessContext';

export function Navbar() {
  const pathname = usePathname();
  const { soundBathActive, toggleSoundBath, bookedSessions } = useWellness();

  const links = [
    { href: '/', label: 'THERMAL PAVILION', sub: 'SPRING POOLS' },
    { href: '/therapies/', label: 'TREATMENTS', sub: 'THALASSO & AYURVEDA' },
    { href: '/apothecary/', label: 'BOTANICAL BAR', sub: 'CUSTOM BLENDS' },
    { href: '/biometrics/', label: 'BIOMETRICS', sub: 'HRV & CIRCADIAN' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e5ece5]">
      {/* Zen Breathing Cadence Ribbon */}
      <div className="bg-[#f0f4f0] border-b border-[#e1e9e1] px-4 py-1.5 text-xs text-[#52796f] flex flex-wrap items-center justify-between font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[#40685e] font-semibold">
            <Wind className="w-3.5 h-3.5 zen-breath text-[#52796f]" />
            <span>ZEN HARMONY CADENCE // INHALE 4S • HOLD 4S • EXHALE 4S</span>
          </div>
          <span className="hidden sm:inline text-zinc-300">|</span>
          <span className="hidden sm:inline text-zinc-600">
            SANCTUARY AIR: <strong className="text-[#2d3748]">HINOKI CYPRESS AROMA • 22.4°C • 54% HUMIDITY</strong>
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          {/* Sound Bath Toggle */}
          <button
            onClick={toggleSoundBath}
            className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full transition-colors ${
              soundBathActive
                ? 'bg-[#84a98c] text-white shadow-sm'
                : 'bg-white/80 text-[#52796f] border border-[#cbd5cb] hover:bg-white'
            }`}
          >
            <Volume2 className="w-3 h-3" />
            <span>432 HZ SOUND BATH: {soundBathActive ? 'PLAYING' : 'MUTED'}</span>
          </button>
          <span className="text-zinc-400 hidden sm:inline">TITAN #45 // STYLE #16 PASTEL</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Soft Pastel Sage Pill Logo */}
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#84a98c] to-[#52796f] flex items-center justify-center shadow-md shadow-[#84a98c]/20 group-hover:scale-105 transition-transform">
              <Flower2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-[#2d3748] flex items-center gap-2 font-serif">
                SPARETREAT <span className="text-[#52796f]">ZEN</span>
                <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-[#e9f1eb] text-[#40685e] border border-[#cce0d2]">
                  EST. 1924
                </span>
              </div>
              <div className="text-[9px] font-mono tracking-widest text-[#718096] uppercase">
                HOLISTIC THERMAL WELLNESS
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 font-sans">
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-2xl transition-all flex flex-col items-center ${
                    active
                      ? 'bg-white text-[#2f5d50] shadow-sm border border-[#cce0d2] font-semibold'
                      : 'text-[#5a6a64] hover:text-[#2d3748] hover:bg-white/60'
                  }`}
                >
                  <span className="text-xs">{item.label}</span>
                  <span className="text-[9px] font-mono text-[#8a9a94]">{item.sub}</span>
                </Link>
              );
            })}
          </nav>

          {/* Guest Booking Counter */}
          <Link
            href="/therapies/"
            className="px-4 py-2 bg-[#84a98c] hover:bg-[#6b9073] text-white text-xs font-semibold rounded-2xl shadow-sm transition-all flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>RESERVE RITUAL ({bookedSessions.length})</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
