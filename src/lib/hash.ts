/**
 * Stable 7-character hex "commit hash" for decorative git-log lines.
 * FNV-1a, so the same text always gives the same hash across builds.
 */
export function shortHash(text: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, '0').slice(0, 7);
}
