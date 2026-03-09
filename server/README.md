# API de contacto SIMALIAN

Backend em Node.js (Express) que recebe o formulário de contacto e envia os dados por e-mail.

## Configuração

1. Copie `.env.example` para `.env` dentro da pasta `server/`.
2. Preencha:
   - **CONTACT_EMAIL** – e-mail que deve receber os contactos.
   - **SMTP_USER** / **SMTP_PASS** – para Gmail use uma [palavra-passe de aplicação](https://myaccount.google.com/apppasswords).

## Executar

```bash
cd server
npm install
npm run dev
```

A API fica em `http://localhost:3001`. O frontend já está preparado: no `.env` da raiz do projeto defina:

```
VITE_CONTACT_API_URL=http://localhost:3001
```

Depois reinicie o front (`npm run dev` na raiz). O formulário de contacto passará a enviar para esta API.
