# SIMALIAN PROJECTS — Website Institucional de Engenharia Metálica

## Descrição do Projeto

Site institucional premium multipáginas para a **SIMALIAN PROJECTS**, empresa de engenharia metálica industrial. O site combina estética industrial europeia com funcionalidade técnica robusta, apresentando a empresa como referência no segmento de fabricação, montagem e manutenção de estruturas metálicas.

**Público-alvo:** Grandes indústrias, construtoras, engenheiros e empresas de menor dimensão que necessitam de soluções profissionais de metalurgia.

**Tom da marca:** Clássico, técnico e autoritário — comunicação de engenharia europeia séria.

---

## Funcionalidades Implementadas

### ✅ Páginas Principais

| Rota | Ficheiro | Descrição |
|------|----------|-----------|
| `/` | `index.html` | Landing page com hero video, ciclo completo, segmentação de clientes, portfólio e estatísticas |
| `/servicos.html` | `servicos.html` | Catálogo de 7 categorias de serviços com 20+ modais de detalhes |
| `/engenharia.html` | `engenharia.html` | Dossiê técnico com estudos, materiais, montagem, qualidade, diagramas SVG e downloads |
| `/contato.html` | `contato.html` | Formulário funcional com validação, honeypot anti-spam e feedback visual |

### ✅ Design System
- Paleta de cores: `#006C93` (principal), `#CBD9A5` (secundária), `#FDFDFD` (terciária), `#00202C` (profundo)
- Tipografia: Inter (Google Fonts) com escala responsiva via `clamp()`
- Sistema de espaçamento, sombras, raios e transições via CSS Custom Properties
- Elementos gráficos CAD (linhas, cantos, grelhas, padrões de pontos)

### ✅ Navegação
- **Menu flutuante inferior** com estilo 3D (desktop: pill centralizada; mobile: tab bar full-width)
- Safe area support via `env(safe-area-inset-*)` com fallback
- Estados visuais de active, hover e focus-visible
- Ocultação automática quando o teclado virtual abre (mobile)
- Smooth scroll para âncoras internas

### ✅ Interações e Animações
- **Scroll reveal** via Intersection Observer (desativado em `prefers-reduced-motion`)
- **Efeito cinematográfico** no hero: parallax + escala do vídeo ao scrollar
- **Contadores animados** nas estatísticas (com easing)
- **Cards de serviço** com imagem preview 16:9, hover elevation, ícone overlay e barra de progresso inferior
- **Sistema de modais** completo: focus trap, Esc para fechar, overlay clicável, lock de scroll
- **Galeria de imagens nos modais**: imagem principal + miniaturas com troca interativa (thumbnail switching)
- **Vídeo de fundo** com fallback para imagem estática
- **Logo com animação de respiração** (pulse contínuo subtil)

### ✅ Formulário de Contato
- Campos: nome, empresa, e-mail, telefone, tipo de serviço, dimensão da empresa, mensagem
- Validação em tempo real (blur + input)
- Honeypot anti-spam
- Estados de loading, sucesso e erro no botão de envio
- Dados armazenados via RESTful Table API (`contact_submissions`)
- Fallback gracioso se a API não estiver disponível

### ✅ Acessibilidade
- HTML5 semântico com roles ARIA adequados
- Labels em todos os campos de formulário
- Foco visível (`:focus-visible`) em todos os interativos
- Navegação por teclado completa
- Ordem lógica de tabulação
- `alt` em todas as imagens
- `aria-label`, `aria-current`, `aria-haspopup`, `aria-modal` implementados
- Suporte a `prefers-reduced-motion` (desativa todas as animações)
- Contraste de cores adequado (WCAG 2.1)

### ✅ SEO
- Meta tags `title`, `description` e Open Graph por página
- Schema.org JSON-LD (Organization e Service)
- `sitemap.xml` e `robots.txt`
- URLs distintas por rota
- Alt text descritivo em todas as imagens

### ✅ Performance
- Lazy loading de imagens via `loading="lazy"`
- Vídeo com `preload="metadata"` e reprodução condicional (Intersection Observer)
- Fallback de imagem estática para conexões lentas / `prefers-reduced-data`
- Animações via `transform` e `opacity` (GPU-accelerated)
- CSS Custom Properties para reduzir redundância
- Sem dependências JavaScript externas pesadas (apenas Font Awesome via CDN)

### ✅ Segurança
- Sanitização de dados do formulário (escaping de HTML)
- Honeypot anti-spam
- Sem inline scripts (exceto Schema.org JSON-LD)

---

## Estrutura de Ficheiros

```
├── index.html              # Home — Landing page principal
├── servicos.html            # Serviços — Catálogo com modais e galerias
├── engenharia.html          # Engenharia — Dossiê técnico
├── contato.html             # Contato — Formulário funcional
├── css/
│   └── style.css            # Design system completo
├── js/
│   └── main.js              # JavaScript principal
├── assets/
│   └── img/
│       └── servicos/        # Imagens dos serviços (locais)
│           ├── corte-plasma-laser/   (01.jpg, 02.jpg, 03.jpg)
│           ├── dobra-calandragem/    (01.jpg, 02.jpg, 03.jpg)
│           ├── soldadura-mig-mag-tig/ (01.jpg, 02.jpg, 03.jpg)
│           ├── usinagem-precisao/    (01.jpg, 02.jpg, 03.jpg)
│           ├── produtos-fabricados/  (01.jpg, 02.jpg, 03.jpg)
│           └── placeholder.jpg
├── sitemap.xml              # Sitemap para SEO
├── robots.txt               # Diretivas para crawlers
└── README.md                # Este ficheiro
```

---

## Modelo de Dados

### Tabela: `contact_submissions`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | text | Identificador único (UUID) |
| `nome` | text | Nome do contacto |
| `empresa` | text | Nome da empresa |
| `email` | text | E-mail de contacto |
| `telefone` | text | Telefone de contacto |
| `servico` | text | Tipo de serviço (enum: fabricacao, projetos, montagem, etc.) |
| `porte` | text | Dimensão da empresa (enum: grande, media, pequena, particular) |
| `mensagem` | rich_text | Descrição do projeto |

**Endpoint:** `POST tables/contact_submissions`

---

## URIs Funcionais

| URI | Método | Descrição |
|-----|--------|-----------|
| `/index.html` | GET | Página principal (Home) |
| `/servicos.html` | GET | Catálogo de serviços |
| `/servicos.html#fabricacao` | GET | Âncora para seção Fabricação |
| `/servicos.html#projetos` | GET | Âncora para seção Projetos |
| `/servicos.html#montagem` | GET | Âncora para seção Montagem |
| `/servicos.html#manutencao` | GET | Âncora para seção Manutenção |
| `/servicos.html#tratamentos` | GET | Âncora para seção Tratamentos |
| `/servicos.html#qualidade` | GET | Âncora para seção Qualidade |
| `/servicos.html#complementares` | GET | Âncora para seção Complementares |
| `/engenharia.html` | GET | Dossiê técnico |
| `/engenharia.html#estudos` | GET | Âncora para Estudos Técnicos |
| `/engenharia.html#materiais` | GET | Âncora para Materiais |
| `/engenharia.html#montagem-metodos` | GET | Âncora para Montagem & Métodos |
| `/engenharia.html#qualidade-proc` | GET | Âncora para Qualidade |
| `/engenharia.html#diagramas` | GET | Âncora para Diagramas |
| `/engenharia.html#downloads` | GET | Âncora para Downloads |
| `/contato.html` | GET | Formulário de contato |
| `tables/contact_submissions` | POST | Submissão de formulário |

---

## Funcionalidades Não Implementadas / Próximos Passos

1. **PDFs de download reais** — Os links de download na seção Engenharia são placeholders; necessário criar/carregar ficheiros PDF reais.
2. **Imagens do portfólio reais** — Substituir imagens de stock (Unsplash) por fotografias reais de projetos SIMALIAN.
3. **Vídeo de fundo proprietário** — Substituir o vídeo genérico (Pexels) por vídeo filmado nas instalações da SIMALIAN.
4. **Logo SVG oficial** — Substituir o texto "SIMALIAN" no nav por o logotipo vetorial da empresa.
5. **Página de Política de Privacidade** — Criar página dedicada com política RGPD completa.
6. **Página de Termos de Uso** — Criar página dedicada.
7. **Integração de e-mail** — Conectar o formulário a um serviço de e-mail (ex.: SMTP) para envio de notificações.
8. **Google Analytics / Tag Manager** — Implementar rastreamento (com consentimento do cookie banner).
9. **Service Worker para caching offline** — Melhorar performance com caching de assets estáticos.
10. **Testes automatizados de acessibilidade** — Correr Lighthouse/axe-core e corrigir eventuais problemas.
11. **Internacionalização** — Suporte a inglês e outros idiomas se necessário.
12. **Blog / Notícias** — Secção de artigos técnicos para SEO orgânico.
13. **Dados de contacto reais** — Substituir telefone e e-mail de exemplo por dados reais.

---

## Tecnologias Utilizadas

- **HTML5** semântico
- **CSS3** com Custom Properties, Grid, Flexbox, `clamp()`, `env()`
- **JavaScript** vanilla (ES2020+)
- **Font Awesome 6.5** (CDN) — Ícones
- **Google Fonts — Inter** — Tipografia
- **RESTful Table API** — Armazenamento de dados do formulário
- **SVG** — Diagramas técnicos inline

---

## Compatibilidade

- Chrome 90+, Firefox 90+, Safari 15+, Edge 90+
- iOS Safari 15+, Chrome Android 90+
- Responsivo: Mobile, Tablet, Desktop
- Suporta `prefers-reduced-motion`, `prefers-reduced-data`
- Fallback para `env()` (safe area insets)

---

*SIMALIAN PROJECTS © 2026. Todos os direitos reservados.*
