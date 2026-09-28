import type { Metadata } from 'next';
import './globals.css';
import { WellnessProvider } from '@/context/WellnessContext';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'SpaRetreat Zen — Luxury Thermal Spa & Thalassotherapy Sanctuary',
  description:
    'Titan #45: Holistic thermal wellness retreat operating system, Movement #16 Pastel Soft Aesthetic, Japanese Hinoki onsen springs, botanical apothecary, and circadian HRV telemetry.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-[#f7f9f6] text-[#2d3748]">
        <WellnessProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </WellnessProvider>
      </body>
    </html>
  );
}
