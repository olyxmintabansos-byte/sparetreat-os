'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Flower2,
  Clock,
  CheckCircle2,
  Calendar,
  Users,
  X,
  CreditCard,
  Thermometer,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useWellness } from '@/context/WellnessContext';
import { Treatment } from '@/types/wellness';

export default function TherapiesTreatmentPage() {
  const { treatments, bookTreatment } = useWellness();
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [guestName, setGuestName] = useState<string>('Lady Seraphina Sterling');
  const [preferredTime, setPreferredTime] = useState<string>('Tomorrow at 14:00');
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTreatment) return;

    bookTreatment(selectedTreatment.name, guestName, preferredTime);
    setConfirmedBookingId(`RES-${Math.floor(1000 + Math.random() * 9000)}-ZEN`);
  };

  return (
    <div className="min-h-screen bg-[#f7f9f6] text-[#2d3748] pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#eaf1ec] via-[#f3f7f4] to-[#f7f9f6] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#e2ece3]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#52796f] font-medium">
              <Flower2 className="w-4 h-4 text-[#84a98c]" />
              <span>AYURVEDIC, THALASSOTHERAPY & BIO-ENERGETIC SUITE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#2d3748] mt-1">
              HOLISTIC WELLNESS <span className="text-[#52796f]">RITUALS</span>
            </h1>
          </div>

          <span className="text-xs font-mono text-[#52796f] bg-white px-3.5 py-2 rounded-2xl border border-[#d6e5d8] shadow-sm">
            PRIVATE SUITE EMBRACE • 100% ORGANIC BOTANICALS
          </span>
        </div>
      </section>

      {/* Main Grid: Treatments List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((tr) => (
            <div
              key={tr.id}
              className="bg-white/85 border border-[#d6e5d8] rounded-3xl p-7 shadow-lg pastel-card pastel-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#edf3ed] pb-3 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#eaf2eb] text-[#40685e] border border-[#d2e3d3] font-mono">
                    {tr.category}
                  </span>
                  <span className="text-xs font-serif text-[#718096]">{tr.japaneseTitle}</span>
                </div>

                <h3 className="text-2xl font-bold font-serif text-[#2d3748]">{tr.name}</h3>
                <p className="mt-3 text-xs sm:text-sm text-[#5a6a64] leading-relaxed font-sans">
                  {tr.description}
                </p>

                {/* Botanicals Tags */}
                <div className="mt-5 space-y-2">
                  <div className="text-[10px] text-[#718096] font-mono uppercase font-bold">
                    Active Herbal Infusions:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {tr.herbalBotanicals.map((herb, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#f4f7f4] border border-[#dde6dd] text-[#40685e]"
                      >
                        {herb}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Therapeutic Benefits */}
                <div className="mt-4 pt-4 border-t border-[#edf3ed] space-y-1.5 text-xs text-[#52796f]">
                  <div className="text-[10px] text-[#718096] font-mono uppercase font-bold">
                    Physiological Outcomes:
                  </div>
                  {tr.therapeuticBenefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#84a98c] flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="mt-8 pt-5 border-t border-[#edf3ed] flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#718096] font-mono uppercase">
                    {tr.durationMinutes} MINUTES SESSION
                  </div>
                  <div className="text-2xl font-black text-[#40685e] font-serif">
                    ${tr.priceUSD} USD
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTreatment(tr)}
                  className="px-5 py-2.5 bg-[#84a98c] hover:bg-[#6b9073] text-white font-medium text-xs rounded-2xl shadow-sm transition-all flex items-center gap-2"
                >
                  <span>RESERVE RITUAL</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Booking Modal */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white border border-[#d6e5d8] rounded-3xl max-w-lg w-full p-7 shadow-2xl relative">
            <button
              onClick={() => {
                setSelectedTreatment(null);
                setConfirmedBookingId(null);
              }}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {confirmedBookingId ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#e9f2eb] border border-[#cbe0d0] flex items-center justify-center mx-auto text-[#52796f]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#2d3748]">RITUAL CONFIRMED</h3>
                <p className="text-xs text-[#5a6a64] max-w-sm mx-auto">
                  Your private wellness sanctuary is reserved. A dedicated spa therapist will prepare your custom organic herbal bath.
                </p>

                <div className="bg-[#f8faf8] border border-[#e2ece2] p-4 rounded-2xl text-left text-xs space-y-2 max-w-sm mx-auto font-mono">
                  <div className="flex justify-between">
                    <span className="text-[#718096]">RESERVATION ID:</span>
                    <strong className="text-[#40685e]">{confirmedBookingId}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#718096]">RITUAL:</span>
                    <strong className="text-[#2d3748]">{selectedTreatment.name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#718096]">GUEST:</span>
                    <strong className="text-[#2d3748]">{guestName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#718096]">SCHEDULE:</span>
                    <strong className="text-[#52796f]">{preferredTime}</strong>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-3">
                  <Link
                    href="/apothecary/"
                    className="px-5 py-2.5 bg-[#84a98c] text-white text-xs font-medium rounded-2xl shadow-sm hover:bg-[#6b9073] transition-colors"
                  >
                    CUSTOMIZE BOTANICAL OILS
                  </Link>
                  <button
                    onClick={() => {
                      setSelectedTreatment(null);
                      setConfirmedBookingId(null);
                    }}
                    className="px-4 py-2.5 bg-[#edf3ed] text-[#40685e] text-xs font-medium rounded-2xl hover:bg-[#e2ece2] transition-colors"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="border-b border-[#edf3ed] pb-3">
                  <span className="text-xs font-mono text-[#52796f] uppercase font-bold">
                    RESERVE SANCTUARY EXPERIENCE
                  </span>
                  <h3 className="text-xl font-bold font-serif text-[#2d3748] mt-1">
                    {selectedTreatment.name}
                  </h3>
                  <div className="text-xs text-[#718096] font-mono mt-0.5">
                    {selectedTreatment.durationMinutes} Minutes • ${selectedTreatment.priceUSD} USD
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-[#5a6a64] font-medium mb-1">Guest Full Name</label>
                    <input
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      required
                      className="w-full bg-[#f8faf8] border border-[#d6e5d8] rounded-xl px-3.5 py-2.5 text-[#2d3748] focus:outline-none focus:border-[#84a98c]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5a6a64] font-medium mb-1">Preferred Time & Date</label>
                    <input
                      type="text"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      required
                      className="w-full bg-[#f8faf8] border border-[#d6e5d8] rounded-xl px-3.5 py-2.5 text-[#2d3748] focus:outline-none focus:border-[#84a98c]"
                    />
                  </div>

                  <div className="p-3 bg-[#f8faf8] rounded-xl border border-[#e8efe8] text-[11px] text-[#5a6a64] space-y-1">
                    <div className="font-semibold text-[#2d3748]">Complimentary Inclusions:</div>
                    <div>• Private Hinoki cedar bath preparation with mineral salts</div>
                    <div>• Organic herbal tea service & seasonal fruit plate</div>
                    <div>• Access to thermal relaxation lounge and salt floatation pool</div>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedTreatment(null)}
                    className="px-4 py-2 bg-[#edf3ed] text-[#5a6a64] text-xs font-medium rounded-xl hover:bg-[#e2ece2] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#84a98c] hover:bg-[#6b9073] text-white text-xs font-semibold rounded-xl shadow-md shadow-[#84a98c]/20 transition-all flex items-center gap-1.5"
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>CONFIRM & SCHEDULE</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
