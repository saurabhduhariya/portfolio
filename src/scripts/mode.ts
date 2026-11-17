// Status bar mode: "VISUAL" while a link or button has keyboard focus, "NORMAL" otherwise.
// Purely decorative (the mode segment is aria-hidden). Listeners live on document, so they keep
// working across <ClientRouter /> page swaps.

// The scrollable content pane (<main tabindex="0">) is focusable but is not a control.
const CONTROLS = 'a[href], button, summary, input, select, textarea';

function update(): void {
  const el = document.activeElement;
  const visual = el instanceof HTMLElement && el.matches(CONTROLS) && el.matches(':focus-visible');

  for (const bar of document.querySelectorAll<HTMLElement>('[data-mode-state]')) {
    bar.dataset['modeState'] = visual ? 'visual' : 'normal';
  }
  for (const label of document.querySelectorAll<HTMLElement>('[data-mode]')) {
    label.textContent = visual ? 'VISUAL' : 'NORMAL';
  }
}

document.addEventListener('focusin', update);
// After focusout, activeElement is still the old element; wait until focus has moved.
document.addEventListener('focusout', () => window.setTimeout(update, 0));
document.addEventListener('astro:page-load', update);
