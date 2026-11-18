// "copy" buttons ([data-copy="text"]): copy the text, show "copied ✓" for 2 s and announce it
// to screen readers through the sibling [data-copy-status] live region.
// One listener on document, so it keeps working across <ClientRouter /> page swaps.
export {};

const RESET_MS = 2000;
const timers = new WeakMap<HTMLElement, number>();

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API missing or blocked (insecure context, permissions): old fallback.
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.append(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}

function show(button: HTMLElement, label: string, announce: string, copied: boolean): void {
  const labelEl = button.querySelector<HTMLElement>('[data-copy-label]');
  const status = button.parentElement?.querySelector<HTMLElement>('[data-copy-status]');
  if (labelEl) labelEl.textContent = label;
  if (status) status.textContent = announce;
  if (copied) button.dataset['copied'] = '';
  else delete button.dataset['copied'];
}

document.addEventListener('click', async (event) => {
  const button =
    event.target instanceof Element ? event.target.closest<HTMLElement>('[data-copy]') : null;
  if (!button) return;

  const text = button.dataset['copy'] ?? '';
  const ok = text !== '' && (await copyText(text));
  show(button, ok ? 'copied ✓' : 'copy failed', ok ? `Copied ${text}` : 'Copy failed', ok);

  window.clearTimeout(timers.get(button));
  timers.set(
    button,
    window.setTimeout(() => show(button, 'copy', '', false), RESET_MS),
  );
});
