// Brand logos (simple-icons) and their colour, mapped onto the Gruvbox palette.
import * as simpleIcons from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

/** simple-icons slug → icon, e.g. "typescript" → siTypescript. Undefined if there is none. */
export function brandIcon(slug: string): SimpleIcon | undefined {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
  return (simpleIcons as unknown as Record<string, SimpleIcon | undefined>)[key];
}

export type Tone = 'red' | 'orange' | 'yellow' | 'green' | 'aqua' | 'blue' | 'purple' | 'text';

/** CSS variable for each tone (semantic theme tokens, so a new theme recolours everything). */
export const TONE_VAR: Record<Tone, string> = {
  red: '--color-danger',
  orange: '--color-accent-strong',
  yellow: '--color-accent',
  green: '--color-success',
  aqua: '--color-info',
  blue: '--color-link-visited',
  purple: '--color-tag',
  text: '--color-text',
};

/**
 * Nearest Gruvbox tone for a brand colour (hex without "#"), by hue. Black, white and grey
 * logos (Next.js, Express, OpenJDK…) use the text colour so they stay visible on dark.
 */
export function toneForHex(hex: string): Tone {
  const n = Number.parseInt(hex, 16);
  const r = ((n >> 16) & 255) / 255;
  const g = ((n >> 8) & 255) / 255;
  const b = (n & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const light = (max + min) / 2;
  const delta = max - min;
  const sat = delta === 0 ? 0 : delta / (1 - Math.abs(2 * light - 1));
  if (sat < 0.15 || delta < 0.08) return 'text';

  let hue: number;
  if (max === r) hue = ((g - b) / delta) % 6;
  else if (max === g) hue = (b - r) / delta + 2;
  else hue = (r - g) / delta + 4;
  hue = (hue * 60 + 360) % 360;

  if (hue < 15 || hue >= 345) return 'red';
  if (hue < 40) return 'orange';
  if (hue < 70) return 'yellow';
  if (hue < 160) return 'green';
  if (hue < 200) return 'aqua';
  if (hue < 260) return 'blue';
  return 'purple';
}
