import { cn } from "@/lib/utils";

const CRTOverlay = () => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-50 overflow-hidden animate-flicker",
        "before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(transparent_0,rgba(0,0,0,0.3)_1px,transparent_2px)] before:z-10",
        "after:content-[''] after:absolute after:inset-0 after:rounded-full after:[box-shadow:inset_0_0_100px_black] after:z-10"
      )}
    />
  );
};

export default CRTOverlay;
