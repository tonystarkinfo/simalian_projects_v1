/**
 * SIMALIAN PROJECTS — Utility functions
 * Same logic as original utils.js
 */

export function sanitize(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
