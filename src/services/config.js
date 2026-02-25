/**
 * SIMALIAN PROJECTS — Configuration
 * Same logic as original config.js
 */

export const CONFIG = {
  reducedMotion: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  reducedData: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-data: reduce)').matches,
  isTouchDevice: typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0),
};
