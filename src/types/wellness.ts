export type TherapyCategory = 'THALASSOTHERAPY' | 'AYURVEDA' | 'MINERAL_SOAK' | 'SOUND_BATH' | 'AROMATHERAPY';

export interface Treatment {
  id: string;
  name: string;
  category: TherapyCategory;
  japaneseTitle: string;
  durationMinutes: number;
  priceUSD: number;
  description: string;
  herbalBotanicals: string[];
  therapeuticBenefits: string[];
  temperatureTargetC: number;
}

export interface ThermalBath {
  id: string;
  name: string;
  mineralProfile: string;
  temperatureC: number;
  phLevel: number;
  ambientVibe: string;
  capacityGuests: number;
  activeGuests: number;
  recommendedDurationMin: number;
}

export interface BotanicalOil {
  id: string;
  name: string;
  botanicalName: string;
  scentNotes: string;
  primaryBenefit: string;
  dermalAbsorptionRate: string;
  recommendedDrops: number;
  baseColor: string;
}

export interface GuestWellnessSession {
  id: string;
  guestName: string;
  suiteNumber: string;
  selectedTherapy: string;
  scheduledTime: string;
  customBotanicalBlend: string;
  hrvBaseline: number;
  cortisolLevelTrend: 'SIGNIFICANT_DROP' | 'MODERATE_CALM' | 'OPTIMAL_RELAXATION';
  status: 'SCHEDULED' | 'IN_SESSION' | 'COMPLETED';
}

export interface WellnessContextType {
  treatments: Treatment[];
  thermalBaths: ThermalBath[];
  botanicals: BotanicalOil[];
  activeSession: GuestWellnessSession;
  bookedSessions: GuestWellnessSession[];
  bookTreatment: (treatmentName: string, guestName: string, time: string) => void;
  soundBathActive: boolean;
  toggleSoundBath: () => void;
}
