// Optional keyboard and swipe shortcuts. Every action here is also a normal link,
// so the site works fully without this script.
//
//   j / k         next / previous section (order of the file tree)
//   1-9           jump to section N
//   h / l, ← / →  previous / next project (only where the page has rel="prev"/"next" links)
//   swipe ← / →   same as l / h on touch screens
//
// Bundled module script: runs once. With <ClientRouter /> the listeners stay attached
// across page swaps and always read the current DOM.
import { navigate } from 'astro:transitions/client';

const SWIPE_MIN_DISTANCE = 60; // px
const SWIPE_MAX_SLOPE = 0.5; // |dy| / |dx|, keeps vertical scrolling from counting as a swipe
const SWIPE_EDGE = 24; // px; swipes starting this close to a screen edge belong to the OS back gesture

function isEditable(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

function sectionLinks(): HTMLAnchorElement[] {
  return [...document.querySelectorAll<HTMLAnchorElement>('a[data-nav-order]')];
}

function relLink(rel: 'prev' | 'next'): HTMLAnchorElement | null {
  return document.querySelector<HTMLAnchorElement>(`a[rel="${rel}"]`);
}

function go(link: HTMLAnchorElement | null | undefined): boolean {
  if (!link || link.pathname === window.location.pathname) return false;
  void navigate(link.pathname);
  return true;
}

function sectionTarget(key: string): HTMLAnchorElement | undefined {
  const links = sectionLinks();
  if (links.length === 0) return undefined;
  const current = links.findIndex((link) => link.getAttribute('aria-current') === 'page');

  if (key === 'j') return links[Math.min(current + 1, links.length - 1)];
  if (key === 'k') return links[Math.max(current - 1, 0)];
  if (/^[1-9]$/.test(key)) return links[Number(key) - 1];
  return undefined;
}

document.addEventListener('keydown', (event) => {
  if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;
  if (isEditable(event.target)) return;

  let link: HTMLAnchorElement | null | undefined;
  if (event.key === 'h' || event.key === 'ArrowLeft') link = relLink('prev');
  else if (event.key === 'l' || event.key === 'ArrowRight') link = relLink('next');
  else link = sectionTarget(event.key);

  if (go(link)) event.preventDefault();
  else scrollPane(event);
});

// The page never scrolls (single-screen layout), so scrolling keys pressed while focus is
// outside the content pane scroll the pane instead. Inside the pane the browser does it natively.
const LINE_STEP = 40; // px per arrow press, close to native

function scrollPane(event: KeyboardEvent): void {
  const pane = document.querySelector<HTMLElement>('[data-scroll-pane]');
  if (!pane || (event.target instanceof Node && pane.contains(event.target))) return;
  if (event.target instanceof HTMLButtonElement && event.key === ' ') return;

  const page = pane.clientHeight * 0.9;
  const deltas: Record<string, number> = {
    ArrowDown: LINE_STEP,
    ArrowUp: -LINE_STEP,
    PageDown: page,
    PageUp: -page,
    ' ': event.shiftKey ? -page : page,
  };

  if (event.key === 'Home') pane.scrollTop = 0;
  else if (event.key === 'End') pane.scrollTop = pane.scrollHeight;
  else if (event.key in deltas) pane.scrollBy({ top: deltas[event.key] ?? 0 });
  else return;
  event.preventDefault();
}

let swipeStart: { x: number; y: number } | null = null;

document.addEventListener(
  'touchstart',
  (event) => {
    const touch = event.touches[0];
    const ignored = event.target instanceof Element && event.target.closest('[data-swipe-ignore]');
    const nearEdge =
      touch !== undefined &&
      (touch.clientX < SWIPE_EDGE || touch.clientX > window.innerWidth - SWIPE_EDGE);
    swipeStart =
      event.touches.length === 1 && touch && !ignored && !nearEdge
        ? { x: touch.clientX, y: touch.clientY }
        : null;
  },
  { passive: true },
);

document.addEventListener(
  'touchend',
  (event) => {
    const touch = event.changedTouches[0];
    const start = swipeStart;
    swipeStart = null;
    if (!start || !touch) return;

    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < SWIPE_MIN_DISTANCE || Math.abs(dy) > Math.abs(dx) * SWIPE_MAX_SLOPE) return;
    go(relLink(dx < 0 ? 'next' : 'prev'));
  },
  { passive: true },
);

// Keep the current mobile tab visible: centre it in the horizontal tab row after each page load.
document.addEventListener('astro:page-load', () => {
  const scroller = document.querySelector<HTMLElement>('[data-tabs-scroller]');
  const current = scroller?.querySelector<HTMLElement>('[aria-current="page"]');
  if (!scroller || !current) return;
  scroller.scrollLeft = current.offsetLeft - (scroller.clientWidth - current.offsetWidth) / 2;
});
