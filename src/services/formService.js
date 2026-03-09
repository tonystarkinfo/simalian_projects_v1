/**
 * Form submission (prioridade):
 * 1. Se VITE_CONTACT_API_URL estiver definido → POST para o seu backend.
 * 2. Senão, se VITE_FORMSPREE_ID for um ID real → Formspree.
 * 3. Senão → API legada (tables/contact_submissions).
 */

const BACKEND_URL = (import.meta.env.VITE_CONTACT_API_URL || '').trim();
const FORMSPREE_ID = (import.meta.env.VITE_FORMSPREE_ID || '').trim();
const FORMSPREE_PLACEHOLDER = 'cole_aqui_o_id';

function useBackend() {
  return BACKEND_URL.length > 0;
}

function useFormspree() {
  return FORMSPREE_ID.length > 0 && FORMSPREE_ID !== FORMSPREE_PLACEHOLDER;
}

export async function submitFormData(data, files = null) {
  if (useBackend()) {
    return sendToBackend(data, files);
  }
  if (useFormspree()) {
    return sendViaFormspree(data, files);
  }
  return sendViaLegacyApi(data);
}

async function sendToBackend(data, files) {
  const url = BACKEND_URL.replace(/\/$/, '') + '/contact';
  const body = files && files.length > 0 ? buildFormData(data, files) : JSON.stringify(data);
  const headers = {};
  if (files && files.length > 0) {
    // FormData: browser sets Content-Type with boundary
  } else {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(url, {
    method: 'POST',
    body,
    headers: Object.keys(headers).length ? headers : undefined,
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.message || err.error || 'Erro ao enviar');
  }
  return response.json().catch(() => ({}));
}

function buildFormData(data, files) {
  const formData = new FormData();
  formData.append('nome', data.nome || '');
  formData.append('empresa', data.empresa || '');
  formData.append('email', data.email || '');
  formData.append('telefone', data.telefone || '');
  formData.append('servico', data.servico || '');
  formData.append('porte', data.porte || '');
  formData.append('mensagem', data.mensagem || '');
  for (let i = 0; i < files.length; i++) {
    formData.append('anexos', files[i]);
  }
  return formData;
}

async function sendViaFormspree(data, files) {
  const formData = new FormData();
  formData.append('_replyto', data.email || '');
  formData.append('_subject', `Contacto SIMALIAN: ${data.servico || 'Formulário'}`);
  formData.append('nome', data.nome || '');
  formData.append('empresa', data.empresa || '');
  formData.append('email', data.email || '');
  formData.append('telefone', data.telefone || '');
  formData.append('servico', data.servico || '');
  formData.append('porte', data.porte || '');
  formData.append('mensagem', data.mensagem || '');

  if (files && files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      formData.append('anexos', files[i]);
    }
  }

  const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || 'Submit failed');
  }
  return response.json();
}

async function sendViaLegacyApi(data) {
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
