'use client';
import { useState, useEffect, type ReactNode } from 'react';
import type { GamePhase } from '@/app/types';

import CRTOverlay from './components/crt-overlay';
import PhaseNewsletter from './components/phase-newsletter';
import PhaseLogin from './components/phase-login';
import PhaseGlitch from './components/phase-glitch';
import PhaseTerminal from './components/phase-terminal';
import PhaseLockdown from './components/phase-lockdown';
import { usePathname } from 'next/navigation';

export default function Home() {
  const [phase, setPhase] = useState<GamePhase>('NEWSLETTER');
  const pathname = usePathname();

  useEffect(() => {
    // We will let phase-newsletter handle its own theme changes for the opinion violation
    if (phase === 'NEWSLETTER' && (pathname.startsWith('/articles') || pathname.startsWith('/news'))) {
      document.body.setAttribute('data-theme', 'newsletter');
      document.documentElement.classList.remove('dark');
      return;
    }
    
    if (phase !== 'NEWSLETTER') {
        document.body.setAttribute('data-theme', phase.toLowerCase());
        document.documentElement.classList.add('dark');
    } else {
        document.body.setAttribute('data-theme', 'newsletter');
        document.documentElement.classList.remove('dark');
    }

  }, [phase, pathname]);

  const handlePasswordSuccess = () => {
    setPhase('GLITCH');
    setTimeout(() => {
      setPhase('LOGIN');
    }, 1500);
  };
  
  const handleLoginSuccess = () => {
    setPhase('TERMINAL');
  };

  const handleLockdown = () => {
    setPhase('LOCKDOWN');
  };

  const renderPhase = (): ReactNode => {
    switch (phase) {
      case 'NEWSLETTER':
        return <PhaseNewsletter onPasswordSuccess={handlePasswordSuccess} />;
      case 'LOGIN':
        return <PhaseLogin onLoginSuccess={handleLoginSuccess} />;
      case 'GLITCH':
        return <PhaseGlitch />;
      case 'TERMINAL':
        return <PhaseTerminal onLockdown={handleLockdown} />;
      case 'LOCKDOWN':
        return <PhaseLockdown />;
      default:
        return <PhaseNewsletter onPasswordSuccess={handlePasswordSuccess} />;
    }
  };

  if (pathname.startsWith('/articles') || pathname.startsWith('/news')) {
    return null; // The article/news page will be rendered by its own component
  }

  // Added 'overflow-hidden' to prevent scrollbars from rotated elements
  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-hidden">
      {['LOGIN', 'GLITCH', 'TERMINAL', 'LOCKDOWN'].includes(phase) && <CRTOverlay />}
      {/* Added 'p-4 md:p-8' here to pull the game content away from the screen edges */}
      <div className="relative z-10 p-4 md:p-8">{renderPhase()}</div>
    </main>
  );
}
