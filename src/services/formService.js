/**
 * SIMALIAN PROJECTS — Form submission
 * Same logic as original submitFormData
 */

export async function submitFormData(data) {
  try {
    const response = await fetch('tables/contact_submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Submit failed');
    return await response.json();
  } catch {
    return Promise.resolve();
  }
}
