import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitialsName(fullName?: string) {
  if (!fullName) return ""; // No name given
  const trimmedName = fullName.trim();
  if (!trimmedName) return ""; // Name is just whitespace

  const names = trimmedName.split(" ").filter((n) => n.length > 0); // Remove empty strings

  if (names.length === 0) return ""; // No valid names found

  if (names.length === 1) {
    return names[0][0].toUpperCase(); // Single name initial
  }

  // Multiple names: take first and last initials
  return (names[0][0] + names[names.length - 1][0]).toUpperCase();
}
