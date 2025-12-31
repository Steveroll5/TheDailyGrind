
'use client';

import { cn } from "@/lib/utils";

type RedactedProps = {
  children: React.ReactNode;
  className?: string;
};

const Redacted = ({ children, className }: RedactedProps) => {
  return (
    <span
      className={cn(
        "relative inline-block text-transparent bg-foreground select-none",
        "after:content-[attr(data-content)] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:text-foreground after:mix-blend-difference after:animate-pulse",
        className
      )}
      data-content={children}
    >
      {children}
    </span>
  );
};

export default Redacted;
