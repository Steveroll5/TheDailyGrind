'use client';
import PhaseLockdown from '../components/phase-lockdown';
import CRTOverlay from '../components/crt-overlay';

export default function LockdownPage() {
  return (
    <>
        <CRTOverlay />
        <div className="relative z-10 p-4 md:p-8">
            <PhaseLockdown />
        </div>
    </>
  );
}
