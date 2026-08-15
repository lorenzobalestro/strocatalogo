# S.T.R.O — Catálogo Digital

Documentação da estrutura e do funcionamento do projeto contido na pasta `strocatalogo-main`. É um **catálogo digital estático** (site puro em HTML/CSS/JS, sem backend, sem build, sem dependências de npm) para uma loja/revenda de tênis e roupas ("S.T.R.O"), com vendas fechadas via WhatsApp.

> Observação: o `.zip`/repositório baixado contém uma pasta `strocatalogo-main` dentro de outra pasta `strocatalogo-main` (duplicação comum de downloads do GitHub). O projeto real, descrito abaixo, é o conteúdo desta pasta interna.

---

## 1. Visão geral

O site tem **duas versões visuais** do mesmo catálogo, ligadas por um botão de troca de tema:

| Versão | Entrada | Tema | Categorias |
|---|---|---|---|
| Modo claro (principal) | `index.html` | Claro (fundo `#f3f3f5`) | Sneakers / Clothes |
| Modo escuro | `escuro/escuro.html` | Escuro | Audio DJ 1 / Audio DJ 2 / Audio DJ 3 (dados de exemplo/placeholder) |

Ambas compartilham a mesma arquitetura: hero animado no topo, barra de filtros fixa (pills), seções de catálogo com grid de cards, um **drawer** lateral de detalhes do produto e um **drawer** de carrinho de compras, cujo checkout final é feito via link do WhatsApp.

Não há preços reais nem carrinho de compra funcional em termos de pagamento — tudo é "consulte no WhatsApp" (número `+55 54 99743141`, aparece como `wa.me/555499743141` nos links).

---

## 2. Estrutura de arquivos

```
strocatalogo-main/
├── index.html              Página principal (modo claro) — Sneakers e Clothes
├── script.js                Lógica JS do modo claro (catálogo, filtros, carrinho, animações)
├── style.css                 Estilos do modo claro
│
├── escuro/
│   ├── escuro.html           Página alternativa (modo escuro) — Audio DJ
│   ├── script-escuro.js      Lógica JS do modo escuro (mesma estrutura, dados de Audio DJ)
│   └── style-escuro.css      Estilos do modo escuro
│
├── imagensPI/                13 imagens usadas na animação do herói (hero) da home
│   └── *.png                 (ex.: Aj4testeUP.png, Sampler.png, beluga.png, hd25novo.png...)
│
└── imagensShoes/              ~184 imagens de produtos (um PNG por tênis/cor cadastrado no catálogo)
    └── *.png                  (ex.: sambablack.png, yz350beluga.png, j11concord.png...)
```

Não há `package.json`, build tool, framework ou dependências instaladas — é HTML/CSS/JS "vanilla" servido diretamente como arquivo estático. A única biblioteca externa é o **GSAP** (via CDN, `gsap.min.js`), usada nas animações do hero.

---

## 3. `index.html` — estrutura da página

- **Preload veil**: tela de carregamento inicial ("S.T.R.O — CARREGANDO CATÁLOGO").
- **Hero (`.hero-page1`)**: título gigante "S.T.R.O" com efeito de texto sólido + contorno (`mix-blend-mode: difference`), e um tênis (`#heroSneaker`) que cruza a tela em loop, trocando de imagem a cada ciclo (imagens vindas de `imagensPI/`).
- **Botão de troca de tema** (`#themeToggleBtn`): link para `escuro/escuro.html`.
- **Barra de filtros (`.filter-bar`)**: pills fixas no topo ao rolar, com abas **Sneakers** e **Clothes**, que fazem scroll até a seção correspondente.
- **Seções de catálogo (`<main>`)**:
  - `#sneakers` (CAT.01): grid de cards de tênis.
  - `#clothes` (CAT.02): grid de cards de roupas.
  - Cada seção tem um "pin" lateral fixo (título, descrição, código da categoria) e a lista de cards (`.cat-scroll-list`), renderizada dinamicamente via JS.
- **Drawer de produto** (`#drawer`): painel lateral que abre ao clicar num card, mostrando imagem, nome, tabela de especificações (tamanho, ano de lançamento) e botão "Adicionar ao Carrinho". O preço sempre exibe "VALOR APENAS VIA WHATSAPP".
- **Botão flutuante do carrinho** (`#cartToggle`): ícone fixo no canto inferior com badge de quantidade de itens.
- **Drawer do carrinho** (`#cartDrawer`): lista os itens adicionados, com checkbox de seleção, controles de quantidade, botão de remover, "selecionar todos", "limpar carrinho" e botão final **"COMPRAR PELO WHATSAPP"**, que monta uma mensagem com os itens selecionados e abre o WhatsApp.
- **Rodapé**: marca "S.T.R.O" e texto "CATÁLOGO DIGITAL · SEM ESTOQUE FÍSICO · 2023".

---

## 4. `script.js` — lógica do modo claro

Arquivo único com toda a lógica da página principal (~870 linhas). Principais blocos:

1. **Loop do herói** (`heroSneakers`, `startSneakerLoop`): array com 12 imagens de `imagensPI/` e suas posições; usa GSAP para animar a entrada/saída do tênis cruzando a tela, trocando de imagem indefinidamente.
2. **Interações de mouse**: um único loop `requestAnimationFrame` cuida do glow que segue o cursor, do parallax do título do hero, da grade reativa de fundo e do "hover hint" ("VER SPEC →") que aparece ao passar o mouse sobre um card.
3. **`CATALOG`**: objeto com o array `apparel`, contendo **todos os produtos do catálogo** — cada item tem `code`, `name`, `type`, `group` (`Sneakers` ou `Apparel`), `img` (para tênis) e `specs` (tamanho e ano de lançamento). São ao todo:
   - **193 tênis** (códigos `SN‑01` a `SN‑193`), organizados por modelo: Air Jordan 4, 1 Low, 1 High, Dunk, Air Jordan 3/5/11, Air Max 95, Yeezy 500/700/Slide/Boost 350/Foam Runner, Nike MIND 001, Adidas Samba, New Balance 550/530/9060/2002R.
   - **30 peças de roupa/acessórios** (códigos `AP‑01` a `AP‑30`), sem imagem própria (hoodies, jaquetas, calças, camisetas, shorts, acessórios).
4. **Filtros por modelo**: `SNEAKER_MODEL_BUTTONS` e `CLOTHES_MODEL_BUTTONS` definem as opções de um dropdown único ("MODELOS") por seção; `renderSneakersList()` e `renderClothesList()` filtram o array `CATALOG.apparel` por nome (ex.: contém "JORDAN 4", "SAMBA", "HOODIE" etc.) e remontam o HTML da grade de cards.
5. **`cardHTML(produto, categoria)`**: gera o markup de cada card (imagem, código, nome, botão "ver valor no WhatsApp").
6. **`initScrollReveal`**: usa `IntersectionObserver` para animar a entrada dos cards conforme aparecem na tela (com leve stagger).
7. **`animateCounters`**: anima o contador "N ITENS" de cada subgrupo.
8. **Drawer de produto**: abre ao clicar num card (`openDrawer`/lógica de clique delegado), preenche imagem/nome/specs; `closeDrawer()` fecha.
9. **Carrinho de compras** (`cart` em memória, sem `localStorage`):
   - `addToCartBtn` adiciona o produto aberto no drawer ao carrinho.
   - `updateCart()` re-renderiza a lista de itens, badge de quantidade, checkboxes e total.
   - Controles de quantidade (+/-), remoção individual, seleção via checkbox, "selecionar todos" e "limpar carrinho".
   - `cartCheckoutBtn`: monta uma mensagem de texto com os itens selecionados e abre `https://wa.me/555499743141?text=...` em nova aba — é o único "checkout" do site.
10. **Toggle de tema**: pequeno IIFE que trata o botão de troca claro/escuro.

---

## 5. `style.css` — estilos do modo claro

CSS puro (sem framework), organizado em blocos comentados:

- **Variáveis (`:root`)**: paleta de cores (fundo, tinta, linhas), cores de "accent" por categoria (`--auto`, `--audio`, `--apparel`, `--hardware`), fontes (Archivo para títulos, Inter para corpo, IBM Plex Mono para textos técnicos/código).
- **Grade de fundo reativa ao mouse** (`body::before`/`::after`) e **glow radial** que segue o cursor (`.bg-glow`).
- **Hero**: tipografia gigante do "S.T.R.O", sombra projetada do tênis, veil de pré-carregamento.
- **Barra de filtros fixa (sticky)** com pills.
- **Cards do catálogo**: grid responsivo (3 colunas → 2 → 1 conforme a largura), efeito hover (elevação, glow, zoom da imagem), estados de "carregando" (fade-in ao rolar).
- **Dropdown de modelos**: menu suspenso customizado usado nos filtros de Sneakers/Clothes.
- **Seção "em desenvolvimento"**: classe `.cat-section.is-dev` borra e bloqueia visualmente uma seção com aviso "🔒 SEÇÃO EM DESENVOLVIMENTO — ACESSO RESTRITO" (não usada atualmente no HTML, mas disponível).
- **Drawer de produto** e **drawer/carrinho**: painéis laterais deslizantes, com botão de checkout no verde do WhatsApp (`#25d366`).
- **Responsividade**: breakpoints em 1100px, 860px e 520px ajustando colunas do grid e posicionamento de elementos.

---

## 6. Pasta `escuro/` — modo escuro (versão "Audio DJ")

Réplica quase idêntica da estrutura acima, mas com tema escuro e outro conjunto de categorias:

- **`escuro.html`**: mesma estrutura de hero/filtros/drawer/carrinho, porém com 3 abas: **Audio DJ 1**, **Audio DJ 2**, **Audio DJ 3**. O botão de tema aqui aponta de volta para `../index.html` ("VOLTAR 1").
- **`script-escuro.js`**: mesma arquitetura de `script.js`, mas o catálogo (`CATALOG.audiodj`) contém apenas **6 itens de exemplo/placeholder** ("AUDIO DJ ITEM 01" a "06", sem imagem, specs "A definir"). Os 3 módulos (Audio DJ 1/2/3) filtram esses mesmos 6 itens por índice (`idx % 3`), então é claramente uma seção **ainda não populada com produtos reais** — estrutura pronta, conteúdo provisório.
- **`style-escuro.css`**: mesmas classes/organização do `style.css`, com paleta invertida para tema escuro.

---

## 7. Pastas de imagens

- **`imagensPI/`** (13 arquivos): imagens usadas exclusivamente na animação do hero da página inicial (tênis que cruzam a tela). Nomes como `Aj4testeUP.png`, `Sampler.png`, `beluga.png`, `hd25novo.png`, `macpro.png`, `nb.png`, `razersharkUP.png`, `turbo.png`, `velangk.png`, além de algumas repetidas de `imagensShoes` (`aj1hights.png`, `aj1lowgrey.png`, `af1utopia.png`).
- **`imagensShoes/`** (184 imagens + 1 arquivo residual `teste`, praticamente vazio/lixo): uma imagem PNG por produto/colorway cadastrado no array `CATALOG.apparel` de `script.js`, referenciada pelo campo `img` de cada item (ex.: `sambablack.png` → "ADIDAS SAMBA OG BLACK WHITE"). Cobre as famílias Air Jordan (1, 3, 4, 5, 11), Dunk, Air Max 95, Adidas Samba, Yeezy (350/500/700/Slide/Foam Runner) e New Balance (530/550/9060/2002R).

---

## 8. Fluxo de uso resumido

1. Usuário abre `index.html` → vê o hero animado e escolhe entre Sneakers/Clothes na barra de filtros.
2. Rola a página até a seção desejada, opcionalmente refina por modelo no dropdown "MODELOS".
3. Clica em um card → abre o **drawer de produto** com specs e opção de adicionar ao carrinho.
4. Itens adicionados aparecem no **carrinho flutuante** (canto inferior); usuário pode ajustar quantidades, selecionar/desmarcar itens.
5. Ao clicar em **"COMPRAR PELO WHATSAPP"**, é gerada uma mensagem de texto com os itens selecionados e o usuário é redirecionado ao WhatsApp da loja para negociar valores e fechar a compra — não há checkout de pagamento no site.
6. O botão de tema no topo alterna entre o catálogo de Sneakers/Clothes (`index.html`) e o catálogo de Audio DJ (`escuro/escuro.html`), este último ainda com dados de exemplo.

---

## 9. Observações técnicas

- Site 100% estático — pode ser hospedado em qualquer servidor de arquivos ou serviço como GitHub Pages, Netlify, Vercel etc., sem necessidade de backend.
- Única dependência externa: **GSAP 3.12.5** via CDN (`cdnjs.cloudflare.com`) e fontes do Google Fonts (Montserrat, Archivo, Inter, IBM Plex Mono).
- Não há persistência do carrinho entre recarregamentos de página (fica apenas em memória/JS).
- O arquivo `imagensShoes/teste` parece ser um resíduo/arquivo de teste (1 byte) sem uso pelo código — candidato a remoção.
- A seção Audio DJ (modo escuro) está com dados fictícios/placeholder — precisa ser populada com produtos reais antes de ir ao ar.
