import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function decode(str: string): string {
  if (typeof window === 'undefined') {
    return Buffer.from(str, 'base64').toString('utf8');
  }
  return atob(str);
}
