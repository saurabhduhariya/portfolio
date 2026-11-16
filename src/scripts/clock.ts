// Status bar clock (visitor's local time, 24h). The <time> stays hidden until this runs,
// so visitors without JS never see a wrong or placeholder time.

const formatter = new Intl.DateTimeFormat(undefined, {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

function render(): void {
  const now = new Date();
  for (const el of document.querySelectorAll<HTMLTimeElement>('time[data-clock]')) {
    el.textContent = formatter.format(now);
    el.dateTime = now.toISOString();
    el.hidden = false;
  }
}

// Tick on the minute boundary, then every minute.
function scheduleTick(): void {
  const msToNextMinute = 60_000 - (Date.now() % 60_000);
  window.setTimeout(() => {
    render();
    scheduleTick();
  }, msToNextMinute);
}

// Fires on first load and after every <ClientRouter /> page swap.
document.addEventListener('astro:page-load', render);
scheduleTick();
