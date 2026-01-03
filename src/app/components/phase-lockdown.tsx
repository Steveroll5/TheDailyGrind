import { decrypt } from "@/lib/utils";

const PhaseLockdown = () => {
  const mailTo = `mailto:${decrypt('xjsnfwqfsfljw.pwzaxnnsijzxywnjx@lqfnq.htq')}?subject=${encodeURIComponent(decrypt('N FR UWY YM YMJ STNXY'))}`;
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-8 text-center animate-pulse-alarm">
      <div className="font-code text-glow space-y-4">
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold">
          🚨 TIER 5 CRITICAL VIOLATION 🚨
        </h1>
        <p className="text-2xl md:text-4xl">
          CODE: MENTION_OF_REDACTED_ENTITY
        </p>
        <p className="text-3xl md:text-5xl">
          STATUS: <span className="font-bold">TERMINATED IMMEDIATELY.</span>
        </p>
      </div>

      <div className="mt-24 text-center font-code text-glow">
        <p className="text-xl md:text-2xl text-foreground/70">
          APPEAL PROCESS (Surviving Site Managers Only)
        </p>
        <a 
          href={mailTo}
          className="mt-2 inline-block text-lg md:text-xl text-foreground/90 underline hover:text-foreground transition-colors"
        >
          &gt; INITIATE APPEAL
        </a>
      </div>
    </div>
  );
};

export default PhaseLockdown;
