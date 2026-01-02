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
    if (pathname.startsWith('/articles') || pathname.startsWith('/news')) {
      document.body.setAttribute('data-theme', 'newsletter');
      document.documentElement.classList.remove('dark');
    } else {
      document.body.setAttribute('data-theme', phase.toLowerCase());
      if (phase === 'NEWSLETTER') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
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

  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
      {['LOGIN', 'GLITCH', 'TERMINAL', 'LOCKDOWN'].includes(phase) && <CRTOverlay />}
      <div className="relative z-10">{renderPhase()}</div>
    </main>
  );
}
