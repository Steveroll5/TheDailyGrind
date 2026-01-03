'use client';
import PhaseTerminal from '../components/phase-terminal';
import CRTOverlay from '../components/crt-overlay';
import { useRouter } from 'next/navigation';

export default function TerminalPage() {
    const router = useRouter();

    const handleLockdown = () => {
        router.push('/lockdown');
    };

  return (
    <>
        <CRTOverlay />
        <div className="relative z-10 p-4 md:p-8">
            <PhaseTerminal onLockdown={handleLockdown} />
        </div>
    </>
  );
}
