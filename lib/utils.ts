import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  const now = new Date();
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day

  const isSameDay = (date1: Date, date2: Date) => 
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear();

  const getFormattedTime = (date: Date) => {
      const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const ampm = date.getHours() >= 12 ? 'pm' : 'am';
      return `${hours}:${minutes} ${ampm}`;
  };

  const getDaySuffix = (day: number) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
      }
  };

  const formatFullDate = (date: Date) => {
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      return `${day}${getDaySuffix(day)} ${month} ${year}`;
  };

  const formatWeekDayDate = (date: Date) => {
      const dayOfWeek = date.toLocaleDateString('default', { weekday: 'long' });
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      return `${dayOfWeek}, ${day}${getDaySuffix(day)} ${month}`;
  };

  if (isSameDay(date, now)) {
      return `Today at ${getFormattedTime(date)}`;
  }

  const yesterday = new Date(now.getTime() - oneDay);
  if (isSameDay(date, yesterday)) {
      return `Yesterday at ${getFormattedTime(date)}`;
  }

  const oneWeekAgo = new Date(now.getTime() - 7 * oneDay);
  if (date > oneWeekAgo) {
      return `${formatWeekDayDate(date)} at ${getFormattedTime(date)}`;
  }

  return `${formatFullDate(date)} at ${getFormattedTime(date)}`;
}