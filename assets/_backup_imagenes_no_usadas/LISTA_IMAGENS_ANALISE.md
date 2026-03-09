# Análise de imagens – limpeza segura

## Imagens UTILIZADAS pelo site (não remover)

Referências encontradas em: `index.html`, `src/**/*.jsx`, `src/**/*.css`.

### Raiz servicos
- `foto1.png` – HomePage (card siderurgica)
- `foto2.png` – HomePage (card construccion)
- `Foto3.png` – HomePage (card mantenimiento)

### imagens-logos
- `Logo_maior.png` – Footer
- `Nome+logo.png` – NavFloat

### corte-plasma-laser
- `01.jpg`, `02.jpg`, `03.jpg` – ServicosPage (cards + modal)

### dobra-calandragem
- `01.jpg`, `02.jpg`, `03.jpg` – ServicosPage (cards + modal)

### soldadura-mig-mag-tig
- `01.jpg`, `02.jpg`, `03.jpg` – ServicosPage (cards + modal)

### imagens-siderurgica
- `TubulaciónIndustrial1.jpg`, `TubulaciónIndustrial2.jpg`
- `EstructurasMetálicas1.jpg`, `EstructurasMetálicas2.jpg`, `EstructurasMetálicas3.jpg`
- `PlataformasPasarelasProteccionesIndustriales1.jpeg`, `PlataformasPasarelasProteccionesIndustriales22.jpeg`
- `CaldereríaMecano-soldadura.jpg`, `CaldereríaMecano-soldadura2.jpg`
- `Depósitosanques.jpg`, `Depósitosytanque2.jpg`
- `ReparacionesRefuerzos.jpg`, `ReparacionesRefuerzos2.jpg`, `ReparacionesRefuerzos3.jpg`

### contrutione (Construcción / Obra)
- `CubiertasMetálicasMarquesinas1.jpg`, `CubiertasMetálicasMarquesinas2.jpg`
- `EscalerasMetálicas1.jpg`, `EscalerasMetálicas2.jpg`
- `BarandillasPasamanosProtecciones1.jpg`, `BarandillasPasamanosProtecciones2.jpg`
- `CerramientosVallasPuertMetálicas1.jpg`, `CerramientosVallasPertasMetálicas2.jpg`
- `RefuerzosEstructuralesReparacionesObra.jpg`, `RefuerzosEstructuralesReparaciones2.jpg`
- `Entreplantas.jpg`, `Entreplantas2.jpg`
- `HerrajesPlacas.jpg`

### Imagens_simalian (Mantenimiento)
- `eletrecista1.png`, `eletricista2.png`, `eletricista3.png`
- `mecanica.jpg`, `mecanico2.jpg`, `mecanico3.jpg`
- `SoldadurayReparacionesPlanta1.jpg`
- `soldatig1.png`, `tig2.jpg`, `tig3.jpg`
- `caldeira.jpg`, `caldeira2.jpg`, `cladeira3.jpg`
- `MantenimientoPreventivoIndustrial1.jpg`, `MantenimientoPreventivoIndustrial2.jpg`
- `planta.png`, `planta2.png`
- `maodeobra.jpg`, `maodeobra2.jpg`, `maodeobra3.png`

### Favicon (fora de assets)
- `index.html` referencia `/Logo_simalian.png` (ficheiro em `public/` na build).

---

## Imagens NÃO UTILIZADAS (movidas para backup)

Nenhuma referência em HTML, CSS, JS ou componentes.

| Pasta / ficheiro | Motivo |
|------------------|--------|
| `servicos/placeholder.jpg` | Nunca referenciado no código |
| `imagens-logos/Logo_simalian.png` | Favicon usa `/Logo_simalian.png` (public), não este path |
| `imagens-logos/Nome.png` | Não referenciado (usa-se `Nome+logo.png`) |
| `imagens-logos/Nome_logo.png` | Não referenciado |
| `imagens-siderurgica/PlataformasPasarelasProteccionesIndustriales122.jpg` | Cards usam 1.jpeg e 22.jpeg |
| `imagens-siderurgica/PlataformasPasarelasProteccionesIndustriales2.jpg` | Cards usam 1.jpeg e 22.jpeg |
| `produtos-fabricados/01.jpg`, `02.jpg`, `03.jpg` | Nenhuma página referencia esta pasta |
| `usinagem-precisao/01.jpg`, `02.jpg`, `03.jpg`, `imagem_teste.png` | Nenhuma página referencia esta pasta |

---

## Estrutura das pastas principais (mantida)

- `assets/img/servicos/contrutione`
- `assets/img/servicos/Imagens_simalian`
- `assets/img/servicos/imagens-siderurgica`
- `assets/img/servicos/corte-plasma-laser`
- `assets/img/servicos/dobra-calandragem`
- `assets/img/servicos/soldadura-mig-mag-tig`
- `assets/img/servicos/imagens-logos`

Nenhum nome de imagem em uso foi alterado. Nenhum caminho no código foi alterado.

---

## Ações realizadas

- Todas as imagens listadas como **não utilizadas** foram **movidas** (não apagadas) para:
  `assets/_backup_imagenes_no_usadas/`
  com subpastas: `servicos/`, `imagens-logos/`, `imagens-siderurgica/`, `produtos-fabricados/`, `usinagem-precisao/`.

- **Total movido:** 13 ficheiros de imagem.

---

## Verificação recomendada

Antes de apagar o backup:

1. Executar o site (`npm run dev`) e verificar:
   - Home: fotos dos 3 cards (Siderúrgica, Construcción, Mantenimiento).
   - Serviços: cards Corte, Conformação, Soldadura e respetivos modais.
   - Siderúrgica: todos os cards e galerias (tubulação, estruturas, plataformas, caldeiraria, depósitos, reparos).
   - Construcción: todos os cards e galerias.
   - Mantenimiento: todos os cards e galerias.
   - Footer e NavFloat: logos.
2. Confirmar que nenhum card ficou sem imagem nem com imagem partida.

Depois de confirmar que está tudo correto, pode **remover definitivamente** a pasta `assets/_backup_imagenes_no_usadas` (ou apenas o seu conteúdo) para reduzir ainda mais o tamanho do projeto.
