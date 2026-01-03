
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function shiftString(str: string, amount: number): string {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        // We only shift alphanumeric characters
        if ((charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122)) {
             result += String.fromCharCode(charCode + amount);
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

/**
 * Encodes a string by processing and shifting it.
 * @param str The string to encode.
 * @returns The encoded string.
 */
export function encode(str: string): string {
  const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return shiftString(processedStr, 5);
}
