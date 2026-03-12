# Relatório de limpeza do projeto

**Data:** 2025-03-11  
**Objetivo:** Remover arquivos, código e recursos não utilizados sem alterar lógica, design ou comportamento do site.

---

## 1. Arquivos removidos

| Item | Motivo |
|------|--------|
| **index-react.html** | Não é referenciado pelo build (Vite usa apenas `index.html` em `rollupOptions.input`). Era uma página HTML alternativa antiga; a aplicação é servida por `index.html` + `main.jsx`. |
| **assets/_backup_imagenes_no_usadas/** (pasta inteira) | Pasta de backup com documentação (`LISTA_IMAGENS_ANALISE.md`) e subpastas de imagens já movidas numa limpeza anterior. Nenhum código do site referencia esta pasta; as imagens em uso estão em `public/assets/` (ou caminhos referenciados no código). |

---

## 2. Código removido

### App.jsx
- **Removido:** Bloco que redirecionava `/index-react.html` para `/` (`<Navigate to="/" replace />`).
- **Motivo:** O ficheiro `index-react.html` foi eliminado; o redirect deixou de ser necessário. As outras rotas que usam `<Navigate>` (servicos/siderurgica, engenharia, etc.) foram mantidas.

### style.css
- **Removido:** Regras `.nav-float__logo-wrap`, `.nav-float__logo-wrap .lazy-img`, `.footer__brand-logo-wrap`, `.footer__brand-logo-wrap .lazy-img`.
- **Motivo:** Essas classes foram usadas apenas quando os logos da navbar e do footer usavam o componente `LazyImage`. Depois de voltar a usar `<img>` direto nesses componentes, nenhum elemento no DOM usa essas classes, portanto o CSS era órfão.

---

## 3. O que não foi removido (e porquê)

- **Dependências (package.json):** Todas são usadas (react, react-router-dom, resend, express, etc. em código; concurrently no script `dev:all`; vite e plugin no build).
- **Ficheiros em src/:** Todos os JS/JSX são importados direta ou indiretamente a partir de `main.jsx` → `App.jsx` e rotas. Nenhum ficheiro órfão.
- **style.css:** É o único CSS da aplicação (importado em `main.jsx`). Não existem outros ficheiros CSS não referenciados.
- **Traduções (translations.js):** As chaves são usadas dinamicamente via `t('key.subkey')`. Remover chaves não referenciadas exigiria uma análise estática completa e poderia quebrar páginas; não foi feita remoção.
- **Imagens em public/:** O repositório não contém as imagens (apenas os caminhos no código). Nenhuma imagem foi apagada do projeto; a pasta `_backup_imagenes_no_usadas` continha apenas backup de imagens já consideradas não usadas numa análise anterior.

---

## 4. Verificação

- Lógica do site: inalterada.
- Design e comportamento: inalterados.
- Rotas e páginas: continuam a funcionar (redirecionamentos restantes mantidos).
- Build: entrada continua a ser `index.html`; nenhuma referência a `index-react.html`.
- Navbar e footer: continuam a usar `<img>` com as classes `.nav-float__logo-img` e `.footer__brand-logo`, cujo CSS foi mantido.

---

## 5. Resumo

| Categoria | Removido |
|----------|----------|
| Ficheiros HTML | 1 (`index-react.html`) |
| Pastas + conteúdo | 1 (`assets/_backup_imagenes_no_usadas/` com .md e subpastas) |
| Blocos de código | 1 redirect em App.jsx |
| Regras CSS | 4 blocos (logo-wrap nav + footer) |

O projeto fica mais limpo, sem quebra de funcionalidades.
