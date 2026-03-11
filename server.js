/**
 * Servidor local para POST /api/contact – envia e-mail via Resend (com anexos).
 * Variáveis de ambiente (.env): RESEND_API_KEY, RESEND_TO_EMAIL.
 * Uso: npm run api (porta 3001). O Vite faz proxy de /api para aqui.
 */

import 'dotenv/config';
import express from 'express';
import multer from 'multer';
import { Resend } from 'resend';

const app = express();
const PORT = process.env.API_PORT || 3001;

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.RESEND_TO_EMAIL || 'comercial@simalian.com';
const FROM_EMAIL = process.env.RESEND_FROM || 'Site <onboarding@resend.dev>';

// Multer: anexos em memória (máx. 5 ficheiros, 10 MB cada)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

app.use(express.json());

function escapeHtml(text) {
  if (typeof text !== 'string') return '-';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildEmailHtml(data) {
  const { nome = '-', email = '-', mensagem = '-', empresa = '-', telefone = '-', servico = '-', porte = '-' } = data;
  return `
    <h2>Novo contacto do site</h2>
    <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(empresa)}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(telefone)}</p>
    <p><strong>Serviço:</strong> ${escapeHtml(servico)}</p>
    <p><strong>Porte:</strong> ${escapeHtml(porte)}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${escapeHtml(mensagem).replace(/\n/g, '<br>')}</p>
  `;
}

// Aceita JSON (sem anexos) ou multipart/form-data (com anexos)
app.post('/api/contact', upload.array('anexos', 5), async (req, res) => {
  try {
    const body = req.body || {};
    const nome = (body.nome || '').trim();
    const email = (body.email || '').trim();
    const mensagem = (body.mensagem || '').trim();

    if (!nome || !email || !mensagem) {
      return res.status(400).json({
        success: false,
        error: 'Campos obrigatórios: nome, email e mensagem.',
      });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'RESEND_API_KEY não definida no .env',
      });
    }

    const attachments = (req.files || []).map((f) => ({
      filename: f.originalname || 'anexo',
      content: f.buffer,
    }));

    const emailPayload = {
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Contacto do site: ${nome}`,
      html: buildEmailHtml({
        nome,
        email,
        mensagem,
        empresa: body.empresa,
        telefone: body.telefone,
        servico: body.servico,
        porte: body.porte,
      }),
    };
    if (attachments.length > 0) emailPayload.attachments = attachments;

    const { data: sendData, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2));
      const msg = error.message || 'Erro ao enviar e-mail.';
      return res.status(500).json({
        success: false,
        error: msg,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Mensagem recebida.',
      id: sendData?.id,
    });
  } catch (err) {
    console.error('API contact error:', err?.stack || err);
    res.status(500).json({
      success: false,
      error: err.message || 'Erro ao processar o pedido.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`API de contacto a correr em http://localhost:${PORT}`);
});
