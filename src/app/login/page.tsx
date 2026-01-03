'use client';
import PhaseLogin from '../components/phase-login';
import CRTOverlay from '../components/crt-overlay';

export default function LoginPage() {
  return (
    <>
        <CRTOverlay />
        <div className="relative z-10 p-4 md:p-8">
            <PhaseLogin />
        </div>
    </>
  );
}
