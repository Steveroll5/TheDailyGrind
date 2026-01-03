
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Hashes a string using SHA-256.
 * The input string is first converted to lowercase and all non-alphanumeric characters are removed.
 * @param str The string to hash.
 * @returns A promise that resolves to the hex-encoded SHA-256 hash.
 */
export async function hash(str: string): Promise<string> {
  const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (typeof window === 'undefined') {
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(processedStr).digest('hex');
  }
  const encoder = new TextEncoder();
  const data = encoder.encode(processedStr);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}
