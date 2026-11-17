// Effects switch (design v2 §7). `f` or the "fx" button in the status bar toggles the banner
// boil, background drift and grain, the sidebar pulse and the blinking cursor.
// - public/scripts/fx-init.js sets <html data-fx> before first paint (saved choice, else
//   "off" for prefers-reduced-motion, else "on").
// - The choice is saved in localStorage and carried across <ClientRouter /> page swaps.

// Module (not a global script), so its constants never clash with other scripts.
export {};

type Fx = 'on' | 'off';
const STORAGE_KEY = 'fx'; // also read by public/scripts/fx-init.js

function current(): Fx {
  return document.documentElement.dataset['fx'] === 'off' ? 'off' : 'on';
}

function apply(state: Fx, doc: Document = document): void {
  doc.documentElement.dataset['fx'] = state;
  for (const button of doc.querySelectorAll<HTMLElement>('[data-fx-toggle]')) {
    button.setAttribute('aria-pressed', String(state === 'on'));
  }
}

function toggle(): void {
  const next: Fx = current() === 'on' ? 'off' : 'on';
  apply(next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage blocked: the choice lasts until the next full page load.
  }
}

function isEditable(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

document.addEventListener('keydown', (event) => {
  if (event.key !== 'f' || event.defaultPrevented) return;
  if (event.ctrlKey || event.metaKey || event.altKey || isEditable(event.target)) return;
  event.preventDefault();
  toggle();
});

document.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('[data-fx-toggle]')) toggle();
});

// The incoming page has no data-fx yet (its fx-init.js does not re-run on a swap): copy it over
// before the swap so nothing flickers.
document.addEventListener('astro:before-swap', (event) => apply(current(), event.newDocument));
document.addEventListener('astro:page-load', () => apply(current()));
