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
  },
};

let lang  = localStorage.getItem('fr-lang')  || 'es';
let theme = localStorage.getItem('fr-theme') || 'dark';
let fontSize = Number(localStorage.getItem('fr-size')) || 18;

const t = key => LANG[lang][key] ?? key;

/* ══ Bionic algorithm ══════════════════════════════════════════ */
// Returns how many leading characters to bold for a word of given length.
function boldLen(len) {
  if (len <= 3) return 1;
  if (len <= 5) return 2;
  return Math.ceil(len / 2);
}

const LETTERS = /[a-zA-ZáéíóúÁÉÍÓÚàâäèêëîïôœùûüÿçæñÑüÜ'-]/;

function escHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function bionicToken(raw) {
  if (!raw) return '';
  // Match: [punctuation][letters+apostrophe][punctuation]
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
          // Split on whitespace, keeping spaces so we can rejoin naturally
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
function openReader(rawText, title) {
  $('reader-title').textContent = title || 'FocusRead';
  $('reader-content').innerHTML = bionicProcess(rawText);
  $('reader-content').style.fontSize = fontSize + 'px';
  $('reader-scroll').scrollTop = 0;
  updateProgress();
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

async function readPdf(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const total = pdf.numPages;
  let fullText = '';
  for (let i = 1; i <= total; i++) {
    showLoading(
      t('loadingPdf'),
      t('loadingPage').replace('{n}', i).replace('{total}', total)
    );
    const page    = await pdf.getPage(i);
    const content = await page.getTextContent();
    // Reconstruct lines from items using transform.y
    let lastY  = null;
    let lineText = '';
    for (const item of content.items) {
      const y = item.transform ? item.transform[5] : null;
      if (lastY !== null && Math.abs(y - lastY) > 5) {
        fullText += lineText.trim() + '\n';
        lineText = '';
      }
      lineText += item.str;
      lastY = y;
    }
    if (lineText.trim()) fullText += lineText.trim() + '\n';
    fullText += '\n';
  }
  return fullText.trim();
}

/* ══ i18n application ══════════════════════════════════════════ */
function applyLang() {
  document.documentElement.lang = lang;
  $('btn-lang').textContent = lang.toUpperCase();

  const ids = {
    'hero-badge':       'heroBadge',
    'hero-sub':         'heroSub',
    'demo-label':       'demoLabel',
    'import-title':     'importTitle',
    'paste-label':      'pasteLabel',
    'paste-hint':       'pasteHint',
    'txt-label':        'txtLabel',
    'pdf-label':        'pdfLabel',
    'pdf-hint':         'pdfHint',
    'btn-process-text': 'processBtn',
    'footer-text':      'footerText',
  };
  for (const [id, key] of Object.entries(ids)) {
    const el = $(id);
    if (el) el.textContent = t(key);
  }
  $('hero-title').innerHTML = t('heroTitle');
  $('paste-input').placeholder = t('pastePlaceholder');
  $('demo-text').innerHTML = bionicProcess(t('demoText'));
}

function applyTheme() {
  document.body.dataset.theme = theme;
  $('icon-sun').style.display  = theme === 'dark' ? 'block' : 'none';
  $('icon-moon').style.display = theme === 'light' ? 'block' : 'none';
}

/* ══ Init ══════════════════════════════════════════════════════ */
function init() {
  if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  }

  applyTheme();
  applyLang();

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
    const area = $('paste-area');
    const open = area.classList.toggle('visible');
    $('btn-paste').classList.toggle('active', open);
    if (open) $('paste-input').focus();
  });

  /* Process pasted text */
  $('btn-process').addEventListener('click', () => {
    const text = $('paste-input').value.trim();
    if (!text) { alert(t('errorNoText')); return; }
    const title = text.split('\n')[0].slice(0, 70);
    openReader(text, title);
  });

  /* Also allow Ctrl+Enter in textarea */
  $('paste-input').addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') $('btn-process').click();
  });

  /* TXT upload */
  $('btn-txt').addEventListener('click', () => $('input-txt').click());
  $('input-txt').addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;
    showLoading(t('loadingText'));
    try {
      const text = await readTxt(file);
      hideLoading();
      openReader(text, file.name.replace(/\.txt$/i, ''));
    } catch {
      hideLoading();
      alert(t('errorFile'));
    }
    e.target.value = '';
  });

  /* PDF upload */
  $('btn-pdf').addEventListener('click', () => {
    if (typeof pdfjsLib === 'undefined') { alert(t('errorPdfJs')); return; }
    $('input-pdf').click();
  });
  $('input-pdf').addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;
    showLoading(t('loadingPdf'));
    try {
      const text = await readPdf(file);
      hideLoading();
      openReader(text, file.name.replace(/\.pdf$/i, ''));
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
  $('reader-scroll').addEventListener('scroll', updateProgress, { passive: true });

  /* Service worker */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(console.warn);
  }
}

document.addEventListener('DOMContentLoaded', init);
