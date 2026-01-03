import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function shiftChar(char: string, shift: number): string {
  const code = char.charCodeAt(0);

  if (code >= 65 && code <= 90) { // Uppercase letters
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  }
  if (code >= 97 && code <= 122) { // Lowercase letters
    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
  }
  return char; // Non-alphabetic characters
}

export function decrypt(str: string): string {
  const shift = -5; // The key to decrypt
  return str.split('').map(char => shiftChar(char, shift)).join('');
}

// Previous Base64 decode function, no longer used for secrets
export function decode(str: string): string {
  if (typeof window === 'undefined') {
    return Buffer.from(str, 'base64').toString('utf8');
  }
  return atob(str);
}
