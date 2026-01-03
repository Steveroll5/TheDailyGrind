
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function shiftString(str: string, shift: number): string {
  return String.fromCharCode(
    ...str.split('').map(char => {
      const code = char.charCodeAt(0);
      // Only shift printable ASCII characters
      if (code >= 32 && code <= 126) {
        return ((code - 32 + shift) % 95) + 32;
      }
      return code; // Return non-ASCII characters unchanged
    })
  );
}

const SHIFT_AMOUNT = 31;

export function obfuscate(str: string): string {
  return shiftString(str, SHIFT_AMOUNT);
}

export function deobfuscate(str: string): string {
  return shiftString(str, 95 - SHIFT_AMOUNT);
}
