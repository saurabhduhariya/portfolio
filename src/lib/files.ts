import { existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * True if `publicPath` (e.g. "/resume/resume.pdf") exists in public/.
 * Runs at build time only; the build always runs from the project root.
 */
export function publicFileExists(publicPath: string): boolean {
  return existsSync(join(process.cwd(), 'public', publicPath));
}
