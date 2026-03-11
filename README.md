# SIMALIAN PROJECTS — Website Institucional de Engenharia Metálica

## Descrição do Projeto

Site institucional multipáginas para a **SIMALIAN PROJECTS**, empresa de engenharia metálica industrial. O site combina estética industrial europeia com funcionalidade técnica robusta, apresentando a empresa como referência no segmento de fabricação, montagem e manutenção de estruturas metálicas.

**Público-alvo:** Grandes indústrias, construtoras, engenheiros e empresas de menor dimensão que necessitam de soluções profissionais de metalurgia.

**Tom da marca:** Clássico, técnico e autoritário — comunicação de engenharia europeia séria.

---

## Stack e Tecnologias

- **React 18** + **Vite 5** — SPA com build otimizado
- **React Router 6** — Rotas e navegação
- **CSS** — Design system com Custom Properties, Grid, Flexbox
- **Font Awesome 6** — Ícones (CDN)
- **Google Fonts (Inter)** — Tipografia
- **Internacionalização** — 4 idiomas: Inglês (en), Espanhol (es), Francês (fr), Catalão (ca)

---

## Estrutura do Projeto

```
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx                 # Rotas, layout, providers
│   ├── main.jsx
│   ├── contexts/
│   │   └── LanguageContext.jsx # Estado do idioma (en, es, fr, ca)
│   ├── components/
│   │   ├── NavFloat.jsx        # Menu flutuante inferior
│   │   ├── Footer.jsx
│   │   ├── ServiceAreaLayout.jsx # Layout de páginas de serviços (cards + modais)
│   │   ├── ModalOverlay.jsx
│   │   ├── CookieBanner.jsx
│   │   ├── LanguageSelector.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing (hero, ciclo, serviços, contacto)
│   │   ├── ServicosPage.jsx    # Catálogo geral de serviços
│   │   ├── ServicoSiderurgica.jsx  # Fabricação metálica / Siderúrgica
│   │   ├── ServicoObra.jsx     # Montagem e Construção
│   │   ├── ServicoMantenimiento.jsx # Manutenção e reparações (8 cards)
│   │   └── ContatoPage.jsx     # Formulário de contacto
│   ├── translations.js         # Textos em en, es, fr, ca
│   ├── styles/
│   │   └── style.css           # Design system completo
│   └── services/
│       └── initEffects.js      # Scroll reveal, contadores, modais, etc.
├── public/
│   └── assets/img/servicos/    # Imagens dos serviços
└── README.md
```

---

## Rotas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | HomePage | Landing: hero, ciclo completo, serviços, contacto |
| `/servicos` | ServicosPage | Catálogo geral de serviços |
| `/siderurgica` | ServicoSiderurgica | Fabricação metálica / Siderúrgica |
| `/construccion` | ServicoObra | Montagem e Construção |
| `/mantenimiento` | ServicoMantenimiento | Manutenção e reparações (8 cards industriais) |
| `/contato` | ContatoPage | Formulário de contacto |

Redirecionamentos: `/servicos/siderurgica` → `/siderurgica`, `/servicos/obra-construccion` → `/construccion`, `/servicos/mantenimiento-reparaciones` → `/mantenimiento`.

---

## Página de Manutención (Mantenimiento)

A secção **Mantenimiento** (`/mantenimiento`) apresenta **8 cards de serviços industriais**, cada um com título, texto curto, pop-up com descrição e listas (Trabajos incluidos, Aplicaciones habituales, etc.). Conteúdo disponível em **4 idiomas** (en, es, fr, ca).

**Cards:**

1. Mantenimiento Eléctrico Industrial  
2. Mantenimiento Mecánico Industrial  
3. Soldadura y Reparaciones en Planta  
4. Soldadura TIG en Acero Inoxidable  
5. Calderería Industrial  
6. Mantenimiento Preventivo Industrial  
7. Intervenciones Técnicas en Planta  
8. Servicios de Mano de Obra Industrial  

---

## Internacionalização

- **Idiomas:** Inglês (en), Espanhol (es), Francês (fr), Catalão (ca)
- **Ficheiro:** `src/translations.js` — objeto por locale com chaves para nav, home, contact, serviços (Siderúrgica, Construcción, Mantenimiento), cards de cada secção e modais
- **Contexto:** `LanguageContext.jsx` — provider com estado `locale` e função `t(key)` para tradução
- **Selector:** `LanguageSelector.jsx` no header para troca de idioma

---

## Scripts

```bash
npm install    # Instalar dependências
npm run api    # Servidor da API de contacto (porta 3001) – deixar a correr
npm run dev    # Servidor de desenvolvimento (Vite, porta 5173)
npm run build  # Build de produção
npm run preview # Pré-visualizar build
```

Para testar o formulário de contacto em local: abre **dois** terminais — num corre `npm run api`, no outro `npm run dev`. O Vite faz proxy de `/api` para o servidor da API.

---

## Design e Acessibilidade

- Paleta: `#006C93` (principal), `#CBD9A5` (secundária), `#00202C` (profundo)
- Tipografia responsiva com `clamp()`
- Scroll reveal, contadores animados, modais com focus trap e teclado (Esc)
- Suporte a `prefers-reduced-motion`
- ARIA e navegação por teclado nos componentes interativos

---

## Formulário de contacto (Resend)

O formulário envia os dados para **POST /api/contact**. O servidor em `server.js` usa a [API Resend](https://resend.com) para enviar o e-mail.

- **Frontend:** `src/services/formService.js` faz `fetch('/api/contact', …)` com JSON. A página de contacto mostra feedback de sucesso/erro.
- **API local:** `server.js` — corre com `npm run api` (porta 3001). O Vite faz proxy de `/api` para este servidor.

**Variáveis de ambiente** (ficheiro `.env` na raiz):

| Variável | Descrição |
|----------|-----------|
| `RESEND_API_KEY` | Chave da API Resend ([resend.com/api-keys](https://resend.com/api-keys)) |
| `RESEND_TO_EMAIL` | E-mail que recebe os contactos |
| `RESEND_FROM` | (Opcional) Remetente; default `onboarding@resend.dev` para testes |

**Testar:** num terminal `npm run api`, noutro `npm run dev`. Abre o site em http://localhost:5173 e envia o formulário de contacto.

---

## Próximos Passos (opcional)

- Página de Engenharia dedicada (atualmente redireciona para home)
- Política de Privacidade e Termos de Uso em páginas próprias
- Imagens reais dos serviços (substituir placeholders)
- Analytics com consentimento (cookie banner já presente)

---

*SIMALIAN PROJECTS © 2026. Todos os direitos reservados.*
