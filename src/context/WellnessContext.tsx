'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Treatment,
  ThermalBath,
  BotanicalOil,
  GuestWellnessSession,
  WellnessContextType
} from '@/types/wellness';

const SEED_TREATMENTS: Treatment[] = [
  {
    id: 'tr-01',
    name: 'Kyoto Hinoki & Marine Thalasso Soak',
    category: 'THALASSOTHERAPY',
    japaneseTitle: '檜 海洋 芳香湯',
    durationMinutes: 90,
    priceUSD: 340,
    description: 'Immersion in seawater drawn from 800m ocean trenches combined with organic Japanese Hinoki cedar wood oils and marine trace minerals.',
    herbalBotanicals: ['Hinoki Wood Oil', 'Deep Sea Magnesium Flakes', 'Kelp Extract'],
    therapeuticBenefits: ['Lymphatic decongestion', 'Cellular remineralization', 'Deep muscle relaxation'],
    temperatureTargetC: 38.5,
  },
  {
    id: 'tr-02',
    name: 'Ayurvedic Shirodhara & Warm Sesame Flow',
    category: 'AYURVEDA',
    japaneseTitle: '天露 額滴 瞑想',
    durationMinutes: 75,
    priceUSD: 295,
    description: 'Continuous warm stream of organic Brahmi and cold-pressed black sesame oil poured gently onto the Ajna chakra center to induce theta brainwaves.',
    herbalBotanicals: ['Organic Brahmi', 'Cold-Pressed Sesame', 'Ashwagandha Extract'],
    therapeuticBenefits: ['Theta wave induction', 'Insomnia alleviation', 'Vagus nerve balance'],
    temperatureTargetC: 37.0,
  },
  {
    id: 'tr-03',
    name: 'Volcanic Basalt Stone & Chamomile Meridian Massage',
    category: 'MINERAL_SOAK',
    japaneseTitle: '玄武岩 温石 経絡',
    durationMinutes: 90,
    priceUSD: 320,
    description: 'Hand-harvested volcanic basalt stones heated in aromatic herbal infusions, placed precisely along spine and meridians for tension release.',
    herbalBotanicals: ['German Chamomile', 'Arnica Montana', 'Jojoba Seed Oil'],
    therapeuticBenefits: ['Fascial release', 'Enhanced micro-circulation', 'Thermal soothing'],
    temperatureTargetC: 52.0,
  },
  {
    id: 'tr-04',
    name: '432 Hz Quartz Crystal Sound Bath & Herbal Steam',
    category: 'SOUND_BATH',
    japaneseTitle: '水晶 響振 薬草蒸気',
    durationMinutes: 60,
    priceUSD: 220,
    description: 'Pure quartz singing bowls tuned to the natural 432 Hz Fibonacci frequency paired with misted French lavender and eucalyptus steam.',
    herbalBotanicals: ['French Lavender', 'Wild Eucalyptus Globulus', 'Neroli Hydrosol'],
    therapeuticBenefits: ['Cellular acoustic resonance', 'Cortisol reduction', 'Deep somatic calm'],
    temperatureTargetC: 41.0,
  },
];

const SEED_BATHS: ThermalBath[] = [
  {
    id: 'bath-01',
    name: 'Mineral Onsen Spring Pavilion',
    mineralProfile: 'Rich in Silicic Acid, Sodium Bicarbonate & Sulfate',
    temperatureC: 41.5,
    phLevel: 7.8,
    ambientVibe: 'Cedar Wood Lattice & Japanese Garden Rain',
    capacityGuests: 8,
    activeGuests: 3,
    recommendedDurationMin: 25,
  },
  {
    id: 'bath-02',
    name: 'Himalayan Pink Salt Floatation Pool',
    mineralProfile: '32% High-Density Magnesium Sulfate & Pink Halite',
    temperatureC: 35.5,
    phLevel: 7.2,
    ambientVibe: 'Subterranean Starlight Ceiling & Sensory Deprivation',
    capacityGuests: 4,
    activeGuests: 1,
    recommendedDurationMin: 45,
  },
  {
    id: 'bath-03',
    name: 'Glacial Cold Plunge Spring',
    mineralProfile: 'Alpine Mountain Springwater (Filtered Birch Charcoal)',
    temperatureC: 8.0,
    phLevel: 7.0,
    ambientVibe: 'Vascular Reset & Contrast Therapy',
    capacityGuests: 2,
    activeGuests: 0,
    recommendedDurationMin: 3,
  },
];

const SEED_BOTANICALS: BotanicalOil[] = [
  {
    id: 'bot-1',
    name: 'French Lavender Fine',
    botanicalName: 'Lavandula angustifolia',
    scentNotes: 'Sweet herbaceous, floral, delicate balsamic undertones',
    primaryBenefit: 'Linalool-induced nervous system sedation and sleep restoration',
    dermalAbsorptionRate: 'Rapid (High Linalyl Acetate)',
    recommendedDrops: 6,
    baseColor: '#e2ddf3',
  },
  {
    id: 'bot-2',
    name: 'Japanese Hinoki Cypress',
    botanicalName: 'Chamaecyparis obtusa',
    scentNotes: 'Dry wood, sacred forest, citrusy clean balsamic pine',
    primaryBenefit: 'Phytoncides boost NK immune cells and lower blood pressure',
    dermalAbsorptionRate: 'Moderate (Monoterpenes)',
    recommendedDrops: 4,
    baseColor: '#84a98c',
  },
  {
    id: 'bot-3',
    name: 'Roman Chamomile Noble',
    botanicalName: 'Chamaemelum nobile',
    scentNotes: 'Crisp green apple, warm sweet straw, soothing floral',
    primaryBenefit: 'Isobutyl angelate calms dermal inflammation and emotional distress',
    dermalAbsorptionRate: 'Gentle (Sensitive Dermal Safe)',
    recommendedDrops: 3,
    baseColor: '#f3d5d8',
  },
  {
    id: 'bot-4',
    name: 'Calabrian Bergamot FCF',
    botanicalName: 'Citrus bergamia',
    scentNotes: 'Sparkling citrus, earl grey tea, sunny floral warmth',
    primaryBenefit: 'Uplifting limbic response without bergapten photosensitivity',
    dermalAbsorptionRate: 'Immediate Transdermal',
    recommendedDrops: 5,
    baseColor: '#faedd8',
  },
];

const LOCAL_STORAGE_KEY = 'sparetreat_os_state_v1';

const WellnessContext = createContext<WellnessContextType | undefined>(undefined);

export function WellnessProvider({ children }: { children: React.ReactNode }) {
  const [treatments] = useState<Treatment[]>(SEED_TREATMENTS);
  const [thermalBaths] = useState<ThermalBath[]>(SEED_BATHS);
  const [botanicals] = useState<BotanicalOil[]>(SEED_BOTANICALS);
  const [soundBathActive, setSoundBathActive] = useState<boolean>(false);

  const [activeSession, setActiveSession] = useState<GuestWellnessSession>({
    id: 'SES-701-VIP',
    guestName: 'Countess Evelyn Montgomery',
    suiteNumber: 'Pavilion Suite 108',
    selectedTherapy: 'Kyoto Hinoki & Marine Thalasso Soak',
    scheduledTime: 'Today at 16:30',
    customBotanicalBlend: 'Hinoki + Roman Chamomile (7 drops total)',
    hrvBaseline: 78,
    cortisolLevelTrend: 'OPTIMAL_RELAXATION',
    status: 'IN_SESSION',
  });

  const [bookedSessions, setBookedSessions] = useState<GuestWellnessSession[]>([
    {
      id: 'SES-701-VIP',
      guestName: 'Countess Evelyn Montgomery',
      suiteNumber: 'Pavilion Suite 108',
      selectedTherapy: 'Kyoto Hinoki & Marine Thalasso Soak',
      scheduledTime: 'Today at 16:30',
      customBotanicalBlend: 'Hinoki + Roman Chamomile',
      hrvBaseline: 78,
      cortisolLevelTrend: 'OPTIMAL_RELAXATION',
      status: 'IN_SESSION',
    },
  ]);

  // LocalStorage Persistence
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.bookedSessions) setBookedSessions(parsed.bookedSessions);
        if (parsed.activeSession) setActiveSession(parsed.activeSession);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ bookedSessions, activeSession }));
    } catch {}
  }, [bookedSessions, activeSession]);

  const bookTreatment = (treatmentName: string, guestName: string, time: string) => {
    const newSession: GuestWellnessSession = {
      id: `SES-${Math.floor(100 + Math.random() * 900)}-RES`,
      guestName: guestName || 'Sanctuary Guest',
      suiteNumber: 'Zen Garden Suite',
      selectedTherapy: treatmentName,
      scheduledTime: time || 'Tomorrow at 10:00',
      customBotanicalBlend: 'Personalized Botanical Formulation',
      hrvBaseline: 72,
      cortisolLevelTrend: 'MODERATE_CALM',
      status: 'SCHEDULED',
    };
    setBookedSessions((prev) => [newSession, ...prev]);
    setActiveSession(newSession);
  };

  const toggleSoundBath = () => {
    setSoundBathActive((prev) => !prev);
  };

  return (
    <WellnessContext.Provider
      value={{
        treatments,
        thermalBaths,
        botanicals,
        activeSession,
        bookedSessions,
        bookTreatment,
        soundBathActive,
        toggleSoundBath,
      }}
    >
      {children}
    </WellnessContext.Provider>
  );
}

export function useWellness() {
  const context = useContext(WellnessContext);
  if (!context) throw new Error('useWellness must be used within WellnessProvider');
  return context;
}
