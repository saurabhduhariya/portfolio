// Banner print-in plays once per visit (design v2 §4.3).
// - In-site navigation (<ClientRouter />): mark the incoming page before it is shown, so the
//   new banner never replays the animation.
// - Later full page loads in the same tab: sessionStorage remembers it was played. This script
//   may run just after the first paint; then the animation simply finishes at once.

// Module (not a global script), so its constants never clash with other scripts.
export {};

const SESSION_KEY = 'banner-printed';
const root = document.documentElement;

try {
  if (sessionStorage.getItem(SESSION_KEY)) root.dataset['bannerSeen'] = '';
  else sessionStorage.setItem(SESSION_KEY, '1');
} catch {
  // Storage blocked (private mode settings): the animation just plays on every full load.
}

document.addEventListener('astro:before-swap', (event) => {
  event.newDocument.documentElement.dataset['bannerSeen'] = '';
});
