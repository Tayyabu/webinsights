import { twMerge, type ClassNameValue } from "tailwind-merge";
import clsx from "clsx";

export function cn(...classNames: ClassNameValue[]) {
  return clsx(twMerge(...classNames));
}

export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

export function capitalize(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
