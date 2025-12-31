'use client';
import { cn } from "@/lib/utils";

const GlitchLetter = ({ letter }: { letter: string }) => {
  return (
    <div className="glitch-container">
      <div className={cn("glitch text-primary font-headline text-9xl")} data-text={letter}>
        {letter}
      </div>
    </div>
  );
};

export default GlitchLetter;
