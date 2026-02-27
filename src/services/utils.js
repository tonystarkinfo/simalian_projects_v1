/**
 * Utility functions — sanitize for form output.
 */

export function sanitize(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
