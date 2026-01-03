
'use client';
import Image from 'next/image';

const PhaseJumpscare = () => {
  return (
    <div className="fixed inset-0 w-full h-screen bg-black z-[100] flex items-center justify-center overflow-hidden animate-jumpscare-flash">
      <Image
        src="/jumpscare.jpg"
        alt="A horrifying mechanical monster"
        layout="fill"
        objectFit="cover"
        className="animate-jumpscare-glitch"
      />
    </div>
  );
};

export default PhaseJumpscare;
