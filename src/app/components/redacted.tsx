
'use client';

import { cn } from "@/lib/utils";
import { deobfuscate } from "@/lib/utils";

type RedactedProps = {
  children: React.ReactNode;
  className?: string;
};

const Redacted = ({ children, className }: RedactedProps) => {
  // We deobfuscate here to show the word, but the animation and styling hide it.
  const content = typeof children === 'string' ? deobfuscate(children) : children;

  return (
    <span
      className={cn(
        "relative inline-block text-transparent bg-foreground select-none",
        "after:content-[attr(data-content)] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:text-foreground after:mix-blend-difference after:animate-pulse",
        className
      )}
      data-content={children?.toString()}
    >
      {children}
    </span>
  );
};

export default Redacted;
