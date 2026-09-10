/* =====================================================================
   S.T.R.O — script unico para os dois catalogos.
   O catalogo ativo vem de <html data-catalog="claro|escuro">.
   - claro  : tenis / roupas  (window.PRODUTOS.claro)
   - escuro : audio DJ         (window.PRODUTOS.escuro)
   Nucleo (hero, mouse, carrinho, modal, whatsapp) roda nos dois.
   ===================================================================== */

/* CONTEXTO */
const CATALOG_MODE = document.documentElement.dataset.catalog === 'escuro' ? 'escuro' : 'claro';
const WHATSAPP = '5554999743141'; // 55 + DDD + numero, num lugar so

/* =====================================================================
   HERO — carrossel de imagens
   ===================================================================== */
const HERO_SETS = {
    claro: [
        { src: './imagensPI/Aj4testeUP.png',          width: '56vw', x: '-3vw',  y: '-4vw' },
        { src: './imagensPI/yuto.png',                width: '35vw', x: '1vw',   y: '-3vw' },
        { src: './imagensPI/airmax95corteizblue.png', width: '38vw', x: '1vw',   y: '-3vw' },
        { src: './imagensPI/beluga.png',              width: '38vw', x: '0vw',   y: '-3vw' },
        { src: './imagensPI/j3blackcat.png',          width: '37vw', x: '1.5vw', y: '-3vw' },
        { src: './imagensPI/af1utopia.png',           width: '39vw', x: '1vw',   y: '-3vw' },
        { src: './imagensPI/j5oreo.png',              width: '35vw', x: '1.5vw', y: '-3vw' },
        { src: './imagensPI/aj1hights.png',           width: '35vw', x: '2.5vw', y: '-3vw' },
        { src: './imagensPI/kentucky.png',            width: '38vw', x: '0.5vw', y: '-3vw' },
        { src: './imagensPI/aj1lowgrey.png',          width: '38vw', x: '1vw',   y: '-3vw' },
        { src: './imagensPI/mocha.png',               width: '39vw', x: '0.5vw', y: '-3vw' },
        { src: './imagensPI/nb550navy.png',           width: '39vw', x: '1vw',   y: '-3vw' },
    ],
    /* escuro: SEM width — o tamanho vem do CSS (html[data-catalog="escuro"]
       .hero-page1 img { height: min(44vh, 34vw) }) pra ficar igual em
       qualquer monitor. Aqui so o ajuste fino de posicao (x/y). */
    escuro: [
        { src: './imagensPI/hd25novo.png',                          x: '0vw', y: '0vh' },
        { src: './imagensPI/Sampler.png',                           x: '0vw', y: '0vh' },
        { src: './imagensPI/macpro.png',                            x: '0vw', y: '0vh' },
        { src: './imagensPI/5090.png',                              x: '0vw', y: '0vh' },
        { src: './imagensPI/razersharkUP.png',                      x: '0vw', y: '0vh' },
        { src: './imagensPI/velangk.png',                           x: '0vw', y: '0vh' },
        { src: './imagensPI/turbo.png',                             x: '0vw', y: '0vh' },
        { src: './imagensPI/RMX-1000-Photoroom.png',                x: '0vw', y: '0vh' },
        { src: './imagensPI/djiosmopocket3-Photoroom.png',          x: '0vw', y: '0vh' },
        { src: './imagensPI/console-nintendo-switch-Photoroom.png', x: '0vw', y: '0vh' },
        { src: './imagensPI/apple17-Photoroom.png',                 x: '0vw', y: '0vh' },
        { src: './imagensPI/airpodsmax-Photoroom.png',              x: '0vw', y: '0vh' },
    ],
};

const heroSneakers = HERO_SETS[CATALOG_MODE];
const sneakerImg = document.getElementById('heroSneaker');
const heroShadow = document.getElementById('heroShadow');

/* Pre-carrega todas as imagens do hero. Sem isso, ao trocar o src a imagem
   entra na animacao ainda nao decodificada e da o flash (parece repetir o
   item / "buga" antes de passar pro proximo). */
const heroCache = heroSneakers.map(function (item) {
    var img = new Image();
    img.src = item.src;
    return img;
});

function startSneakerLoop() {
    if (!sneakerImg || !heroShadow || typeof gsap === 'undefined') return;

    let index = 0;
    let running = false;

    async function showNext() {
        if (running) return;      // trava reentrada dupla
        running = true;

        const item = heroSneakers[index];

        const pre = heroCache[index];
        try { if (pre && pre.decode) await pre.decode(); } catch (e) {}

        sneakerImg.src = item.src;
        /* claro: width por item (vw). escuro: sem width, o CSS controla a
           altura (min(vh,vw)) pra ficar consistente em qualquer tela. */
        sneakerImg.style.width = item.width || '';

        const tl = gsap.timeline({
            onComplete: function () {
                running = false;
                index = (index + 1) % heroSneakers.length;
                showNext();
            }
        });

        tl.fromTo(sneakerImg,
            { x: '100vw', y: '0vw', rotation: 15 },
            { x: item.x, y: item.y, rotation: -15, duration: 1.8, ease: 'power2.out' }
        )
        .fromTo(heroShadow,
            { x: '100vw', scaleX: 0.3, opacity: 0.1 },
            { x: '0vw', scaleX: 1, opacity: 1, duration: 1.8, ease: 'power2.out' },
            '<'
        )
        .to([sneakerImg, heroShadow], { duration: 0.8 })
        .to(sneakerImg, {
            x: '-100vw', y: '-8vw', rotation: -30, duration: 1.6, ease: 'power2.in'
        })
        .to(heroShadow, {
            x: '-100vw', scaleX: 0.3, opacity: 0.1, duration: 1.6, ease: 'power2.in'
        }, '<');
    }

    showNext();
}
startSneakerLoop();

/* =====================================================================
   INTERACOES DE MOUSE: glow, grade reagente, parallax do hero
   ===================================================================== */
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

/* =====================================================================
   DADOS + HELPERS COMPARTILHADOS
   ===================================================================== */
let CATALOG = { apparel: [] };

const ACCENTS = { auto: '#2b5c8f', audio: '#6342e8', apparel: '#8a7353', hardware: '#059669' };

const SPEC_ICONS = {
    size: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="8" rx="1.5"></rect><path d="M7 8v3M11 8v3M15 8v3M19 8v3"></path></svg>',
    date: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2"></rect><path d="M16 2.5v4M8 2.5v4M3 9.5h18"></path></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 12.9 12.9 20.6a2 2 0 0 1-2.8 0l-7.1-7.1a2 2 0 0 1 0-2.8L10.7 3 20.6 3v9.9Z"></path><circle cx="15.3" cy="7.7" r="1.2"></circle></svg>'
};
function specIcon(label) {
    const l = (label || '').toLowerCase();
    if (l.includes('tamanho')) return SPEC_ICONS.size;
    if (l.includes('ano') || l.includes('lançamento') || l.includes('lancamento')) return SPEC_ICONS.date;
    return SPEC_ICONS.tag;
}

const GLYPHS = {
    auto: '<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="100" cy="100" r="70"/><circle cx="100" cy="100" r="30"/><path d="M100 30 L100 60 M100 140 L100 170 M30 100 L60 100 M140 100 L170 100"/></svg>',
    audio: '<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M40 100a60 60 0 0 1 120 0"/><rect x="28" y="95" width="24" height="46" rx="10"/><rect x="148" y="95" width="24" height="46" rx="10"/></svg>',
    hoodie: '<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M70 40 Q100 10 130 40 L160 60 L150 90 L130 78 L130 180 L70 180 L70 78 L50 90 L40 60 Z"/></svg>',
    sneaker: '<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 140 Q40 100 80 95 L120 60 Q150 55 170 80 Q185 100 175 130 L20 140Z"/><path d="M20 140 L175 130 L178 155 L20 155Z"/></svg>',
    gpu: '<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="25" y="70" width="150" height="60" rx="8"/><circle cx="65" cy="100" r="18"/><circle cx="135" cy="100" r="18"/><rect x="25" y="130" width="150" height="10"/></svg>'
};

function cardHTML(p, catKey) {
    const displayCode = p.code.split(/[‐-―\-]/).pop();

    let groupTag = (p.group || catKey).toUpperCase();
    if (groupTag === 'APPAREL') groupTag = 'ROUPAS';

    const imgContent = p.img
        ? `<div class="card-img-wrap"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>`
        : `<div class="card-img-wrap"><div class="glyph-wrap">${GLYPHS[p.type] || ''}</div></div>`;

    return `<div class="card" tabindex="0" style="--accent:${ACCENTS[catKey]};" data-code="${p.code}" data-name="${p.name}" data-type="${p.type}" data-cat="${catKey}" data-img="${p.img || ''}" data-specs='${JSON.stringify(p.specs)}'>
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

const EMPTY_MSG = '<div style="grid-column: 1/-1; padding: 2.5rem; text-align: center; font-family: var(--mono); font-size: 0.78rem; color: var(--ink-faint); opacity: 0.8;">Nenhum item encontrado nesta categoria no momento.</div>';

/* fecha qualquer dropdown de modelos ao clicar fora */
document.addEventListener('click', (e) => {
    document.querySelectorAll('.model-dropdown-container').forEach(container => {
        if (!container.contains(e.target)) {
            const menu = container.querySelector('.model-dropdown-menu');
            if (menu) menu.classList.remove('open');
        }
    });
});

/* navegacao do header: pills -> scroll ate a secao */
document.querySelectorAll('.filter-pills .pill').forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pills .pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const targetEl = document.getElementById(pill.dataset.target);
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

/* =====================================================================
   RENDER — CATALOGO CLARO (tenis / roupas)
   ===================================================================== */
let currentSneakerFilter = 'all';
let currentClothesFilter = 'all';

window.toggleModelDropdown = function () {
    const menu = document.getElementById('modelDropdownMenu');
    if (menu) menu.classList.toggle('open');
};
window.filterSneakers = function (modelKey) {
    currentSneakerFilter = modelKey;
    const menu = document.getElementById('modelDropdownMenu');
    if (menu) menu.classList.remove('open');
    renderSneakersList();
};
window.toggleClothesModelDropdown = function () {
    const menu = document.getElementById('clothesModelDropdownMenu');
    if (menu) menu.classList.toggle('open');
};
window.filterClothes = function (modelKey) {
    currentClothesFilter = modelKey;
    const menu = document.getElementById('clothesModelDropdownMenu');
    if (menu) menu.classList.remove('open');
    renderClothesList();
};

const SNEAKER_MODEL_BUTTONS = [
    { key: 'all', label: 'TODOS OS MODELOS' },
    { key: 'aj1_low', label: 'AJ1 LOW' },
    { key: 'aj1_high', label: 'AJ1 HIGH' },
    { key: 'aj3', label: 'AJ3' },
    { key: 'aj4', label: 'AJ4' },
    { key: 'aj5', label: 'AJ5' },
    { key: 'aj11', label: 'AJ11' },
    { key: 'air_max_95', label: 'AIR MAX 95' },
    { key: 'yz_500', label: 'YZ 500' },
    { key: 'yz', label: 'YZ FOAM' },
    { key: 'yz_700', label: 'YZ 700' },
    { key: 'yz_slide', label: 'YZ SLIDE' },
    { key: 'yz_boost_350', label: 'YZ BOOST 350' },
    { key: 'nike_mind_001', label: 'NIKE MIND 001' },
    { key: 'adidas_samba', label: 'ADIDAS SAMBA' },
    { key: 'nb_550', label: 'NB 550' },
    { key: 'nb_530', label: 'NB 530' },
    { key: 'nb_9060', label: 'NB 9060' },
    { key: 'nb_2002', label: 'NB 2002' },
    { key: 'dunk', label: 'DUNK' }
];

const CLOTHES_MODEL_BUTTONS = [
    { key: 'all', label: 'TODOS OS MODELOS' },
    { key: 'hoodie', label: 'HOODIES' },
    { key: 'jacket', label: 'JAQUETAS' },
    { key: 'pant', label: 'CALÇAS' },
    { key: 'tee', label: 'CAMISETAS' },
    { key: 'short', label: 'SHORTS' },
    { key: 'acessorios', label: 'ACESSÓRIOS' }
];

function modelDropdownHTML(title, buttons, activeKey, toggleFn, filterFn, menuId) {
    const activeObj = buttons.find(m => m.key === activeKey);
    const activeLabel = activeObj ? activeObj.label : 'MODELOS';
    return `
        <div class="subgroup-label">
            <div class="subgroup-header-left">
                <span class="subgroup-title">${title}</span>
                <div class="model-dropdown-container">
                    <button class="model-dropdown-btn" onclick="${toggleFn}()">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                        <span>MODELOS</span>
                        <span class="active-model-tag">${activeLabel}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9l6 6 6-6"/></svg>
                    </button>
                    <div class="model-dropdown-menu" id="${menuId}">
                        ${buttons.map(m => `
                            <button class="model-dropdown-item ${activeKey === m.key ? 'active' : ''}" onclick="${filterFn}('${m.key}')">
                                <span>${m.label}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
            <span class="subgroup-count" data-count="__COUNT__">0 ITENS</span>
        </div>
    `;
}

function whatsNotice(text, msg) {
    return `<div class="more-models-notice">${text} <a href="https://wa.me/${WHATSAPP}?text=${msg}" target="_blank" rel="noopener noreferrer">aqui</a></div>`;
}

function renderSneakersList() {
    const el = document.getElementById('listSneakers');
    if (!el) return;

    let items = CATALOG.apparel.filter(p => p.group === 'Sneakers');
    if (currentSneakerFilter !== 'all') {
        items = items.filter(p => {
            const name = p.name.toUpperCase();
            switch (currentSneakerFilter) {
                case 'aj1_low': return name.includes('JORDAN 1') && name.includes('LOW');
                case 'aj1_high': return name.includes('JORDAN 1') && name.includes('HIGH');
                case 'aj3': return name.includes('JORDAN 3');
                case 'aj4': return name.includes('JORDAN 4');
                case 'aj5': return name.includes('JORDAN 5');
                case 'aj11': return name.includes('JORDAN 11');
                case 'air_max_95': return name.includes('AIR MAX 95');
                case 'yz_500': return name.includes('YZ 500');
                case 'yz_700': return name.includes('YZ 700');
                case 'yz_slide': return name.includes('YZ SLIDE');
                case 'yz_boost_350': return name.includes('YZ BOOST 350');
                case 'yz': return name.includes('YZ') && !name.includes('500') && !name.includes('700') && !name.includes('SLIDE') && !name.includes('350');
                case 'nike_mind_001': return name.includes('MIND 001');
                case 'adidas_samba': return name.includes('SAMBA');
                case 'nb_550': return name.includes('550');
                case 'nb_530': return name.includes('530');
                case 'nb_9060': return name.includes('9060');
                case 'nb_2002': return name.includes('2002');
                case 'dunk': return name.includes('DUNK');
                default: return true;
            }
        });
    }

    const head = modelDropdownHTML('01 / CALÇADOS &amp; TÊNIS', SNEAKER_MODEL_BUTTONS, currentSneakerFilter,
        'toggleModelDropdown', 'filterSneakers', 'modelDropdownMenu').replace('__COUNT__', items.length);

    el.innerHTML = head +
        (items.length > 0 ? items.map(p => cardHTML(p, 'apparel')).join('') : EMPTY_MSG) +
        whatsNotice('Não encontrou nenhum? Para específicos', 'Ol%C3%A1!%20Gostaria%20de%20consultar%20outros%20modelos%20de%20t%C3%AAnis');
    initScrollReveal(el);
    animateCounters(el);
}

function renderClothesList() {
    const el = document.getElementById('listClothes');
    if (!el) return;

    let items = CATALOG.apparel.filter(p => p.group === 'Apparel');
    if (currentClothesFilter !== 'all') {
        items = items.filter(p => {
            const name = p.name.toUpperCase();
            switch (currentClothesFilter) {
                case 'hoodie': return name.includes('HOODIE');
                case 'jacket': return name.includes('JACKET') || name.includes('BOMBER') || name.includes('VEST') || name.includes('SHELL') || name.includes('OVERSHIRT');
                case 'pant': return name.includes('PANT') || name.includes('JOGGER') || name.includes('DENIM');
                case 'tee': return name.includes('TEE') || name.includes('CREW') || name.includes('SWEATSHIRT') || name.includes('SWEATER') || name.includes('TANK') || name.includes('LONG SLEEVE') || name.includes('TRACK JACKET');
                case 'short': return name.includes('SHORT');
                case 'acessorios': return name.includes('BAG') || name.includes('SET');
                default: return true;
            }
        });
    }

    const head = modelDropdownHTML('02 / VESTUÁRIO &amp; ROUPAS', CLOTHES_MODEL_BUTTONS, currentClothesFilter,
        'toggleClothesModelDropdown', 'filterClothes', 'clothesModelDropdownMenu').replace('__COUNT__', items.length);

    el.innerHTML = head +
        (items.length > 0 ? items.map(p => cardHTML(p, 'apparel')).join('') : EMPTY_MSG) +
        whatsNotice('Não achou o que queria? Para específicos', 'Ol%C3%A1!%20Gostaria%20de%20consultar%20outros%20modelos%20de%20roupas');
    initScrollReveal(el);
    animateCounters(el);
}

function renderClaro() {
    renderSneakersList();
    renderClothesList();
}

/* =====================================================================
   RENDER — CATALOGO ESCURO (audio DJ) — provisorio
   ===================================================================== */
let audioFilters = { 1: 'all', 2: 'all', 3: 'all' };

const AUDIO_MODEL_BUTTONS = [
    { key: 'all', label: 'TODAS AS OPÇÕES' },
    { key: '1', label: 'ESCOLHA 1' },
    { key: '2', label: 'ESCOLHA 2' },
    { key: '3', label: 'ESCOLHA 3' }
];

window.toggleAudioDropdown = function (moduleId) {
    const menu = document.getElementById('audioDropdownMenu' + moduleId);
    if (menu) menu.classList.toggle('open');
};
window.filterAudio = function (moduleId, modelKey) {
    audioFilters[moduleId] = modelKey;
    const menu = document.getElementById('audioDropdownMenu' + moduleId);
    if (menu) menu.classList.remove('open');
    renderAudioList(moduleId);
};

function renderAudioList(moduleId) {
    const el = document.getElementById('listAudioDJ' + moduleId);
    if (!el) return;

    let items = CATALOG.apparel;
    const activeFilter = audioFilters[moduleId];
    if (activeFilter !== 'all') {
        items = items.filter((p, idx) => String((idx % 3) + 1) === activeFilter);
    }

    const label = { 1: 'AUDIO DJ', 2: 'CAR', 3: 'PC' }[moduleId] || 'ITENS';
    const head = modelDropdownHTML('0' + moduleId + ' / ' + label, AUDIO_MODEL_BUTTONS, activeFilter,
        'toggleAudioDropdown.bind(null,' + moduleId + ')', 'filterAudio.bind(null,' + moduleId + ')', 'audioDropdownMenu' + moduleId)
        .replace('__COUNT__', items.length);

    el.innerHTML = head +
        (items.length > 0 ? items.map(p => cardHTML(p, 'audio')).join('') : EMPTY_MSG) +
        whatsNotice('Não achou o que queria? Para específicos', 'Ol%C3%A1!%20Gostaria%20de%20consultar%20outras%20op%C3%A7%C3%B5es%20de%20Audio%20DJ');
    initScrollReveal(el);
    animateCounters(el);
}

function renderEscuro() {
    renderAudioList(1);
    renderAudioList(2);
    renderAudioList(3);
}

/* =====================================================================
   BOOT DO CATALOGO
   ===================================================================== */
CATALOG.apparel = (window.PRODUTOS && window.PRODUTOS[CATALOG_MODE]) || [];
(CATALOG_MODE === 'escuro' ? renderEscuro : renderClaro)();

/* =====================================================================
   MODAL DE PRODUTO (pv-modal — mesmo nos dois catalogos)
   ===================================================================== */
const drawer = document.getElementById('drawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const drawerClose = document.getElementById('drawerClose');
const drawerCode = document.getElementById('drawerCode');
const drawerEyebrow = document.getElementById('drawerEyebrow');
const drawerTitle = document.getElementById('drawerTitle');
const drawerSpecs = document.getElementById('drawerSpecs');
const drawerImg = document.getElementById('drawerImg');
const drawerImgBg = document.getElementById('drawerImgBg');
let currentItem = null;

document.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;

    const specs = JSON.parse(card.dataset.specs || '[]');
    currentItem = {
        code: card.dataset.code,
        name: card.dataset.name,
        type: card.dataset.type,
        cat: card.dataset.cat,
        img: card.dataset.img,
        specs: specs
    };

    if (drawer) drawer.style.setProperty('--accent', ACCENTS[currentItem.cat] || ACCENTS.apparel);
    if (drawerCode) drawerCode.textContent = currentItem.code;
    if (drawerEyebrow) drawerEyebrow.textContent = (currentItem.cat || '').toUpperCase();
    if (drawerTitle) drawerTitle.textContent = currentItem.name;

    if (drawerSpecs) {
        drawerSpecs.innerHTML = specs.map(([k, v]) => `
            <div class="spec-card">
                <div class="spec-ic">${specIcon(k)}</div>
                <div class="spec-txt">
                    <span class="spec-label">${k}</span>
                    <span class="spec-value">${v}</span>
                </div>
            </div>
        `).join('');
    }

    if (drawerImg) {
        if (currentItem.img) {
            drawerImg.src = currentItem.img;
            drawerImg.style.display = 'block';
        } else {
            drawerImg.style.display = 'none';
        }
    }
    if (drawerImgBg) drawerImgBg.src = currentItem.img || '';

    if (drawer) drawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('open');
    updateDrawerActiveState();
});

function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('open');
    updateDrawerActiveState();
}

function updateDrawerActiveState() {
    const anyOpen = (drawer && drawer.classList.contains('open')) ||
        (cartDrawer && cartDrawer.classList.contains('open'));
    document.body.classList.toggle('drawer-active', !!anyOpen);
}

if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

/* =====================================================================
   CARRINHO (compartilhado — chave por catalogo)
   ===================================================================== */
const CART_KEY = CATALOG_MODE === 'escuro' ? 'stro_cart_escuro' : 'stro_cart';
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
    if (!cartDrawer) return;
    cartDrawer.classList.toggle('open');
    if (cartBackdrop) cartBackdrop.classList.toggle('open');
    updateDrawerActiveState();
}

if (cartToggle) cartToggle.addEventListener('click', toggleCart);
if (cartClose) cartClose.addEventListener('click', toggleCart);
if (cartBackdrop) cartBackdrop.addEventListener('click', toggleCart);

if (addToCartBtn) addToCartBtn.addEventListener('click', () => {
    if (!currentItem) return;
    const existing = cart.find(i => i.code === currentItem.code);
    if (existing) existing.qty++;
    else cart.push({ ...currentItem, qty: 1, selected: true });
    updateCart();
    closeDrawer();
    if (cartBadge) {
        cartBadge.classList.add('bump');
        setTimeout(() => cartBadge.classList.remove('bump'), 300);
    }
});

function updateCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    if (cartBadge) cartBadge.textContent = totalCount;
    if (cartCountLabel) cartCountLabel.textContent = `(${totalCount} itens)`;
    if (cartToggle) cartToggle.classList.toggle('has-items', totalCount > 0);
    if (!cartBody) return;

    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <p>Seu carrinho está vazio.</p>
            </div>`;
        if (cartCheckoutBtn) cartCheckoutBtn.disabled = true;
        return;
    }

    if (cartCheckoutBtn) cartCheckoutBtn.disabled = false;
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

window.changeQty = function (idx, delta) {
    if (cart[idx]) {
        cart[idx].qty += delta;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
        updateCart();
    }
};

window.removeItem = function (idx) {
    cart.splice(idx, 1);
    updateCart();
};

if (cartBody) cartBody.addEventListener('change', (e) => {
    if (e.target.classList.contains('cart-item-checkbox')) {
        const idx = e.target.dataset.idx;
        if (cart[idx]) cart[idx].selected = e.target.checked;
    }
});

if (clearCartBtn) clearCartBtn.addEventListener('click', () => {
    cart = [];
    updateCart();
});

if (cartCheckoutBtn) cartCheckoutBtn.addEventListener('click', () => {
    const selectedItems = cart.filter(i => i.selected);
    if (selectedItems.length === 0) return alert('Selecione pelo menos um item para consultar!');
    let msg = 'Olá! Gostaria de consultar os seguintes itens:\n\n';
    selectedItems.forEach(i => { msg += `- ${i.name} (Qtd: ${i.qty}) [${i.code}]\n`; });
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
});

updateCart();

/* =====================================================================
   PRELOADER + TRANSICAO ENTRE CATALOGOS
   ===================================================================== */
window.addEventListener('load', () => {
    const veil = document.getElementById('preload-veil');
    if (veil) veil.classList.add('hidden');
});

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
