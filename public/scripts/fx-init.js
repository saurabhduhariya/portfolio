// Sets <html data-fx="on|off"> before the first paint, so effects never flash on and off.
// Loaded as a tiny blocking same-origin script (the CSP forbids inline scripts).
// Saved choice (`f` key / fx button) wins; otherwise effects are off for reduced-motion users.
(function () {
  var state = null;
  try {
    state = localStorage.getItem('fx');
  } catch (e) {
    // storage blocked: fall back to the motion preference
  }
  if (state !== 'on' && state !== 'off') {
    state = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'off' : 'on';
  }
  document.documentElement.setAttribute('data-fx', state);
})();
