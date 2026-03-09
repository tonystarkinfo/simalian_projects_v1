require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Multer: anexos em memória (máx. 10 MB no total)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB por ficheiro
});

app.use(cors());
app.use(express.json());

// Transporte de e-mail (Gmail exemplo; ajuste para outro SMTP)
function createTransport() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    console.warn('SMTP_USER ou SMTP_PASS não definidos – e-mails não serão enviados.');
    return null;
  }
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user, pass },
  });
}

const transporter = createTransport();

function buildEmailHtml(data) {
  return `
    <h2>Novo contacto do site SIMALIAN</h2>
    <p><strong>Nome:</strong> ${data.nome || '-'}</p>
    <p><strong>Empresa:</strong> ${data.empresa || '-'}</p>
    <p><strong>E-mail:</strong> ${data.email || '-'}</p>
    <p><strong>Telefone:</strong> ${data.telefone || '-'}</p>
    <p><strong>Serviço:</strong> ${data.servico || '-'}</p>
    <p><strong>Porte:</strong> ${data.porte || '-'}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${(data.mensagem || '-').replace(/\n/g, '<br>')}</p>
  `;
}

// POST /contact – aceita JSON ou multipart/form-data (com anexos)
app.post('/contact', upload.array('anexos', 5), async (req, res) => {
  try {
    let data = {};
    if (req.is('application/json')) {
      data = req.body;
    } else if (req.is('multipart/form-data')) {
      data = {
        nome: req.body.nome,
        empresa: req.body.empresa,
        email: req.body.email,
        telefone: req.body.telefone,
        servico: req.body.servico,
        porte: req.body.porte,
        mensagem: req.body.mensagem,
      };
    }

    const to = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    if (!to) {
      return res.status(500).json({
        error: 'CONTACT_EMAIL ou SMTP_USER não definidos no servidor.',
      });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject: `Contacto SIMALIAN: ${data.servico || 'Formulário'}`,
      html: buildEmailHtml(data),
      replyTo: data.email || undefined,
    };

    if (req.files && req.files.length > 0) {
      mailOptions.attachments = req.files.map((f) => ({
        filename: f.originalname || 'anexo',
        content: f.buffer,
      }));
    }

    if (transporter) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Dados do contacto (e-mail não enviado):', data);
    }

    res.json({ success: true, message: 'Mensagem recebida.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Erro ao processar o pedido.',
      message: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`API a correr em http://localhost:${PORT}`);
});
