/* CONTATO */
        const WHATSAPP = '5554999743141'; // 55 + DDD + numero, num lugar so

        /* LOOP HERO SNEAKERS */
        const heroSneakers = [
            { src: './imagensPI/hd25novo.png',    width: '55vw', x: '-3vw', y: '-4vw' },
            { src: './imagensPI/Sampler.png',       width: '60vw', x: '-1vw', y: '0vw'  },
            { src: './imagensPI/macpro.png',        width: '55vw', x: '0vw', y: '-2vw' },
            { src: './imagensPI/5090.png',        width: '60vw', x: '-2vw', y: '-4vw' },
            { src: './imagensPI/razersharkUP.png',      width: '55vw', x: '0vw',  y: '-1vw' },
            { src: './imagensPI/velangk.png',     width: '55vw', x: '-2vw', y: '-4vw' },
            { src: './imagensPI/turbo.png',         width: '50vw', x: '-3vw', y: '-3vw' },
            { src: './imagensPI/RMX-1000-Photoroom.png',     width: '55vw', x: '-2vw', y: '-4vw' },
            { src: './imagensPI/djiosmopocket3-Photoroom.png',       width: '45vw', x: '-3vw', y: '-2vw' },
            { src: './imagensPI/console-nintendo-switch-Photoroom.png',    width: '55vw', x: '-2vw', y: '-2vw' },
            { src: './imagensPI/apple17-Photoroom.png',          width: '45vw', x: '0vw',  y: '-2vw' },
            { src: './imagensPI/airpodsmax-Photoroom.png',  width: '40vw', x: '-3vw', y: '2vw' },
        ];

        let currentSneakerIndex = 0;
        const sneakerImg = document.getElementById('heroSneaker');
        const heroShadow = document.getElementById('heroShadow');

        function startSneakerLoop() {
            if(!sneakerImg || !heroShadow) return;

            function animateNextSneaker() {
                const item = heroSneakers[currentSneakerIndex];
                
                sneakerImg.src = item.src;
                sneakerImg.style.width = item.width;

                const tl = gsap.timeline({
                    onComplete: () => {
                        currentSneakerIndex = (currentSneakerIndex + 1) % heroSneakers.length;
                        animateNextSneaker();
                    }
                });

                tl.fromTo(sneakerImg, 
                    { x: '100vw', y: '0vw', rotation: 15 },
                    { x: item.x, y: item.y, rotation: -15, duration: 1.8, ease: 'power2.out' }
                )
                .fromTo(heroShadow,
                    { x: '100vw', scaleX: 0.3, opacity: 0.1 },
                    { x: '0vw', scaleX: 1, opacity: 1, duration: 1.8, ease: 'power2.out' },
                    "<"
                )
                .to([sneakerImg, heroShadow], { duration: 0.8 })
                .to(sneakerImg, { 
                    x: '-100vw', y: '-8vw', rotation: -30, duration: 1.6, ease: 'power2.in' 
                })
                .to(heroShadow, { 
                    x: '-100vw', scaleX: 0.3, opacity: 0.1, duration: 1.6, ease: 'power2.in' 
                }, "<");
            }
            animateNextSneaker();
        }
        startSneakerLoop();

        /* INTERAÇÕES DE MOUSE: glow, grade reagente, parallax do hero e cursor customizado — tudo num único loop rAF */
        const glow = document.getElementById('glow');
        const hoverHint = document.getElementById('hoverHint');
        const rootEl = document.documentElement;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let hoveringCard = false;
        let mouseTicking = false;

        function applyMouseEffects() {
            if (glow) glow.style.transform = `translate3d(${mouseX - 425}px, ${mouseY - 425}px, 0)`;

            rootEl.style.setProperty('--mx', mouseX + 'px');
            rootEl.style.setProperty('--my', mouseY + 'px');

            if (window.scrollY < window.innerHeight) {
                const cx = window.innerWidth / 2;
                const cy = window.innerHeight / 2;
                const px = ((mouseX - cx) / cx) * 14;
                const py = ((mouseY - cy) / cy) * 14;
                rootEl.style.setProperty('--px', px.toFixed(2) + 'px');
                rootEl.style.setProperty('--py', py.toFixed(2) + 'px');
            }

            if (hoverHint && hoveringCard) {
                hoverHint.style.transform = `translate3d(${mouseX + 18}px, ${mouseY + 18}px, 0)`;
            }

            mouseTicking = false;
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!mouseTicking) {
                mouseTicking = true;
                requestAnimationFrame(applyMouseEffects);
            }
        });

        document.addEventListener('mouseover', (e) => {
            if (hoverHint && e.target.closest('.card')) {
                hoveringCard = true;
                hoverHint.classList.add('active');
            }
        });
        document.addEventListener('mouseout', (e) => {
            if (hoverHint && e.target.closest('.card')) {
                const toEl = e.relatedTarget && e.relatedTarget.closest ? e.relatedTarget.closest('.card') : null;
                if (!toEl) {
                    hoveringCard = false;
                    hoverHint.classList.remove('active');
                }
            }
        });

        /* TÍTULO S.T.R.O — sem animações, texto estático e discreto (igual ao modo claro) */

        /* CATALOG DATA - ITENS AUDIO DJ (PROVISÓRIO — TEXTOS/ITENS AJUSTADOS DEPOIS) */
        const CATALOG = {
          audiodj:[
            {code:'DJ‑01',name:'AUDIO DJ ITEM 01',type:'audio',group:'Audio DJ',specs:[['Especificação','A definir'],['Ano de Lançamento','2024']]},
            {code:'DJ‑02',name:'AUDIO DJ ITEM 02',type:'audio',group:'Audio DJ',specs:[['Especificação','A definir'],['Ano de Lançamento','2024']]},
            {code:'DJ‑03',name:'AUDIO DJ ITEM 03',type:'audio',group:'Audio DJ',specs:[['Especificação','A definir'],['Ano de Lançamento','2024']]},
            {code:'DJ‑04',name:'AUDIO DJ ITEM 04',type:'audio',group:'Audio DJ',specs:[['Especificação','A definir'],['Ano de Lançamento','2024']]},
            {code:'DJ‑05',name:'AUDIO DJ ITEM 05',type:'audio',group:'Audio DJ',specs:[['Especificação','A definir'],['Ano de Lançamento','2024']]},
            {code:'DJ‑06',name:'AUDIO DJ ITEM 06',type:'audio',group:'Audio DJ',specs:[['Especificação','A definir'],['Ano de Lançamento','2024']]}
          ]
        };


        const ACCENTS = {auto:'#2b5c8f', audio:'#6342e8', apparel:'#8a7353', hardware:'#059669'};
        const GLYPHS = {
          auto:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="100" cy="100" r="70"/><circle cx="100" cy="100" r="30"/><path d="M100 30 L100 60 M100 140 L100 170 M30 100 L60 100 M140 100 L170 100"/></svg>',
          audio:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M40 100a60 60 0 0 1 120 0"/><rect x="28" y="95" width="24" height="46" rx="10"/><rect x="148" y="95" width="24" height="46" rx="10"/></svg>',
          hoodie:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M70 40 Q100 10 130 40 L160 60 L150 90 L130 78 L130 180 L70 180 L70 78 L50 90 L40 60 Z"/></svg>',
          sneaker:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 140 Q40 100 80 95 L120 60 Q150 55 170 80 Q185 100 175 130 L20 140Z"/><path d="M20 140 L175 130 L178 155 L20 155Z"/></svg>',
          gpu:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="25" y="70" width="150" height="60" rx="8"/><circle cx="65" cy="100" r="18"/><circle cx="135" cy="100" r="18"/><rect x="25" y="130" width="150" height="10"/></svg>'
        };

        /* ---- ESTADO DOS FILTROS DE CADA MÓDULO AUDIO DJ ---- */
        let audioFilters = { 1: 'all', 2: 'all', 3: 'all' };

        /* DROPDOWN COM APENAS 3 OPÇÕES (PROVISÓRIO — AJUSTAR DEPOIS) */
        const AUDIO_MODEL_BUTTONS = [
            { key: 'all', label: 'TODAS AS OPÇÕES' },
            { key: '1', label: 'ESCOLHA 1' },
            { key: '2', label: 'ESCOLHA 2' },
            { key: '3', label: 'ESCOLHA 3' }
        ];

        function toggleAudioDropdown(moduleId) {
            const menu = document.getElementById('audioDropdownMenu' + moduleId);
            if (menu) menu.classList.toggle('open');
        }

        function filterAudio(moduleId, modelKey) {
            audioFilters[moduleId] = modelKey;
            const menu = document.getElementById('audioDropdownMenu' + moduleId);
            if (menu) menu.classList.remove('open');
            renderAudioList(moduleId);
        }

        // FECHAR QUALQUER DROPDOWN ABERTO AO CLICAR FORA
        document.addEventListener('click', (e) => {
            document.querySelectorAll('.model-dropdown-container').forEach(container => {
                if (!container.contains(e.target)) {
                    const menu = container.querySelector('.model-dropdown-menu');
                    if (menu) menu.classList.remove('open');
                }
            });
        });

        /* MÓDULO AUDIO DJ — estrutura idêntica repetida para os módulos 1, 2 e 3 */
        function renderAudioList(moduleId) {
            const el = document.getElementById('listAudioDJ' + moduleId);
            if(!el) return;

            let items = CATALOG.audiodj;
            const activeFilter = audioFilters[moduleId];

            if (activeFilter !== 'all') {
                items = items.filter((p, idx) => String((idx % 3) + 1) === activeFilter);
            }

            const activeModelObj = AUDIO_MODEL_BUTTONS.find(m => m.key === activeFilter);
            const activeModelLabel = activeModelObj ? activeModelObj.label : 'OPÇÕES';

            const modelFilterHTML = `
                <div class="subgroup-label">
                    <div class="subgroup-header-left">
                        <span class="subgroup-title">0${moduleId} / AUDIO DJ</span>

                        <!-- BOTÃO ÚNICO DE DROPDOWN (3 OPÇÕES) -->
                        <div class="model-dropdown-container">
                            <button class="model-dropdown-btn" onclick="toggleAudioDropdown(${moduleId})">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                                <span>OPÇÕES</span>
                                <span class="active-model-tag">${activeModelLabel}</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9l6 6 6-6"/></svg>
                            </button>
                            <div class="model-dropdown-menu" id="audioDropdownMenu${moduleId}">
                                ${AUDIO_MODEL_BUTTONS.map(m => `
                                    <button class="model-dropdown-item ${activeFilter === m.key ? 'active' : ''}" onclick="filterAudio(${moduleId}, '${m.key}')">
                                        <span>${m.label}</span>
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <span class="subgroup-count" data-count="${items.length}">0 ITENS</span>
                </div>
            `;

            const whatsNoticeHTML = `
                <div class="more-models-notice">
                    Não gostou(encontrou) o que queria? Para específicos envie(pergunte) <a href="https://wa.me/${WHATSAPP}?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20outras%20op%C3%A7%C3%B5es%20de%20Audio%20DJ" target="_blank" rel="noopener noreferrer">aqui</a>
                </div>
            `;

            el.innerHTML =
                modelFilterHTML +
                (items.length > 0
                    ? items.map(p => cardHTML(p, 'audio')).join('')
                    : '<div style="grid-column: 1/-1; padding: 2.5rem; text-align: center; font-family: var(--mono); font-size: 0.78rem; color: var(--ink-faint); opacity: 0.8;">Nenhum item encontrado nesta categoria no momento.</div>'
                ) +
                whatsNoticeHTML;
            initScrollReveal(el);
            animateCounters(el);
        }

        /* REVEAL DOS CARDS AO ROLAR A TELA (com leve stagger entre os que aparecem juntos) */
        function initScrollReveal(container) {
            const observer = new IntersectionObserver((entries) => {
                const visibleEntries = entries.filter(en => en.isIntersecting);
                visibleEntries.forEach((entry, i) => {
                    const target = entry.target;
                    setTimeout(() => target.classList.add('is-visible'), i * 55);
                    observer.unobserve(target);
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

            container.querySelectorAll('.card').forEach(card => observer.observe(card));
        }

        /* CONTADOR ANIMADO DE ITENS (ex: "6 ITENS") */
        function animateCounters(container) {
            container.querySelectorAll('.subgroup-count[data-count]').forEach(el => {
                const target = parseInt(el.dataset.count, 10) || 0;
                const start = performance.now();
                const duration = 700;
                function tick(now) {
                    const p = Math.min((now - start) / duration, 1);
                    const value = Math.floor(p * target);
                    el.textContent = value + ' ITENS';
                    if (p < 1) requestAnimationFrame(tick);
                    else el.textContent = target + ' ITENS';
                }
                requestAnimationFrame(tick);
            });
        }

        function renderCards(){
          renderAudioList(1);
          renderAudioList(2);
          renderAudioList(3);
        }

        /* NAVEGAÇÃO DO HEADER: BOTÕES DOS MÓDULOS AUDIO DJ */
        document.querySelectorAll('.filter-pills .pill').forEach(pill => {
            pill.addEventListener('click', () => {
                document.querySelectorAll('.filter-pills .pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                const targetEl = document.getElementById(pill.dataset.target);
                if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });


        function cardHTML(p, catKey){
          const displayCode = p.code.split(/[\u2010-\u2015\-]/).pop();

          let groupTag = (p.group || catKey).toUpperCase();
          if (groupTag === 'APPAREL') groupTag = 'ROUPAS';

          const imgContent = p.img 
            ? `<div class="card-img-wrap"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>`
            : `<div class="card-img-wrap"><div class="glyph-wrap">${GLYPHS[p.type]||''}</div></div>`;

          return `<div class="card" tabindex="0" style="--accent:${ACCENTS[catKey]};" data-code="${p.code}" data-name="${p.name}" data-type="${p.type}" data-cat="${catKey}" data-img="${p.img||''}" data-specs='${JSON.stringify(p.specs)}'>
            <div class="card-top"><span>${displayCode}</span><span>${groupTag}</span></div>
            ${imgContent}
            <div class="card-bottom">
              <div class="card-name">${p.name}</div>
              <div class="card-meta">
                <div class="whats-val-btn">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>VALOR VIA WHATS</span>
                </div>
              </div>
            </div>
          </div>`;
        }
        renderCards();

/* LÓGICA DO MODAL DE PRODUTO */
const drawer = document.getElementById('drawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const drawerClose = document.getElementById('drawerClose');
const drawerCode = document.getElementById('drawerCode');
const drawerEyebrow = document.getElementById('drawerEyebrow');
const drawerTitle = document.getElementById('drawerTitle');
const drawerSpecs = document.getElementById('drawerSpecs');
const drawerImg = document.getElementById('drawerImg');
let currentItem = null;

document.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) {
        const code = card.dataset.code;
        const name = card.dataset.name;
        const type = card.dataset.type;
        const cat = card.dataset.cat;
        const img = card.dataset.img;
        const specs = JSON.parse(card.dataset.specs || '[]');

        currentItem = { code, name, type, cat, img, specs };

        drawerCode.textContent = code;
        drawerEyebrow.textContent = cat.toUpperCase();
        drawerTitle.textContent = name;

        drawerSpecs.innerHTML = specs.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');

        if (img) {
            drawerImg.src = img;
            drawerImg.style.display = 'block';
        } else {
            drawerImg.style.display = 'none';
        }

        drawer.classList.add('open');
        drawerBackdrop.classList.add('open');
        updateDrawerActiveState();
    }
});

function closeDrawer() {
    drawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    updateDrawerActiveState();
}

function updateDrawerActiveState() {
    const anyOpen = drawer.classList.contains('open') || cartDrawer.classList.contains('open');
    document.body.classList.toggle('drawer-active', anyOpen);
}

drawerClose.addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);

        /* LÓGICA DO CARRINHO */
        const CART_KEY = 'stro_cart_escuro';
        let cart = [];
        try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { cart = []; }
        const cartToggle = document.getElementById('cartToggle');
        const cartDrawer = document.getElementById('cartDrawer');
        const cartBackdrop = document.getElementById('cartBackdrop');
        const cartClose = document.getElementById('cartClose');
        const addToCartBtn = document.getElementById('addToCartBtn');
        const cartBadge = document.getElementById('cartBadge');
        const cartCountLabel = document.getElementById('cartCountLabel');
        const cartBody = document.getElementById('cartBody');
        const clearCartBtn = document.getElementById('clearCartBtn');
        const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

        function toggleCart() {
            cartDrawer.classList.toggle('open');
            cartBackdrop.classList.toggle('open');
            updateDrawerActiveState();
        }

        cartToggle.addEventListener('click', toggleCart);
        cartClose.addEventListener('click', toggleCart);
        cartBackdrop.addEventListener('click', toggleCart);
        updateCart();

        addToCartBtn.addEventListener('click', () => {
            if (!currentItem) return;
            const existing = cart.find(i => i.code === currentItem.code);
            if (existing) {
                existing.qty++;
            } else {
                cart.push({ ...currentItem, qty: 1, selected: true });
            }
            updateCart();
            closeDrawer();
            cartBadge.classList.add('bump');
            setTimeout(() => cartBadge.classList.remove('bump'), 300);
        });

        function updateCart() {
            try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
            const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
            cartBadge.textContent = totalCount;
            cartCountLabel.textContent = `(${totalCount} itens)`;
            cartToggle.classList.toggle('has-items', totalCount > 0);

            if (cart.length === 0) {
                cartBody.innerHTML = `
                    <div class="cart-empty">
                        <div class="cart-empty-icon">🛒</div>
                        <p>Seu carrinho está vazio.</p>
                    </div>`;
                cartCheckoutBtn.disabled = true;
                return;
            }

            cartCheckoutBtn.disabled = false;
            cartBody.innerHTML = cart.map((item, idx) => `
                <div class="cart-item">
                    <input type="checkbox" class="cart-item-checkbox" data-idx="${idx}" ${item.selected ? 'checked' : ''}>
                    <div class="cart-item-info">
                        <div class="cart-item-code">${item.code}</div>
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">Sob consulta</div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="changeQty(${idx}, -1)">-</button>
                        <span class="cart-item-qty">${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="removeItem(${idx})">✕</button>
                </div>
            `).join('');
        }

        window.changeQty = function(idx, delta) {
            if (cart[idx]) {
                cart[idx].qty += delta;
                if (cart[idx].qty <= 0) cart.splice(idx, 1);
                updateCart();
            }
        };

        window.removeItem = function(idx) {
            cart.splice(idx, 1);
            updateCart();
        };

        cartBody.addEventListener('change', (e) => {
            if (e.target.classList.contains('cart-item-checkbox')) {
                const idx = e.target.dataset.idx;
                cart[idx].selected = e.target.checked;
            }
        });

        clearCartBtn.addEventListener('click', () => {
            cart = [];
            updateCart();
        });

        cartCheckoutBtn.addEventListener('click', () => {
            const selectedItems = cart.filter(i => i.selected);
            if (selectedItems.length === 0) return alert('Selecione pelo menos um item para consultar!');
            let msg = "Olá! Gostaria de consultar os seguintes itens:\n\n";
            selectedItems.forEach(i => {
                msg += `- ${i.name} (Qtd: ${i.qty}) [${i.code}]\n`;
            });
            window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
        });

        /* PRELOADER */
        window.addEventListener('load', () => {
            const veil = document.getElementById('preload-veil');
            if (veil) veil.classList.add('hidden');
        });

        /* TRANSIÇÃO SUAVE AO TROCAR DE CATÁLOGO (claro ⇄ escuro) */
        (function () {
            const toggleBtn = document.getElementById('themeToggleBtn');
            const veil = document.getElementById('preload-veil');
            if (!toggleBtn || !veil) return;
            let transitioning = false;

            toggleBtn.addEventListener('click', (e) => {
                if (transitioning) return;
                e.preventDefault();
                transitioning = true;
                const dest = toggleBtn.getAttribute('href');
                const veilSpan = veil.querySelector('span');
                if (veilSpan) veilSpan.textContent = 'TROCANDO DE CATÁLOGO';
                veil.classList.remove('hidden');
                setTimeout(() => { window.location.href = dest; }, 950);
            });
        })();