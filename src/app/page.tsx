'use client';
import { useState, useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import CRTOverlay from './components/crt-overlay';
import PhaseNewsletter from './components/phase-newsletter';
import PhaseGlitch from './components/phase-glitch';

export default function Home() {
  const [showGlitch, setShowGlitch] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only manage theme for the home page (newsletter)
    if (pathname === '/') {
      document.body.setAttribute('data-theme', 'newsletter');
      document.documentElement.classList.remove('dark');
    }
  }, [pathname]);

  const handlePasswordSuccess = () => {
    setShowGlitch(true);
    setTimeout(() => {
      router.push('/login');
    }, 1500);
  };
  
  if (showGlitch) {
    return (
      <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
        <CRTOverlay />
        <div className="relative z-10 p-4 md:p-8">
            <PhaseGlitch />
        </div>
      </main>
    );
  }
  
  // Only render newsletter on the root path
  if (pathname === '/') {
    return (
        <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
            <div className="relative z-10">
                <PhaseNewsletter onPasswordSuccess={handlePasswordSuccess} />
            </div>
        </main>
    );
  }

  return null;
}
