/**
 * Envio do formulário de contacto via POST /api/contact (Resend).
 * Com anexos: envia multipart/form-data. Sem anexos: envia JSON.
 */

const CONTACT_API = '/api/contact';

/**
 * Envia os dados do formulário para a API de contacto (Resend).
 * @param {Object} data - { nome, email, mensagem, empresa?, telefone?, servico?, porte? }
 * @param {FileList|null} files - anexos (opcional); quando presente, envia como FormData com os ficheiros
 * @returns {Promise<Object>} Resposta JSON com success e message ou id
 */
export async function submitFormData(data, files = null) {
  const hasFiles = files && files.length > 0;

  let body;
  let headers = {};

  if (hasFiles) {
    const formData = new FormData();
    formData.append('nome', data.nome || '');
    formData.append('email', data.email || '');
    formData.append('mensagem', data.mensagem || '');
    formData.append('empresa', data.empresa || '');
    formData.append('telefone', data.telefone || '');
    formData.append('servico', data.servico || '');
    formData.append('porte', data.porte || '');
    for (let i = 0; i < files.length; i++) {
      formData.append('anexos', files[i]);
    }
    body = formData;
    // Não definir Content-Type: o browser define com boundary para multipart
  } else {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify({
      nome: data.nome || '',
      email: data.email || '',
      mensagem: data.mensagem || '',
      empresa: data.empresa || '',
      telefone: data.telefone || '',
      servico: data.servico || '',
      porte: data.porte || '',
    });
  }

  const response = await fetch(CONTACT_API, {
    method: 'POST',
    headers: Object.keys(headers).length ? headers : undefined,
    body,
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error || result.message || 'Erro ao enviar a mensagem.');
  }

  if (result.success === false) {
    throw new Error(result.error || 'Erro ao enviar a mensagem.');
  }

  return result;
}
