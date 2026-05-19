'use strict';

/* ══ i18n ══════════════════════════════════════════════════════ */
const LANG = {
  es: {
    heroBadge:    'Para mentes con TDAH',
    heroTitle:    'Lee más rápido.<br>Con más enfoque.',
    heroSub:      'La técnica de lectura biónica resalta las primeras letras de cada palabra para guiar tu cerebro naturalmente.',
    demoLabel:    'Ejemplo en vivo',
    importTitle:  'Importar texto',
    pasteLabel:   'Pegar texto',
    pasteHint:    'Escribe o pega',
    txtLabel:     'Archivo TXT',
    pdfLabel:     'Libro PDF',
    pdfHint:      '.pdf · Gratis',
    pastePlaceholder: 'Pega aquí tu texto, cita, artículo o capítulo de libro...',
    processBtn:   'Leer ahora →',
    loadingText:  'Procesando...',
    loadingPdf:   'Extrayendo texto del PDF...',
    loadingPage:  'Página {n} de {total}...',
    footerText:   'Procesamiento 100% local · Sin servidores · Sin costos',
    errorNoText:  'Por favor escribe o pega algo de texto.',
    errorFile:    'No se pudo leer el archivo.',
    errorPdf:     'No se pudo leer el PDF. Verifica que no esté protegido.',
    errorPdfJs:   'PDF.js no cargó. Verifica tu conexión a internet.',
    demoText:     'La lectura biónica ayuda a las personas con TDAH a mantener el foco durante períodos más largos. Las primeras letras de cada palabra guían tu cerebro para completar el resto de forma natural y fluida.',
    // Auth
    signinBtn:    'Iniciar sesión',
    loginTitle:   'Bienvenido a FocusRead',
    loginSub:     'Inicia sesión para guardar tu progreso y acceder desde cualquier dispositivo',
    googleBtn:    'Continuar con Google',
    loginTerms:   'Al continuar aceptas nuestros',
    linkTerms:    'Términos',
    linkPrivacy:  'Privacidad',
    loginOr:      'o continúa sin cuenta',
    guestBtn:     'Explorar gratis sin iniciar sesión →',
    signoutBtn:   'Cerrar sesión',
    // Pricing
    pricingTitle: 'Elige tu plan',
    pricingSub:   'Empieza gratis, sube cuando quieras',
    planFreeName: 'Gratis',
    planPeriodFree: '/siempre',
    planPeriodPro:  '/mes',
    planCurrentLabel: 'Plan actual',
    btnProCta:    'Probar Pro gratis 7 días →',
    pricingNote:  'Pagos seguros con Stripe · Cancela cuando quieras',
    // How it works
    howTitle:     '¿Por qué funciona?',
    how1Title:    'Tu cerebro completa las palabras',
    how1Desc:     'Al ver las primeras letras en negrita, tu cerebro predice y completa el resto automáticamente, acelerando la comprensión.',
    how2Title:    'Menos saltos visuales',
    how2Desc:     'Los puntos de anclaje biónico reducen los movimientos sacádicos del ojo, manteniendo el foco por más tiempo.',
    how3Title:    'Diseñado para el TDAH',
    how3Desc:     'Las personas con TDAH se benefician especialmente al tener anclas visuales claras que guían la atención línea por línea.',
    // Bio
    bioNameTag:   'Bio',
    bioMessage:   '¡Hola! Soy <strong>Bio</strong>, tu guía de lectura biónica. Las primeras letras de cada palabra se resaltan para que tu cerebro complete el resto. ¡Es como un superpoder para leer!',
    readerBioTip: 'Las letras en <b>negrita</b> guían tu vista. Deja que tu cerebro complete el resto.',
    // Modal
    modalTitle:   '¡Bio dice que vale la pena! ✦',
    modalSub:     'Desbloquea todo el poder de la lectura biónica',
    mf1: '📚 PDFs de cualquier tamaño (libros completos)',
    mf2: '📖 Soporte para EPUB y DOCX',
    mf3: '⚡ Intensidad biónica personalizable',
    mf4: '🗂️ Biblioteca personal de libros',
    mf5: '🎨 Temas y tipografías adicionales',
    mf6: '💬 Soporte prioritario con el equipo',
    mpoMonthLabel: 'Mensual',
    mpoMonthPer:   '/mes',
    mpoYearLabel:  'Anual',
    mpoYearPer:    '/año',
    mpoSave:       'Ahorra 33%',
    btnModalCta:   'Comenzar prueba gratis de 7 días →',
    modalLegal:    'Cancela cuando quieras · Stripe · Sin compromisos',
  },
  en: {
    heroBadge:    'For ADHD minds',
    heroTitle:    'Read faster.<br>Stay focused.',
    heroSub:      'Bionic reading highlights the first letters of each word to guide your brain naturally through any text.',
    demoLabel:    'Live example',
    importTitle:  'Import text',
    pasteLabel:   'Paste text',
    pasteHint:    'Write or paste',
    txtLabel:     'TXT file',
    pdfLabel:     'PDF book',
    pdfHint:      '.pdf · Free',
    pastePlaceholder: 'Paste your text, quote, article or book chapter here...',
    processBtn:   'Read now →',
    loadingText:  'Processing...',
    loadingPdf:   'Extracting text from PDF...',
    loadingPage:  'Page {n} of {total}...',
    footerText:   '100% local processing · No servers · No costs',
    errorNoText:  'Please write or paste some text.',
    errorFile:    'Could not read the file.',
    errorPdf:     'Could not read the PDF. Make sure it is not password-protected.',
    errorPdfJs:   'PDF.js failed to load. Check your internet connection.',
    demoText:     'Bionic reading helps people with ADHD maintain focus for longer periods. The first letters of each word guide your brain to complete the rest naturally and fluently.',
    // Auth
    signinBtn:    'Sign in',
    loginTitle:   'Welcome to FocusRead',
    loginSub:     'Sign in to save your progress and access from any device',
    googleBtn:    'Continue with Google',
    loginTerms:   'By continuing you accept our',
    linkTerms:    'Terms',
    linkPrivacy:  'Privacy',
    loginOr:      'or continue without an account',
    guestBtn:     'Explore free without signing in →',
    signoutBtn:   'Sign out',
    pricingTitle: 'Choose your plan',
    pricingSub:   'Start free, upgrade anytime',
    planFreeName: 'Free',
    planPeriodFree: '/forever',
    planPeriodPro:  '/month',
    planCurrentLabel: 'Current plan',
    btnProCta:    'Try Pro free for 7 days →',
    pricingNote:  'Secure payments with Stripe · Cancel anytime',
    howTitle:     'Why does it work?',
    how1Title:    'Your brain completes words',
    how1Desc:     'Seeing the first letters in bold, your brain predicts and completes the rest automatically, speeding up comprehension.',
    how2Title:    'Fewer visual jumps',
    how2Desc:     'Bionic anchor points reduce saccadic eye movements, maintaining focus for longer periods.',
    how3Title:    'Designed for ADHD',
    how3Desc:     'People with ADHD especially benefit from having clear visual anchors that guide attention line by line.',
    bioNameTag:   'Bio',
    bioMessage:   'Hi! I\'m <strong>Bio</strong>, your bionic reading guide. The first letters of each word are highlighted so your brain completes the rest. It\'s like a superpower for reading!',
    readerBioTip: 'The <b>bold</b> letters guide your eyes. Let your brain complete the rest.',
    modalTitle:   'Bio says it\'s worth it! ✦',
    modalSub:     'Unlock the full power of bionic reading',
    mf1: '📚 PDFs of any size (full books)',
    mf2: '📖 EPUB and DOCX support',
    mf3: '⚡ Customizable bionic intensity',
    mf4: '🗂️ Personal book library',
    mf5: '🎨 Additional themes and fonts',
    mf6: '💬 Priority support from the team',
    mpoMonthLabel: 'Monthly',
    mpoMonthPer:   '/month',
    mpoYearLabel:  'Annual',
    mpoYearPer:    '/year',
    mpoSave:       'Save 33%',
    btnModalCta:   'Start 7-day free trial →',
    modalLegal:    'Cancel anytime · Stripe · No commitment',
  },
};

let lang  = localStorage.getItem('fr-lang')  || 'es';
let theme = localStorage.getItem('fr-theme') || 'dark';
let fontSize = Number(localStorage.getItem('fr-size')) || 18;

const t = key => LANG[lang][key] ?? key;

/* ══ Bionic algorithm ══════════════════════════════════════════ */
function boldLen(len) {
  if (len <= 3) return 1;
  if (len <= 5) return 2;
  return Math.ceil(len / 2);
}

function escHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function bionicToken(raw) {
  if (!raw) return '';
  const m = raw.match(/^([^a-zA-ZáéíóúÁÉÍÓÚàâäèêëîïôœùûüÿçæñÑüÜ]*)([a-zA-ZáéíóúÁÉÍÓÚàâäèêëîïôœùûüÿçæñÑüÜ'][a-zA-ZáéíóúÁÉÍÓÚàâäèêëîïôœùûüÿçæñÑüÜ'-]*)([^a-zA-ZáéíóúÁÉÍÓÚàâäèêëîïôœùûüÿçæñÑüÜ']*)$/);
  if (!m || !m[2]) return escHtml(raw);
  const [, pre, core, post] = m;
  const n = boldLen(core.length);
  return escHtml(pre)
    + '<b>' + escHtml(core.slice(0, n)) + '</b>'
    + escHtml(core.slice(n))
    + escHtml(post);
}

function bionicProcess(text) {
  const paragraphs = text.split(/\n{2,}/);
  return paragraphs
    .filter(p => p.trim())
    .map(para => {
      const processedLines = para
        .split('\n')
        .map(line => {
          if (!line.trim()) return '';
          return line
            .split(/(\s+)/)
            .map(tok => (/^\s+$/.test(tok) ? tok : bionicToken(tok)))
            .join('');
        });
      return '<p>' + processedLines.join('<br>') + '</p>';
    })
    .join('');
}

/* ══ DOM helpers ═══════════════════════════════════════════════ */
const $ = id => document.getElementById(id);

function showLoading(title, sub) {
  $('loading-text').textContent = title || t('loadingText');
  $('loading-detail').textContent = sub || '';
  $('loading').hidden = false;
}
function hideLoading() { $('loading').hidden = true; }

function showScreen(id) {
  const home   = $('screen-home');
  const reader = $('screen-reader');
  if (id === 'screen-reader') {
    home.classList.remove('active');
    home.classList.add('slide-out');
    reader.classList.remove('slide-out');
    reader.classList.add('active');
  } else {
    reader.classList.remove('active');
    home.classList.remove('slide-out');
    home.classList.add('active');
  }
}

/* ══ Reader ════════════════════════════════════════════════════ */
let _currentText  = '';
let _currentTitle = '';

function openReader(rawText, title) {
  if (!rawText || !rawText.trim()) {
    alert(lang === 'es'
      ? 'El documento no contiene texto seleccionable. Puede ser un PDF escaneado (imagen).'
      : 'The document has no selectable text. It may be a scanned (image) PDF.');
    return;
  }
  _currentText  = rawText;
  _currentTitle = title || 'FocusRead';
  $('reader-title').textContent = _currentTitle;
  $('reader-content').innerHTML = bionicProcess(rawText);
  $('reader-content').style.fontSize = fontSize + 'px';
  $('reader-scroll').scrollTop = 0;
  $('reader-bio-tip').classList.remove('hidden');
  updateProgress();
  const saveBtn = $('btn-save-book');
  saveBtn.hidden   = !currentUser;
  saveBtn.textContent = '★';
  saveBtn.disabled = false;
  const rsvpBtn = $('btn-rsvp-open');
  if (rsvpBtn) rsvpBtn.hidden = !isPro();
  showScreen('screen-reader');
}

function adjustFont(delta) {
  fontSize = Math.max(14, Math.min(30, fontSize + delta));
  localStorage.setItem('fr-size', fontSize);
  $('reader-content').style.fontSize = fontSize + 'px';
}

function updateProgress() {
  const el  = $('reader-scroll');
  const max = el.scrollHeight - el.clientHeight;
  const pct = max > 0 ? Math.round((el.scrollTop / max) * 100) : 0;
  $('progress-fill').style.width = pct + '%';
  $('progress-label').textContent = pct + '%';
}

/* ══ File readers ══════════════════════════════════════════════ */
function readTxt(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsText(file, 'utf-8');
  });
}

async function extractPageText(pdf, pageNum) {
  const page    = await pdf.getPage(pageNum);
  const content = await page.getTextContent();
  let text = '';
  let lastY = null;
  for (const item of content.items) {
    const y = item.transform ? item.transform[5] : null;
    if (lastY !== null && Math.abs(y - lastY) > 5) text += '\n';
    text += item.str;
    lastY = y;
  }
  return text.trim();
}

async function extractPages(pdf, fromPage, toPage) {
  const total = pdf.numPages;
  const start = Math.max(1, fromPage || 1);
  const end   = Math.min(total, toPage   || total);
  let fullText = '';
  for (let i = start; i <= end; i++) {
    showLoading(t('loadingPdf'), t('loadingPage').replace('{n}', i).replace('{total}', total));
    fullText += await extractPageText(pdf, i) + '\n\n';
  }
  return fullText.trim();
}

async function readPdf(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  if (isPro()) {
    const outline = await pdf.getOutline();
    if (outline && outline.length > 0) {
      hideLoading();
      await showTocModal(pdf, outline, file.name.replace(/\.pdf$/i, ''));
      return null;
    }
    return await extractPages(pdf, 1, pdf.numPages);
  }

  // Free plan: max 20 pages
  const maxPages = FREE_LIMITS.pdfPages;
  const total = pdf.numPages;
  if (total > maxPages) {
    const ok = confirm(lang === 'es'
      ? `Este PDF tiene ${total} páginas. El plan gratuito lee las primeras ${maxPages}. ¿Continuar? Actualiza a Pro para leerlo completo.`
      : `This PDF has ${total} pages. The free plan reads the first ${maxPages}. Continue? Upgrade to Pro for the full document.`);
    if (!ok) return null;
  }
  return await extractPages(pdf, 1, Math.min(total, maxPages));
}

/* ══ PDF Table of Contents ═════════════════════════════════════ */
async function getOutlinePageNum(pdf, dest) {
  if (!dest) return null;
  try {
    let ref;
    if (typeof dest === 'string') {
      const d = await pdf.getDestination(dest);
      if (!d) return null;
      ref = d[0];
    } else {
      ref = dest[0];
    }
    return await pdf.getPageIndex(ref) + 1;
  } catch { return null; }
}

async function buildTocItems(pdf, outline) {
  const items = [];
  for (const entry of outline) {
    const page = await getOutlinePageNum(pdf, entry.dest);
    items.push({ title: entry.title || '—', page });
  }
  return items;
}

async function showTocModal(pdf, outline, docTitle) {
  $('toc-doc-name').textContent = docTitle;
  const tocList = $('toc-list');
  tocList.innerHTML = '<p class="toc-loading">Cargando índice…</p>';
  $('modal-toc').hidden = false;
  document.body.style.overflow = 'hidden';

  const items = await buildTocItems(pdf, outline);

  for (let i = 0; i < items.length; i++) {
    items[i].endPage = items[i + 1] ? (items[i + 1].page || pdf.numPages) - 1 : pdf.numPages;
  }

  if (!items.length) {
    tocList.innerHTML = '<p class="toc-loading">No se encontraron secciones.</p>';
    return;
  }

  tocList.innerHTML = items.map((item, i) => `
    <button class="toc-item" data-idx="${i}">
      <span class="toc-item-title">${escHtml(item.title)}</span>
      ${item.page ? `<span class="toc-item-page">p.&nbsp;${item.page}</span>` : ''}
    </button>`).join('');

  tocList.querySelectorAll('.toc-item').forEach(btn => {
    btn.addEventListener('click', async () => {
      const item = items[parseInt(btn.dataset.idx)];
      closeTocModal();
      showLoading(t('loadingPdf'));
      const text = await extractPages(pdf, item.page || 1, item.endPage || pdf.numPages);
      hideLoading();
      openReader(text, item.title);
    });
  });

  $('toc-read-all').onclick = async () => {
    closeTocModal();
    showLoading(t('loadingPdf'));
    const text = await extractPages(pdf, 1, pdf.numPages);
    hideLoading();
    openReader(text, docTitle);
  };
}

function closeTocModal() {
  $('modal-toc').hidden = true;
  document.body.style.overflow = '';
}

/* ══ RSVP Mode ════════════════════════════════════════════════ */
let rsvpWords   = [];
let rsvpIdx     = 0;
let rsvpWpm     = 300;
let rsvpPlaying = false;
let rsvpTimer   = null;

function rsvpTokenize(text) {
  return text.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(w => w.length > 0);
}

function rsvpPivotHtml(word) {
  const clean = word.replace(/[<>]/g, '');
  if (!clean) return '';
  const letters = clean.match(/[a-zA-ZáéíóúÁÉÍÓÚàâäèêëîïôœùûüÿçæñÑüÜ]/g);
  if (!letters) return escHtml(clean);
  const pivotLetterIdx = Math.max(0, Math.ceil(letters.length * 0.35) - 1);
  let letterCount = 0;
  let pivotPos = 0;
  for (let i = 0; i < clean.length; i++) {
    if (/[a-zA-ZáéíóúÁÉÍÓÚàâäèêëîïôœùûüÿçæñÑüÜ]/.test(clean[i])) {
      if (letterCount === pivotLetterIdx) { pivotPos = i; break; }
      letterCount++;
    }
  }
  return escHtml(clean.slice(0, pivotPos))
    + '<span class="rsvp-pivot">' + escHtml(clean[pivotPos]) + '</span>'
    + escHtml(clean.slice(pivotPos + 1));
}

function openRsvp() {
  if (!currentUser) { openLoginModal(); return; }
  if (!isPro())     { openUpgradeModal(); return; }
  if (!_currentText) return;
  rsvpWords   = rsvpTokenize(_currentText);
  rsvpIdx     = 0;
  rsvpPlaying = false;
  rsvpWpm     = parseInt($('rsvp-slider').value) || 300;
  $('rsvp-wpm-val').textContent = rsvpWpm;
  renderRsvpWord();
  updateRsvpProgress();
  updateRsvpPlayBtn();
  $('rsvp-overlay').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeRsvp() {
  rsvpStop();
  $('rsvp-overlay').hidden = true;
  document.body.style.overflow = '';
}

function rsvpStop() {
  rsvpPlaying = false;
  if (rsvpTimer) { clearInterval(rsvpTimer); rsvpTimer = null; }
  updateRsvpPlayBtn();
}

function rsvpPlay() {
  if (rsvpIdx >= rsvpWords.length - 1) rsvpIdx = 0;
  rsvpPlaying = true;
  const delay = Math.round(60000 / rsvpWpm);
  renderRsvpWord();
  updateRsvpProgress();
  rsvpTimer = setInterval(() => {
    rsvpIdx++;
    if (rsvpIdx >= rsvpWords.length) {
      rsvpStop();
      rsvpIdx = rsvpWords.length - 1;
      return;
    }
    renderRsvpWord();
    updateRsvpProgress();
  }, delay);
  updateRsvpPlayBtn();
}

function rsvpToggle() {
  if (rsvpPlaying) { rsvpStop(); } else { rsvpPlay(); }
}

function renderRsvpWord() {
  const word = rsvpWords[rsvpIdx] || '';
  $('rsvp-word').innerHTML = rsvpPivotHtml(word);
  $('rsvp-count').textContent = (rsvpIdx + 1) + ' / ' + rsvpWords.length;
}

function updateRsvpProgress() {
  const pct = rsvpWords.length > 1 ? (rsvpIdx / (rsvpWords.length - 1)) * 100 : 0;
  $('rsvp-prog-fill').style.width = pct + '%';
}

function updateRsvpPlayBtn() {
  $('rsvp-play').textContent = rsvpPlaying ? '⏸ pausar' : '▶ iniciar';
}

/* ══ Library (IndexedDB) ══════════════════════════════════════ */
let _db = null;

function dbOpen() {
  if (_db) return Promise.resolve(_db);
  return new Promise((res, rej) => {
    const req = indexedDB.open('focusread', 1);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains('books')) {
        d.createObjectStore('books', { keyPath: 'id' }).createIndex('uid', 'uid');
      }
    };
    req.onsuccess = e => { _db = e.target.result; res(_db); };
    req.onerror   = ()  => rej(req.error);
  });
}

async function dbSave(title, text) {
  const d = await dbOpen();
  const book = {
    id:    Date.now() + '-' + Math.random().toString(36).slice(2, 7),
    uid:   currentUser.uid,
    title,
    text,
    chars: text.length,
    saved: Date.now(),
  };
  return new Promise((res, rej) => {
    const tx = d.transaction('books', 'readwrite');
    tx.objectStore('books').add(book);
    tx.oncomplete = () => res(book);
    tx.onerror    = () => rej(tx.error);
  });
}

async function dbGetAll() {
  const d = await dbOpen();
  return new Promise((res, rej) => {
    const req = d.transaction('books', 'readonly')
                  .objectStore('books').index('uid').getAll(currentUser.uid);
    req.onsuccess = () => res(req.result.sort((a, b) => b.saved - a.saved));
    req.onerror   = () => rej(req.error);
  });
}

async function dbDelete(id) {
  const d = await dbOpen();
  return new Promise((res, rej) => {
    const tx = d.transaction('books', 'readwrite');
    tx.objectStore('books').delete(id);
    tx.oncomplete = res;
    tx.onerror    = () => rej(tx.error);
  });
}

function isPro() {
  return !!currentUser && localStorage.getItem('fr-pro') === '1';
}

/* ══ Free plan limits ══════════════════════════════════════════ */
const FREE_LIMITS = { paste: 5, txt: 3, pdfPages: 20 };

function getFreeCount(type) {
  return parseInt(localStorage.getItem('fr-free-' + type) || '0');
}
function incFreeCount(type) {
  localStorage.setItem('fr-free-' + type, getFreeCount(type) + 1);
}
function checkFreeLimit(type) {
  if (isPro()) return true;
  const limit = FREE_LIMITS[type];
  if (getFreeCount(type) >= limit) {
    openUpgradeModal();
    return false;
  }
  return true;
}

async function renderLibrary() {
  const el = $('library-list');
  if (!el) return;

  if (!currentUser) {
    el.innerHTML = `<p class="profile-lib-empty">${lang === 'es' ? 'Inicia sesión para ver tu biblioteca.' : 'Sign in to view your library.'}</p>`;
    return;
  }

  if (!isPro()) {
    el.innerHTML = `
      <div class="profile-lib-locked">
        <p class="profile-lib-hint">${lang === 'es'
          ? 'Guarda PDFs y vuélvelos a leer cuando quieras'
          : 'Save PDFs and re-read them anytime'}</p>
        <button class="btn-upgrade-profile lib-upgrade-btn">${lang === 'es' ? 'Desbloquear con Pro →' : 'Unlock with Pro →'}</button>
      </div>`;
    el.querySelector('.lib-upgrade-btn').addEventListener('click', () => {
      closeProfilePanel();
      openUpgradeModal();
    });
    return;
  }

  try {
    const books = await dbGetAll();
    if (!books.length) {
      el.innerHTML = `<p class="profile-lib-empty">${lang === 'es' ? 'Sin libros guardados aún. Lee un PDF y guárdalo.' : 'No saved books yet. Read a PDF and save it.'}</p>`;
      return;
    }
    el.innerHTML = books.map(b => `
      <button class="profile-book-card" data-id="${b.id}">
        <div class="profile-book-icon">📖</div>
        <div class="profile-book-info">
          <div class="profile-book-title">${escHtml(b.title)}</div>
          <div class="profile-book-meta">${new Date(b.saved).toLocaleDateString()} · ${Math.round(b.chars / 1000)}k chars</div>
        </div>
        <button class="profile-book-del" data-id="${b.id}" aria-label="Eliminar">×</button>
      </button>`).join('');

    el.querySelectorAll('.profile-book-card').forEach(card => {
      card.addEventListener('click', async e => {
        if (e.target.classList.contains('profile-book-del')) return;
        const d = await dbOpen();
        const req = d.transaction('books','readonly').objectStore('books').get(card.dataset.id);
        req.onsuccess = () => {
          if (req.result) {
            closeProfilePanel();
            openReader(req.result.text, req.result.title);
          }
        };
      });
    });

    el.querySelectorAll('.profile-book-del').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation();
        await dbDelete(btn.dataset.id);
        renderLibrary();
      });
    });
  } catch (err) {
    console.error('Library error:', err);
    el.innerHTML = '';
  }
}

async function saveCurrentBook() {
  if (!currentUser) { openLoginModal(); return; }
  if (!isPro())     { openUpgradeModal(); return; }
  if (!_currentText) return;

  const btn = $('btn-save-book');
  btn.disabled = true;
  try {
    await dbSave(_currentTitle, _currentText);
    btn.textContent = lang === 'es' ? '✓' : '✓';
    setTimeout(() => { btn.textContent = '★'; btn.disabled = false; }, 2000);
    renderLibrary();
  } catch (e) {
    btn.disabled = false;
    console.error('Save error:', e);
  }
}

/* ══ Profile Panel ════════════════════════════════════════════ */
function openProfilePanel() {
  renderLibrary();
  renderPlanCard();
  $('panel-profile').hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => $('profile-sheet').classList.add('open'), 10);
}

function closeProfilePanel() {
  $('profile-sheet').classList.remove('open');
  setTimeout(() => {
    if ($('panel-profile')) $('panel-profile').hidden = true;
    document.body.style.overflow = '';
  }, 320);
}

function renderPlanCard() {
  const card = $('profile-plan-card');
  if (!card) return;
  if (!currentUser) { card.innerHTML = ''; return; }
  if (isPro()) {
    card.innerHTML = `
      <div class="plan-badge-row pro-row">
        <span class="plan-badge-icon">✦</span>
        <div>
          <div class="plan-badge-name">Plan Pro activo</div>
          <div class="plan-badge-sub">Acceso completo desbloqueado</div>
        </div>
      </div>`;
  } else {
    card.innerHTML = `
      <div class="plan-badge-row free-row">
        <div>
          <div class="plan-badge-name">${lang === 'es' ? 'Plan gratuito' : 'Free plan'}</div>
          <div class="plan-badge-sub">${lang === 'es' ? 'Lectura básica habilitada' : 'Basic reading enabled'}</div>
        </div>
        <button class="btn-upgrade-profile" id="profile-upgrade-btn">${lang === 'es' ? 'Ir a Pro ✦' : 'Go Pro ✦'}</button>
      </div>`;
    $('profile-upgrade-btn').addEventListener('click', () => {
      closeProfilePanel();
      openUpgradeModal();
    });
  }
}

/* ══ Firebase Auth ═════════════════════════════════════════════ */
let currentUser = null;
let firebaseReady = false;

function initFirebase() {
  const cfg = window.FOCUSREAD_FIREBASE;
  if (!cfg || cfg.apiKey.includes('REPLACE')) return; // not configured yet

  // Wait for Firebase SDKs to load (they're deferred)
  const waitForFirebase = () => {
    if (typeof firebase === 'undefined') {
      setTimeout(waitForFirebase, 200);
      return;
    }
    try {
      if (!firebase.apps.length) firebase.initializeApp(cfg);
      firebaseReady = true;
      const auth = firebase.auth();
      auth.languageCode = lang;

      auth.onAuthStateChanged(user => {
        currentUser = user;
        updateAuthUI(user);
      });
    } catch (e) {
      console.warn('Firebase init error:', e);
    }
  };
  waitForFirebase();
}

function updateAuthUI(user) {
  const signedIn  = !!user;
  const profileEl = $('user-profile');
  const signinEl  = $('btn-signin-header');

  signinEl.hidden  = signedIn;
  profileEl.hidden = !signedIn;

  if (user) {
    const photo = $('user-photo');
    const fallback = $('user-avatar-fallback');
    if (user.photoURL) {
      photo.src = user.photoURL;
      photo.hidden = false;
      fallback.hidden = true;
      // sync large profile photo
      const photoLg = $('profile-photo-lg');
      if (photoLg) { photoLg.src = user.photoURL; photoLg.hidden = false; }
      const fallbackLg = $('profile-fallback-lg');
      if (fallbackLg) fallbackLg.hidden = true;
    } else {
      photo.hidden = true;
      fallback.hidden = false;
      fallback.textContent = (user.displayName || user.email || '?')[0].toUpperCase();
      const fallbackLg = $('profile-fallback-lg');
      if (fallbackLg) {
        fallbackLg.hidden = false;
        fallbackLg.textContent = (user.displayName || user.email || '?')[0].toUpperCase();
      }
      const photoLg = $('profile-photo-lg');
      if (photoLg) photoLg.hidden = true;
    }
    $('user-display-name').textContent = user.displayName || '';
    $('user-email').textContent = user.email || '';
  }

  if ($('panel-profile') && !$('panel-profile').hidden) {
    renderPlanCard();
    renderLibrary();
  }
}

async function googleSignIn() {
  if (!firebaseReady) {
    alert(lang === 'es'
      ? 'Firebase no está configurado aún. Revisa firebase-config.js'
      : 'Firebase is not configured yet. Check firebase-config.js');
    return;
  }
  const btn = $('btn-google-signin');
  btn.disabled = true;
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');

    // Try popup first; fall back to redirect on mobile Safari
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (e) {
      if (e.code === 'auth/popup-blocked' || e.code === 'auth/popup-closed-by-user') {
        await firebase.auth().signInWithRedirect(provider);
      } else throw e;
    }
    closeLoginModal();
  } catch (e) {
    console.error('Sign-in error:', e);
    if (e.code !== 'auth/popup-closed-by-user' && e.code !== 'auth/cancelled-popup-request') {
      alert(lang === 'es' ? 'Error al iniciar sesión. Intenta de nuevo.' : 'Sign-in failed. Please try again.');
    }
  } finally {
    btn.disabled = false;
  }
}

async function signOut() {
  if (!firebaseReady) return;
  try {
    await firebase.auth().signOut();
  } catch (e) { console.error(e); }
}

function openLoginModal() {
  $('modal-login').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeLoginModal() {
  $('modal-login').hidden = true;
  document.body.style.overflow = '';
}
function requireAuth(callback) {
  if (currentUser) { callback(); } else { openLoginModal(); }
}

function openLegalModal(id) {
  closeLoginModal();
  $(id).hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeLegalModal(id) {
  $(id).hidden = true;
  document.body.style.overflow = '';
  openLoginModal();
}

/* ══ Stripe / Pricing ══════════════════════════════════════════ */
let selectedPeriod = 'month';

function setBillingPeriod(period) {
  selectedPeriod = period;
  const isAnnual = period === 'annual';

  $('bill-monthly')?.classList.toggle('billing-opt-active', !isAnnual);
  $('bill-annual')?.classList.toggle('billing-opt-active', isAnnual);

  if ($('price-basic'))  $('price-basic').textContent  = isAnnual ? '$1,000' : '$100';
  if ($('period-basic')) $('period-basic').textContent = isAnnual ? 'MXN/año' : 'MXN/mes';
  if ($('price-pro'))    $('price-pro').textContent    = isAnnual ? '$1,500' : '$150';
  if ($('period-pro'))   $('period-pro').textContent   = isAnnual ? 'MXN/año' : 'MXN/mes';

  if ($('annual-note-basic')) $('annual-note-basic').hidden = !isAnnual;
  if ($('annual-note-pro'))   $('annual-note-pro').hidden   = !isAnnual;
}

function initStripe() {
  const cfg = window.FOCUSREAD_STRIPE;
  if (!cfg || cfg.publishableKey.includes('REPLACE')) return;

  // Wire fallback payment link buttons
  setupPaymentLinkButton('btn-pro-cta', cfg.paymentLinkMonthly);
  setupPaymentLinkButton('btn-modal-cta', cfg.paymentLinkMonthly);
}

function setupPaymentLinkButton(btnId, url) {
  const btn = $(btnId);
  if (!btn || !url || url.includes('REPLACE')) return;
  btn.addEventListener('click', () => { window.open(url, '_blank', 'noopener'); });
}

function renderStripePricingTable() {
  const cfg = window.FOCUSREAD_STRIPE;

  // Wire plan buttons to payment links (respects annual toggle)
  const basicBtn = $('btn-plan-basic');
  const proBtn   = $('btn-plan-pro');
  if (basicBtn) {
    basicBtn.onclick = () => {
      const isAnnual = selectedPeriod === 'annual';
      const url = isAnnual ? cfg?.paymentLinkBasicAnnual : cfg?.paymentLinkBasic;
      if (url && !url.includes('REPLACE')) {
        window.open(url, '_blank', 'noopener');
      } else {
        alert(lang === 'es'
          ? 'Próximamente: configura el link de pago en stripe-config.js.'
          : 'Coming soon: set up the payment link in stripe-config.js.');
      }
    };
  }
  if (proBtn) {
    proBtn.onclick = () => {
      const isAnnual = selectedPeriod === 'annual';
      const url = isAnnual ? cfg?.paymentLinkYearly : cfg?.paymentLinkMonthly;
      if (url && !url.includes('REPLACE')) {
        window.open(url, '_blank', 'noopener');
      } else {
        alert(lang === 'es'
          ? 'Próximamente: configura el link de pago en stripe-config.js.'
          : 'Coming soon: set up the payment link in stripe-config.js.');
      }
    };
  }

  // Also inject Stripe Pricing Table if fully configured
  const wrap = $('stripe-pricing-table-wrap');
  if (!wrap || !cfg || cfg.publishableKey.includes('REPLACE') || !cfg.pricingTableId || cfg.pricingTableId.includes('REPLACE')) return;
  const emailAttr  = currentUser?.email ? `customer-email="${currentUser.email}"` : '';
  const clientAttr = currentUser?.uid   ? `client-reference-id="${currentUser.uid}"` : '';
  wrap.innerHTML = `
    <stripe-pricing-table
      pricing-table-id="${cfg.pricingTableId}"
      publishable-key="${cfg.publishableKey}"
      ${emailAttr}
      ${clientAttr}>
    </stripe-pricing-table>`;
}

function openUpgradeModal() {
  $('modal-upgrade').hidden = false;
  document.body.style.overflow = 'hidden';
  renderStripePricingTable();
}
function closeUpgradeModal() {
  $('modal-upgrade').hidden = true;
  document.body.style.overflow = '';
}

function selectPeriod(period) {
  selectedPeriod = period;
  $('mpo-month')?.classList.toggle('active', period === 'month');
  $('mpo-year')?.classList.toggle('active', period === 'year');
}

/* ══ Suggestions ══════════════════════════════════════════════ */
function initSuggestions() {
  const sendBtn  = $('btn-suggestion-send');
  const resetBtn = $('btn-suggestion-reset');
  if (!sendBtn) return;

  sendBtn.addEventListener('click', () => {
    const text  = $('suggestion-text').value.trim();
    const email = $('suggestion-email')?.value.trim() || '';
    if (!text) { $('suggestion-text').focus(); return; }

    const subject = encodeURIComponent('Sugerencia FocusRead');
    const body = encodeURIComponent(
      `Sugerencia:\n${text}\n\n${email ? `Responder a: ${email}` : '(Sin email de contacto)'}`
    );
    window.open(`mailto:hola@focusread.app?subject=${subject}&body=${body}`, '_blank');

    $('suggestions-form').hidden = true;
    $('suggestions-thanks').hidden = false;
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      $('suggestion-text').value = '';
      if ($('suggestion-email')) $('suggestion-email').value = '';
      $('suggestions-form').hidden = false;
      $('suggestions-thanks').hidden = true;
    });
  }
}

/* ══ i18n application ══════════════════════════════════════════ */
function applyLang() {
  document.documentElement.lang = lang;
  $('btn-lang').textContent = lang.toUpperCase();

  const textIds = {
    'hero-badge':        'heroBadge',
    'hero-sub':          'heroSub',
    'demo-label':        'demoLabel',
    'import-title':      'importTitle',
    'paste-label':       'pasteLabel',
    'paste-hint':        'pasteHint',
    'txt-label':         'txtLabel',
    'pdf-label':         'pdfLabel',
    'pdf-hint':          'pdfHint',
    'btn-process-text':  'processBtn',
    'footer-text':       'footerText',
    // Pricing
    'pricing-title':     'pricingTitle',
    'pricing-sub':       'pricingSub',
    'plan-free-name':    'planFreeName',
    'plan-period-free':  'planPeriodFree',
    'plan-period-pro':   'planPeriodPro',
    'plan-current-label':'planCurrentLabel',
    'btn-pro-cta-text':  'btnProCta',
    'pricing-note':      'pricingNote',
    // How it works
    'how-title':         'howTitle',
    'how-1-title':       'how1Title',
    'how-1-desc':        'how1Desc',
    'how-2-title':       'how2Title',
    'how-2-desc':        'how2Desc',
    'how-3-title':       'how3Title',
    'how-3-desc':        'how3Desc',
    // Bio
    'bio-name-tag':      'bioNameTag',
    'plan-pro-name':     'planFreeName', // reuse intentional
    // Modal
    'modal-title':       'modalTitle',
    'modal-sub':         'modalSub',
    'mf-1':              'mf1',
    'mf-2':              'mf2',
    'mf-3':              'mf3',
    'mf-4':              'mf4',
    'mf-5':              'mf5',
    'mf-6':              'mf6',
    'mpo-month-label':   'mpoMonthLabel',
    'mpo-month-per':     'mpoMonthPer',
    'mpo-year-label':    'mpoYearLabel',
    'mpo-year-per':      'mpoYearPer',
    'mpo-save':          'mpoSave',
    'btn-modal-cta-text':'btnModalCta',
    'modal-legal':       'modalLegal',
  };

  for (const [id, key] of Object.entries(textIds)) {
    const el = $(id);
    if (el) el.textContent = t(key);
  }

  // Auth strings
  $('btn-signin-text').textContent  = t('signinBtn');
  $('login-title').textContent      = t('loginTitle');
  $('login-sub').textContent        = t('loginSub');
  $('btn-google-text').textContent  = t('googleBtn');
  $('btn-signout-text').textContent = t('signoutBtn');
  if (firebaseReady) firebase.auth().languageCode = lang;

  // innerHTML updates
  $('hero-title').innerHTML = t('heroTitle');
  $('paste-input').placeholder = t('pastePlaceholder');
  $('demo-text').innerHTML = bionicProcess(t('demoText'));
  $('bio-message').innerHTML = t('bioMessage');
  $('reader-bio-tip-text').innerHTML = t('readerBioTip');
  $('plan-pro-name').textContent = 'Pro'; // always Pro
}

function applyTheme() {
  document.body.dataset.theme = theme;
  $('icon-sun').style.display  = theme === 'dark' ? 'block' : 'none';
  $('icon-moon').style.display = theme === 'light' ? 'block' : 'none';
  if ($('profile-icon-sun'))  $('profile-icon-sun').style.display  = theme === 'dark' ? 'block' : 'none';
  if ($('profile-icon-moon')) $('profile-icon-moon').style.display = theme === 'light' ? 'block' : 'none';
}

/* ══ Bio Card ══════════════════════════════════════════════════ */
function initBio() {
  const dismissed = localStorage.getItem('fr-bio-dismissed');
  if (dismissed) {
    $('bio-intro').style.display = 'none';
    return;
  }
  $('bio-dismiss').addEventListener('click', () => {
    $('bio-card').classList.add('dismissed');
    setTimeout(() => { $('bio-intro').style.display = 'none'; }, 320);
    localStorage.setItem('fr-bio-dismissed', '1');
  });
}

/* ══ Init ══════════════════════════════════════════════════════ */
function init() {
  if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  }

  applyTheme();
  applyLang();
  initBio();
  initStripe();
  initFirebase();
  initSuggestions();

  /* Language toggle */
  $('btn-lang').addEventListener('click', () => {
    lang = lang === 'es' ? 'en' : 'es';
    localStorage.setItem('fr-lang', lang);
    applyLang();
  });

  /* Theme toggle */
  $('btn-theme').addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('fr-theme', theme);
    applyTheme();
  });

  /* Paste toggle */
  $('btn-paste').addEventListener('click', () => {
    requireAuth(() => {
      const area = $('paste-area');
      const open = area.classList.toggle('visible');
      $('btn-paste').classList.toggle('active', open);
      if (open) $('paste-input').focus();
    });
  });

  /* Process pasted text */
  $('btn-process').addEventListener('click', () => {
    requireAuth(() => {
      const text = $('paste-input').value.trim();
      if (!text) { alert(t('errorNoText')); return; }
      if (!checkFreeLimit('paste')) return;
      incFreeCount('paste');
      const title = text.split('\n')[0].slice(0, 70);
      openReader(text, title);
    });
  });
  $('paste-input').addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') $('btn-process').click();
  });

  /* TXT upload */
  $('btn-txt').addEventListener('click', () => requireAuth(() => $('input-txt').click()));
  $('input-txt').addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;
    if (!currentUser) { openLoginModal(); e.target.value = ''; return; }
    if (!checkFreeLimit('txt')) { e.target.value = ''; return; }
    showLoading(t('loadingText'));
    try {
      const text = await readTxt(file);
      hideLoading();
      incFreeCount('txt');
      openReader(text, file.name.replace(/\.txt$/i, ''));
    } catch {
      hideLoading();
      alert(t('errorFile'));
    }
    e.target.value = '';
  });

  /* PDF upload */
  $('btn-pdf').addEventListener('click', () => {
    requireAuth(() => {
      if (typeof pdfjsLib === 'undefined') { alert(t('errorPdfJs')); return; }
      $('input-pdf').click();
    });
  });
  $('input-pdf').addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;
    if (!currentUser) { openLoginModal(); e.target.value = ''; return; }
    showLoading(t('loadingPdf'));
    try {
      const text = await readPdf(file);
      hideLoading();
      if (text !== null) openReader(text, file.name.replace(/\.pdf$/i, ''));
    } catch (err) {
      hideLoading();
      console.error(err);
      alert(t('errorPdf'));
    }
    e.target.value = '';
  });

  /* Reader controls */
  $('btn-back').addEventListener('click', () => showScreen('screen-home'));
  $('btn-font-down').addEventListener('click', () => adjustFont(-2));
  $('btn-font-up').addEventListener('click', () => adjustFont(2));
  $('btn-save-book').addEventListener('click', saveCurrentBook);
  if ($('btn-rsvp-open')) $('btn-rsvp-open').addEventListener('click', openRsvp);
  $('reader-scroll').addEventListener('scroll', updateProgress, { passive: true });
  $('reader-bio-close').addEventListener('click', () => {
    $('reader-bio-tip').classList.add('hidden');
  });

  /* RSVP controls */
  $('rsvp-close').addEventListener('click', closeRsvp);
  $('rsvp-play').addEventListener('click', rsvpToggle);
  $('rsvp-back').addEventListener('click', () => {
    rsvpStop();
    rsvpIdx = Math.max(0, rsvpIdx - 10);
    renderRsvpWord();
    updateRsvpProgress();
  });
  $('rsvp-fwd').addEventListener('click', () => {
    rsvpStop();
    rsvpIdx = Math.min(rsvpWords.length - 1, rsvpIdx + 10);
    renderRsvpWord();
    updateRsvpProgress();
  });
  $('rsvp-slider').addEventListener('input', e => {
    rsvpWpm = parseInt(e.target.value);
    $('rsvp-wpm-val').textContent = rsvpWpm;
    if (rsvpPlaying) { rsvpStop(); rsvpPlay(); }
  });
  document.addEventListener('keydown', e => {
    if (!$('rsvp-overlay') || $('rsvp-overlay').hidden) return;
    if (e.key === ' ' || e.code === 'Space') { e.preventDefault(); rsvpToggle(); }
    else if (e.key === 'Escape')      closeRsvp();
    else if (e.key === 'ArrowLeft')   $('rsvp-back').click();
    else if (e.key === 'ArrowRight')  $('rsvp-fwd').click();
  });

  /* TOC modal */
  $('toc-close').addEventListener('click', closeTocModal);
  $('modal-toc').addEventListener('click', e => {
    if (e.target === $('modal-toc')) closeTocModal();
  });

  /* Auth */
  $('btn-signin-header').addEventListener('click', openLoginModal);
  $('login-modal-close').addEventListener('click', closeLoginModal);
  $('modal-login').addEventListener('click', e => {
    if (e.target === $('modal-login')) closeLoginModal();
  });
  $('btn-google-signin').addEventListener('click', googleSignIn);

  /* Terms & Privacy */
  $('link-terms').addEventListener('click', e => { e.preventDefault(); openLegalModal('modal-terms'); });
  $('link-privacy').addEventListener('click', e => { e.preventDefault(); openLegalModal('modal-privacy'); });
  $('terms-modal-close').addEventListener('click', () => closeLegalModal('modal-terms'));
  $('privacy-modal-close').addEventListener('click', () => closeLegalModal('modal-privacy'));
  $('modal-terms').addEventListener('click', e => { if (e.target === $('modal-terms')) closeLegalModal('modal-terms'); });
  $('modal-privacy').addEventListener('click', e => { if (e.target === $('modal-privacy')) closeLegalModal('modal-privacy'); });

  // Profile panel
  $('user-avatar-btn').addEventListener('click', openProfilePanel);
  $('panel-profile-close').addEventListener('click', closeProfilePanel);
  $('profile-backdrop').addEventListener('click', closeProfilePanel);
  $('btn-signout').addEventListener('click', () => { closeProfilePanel(); signOut(); });

  // Profile panel theme toggle (duplicates header theme but for inside panel)
  if ($('profile-btn-theme')) {
    $('profile-btn-theme').addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('fr-theme', theme);
      applyTheme();
    });
  }

  /* Pricing / upgrade */
  if ($('btn-pro-cta')) $('btn-pro-cta').addEventListener('click', openUpgradeModal);
  $('modal-close').addEventListener('click', closeUpgradeModal);
  $('modal-upgrade').addEventListener('click', e => {
    if (e.target === $('modal-upgrade')) closeUpgradeModal();
  });
  if ($('bill-monthly')) $('bill-monthly').addEventListener('click', () => setBillingPeriod('month'));
  if ($('bill-annual'))  $('bill-annual').addEventListener('click', () => setBillingPeriod('annual'));

  /* Service worker */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(console.warn);
  }
}

document.addEventListener('DOMContentLoaded', init);
