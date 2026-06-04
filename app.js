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
    btnProCta:    'Probar Pro 3 días gratis →',
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
    btnModalCta:   'Comenzar prueba gratis de 3 días →',
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
    btnProCta:    'Try Pro free for 3 days →',
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
let theme = localStorage.getItem('fr-theme') ||
  (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
let fontSize = Number(localStorage.getItem('fr-size')) || 18;
let bionicIntensity = parseInt(localStorage.getItem('fr-bionic-intensity') || '2');

const t = key => LANG[lang][key] ?? key;

/* ══ Bionic algorithm ══════════════════════════════════════════ */
function boldLen(len) {
  switch (bionicIntensity) {
    case 1: return 1;
    case 3: return Math.ceil(len * 0.5);
    case 4: return Math.min(len, Math.ceil(len * 0.65));
    default: // 2
      if (len <= 3) return 1;
      if (len <= 5) return 2;
      return Math.ceil(len / 2);
  }
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

function showToast(msg, duration) {
  let toast = $('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('app-toast-show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('app-toast-show'), duration || 3000);
}

function showScreen(id) {
  const home      = $('screen-home');
  const reader    = $('screen-reader');
  const dashboard = $('screen-dashboard');

  // Remove all active/slide-out states
  [home, reader, dashboard].forEach(s => {
    if (s) { s.classList.remove('active', 'slide-out'); }
  });

  if (id === 'screen-reader') {
    const prev = currentUser ? dashboard : home;
    if (prev) prev.classList.add('slide-out');
    reader.classList.add('active');
  } else if (id === 'screen-dashboard') {
    // Home slides left so dashboard slides in from the right naturally
    if (home) home.classList.add('slide-out');
    if (dashboard) dashboard.classList.add('active');
  } else {
    // screen-home: comes in from left (was slide-out at -22%)
    home.classList.add('active');
  }
}

/* ══ Streak ════════════════════════════════════════════════════ */
function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const last  = localStorage.getItem('fr-streak-last') || '';
  const count = parseInt(localStorage.getItem('fr-streak-count') || '0');
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  let newCount = 1;
  if (last === yesterday) newCount = count + 1;
  else if (last === today)  newCount = count;
  localStorage.setItem('fr-streak-last', today);
  localStorage.setItem('fr-streak-count', newCount);
}

/* ══ Stats ═════════════════════════════════════════════════════ */
function updateStats(text) {
  const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
  const total = parseInt(localStorage.getItem('fr-stats-words') || '0') + wordCount;
  localStorage.setItem('fr-stats-words', total);

  const now = new Date();
  const weekKey = now.getFullYear() + '-W' + String(Math.ceil((now - new Date(now.getFullYear(), 0, 1)) / 604800000)).padStart(2,'0');
  const savedKey = localStorage.getItem('fr-stats-week-key');
  const weekWords = savedKey === weekKey
    ? parseInt(localStorage.getItem('fr-stats-week-words') || '0') + wordCount
    : wordCount;
  localStorage.setItem('fr-stats-week-key', weekKey);
  localStorage.setItem('fr-stats-week-words', weekWords);
}

/* ══ Return notification ═══════════════════════════════════════ */
function initReturnNotification() {
  const last = parseInt(localStorage.getItem('fr-last-visit') || '0');
  const now  = Date.now();
  localStorage.setItem('fr-last-visit', now);

  if (!last) return; // first visit
  const hoursSince = (now - last) / 3600000;

  // Ask permission after 3rd reading session
  const sessions = parseInt(localStorage.getItem('fr-sessions') || '0');
  if (sessions >= 3 && Notification.permission === 'default') {
    Notification.requestPermission();
  }

  // Show welcome-back notification if >48h away and permission granted
  if (hoursSince > 48 && Notification.permission === 'granted') {
    navigator.serviceWorker.ready.then(sw => {
      sw.showNotification('FocusRead 👋', {
        body: 'Bio te extraña. ¿Seguimos leyendo hoy?',
        icon: './icon.svg',
        badge: './icon.svg',
        tag: 'welcome-back',
      });
    }).catch(() => {});
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
  if (rsvpBtn) rsvpBtn.hidden = false; // available to all (free gets 5 trials, basic/pro unlimited)
  const shareBtn = $('btn-share');
  if (shareBtn) shareBtn.hidden = false;
  if ($('reader-focus-bar')) $('reader-focus-bar').hidden = false;
  document.querySelectorAll('.intensity-dot').forEach(b => b.classList.toggle('active', parseInt(b.dataset.v) === bionicIntensity));
  updateStreak();
  updateStats(rawText);
  localStorage.setItem('fr-sessions', parseInt(localStorage.getItem('fr-sessions') || '0') + 1);
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
  const docName = file.name.replace(/\.pdf$/i, '');

  // Step 1: read file bytes
  showLoading(
    lang === 'es' ? 'Leyendo archivo…' : 'Reading file…',
    docName.slice(0, 40)
  );
  const arrayBuffer = await file.arrayBuffer();

  // Step 2: parse with PDF.js
  showLoading(
    lang === 'es' ? 'Analizando PDF…' : 'Analyzing PDF…',
    lang === 'es' ? 'Extrayendo estructura del documento…' : 'Extracting document structure…'
  );
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const total = pdf.numPages;

  if (isBasicOrPro()) {
    // Step 3: detect outline/index
    showLoading(
      lang === 'es' ? 'Detectando índice…' : 'Detecting index…',
      lang === 'es' ? `${total} página${total === 1 ? '' : 's'} encontrada${total === 1 ? '' : 's'}` : `${total} page${total === 1 ? '' : 's'} found`
    );
    const outline = await pdf.getOutline();
    hideLoading();

    if (outline && outline.length > 0) {
      showTocModal(pdf, outline, docName);
      return null;
    }
    if (total > 20) {
      showPageNavModal(pdf, docName);
      return null;
    }
    // Short PDF — read directly
    showLoading(t('loadingPdf'), `${total} páginas`);
    const text = await extractPages(pdf, 1, total);
    hideLoading();
    return text;
  }

  // Free plan: max 20 pages
  hideLoading();
  const maxPages = FREE_LIMITS.pdfPages;
  if (total > maxPages) {
    const ok = confirm(lang === 'es'
      ? `Este PDF tiene ${total} páginas. El plan gratuito lee las primeras ${maxPages}. ¿Continuar? Mejora a Básico o Pro para leerlo completo.`
      : `This PDF has ${total} pages. The free plan reads the first ${maxPages}. Continue? Upgrade to Basic or Pro for the full document.`);
    if (!ok) return null;
  }
  showLoading(t('loadingPdf'));
  const text = await extractPages(pdf, 1, Math.min(total, maxPages));
  hideLoading();
  return text;
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

function _openTocModal(title, hint, docTitle, metaPages, metaChapters) {
  if ($('toc-title'))    $('toc-title').textContent    = title;
  if ($('toc-hint'))     $('toc-hint').textContent     = hint;
  $('toc-doc-name').textContent = docTitle;
  if ($('toc-meta-pages'))    $('toc-meta-pages').textContent    = metaPages;
  if ($('toc-meta-chapters')) $('toc-meta-chapters').textContent = metaChapters;
  $('modal-toc').hidden = false;
  document.body.style.overflow = 'hidden';
}

function showTocModal(pdf, outline, docTitle) {
  const total = pdf.numPages;
  _openTocModal(
    lang === 'es' ? 'Índice del documento' : 'Table of contents',
    lang === 'es' ? 'Elige una sección para leerla, o lee todo el documento.' : 'Pick a section to read, or read the full document.',
    docTitle,
    lang === 'es' ? `${total} páginas` : `${total} pages`,
    lang === 'es' ? 'Cargando…' : 'Loading…'
  );

  const tocList = $('toc-list');
  tocList.innerHTML = '<p class="toc-loading"><span class="toc-loading-spinner"></span>Cargando índice…</p>';

  buildTocItems(pdf, outline).then(items => {
    for (let i = 0; i < items.length; i++) {
      items[i].endPage = items[i + 1] ? (items[i + 1].page || total) - 1 : total;
    }

    if (!items.length) {
      if ($('toc-title')) $('toc-title').textContent = lang === 'es' ? 'Leer por secciones' : 'Read by sections';
      if ($('toc-meta-chapters')) $('toc-meta-chapters').textContent = '';
      tocList.innerHTML = '';
      _renderPageChunks(tocList, pdf, docTitle);
      return;
    }

    if ($('toc-meta-chapters')) $('toc-meta-chapters').textContent = lang === 'es' ? `${items.length} capítulos` : `${items.length} chapters`;

    tocList.innerHTML = items.map((item, i) => `
      <button class="toc-item" data-idx="${i}">
        <span class="toc-item-num">${i + 1}</span>
        <span class="toc-item-body">
          <span class="toc-item-title">${escHtml(item.title)}</span>
          ${item.page ? `<span class="toc-item-range">p.&nbsp;${item.page}${item.endPage && item.endPage !== item.page ? '–' + item.endPage : ''}</span>` : ''}
        </span>
        <svg class="toc-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>`).join('');

    tocList.querySelectorAll('.toc-item').forEach(btn => {
      btn.addEventListener('click', async () => {
        const item = items[parseInt(btn.dataset.idx)];
        closeTocModal();
        showLoading(
          lang === 'es' ? `Cargando "${item.title.slice(0, 30)}…"` : `Loading "${item.title.slice(0, 30)}…"`,
          lang === 'es' ? `Páginas ${item.page || 1}–${item.endPage || total}` : `Pages ${item.page || 1}–${item.endPage || total}`
        );
        const text = await extractPages(pdf, item.page || 1, item.endPage || total);
        hideLoading();
        openReader(text, item.title);
      });
    });
  });

  $('toc-read-all').onclick = async () => {
    closeTocModal();
    showLoading(t('loadingPdf'), lang === 'es' ? `Todo el documento · ${total} páginas` : `Full document · ${total} pages`);
    const text = await extractPages(pdf, 1, total);
    hideLoading();
    openReader(text, docTitle);
  };
}

function showPageNavModal(pdf, docTitle) {
  const total = pdf.numPages;
  const chunkSize = total <= 60 ? 10 : total <= 200 ? 20 : 30;
  const numChunks = Math.ceil(total / chunkSize);
  _openTocModal(
    lang === 'es' ? 'Leer por secciones' : 'Read by sections',
    lang === 'es' ? 'Este PDF no tiene índice. Elige un rango de páginas para empezar.' : 'This PDF has no index. Pick a page range to start reading.',
    docTitle,
    lang === 'es' ? `${total} páginas` : `${total} pages`,
    lang === 'es' ? `${numChunks} secciones` : `${numChunks} sections`
  );

  const tocList = $('toc-list');
  tocList.innerHTML = '';
  $('modal-toc').hidden = false;
  document.body.style.overflow = 'hidden';
  _renderPageChunks(tocList, pdf, docTitle);

  $('toc-read-all').onclick = async () => {
    const t2 = pdf.numPages;
    closeTocModal();
    showLoading(t('loadingPdf'), lang === 'es' ? `Todo el documento · ${t2} páginas` : `Full document · ${t2} pages`);
    const text = await extractPages(pdf, 1, t2);
    hideLoading();
    openReader(text, docTitle);
  };
}

function _renderPageChunks(container, pdf, docTitle) {
  const total = pdf.numPages;
  const chunkSize = total <= 60 ? 10 : total <= 200 ? 20 : 30;
  const chunks = [];
  for (let s = 1; s <= total; s += chunkSize) {
    const e = Math.min(total, s + chunkSize - 1);
    chunks.push({ start: s, end: e });
  }

  container.innerHTML = chunks.map((c, i) => `
    <button class="toc-item" data-start="${c.start}" data-end="${c.end}">
      <span class="toc-item-num">${i + 1}</span>
      <span class="toc-item-body">
        <span class="toc-item-title">${lang === 'es' ? `Páginas ${c.start}–${c.end}` : `Pages ${c.start}–${c.end}`}</span>
        <span class="toc-item-range">${c.end - c.start + 1}&nbsp;${lang === 'es' ? 'páginas' : 'pages'}</span>
      </span>
      <svg class="toc-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </button>`).join('');

  container.querySelectorAll('.toc-item').forEach(btn => {
    btn.addEventListener('click', async () => {
      const start = parseInt(btn.dataset.start);
      const end   = parseInt(btn.dataset.end);
      closeTocModal();
      showLoading(
        lang === 'es' ? `Cargando páginas ${start}–${end}…` : `Loading pages ${start}–${end}…`,
        lang === 'es' ? `${end - start + 1} páginas` : `${end - start + 1} pages`
      );
      const text = await extractPages(pdf, start, end);
      hideLoading();
      openReader(text, `${docTitle} · pág. ${start}–${end}`);
    });
  });
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
  // Free users get 5 trial RSVP sessions
  if (!isBasicOrPro()) {
    const trials = parseInt(localStorage.getItem('fr-rsvp-trial') || '0');
    if (trials >= 5) { openUpgradeModal(); return; }
    localStorage.setItem('fr-rsvp-trial', trials + 1);
    if (trials === 4) showToast(lang === 'es' ? 'Última sesión de prueba RSVP — actualiza para continuar' : 'Last RSVP trial session — upgrade to continue', 4000);
  }
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

/* ══ Free plan limits ══════════════════════════════════════════ */
const FREE_LIMITS = { paste: 5, txt: 3, pdfPages: 20 };

function getFreeCount(type) {
  return parseInt(localStorage.getItem('fr-free-' + type) || '0');
}
function incFreeCount(type) {
  localStorage.setItem('fr-free-' + type, getFreeCount(type) + 1);
}
function checkFreeLimit(type) {
  if (isBasicOrPro()) return true;
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

  if (!isBasicOrPro()) {
    el.innerHTML = `
      <div class="profile-lib-locked">
        <p class="profile-lib-hint">${lang === 'es'
          ? 'Guarda PDFs y vuélvelos a leer cuando quieras'
          : 'Save PDFs and re-read them anytime'}</p>
        <button class="btn-upgrade-profile lib-upgrade-btn">${lang === 'es' ? 'Desbloquear desde Básico →' : 'Unlock from Basic plan →'}</button>
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
  if (!isBasicOrPro()) { openUpgradeModal(); return; }
  // Enforce library limit per plan
  const books = await loadBooks();
  const limit = getLibraryLimit();
  if (books.length >= limit) {
    showToast(lang === 'es' ? `Límite de ${limit} libros alcanzado. Actualiza a Pro para 100+` : `${limit} book limit reached. Upgrade to Pro for 100+`, 4000);
    return;
  }
  if (!_currentText) return;

  const btn = $('btn-save-book');
  btn.disabled = true;
  btn.classList.add('saving');
  setTimeout(() => btn.classList.remove('saving'), 600);
  try {
    await dbSave(_currentTitle, _currentText);
    btn.textContent = lang === 'es' ? '✓' : '✓';
    btn.classList.add('saved');
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
let _authResolved = false;

function getPlan() {
  const p = localStorage.getItem('fr-plan');
  if (p === 'pro' || localStorage.getItem('fr-pro') === '1') return 'pro';
  if (p === 'basic') return 'basic';
  return 'free';
}
function isPro() { return getPlan() === 'pro'; }
function isBasicOrPro() { const p = getPlan(); return p === 'basic' || p === 'pro'; }
function getLibraryLimit() { const p = getPlan(); return p === 'pro' ? 999 : p === 'basic' ? 10 : 3; }

function showToast(msg, duration = 3000) {
  let t = $('app-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'app-toast';
    t.className = 'app-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('app-toast-show');
  setTimeout(() => t.classList.remove('app-toast-show'), duration);
}

function initFirebase() {
  const cfg = window.FOCUSREAD_FIREBASE;
  if (!cfg || cfg.apiKey.includes('REPLACE')) {
    // No Firebase config — auto-open login so user sees the gate
    setTimeout(openLoginModal, 300);
    return;
  }

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
        const firstResolution = !_authResolved;
        _authResolved = true;
        currentUser = user;
        updateAuthUI(user);

        if (user) {
          applyPendingPlan(user);
          const onDash = $('screen-dashboard').classList.contains('active');
          if (!onDash) {
            showScreen('screen-dashboard');
            initDashboard();
          } else if (firstResolution) {
            initDashboard();
          }
        }
        // No forced login — users can browse the landing freely

        if (user && !localStorage.getItem('fr-welcomed') && !sessionStorage.getItem('fr-pending-plan')) {
          localStorage.setItem('fr-welcomed', '1');
          showToast(
            lang === 'es'
              ? `Listo, ${user.displayName?.split(' ')[0] || 'bienvenido'} — ya puedes leer.`
              : `Ready, ${user.displayName?.split(' ')[0] || 'welcome'} — start reading.`,
            4000
          );
        }
      });
      initReturnNotification();
    } catch (e) {
      console.warn('Firebase init error:', e);
      setTimeout(openLoginModal, 300);
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

  // Sync dashboard avatar
  const dashPhoto = $('dash-user-photo');
  const dashFallback = $('dash-avatar-fallback');
  if (user && dashPhoto) {
    if (user.photoURL) {
      dashPhoto.src = user.photoURL;
      dashPhoto.hidden = false;
      if (dashFallback) dashFallback.hidden = true;
    } else {
      dashPhoto.hidden = true;
      if (dashFallback) { dashFallback.hidden = false; dashFallback.textContent = (user.displayName || user.email || '?')[0].toUpperCase(); }
    }
  }
  // Sync dashboard greeting
  if ($('dash-user-first') && user) {
    $('dash-user-first').textContent = user.displayName?.split(' ')[0] || '';
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
    showScreen('screen-home');
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

  // Wire payment link buttons
  setupPaymentLinkButton('btn-basic-cta', cfg.paymentLinkBasic);
  setupPaymentLinkButton('btn-pro-cta',   cfg.paymentLinkMonthly);
  setupPaymentLinkButton('btn-modal-cta', cfg.paymentLinkMonthly);
}

function setupPaymentLinkButton(btnId, url) {
  const btn = $(btnId);
  if (!btn || !url || url.includes('REPLACE')) return;
  btn.addEventListener('click', () => {
    if (!currentUser) { openLoginModal(); return; }
    window.open(url, '_blank', 'noopener');
  });
}

function renderStripePricingTable() {
  const cfg = window.FOCUSREAD_STRIPE;

  // Wire plan buttons to payment links (respects annual toggle)
  const basicBtn = $('btn-plan-basic');
  const proBtn   = $('btn-plan-pro');
  const requireLoginAndOpen = (url) => {
    if (!currentUser) { closeUpgradeModal(); openLoginModal(); return; }
    if (url && !url.includes('REPLACE')) window.open(url, '_blank', 'noopener');
    else alert(lang === 'es' ? 'Próximamente — configura el link en stripe-config.js.' : 'Coming soon — set up the link in stripe-config.js.');
  };
  if (basicBtn) {
    basicBtn.onclick = () => requireLoginAndOpen(selectedPeriod === 'annual' ? cfg?.paymentLinkBasicAnnual : cfg?.paymentLinkBasic);
  }
  if (proBtn) {
    proBtn.onclick = () => requireLoginAndOpen(selectedPeriod === 'annual' ? cfg?.paymentLinkYearly : cfg?.paymentLinkMonthly);
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

function showPlanWelcome(plan) {
  const modal = $('modal-plan-welcome');
  if (!modal) return;
  const badge = $('pw-badge');
  const title = $('pw-title');
  const sub   = $('pw-sub');
  const feats = $('pw-feats');
  if (plan === 'pro') {
    if (badge) { badge.textContent = '✦ Plan Pro'; badge.classList.add('badge-pro'); }
    if (title) title.textContent = '¡Plan Pro activado!';
    if (sub)   sub.textContent   = 'Tienes acceso completo ilimitado';
    if (feats) feats.innerHTML   = [
      '⚡ Modo rápido RSVP incluido',
      '📚 Biblioteca ilimitada (100+ libros)',
      '📑 Índice automático de PDFs',
      '💬 Soporte prioritario directo',
    ].map(f => `<li>${f}</li>`).join('');
  } else {
    if (badge) { badge.textContent = '✦ Plan Básico'; badge.classList.remove('badge-pro'); }
    if (title) title.textContent = '¡Plan Básico activado!';
    if (sub)   sub.textContent   = 'Ya tienes acceso a las funciones principales';
    if (feats) feats.innerHTML   = [
      '⚡ Modo rápido RSVP desbloqueado',
      '📚 Biblioteca personal (hasta 10 libros)',
      '📄 PDFs y TXT sin límite de páginas',
    ].map(f => `<li>${f}</li>`).join('');
  }
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
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
  if ($('btn-signin-text'))  $('btn-signin-text').textContent  = t('signinBtn');
  if ($('login-title'))      $('login-title').textContent      = t('loginTitle');
  if ($('login-sub'))        $('login-sub').textContent        = t('loginSub');
  if ($('btn-google-text'))  $('btn-google-text').textContent  = t('googleBtn');
  if (firebaseReady) firebase.auth().languageCode = lang;

  // innerHTML updates
  if ($('hero-title'))           $('hero-title').innerHTML = t('heroTitle');
  if ($('paste-input'))          $('paste-input').placeholder = t('pastePlaceholder');
  if ($('dash-paste-input'))     $('dash-paste-input').placeholder = t('pastePlaceholder');
  if ($('demo-text'))            $('demo-text').innerHTML = bionicProcess(t('demoText'));
  if ($('bio-message'))          $('bio-message').innerHTML = t('bioMessage');
  if ($('reader-bio-tip-text'))  $('reader-bio-tip-text').innerHTML = t('readerBioTip');
  if ($('plan-pro-name'))        $('plan-pro-name').textContent = 'Pro';
  if ($('btn-signout-text'))     $('btn-signout-text').textContent = t('signoutBtn');
}

function applyTheme() {
  document.body.dataset.theme = theme;
  const dark = theme === 'dark';
  $('icon-sun').style.display  = dark ? 'block' : 'none';
  $('icon-moon').style.display = dark ? 'none' : 'block';
  if ($('profile-icon-sun'))  $('profile-icon-sun').style.display  = dark ? 'block' : 'none';
  if ($('profile-icon-moon')) $('profile-icon-moon').style.display = dark ? 'none' : 'block';
  if ($('dash-icon-sun'))  $('dash-icon-sun').style.display  = dark ? 'none' : '';
  if ($('dash-icon-moon')) $('dash-icon-moon').style.display = dark ? '' : 'none';
  if ($('reader-icon-sun'))  $('reader-icon-sun').style.display  = dark ? 'none' : '';
  if ($('reader-icon-moon')) $('reader-icon-moon').style.display = dark ? '' : 'none';
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

/* ══ Bio Action Sheet ═════════════════════════════════════════ */
function openBioActionSheet() {
  const sheet = $('bio-action-sheet');
  if (!sheet) return;
  sheet.hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => $('bio-action-panel').classList.add('open'), 10);

  if (!isBasicOrPro()) {
    const used = parseInt(localStorage.getItem('fr-free-paste') || '0');
    const remaining = Math.max(0, 5 - used);
    const hint = document.querySelector('#bio-act-paste .bio-act-hint');
    if (hint) hint.textContent = remaining > 0 ? `${remaining} usos gratuitos restantes` : 'Límite alcanzado — mejora tu plan';
  }
}

function closeBioActionSheet() {
  const panel = $('bio-action-panel');
  if (!panel) return;
  panel.classList.remove('open');
  if ($('bio-sheet-paste')) $('bio-sheet-paste').hidden = true;
  setTimeout(() => {
    const sheet = $('bio-action-sheet');
    if (sheet) sheet.hidden = true;
    document.body.style.overflow = '';
  }, 340);
}

/* ══ Dashboard ════════════════════════════════════════════════ */
async function loadBooks() {
  if (!currentUser) return [];
  try { return await dbGetAll(); } catch { return []; }
}

async function deleteBook(id) {
  try { await dbDelete(id); } catch (e) { console.error(e); }
}

function initDashboard() {
  const plan = getPlan();

  // Greeting
  const greetQ = $('dash-greeting-q');
  const greetings = lang === 'es'
    ? ['¿Qué leeremos hoy?', '¡Lista para leer!', '¿Listo para enfocarte?', '¿Empezamos a leer?']
    : ['What are we reading today?', 'Ready to read!', 'Time to focus!', 'Let\'s dive in!'];
  if (greetQ) greetQ.textContent = greetings[new Date().getHours() % greetings.length];

  // User first name
  if ($('dash-user-first') && currentUser) {
    $('dash-user-first').textContent = currentUser.displayName?.split(' ')[0] || currentUser.email?.split('@')[0] || '';
  }

  // Plan pill
  const pill = $('dash-plan-pill');
  if (pill) {
    pill.textContent = plan === 'pro' ? 'Pro ✦' : plan === 'basic' ? 'Básico' : 'Gratis';
    pill.className = 'dash-plan-pill' + (plan === 'pro' ? ' pill-pro' : plan === 'basic' ? ' pill-basic' : '');
  }

  // Upgrade banners — shown per plan
  if ($('dash-upgrade-nudge')) $('dash-upgrade-nudge').hidden = plan !== 'free';
  if ($('dash-upgrade-to-pro')) $('dash-upgrade-to-pro').hidden = plan !== 'basic';

  // PDF hint in action sheet
  const pdfHintText = isBasicOrPro() ? 'Documento completo' : 'Hasta 20 pág · Gratis';
  if ($('bio-pdf-hint')) $('bio-pdf-hint').textContent = pdfHintText;

  // Show support section only for paid users
  const supportSection = $('support-form-wrap')?.closest('.profile-section');
  if (supportSection) supportSection.hidden = !isBasicOrPro();

  // Novedades: RSVP trial card for free users
  const trialCard = $('dash-rsvp-trial');
  if (trialCard) {
    const trials = parseInt(localStorage.getItem('fr-rsvp-trial') || '0');
    if (plan === 'free' && trials > 0) {
      trialCard.hidden = false;
      trialCard.classList.remove('skel');
      if ($('dash-trial-count')) $('dash-trial-count').textContent = `${trials} / 5 usadas`;
      if ($('dash-trial-fill'))  $('dash-trial-fill').style.width  = (trials / 5 * 100) + '%';
    } else {
      trialCard.hidden = true;
    }
  }

  // Novedades: plan feature chips for paid users
  const chipsEl = $('dash-plan-chips');
  if (chipsEl) {
    if (plan === 'basic') {
      chipsEl.hidden = false;
      chipsEl.innerHTML = [
        ['⚡', 'RSVP activo'],
        ['📄', 'PDFs sin límite'],
        ['📚', 'Biblioteca 10'],
      ].map(([e,l]) => `<span class="dash-plan-chip">${e} ${l}</span>`).join('');
    } else if (plan === 'pro') {
      chipsEl.hidden = false;
      chipsEl.innerHTML = [
        ['✦', 'Pro activo'],
        ['⚡', 'RSVP'],
        ['📚', 'Biblioteca ∞'],
        ['📑', 'Índice PDF'],
      ].map(([e,l]) => `<span class="dash-plan-chip">${e} ${l}</span>`).join('');
    } else {
      chipsEl.hidden = true;
    }
  }

  // Novedades: rotating tip del día
  const tips = [
    'Lee en voz alta mentalmente mientras usas lectura biónica para reforzar la comprensión.',
    'Empieza con textos cortos de 2-3 párrafos para entrenar tu cerebro biónico.',
    'El modo RSVP a 200 palabras/min es ideal para empezar. Sube 50 WPM cada semana.',
    'Guarda tus artículos favoritos en la biblioteca para releerlos con biónico cuando quieras.',
    'Los primeros 5 minutos leyendo con biónico son de adaptación. Después el cerebro vuela.',
    'Combinado con buena iluminación, la lectura biónica reduce la fatiga visual hasta un 30%.',
    'Haz pausas de 2 minutos cada 25 minutos de lectura (técnica Pomodoro + biónico = 🧠💥).',
  ];
  const tipEl = $('dash-tip-text');
  if (tipEl) tipEl.textContent = tips[new Date().getDate() % tips.length];

  // Streak
  const streak = parseInt(localStorage.getItem('fr-streak-count') || '0');
  const streakEl = $('dash-streak');
  if (streakEl) {
    if (streak >= 2) {
      streakEl.textContent = `🔥 ${streak} días seguidos`;
      streakEl.hidden = false;
    } else {
      streakEl.hidden = true;
    }
  }

  // Stats
  const totalWords = parseInt(localStorage.getItem('fr-stats-words') || '0');
  const weekWords  = parseInt(localStorage.getItem('fr-stats-week-words') || '0');
  const statsEl = $('dash-stats');
  if (statsEl && totalWords > 0) {
    const fmt = n => n >= 1000 ? (n/1000).toFixed(1) + 'k' : n;
    statsEl.innerHTML = `<span class="dash-stat"><span class="dash-stat-n">${fmt(weekWords)}</span><span class="dash-stat-l">palabras esta semana</span></span><span class="dash-stat"><span class="dash-stat-n">${fmt(totalWords)}</span><span class="dash-stat-l">palabras en total</span></span>`;
    statsEl.hidden = false;
  }

  // Stagger entry animation
  const toAnimate = [
    $('dash-greeting'),
    $('dash-upgrade-nudge'),
    $('dash-upgrade-to-pro'),
    $('dash-novedades'),
    document.querySelector('#screen-dashboard .dash-section:last-of-type'),
  ].filter(Boolean);
  toAnimate.forEach((el, i) => {
    if (el.hidden) return;
    setTimeout(() => el.classList.add('dash-visible'), 60 + i * 80);
  });

  renderDashLibrary();
}

async function renderDashLibrary() {
  const container = $('dash-library');
  const empty = $('dash-lib-empty');
  const badge = $('dash-lib-badge');
  if (!container) return;

  // Show skeleton while loading
  container.querySelectorAll('.dash-book-card, .dash-book-skel').forEach(n => n.remove());
  if (empty) empty.hidden = true;
  ['', '-2', '-3'].forEach((sfx, i) => {
    const sk = document.createElement('div');
    sk.className = `skel dash-book-skel dash-book-skel${sfx}`;
    container.appendChild(sk);
  });

  const books = await loadBooks();

  container.querySelectorAll('.dash-book-skel').forEach(n => n.remove());
  const limit = getLibraryLimit();

  if (badge) badge.textContent = `${books.length} / ${limit === 999 ? '∞' : limit}`;

  // remove existing book cards
  container.querySelectorAll('.dash-book-card').forEach(n => n.remove());

  if (!books.length) {
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'dash-book-card';
    card.innerHTML = `
      <div class="dash-book-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      </div>
      <div class="dash-book-info">
        <div class="dash-book-title">${escHtml(book.title)}</div>
        <div class="dash-book-meta">${new Date(book.saved || book.savedAt).toLocaleDateString()}</div>
      </div>
      <button class="dash-book-del" data-id="${book.id}" aria-label="Eliminar">×</button>
    `;
    card.querySelector('.dash-book-info').addEventListener('click', () => openReader(book.text, book.title));
    card.querySelector('.dash-book-del').addEventListener('click', async e => {
      e.stopPropagation();
      await deleteBook(book.id);
      renderDashLibrary();
    });
    container.appendChild(card);
  });

  if (books.length >= limit && limit < 999) {
    const lockDiv = document.createElement('div');
    lockDiv.className = 'dash-lib-lock-row';
    lockDiv.innerHTML = `<span>🔒 Límite de ${limit} libros alcanzado</span><button class="dash-lib-lock-btn">Ampliar biblioteca →</button>`;
    lockDiv.querySelector('.dash-lib-lock-btn').addEventListener('click', openUpgradeModal);
    container.appendChild(lockDiv);
  }
}

/* ══ Init ══════════════════════════════════════════════════════ */
function checkStripeReturn() {
  const params = new URLSearchParams(window.location.search);
  const plan = params.get('plan');
  const success = params.get('success');
  if (plan && (plan === 'basic' || plan === 'pro') && success === '1') {
    history.replaceState({}, '', window.location.pathname);
    // Store pending plan — will be applied once user is authenticated
    sessionStorage.setItem('fr-pending-plan', plan);
  }
}

function applyPendingPlan(user) {
  const plan = sessionStorage.getItem('fr-pending-plan');
  if (!plan || !user) return;
  sessionStorage.removeItem('fr-pending-plan');
  localStorage.setItem('fr-plan', plan);
  const name = user.displayName?.split(' ')[0] || '';
  showToast(
    lang === 'es'
      ? `✓ Plan ${plan === 'pro' ? 'Pro' : 'Básico'} activado${name ? ', ' + name : ''}. ¡Bienvenido!`
      : `✓ ${plan === 'pro' ? 'Pro' : 'Basic'} plan activated${name ? ', ' + name : ''}. Welcome!`,
    5000
  );
  setTimeout(() => showPlanWelcome(plan), 800);
}

function init() {
  if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  }

  applyTheme();
  applyLang();
  checkStripeReturn();
  initBio();
  initStripe();
  initFirebase();

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

  /* "Probar gratis" CTA on free plan card */
  if ($('btn-free-try')) {
    $('btn-free-try').addEventListener('click', () => {
      const demo = t('demoText');
      openReader(demo, 'Demo — Lectura Biónica');
    });
  }

  /* Paste toggle — landing page (only present when user is not logged in) */
  if ($('btn-paste')) {
    $('btn-paste').addEventListener('click', () => {
      requireAuth(() => {
        const area = $('paste-area');
        const open = area.classList.toggle('visible');
        $('btn-paste').classList.toggle('active', open);
        if (open) $('paste-input').focus();
      });
    });
  }

  /* Process pasted text */
  if ($('btn-process')) $('btn-process').addEventListener('click', () => {
    requireAuth(() => {
      const text = $('paste-input').value.trim();
      if (!text) { alert(t('errorNoText')); return; }
      if (!checkFreeLimit('paste')) return;
      incFreeCount('paste');
      const title = text.split('\n')[0].slice(0, 70);
      openReader(text, title);
    });
  });
  if ($('paste-input')) $('paste-input').addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') $('btn-process')?.click();
  });

  /* TXT upload */
  if ($('btn-txt')) $('btn-txt').addEventListener('click', () => requireAuth(() => $('input-txt').click()));
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
  if ($('btn-pdf')) $('btn-pdf').addEventListener('click', () => {
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
  $('btn-back').addEventListener('click', () => {
    if ($('reader-focus-bar')) $('reader-focus-bar').hidden = true;
    showScreen(currentUser ? 'screen-dashboard' : 'screen-home');
  });
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

  /* Dashboard — bottom nav & Bio FAB */
  if ($('dash-avatar-btn')) $('dash-avatar-btn').addEventListener('click', openProfilePanel);
  if ($('dash-nav-account')) $('dash-nav-account').addEventListener('click', openProfilePanel);
  if ($('dash-nav-home')) {
    $('dash-nav-home').addEventListener('click', () => {
      $('dash-nav-home').classList.add('active');
      $('dash-nav-account').classList.remove('active');
    });
  }
  if ($('dash-btn-upgrade')) $('dash-btn-upgrade').addEventListener('click', openUpgradeModal);
  if ($('dash-btn-upgrade-pro')) $('dash-btn-upgrade-pro').addEventListener('click', openUpgradeModal);
  if ($('dash-fab-bio')) $('dash-fab-bio').addEventListener('click', openBioActionSheet);

  /* Bio action sheet */
  if ($('bio-action-backdrop')) $('bio-action-backdrop').addEventListener('click', closeBioActionSheet);
  if ($('bio-act-paste')) {
    $('bio-act-paste').addEventListener('click', () => {
      const paste = $('bio-sheet-paste');
      paste.hidden = !paste.hidden;
      if (!paste.hidden) $('bio-paste-input').focus();
    });
  }
  if ($('bio-paste-process')) {
    $('bio-paste-process').addEventListener('click', () => {
      const text = $('bio-paste-input').value.trim();
      if (!text) { $('bio-paste-input').focus(); return; }
      if (!checkFreeLimit('paste')) return;
      incFreeCount('paste');
      closeBioActionSheet();
      openReader(text, text.split('\n')[0].slice(0, 70));
    });
  }
  if ($('bio-paste-input')) {
    $('bio-paste-input').addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') $('bio-paste-process')?.click();
    });
  }
  if ($('bio-act-pdf')) {
    $('bio-act-pdf').addEventListener('click', () => {
      if (typeof pdfjsLib === 'undefined') { alert(t('errorPdfJs')); return; }
      closeBioActionSheet();
      $('input-pdf').click();
    });
  }
  if ($('bio-act-txt')) {
    $('bio-act-txt').addEventListener('click', () => {
      closeBioActionSheet();
      $('input-txt').click();
    });
  }
  if ($('dash-btn-theme')) {
    $('dash-btn-theme').addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('fr-theme', theme);
      applyTheme();
    });
  }

  // Reader theme toggle
  if ($('btn-reader-theme')) {
    $('btn-reader-theme').addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('fr-theme', theme);
      applyTheme();
    });
  }

  // Plan welcome modal close
  if ($('btn-plan-welcome-close')) {
    $('btn-plan-welcome-close').addEventListener('click', () => {
      $('modal-plan-welcome').hidden = true;
      document.body.style.overflow = '';
    });
  }

  // RSVP trial unlock button
  if ($('dash-trial-unlock')) {
    $('dash-trial-unlock').addEventListener('click', openUpgradeModal);
  }
  // Support form in profile panel — sends via mailto
  if ($('btn-support-send')) {
    $('btn-support-send').addEventListener('click', () => {
      const txt = $('support-text').value.trim();
      if (!txt) return;
      const user = currentUser;
      const plan = getPlan();
      const subject = encodeURIComponent(`[FocusRead Soporte] ${plan.toUpperCase()} — ${user?.email || 'sin cuenta'}`);
      const body = encodeURIComponent(`Usuario: ${user?.displayName || 'Anónimo'}\nEmail: ${user?.email || '—'}\nPlan: ${plan}\n\nMensaje:\n${txt}`);
      window.open(`mailto:soporte@focusread.app?subject=${subject}&body=${body}`, '_blank');
      $('support-form-wrap').hidden = true;
      $('support-thanks').hidden = false;
      setTimeout(() => {
        $('support-form-wrap').hidden = false;
        $('support-thanks').hidden = true;
        $('support-text').value = '';
      }, 5000);
    });
  }

  /* Share button */
  if ($('btn-share')) {
    $('btn-share').addEventListener('click', async () => {
      const text = `Estoy leyendo "${_currentTitle}" con FocusRead — lee 2× más rápido con lectura biónica`;
      const url  = 'https://eleevatemx.github.io/lecturabionica/';
      if (navigator.share) {
        try { await navigator.share({ title: 'FocusRead', text, url }); } catch {}
      } else {
        await navigator.clipboard.writeText(text + '\n' + url).catch(() => {});
        showToast('¡Link copiado al portapapeles!', 2500);
      }
    });
  }

  /* Focus line toggle */
  if ($('btn-focus-line')) {
    $('btn-focus-line').addEventListener('click', () => {
      const bar = $('reader-focus-bar');
      if (!bar) return;
      bar.hidden = !bar.hidden;
      $('btn-focus-line').style.color = bar.hidden ? '' : 'var(--accent)';
    });
  }

  /* Bionic intensity controls */
  document.querySelectorAll('.intensity-dot').forEach(btn => {
    const v = parseInt(btn.dataset.v);
    if (v === bionicIntensity) btn.classList.add('active');
    btn.addEventListener('click', () => {
      if (v >= 3 && !isPro()) { openUpgradeModal(); return; }
      bionicIntensity = v;
      localStorage.setItem('fr-bionic-intensity', v);
      document.querySelectorAll('.intensity-dot').forEach(b => b.classList.toggle('active', parseInt(b.dataset.v) === v));
      // Re-render current text
      if (_currentText) {
        const scrollTop = $('reader-scroll').scrollTop;
        $('reader-content').innerHTML = bionicProcess(_currentText);
        $('reader-scroll').scrollTop = scrollTop;
      }
    });
  });

  /* Service worker */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(console.warn);
  }
}

document.addEventListener('DOMContentLoaded', init);
