/* ─────────────────────────────────────────
   main.js — 互動邏輯、即時更新、Presets
   ───────────────────────────────────────── */

/* ── State ── */
const state = {
  styles: ['簡約'],
  brandPersonality: '深炭黑與近白的精確對比，中性灰階構建可信任的視覺秩序',
  colorPrimary:   '#18181B',
  colorSecondary: '#3F3F46',
  colorAccent:    '#71717A',
  colorBg:        '#FAFAFA',
  colorText:      '#09090B',
  fontZh: 'Noto Sans TC',
  fontEn: 'Inter',
  sizes: { xs: 12, sm: 14, base: 16, lg: 20, xl: 24, '2xl': 36, '3xl': 52 },
  baseFontSize: 16,
  typeScale:    1.2,
  sizeOverrides: {},
  btnRadius:   10,
  inputStyle:  'bordered',
  cardStyle:   'bordered',
  spacingBase: 8,
  maxWidth:    1136,
  gridCols:    12,
  shadowStyle: 'soft',
  dos:   ['', '', ''],
  donts: ['', '', '']
};

/* ── Preset Color Labels ── */
const PRESET_COLOR_LABELS = {
  minimal:   '黑白',
  tech:      '藍灰',
  warm:      '暖金',
  corporate: '藏藍金',
  forest:    '林間'
};

/* ── Presets ── */
const PRESETS = {
  minimal: {
    styles: ['簡約', '專業'],
    brandPersonality: '深炭黑與近白的精確對比，中性灰階構建可信任的視覺秩序',
    colorPrimary: '#18181B', colorSecondary: '#3F3F46', colorAccent: '#71717A', colorBg: '#FAFAFA', colorText: '#09090B',
    fontZh: 'Noto Sans TC', fontEn: 'Inter',
    sizes: { xs: 12, sm: 14, base: 16, lg: 20, xl: 24, '2xl': 36, '3xl': 52 },
    baseFontSize: 16, typeScale: 1.2, sizeOverrides: {},
    btnRadius: 10, inputStyle: 'bordered', cardStyle: 'bordered',
    spacingBase: 8, maxWidth: 1136, gridCols: 12,
    shadowStyle: 'soft',
    dos:   ['以 #18181B 深炭黑為主色，#FAFAFA 為底色——冷靜對比是品牌基調', '次要介面使用 #F4F4F5 淺灰表面搭配 #18181B 深色文字，層次分明', '中性灰階（zinc 系）是唯一的色彩語言，不引入任何有彩度的顏色'],
    donts: ['不要使用純黑（#000000）或純白（#FFFFFF）——略帶溫度的炭黑與近白才是正確的', '不要引入任何有色調的 UI 元素——介面嚴格限於黑、白、灰', '不要讓陰影過深或過重——輕柔的層次感才符合這套中性美學']
  },
  tech: {
    styles: ['科技', '精準', '冷靜'],
    brandPersonality: '極簡、工程精神，帶有低調質感與細節設計，呈現沉穩且可信賴的科技感',
    colorPrimary: '#2061F7', colorSecondary: '#0EA5E9', colorAccent: '#2F3237', colorBg: '#FAFAFB', colorText: '#1A1D22',
    fontZh: 'Noto Sans TC', fontEn: 'Inter',
    sizes: { xs: 12, sm: 14, base: 16, lg: 20, xl: 24, '2xl': 32, '3xl': 48 },
    baseFontSize: 16, typeScale: 1.2, sizeOverrides: {},
    btnRadius: 6, inputStyle: 'bordered', cardStyle: 'bordered',
    spacingBase: 8, maxWidth: 1280, gridCols: 12,
    shadowStyle: 'soft',
    dos:   ['以 #2061F7 藍色作為主色，搭配 #FAFAFB 極淺底色——建立清晰的品牌識別', '大量留白傳達精準感——空間即是設計語言', '文字層次依賴字重與大小，而非顏色變化'],
    donts: ['不要使用過於鮮豔的配色組合——低調質感是品牌核心', '不要堆疊多層視覺效果——每個畫面只傳達一個核心訊息', '不要讓陰影過重——輕柔層次感才符合這套科技美學']
  },
  warm: {
    styles: ['溫暖', '活潑'],
    brandPersonality: '暖色工藝美學，用玩味互動與命名色票讓產品充滿人情味',
    colorPrimary: '#fbbd41', colorSecondary: '#F97316', colorAccent: '#078a52', colorBg: '#faf9f7', colorText: '#000000',
    fontZh: 'Noto Sans TC', fontEn: 'DM Sans',
    sizes: { xs: 12, sm: 16, base: 18, lg: 20, xl: 32, '2xl': 44, '3xl': 60 },
    baseFontSize: 18, typeScale: 1.2, sizeOverrides: {},
    btnRadius: 20, inputStyle: 'bordered', cardStyle: 'elevated',
    spacingBase: 8, maxWidth: 1280, gridCols: 12,
    shadowStyle: 'medium',
    dos:   ['以暖奶油色（#faf9f7）為頁面底色——暖調質感是品牌靈魂，不可替代', '標題 600 字重、UI 500、內文 400——嚴格三層字重系統不混用', '使用 Matcha、Lemon、Slushie 具名色票做大面積區塊背景，大膽用色不小氣'],
    donts: ['不要用冷灰或純白底色——暖奶油（#faf9f7）的溫度感是品牌核心識別', '不要用柔焦陰影——Clay 使用硬偏移陰影（-7px 7px）與多層 inset，不是模糊漸層', '不要讓按鈕圓角超過 4px——幾何邊角是有別於圓潤品牌的設計語言']
  },
  corporate: {
    styles: ['專業', '簡約'],
    brandPersonality: '沉穩、可信賴，值得長期合作的夥伴',
    colorPrimary: '#1e3a5f', colorSecondary: '#2D6A9F', colorAccent: '#c5922e', colorBg: '#f8f9fa', colorText: '#1a1a2e',
    fontZh: 'Noto Serif TC', fontEn: 'Plus Jakarta Sans',
    sizes: { xs: 12, sm: 14, base: 16, lg: 18, xl: 22, '2xl': 28, '3xl': 40 },
    baseFontSize: 16, typeScale: 1.2, sizeOverrides: {},
    btnRadius: 3, inputStyle: 'bordered', cardStyle: 'elevated',
    spacingBase: 8, maxWidth: 1280, gridCols: 12,
    shadowStyle: 'none',
    dos:   ['資訊架構要清晰，層次分明', '保持色彩使用的保守與一致', '按鈕文字要明確說明行動'],
    donts: ['不要使用過於鮮艷或前衛的配色', '不要讓排版看起來雜亂', '不要省略重要的資訊說明']
  },
  forest: {
    styles: ['自然', '沉穩'],
    brandPersonality: '深邃林綠建立品牌信任，純白底色帶來清爽呼吸感，傳遞永續與踏實的品牌價值',
    colorPrimary: '#2C3B31', colorSecondary: '#FFFFFF', colorAccent: '#7A9E7E', colorBg: '#FFFFFF', colorText: '#111827',
    fontZh: 'Noto Sans TC', fontEn: 'Plus Jakarta Sans',
    sizes: { xs: 11, sm: 13, base: 16, lg: 19, xl: 23, '2xl': 28, '3xl': 33 },
    baseFontSize: 16, typeScale: 1.2, sizeOverrides: {},
    btnRadius: 6, inputStyle: 'bordered', cardStyle: 'elevated',
    spacingBase: 8, maxWidth: 1280, gridCols: 12,
    shadowStyle: 'soft',
    dos:   ['以 #2C3B31 深森林綠作為主色——展現品牌的自然感與可靠性', '純白底色是唯一背景色——保持乾淨呼吸感，避免使用米白或米灰', '以 #7A9E7E 鼠尾草綠作為點綴——少量使用於 tag、badge、hover 狀態'],
    donts: ['不要引入暖色調（棕、橘、黃）——冷靜的自然綠系是品牌核心', '不要讓主色大面積出現在文字區——深綠適合作為按鈕、強調元素，而非大段文字色', '不要使用純黑文字——#111827 帶有微藍的深色更符合品牌溫度']
  }
};

/* ── Tab State ── */
let currentTab = 1;
const TOTAL_TABS = 5;
let currentRightTab = 'mockup';
let currentPresetName = 'tech';

/* ── Dirty State Detection ── */
function isStateDirty() {
  if (!currentPresetName || !PRESETS[currentPresetName]) return false;
  const preset = PRESETS[currentPresetName];
  const keys = ['colorPrimary','colorSecondary','colorAccent','colorBg','colorText','fontZh','fontEn',
    'btnRadius','inputStyle','cardStyle','spacingBase','maxWidth','gridCols','shadowStyle',
    'baseFontSize','typeScale'];
  if (keys.some(k => state[k] !== preset[k])) return true;
  if (JSON.stringify(state.sizes) !== JSON.stringify(preset.sizes)) return true;
  return JSON.stringify(state.sizeOverrides) !== JSON.stringify(preset.sizeOverrides);
}

function syncDirtyIndicator() {
  const sel = document.getElementById('preset-select');
  if (sel?._csync?.customSync) sel._csync.customSync();
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initCustomSelects();   // 先轉換所有 select，再接 change 事件
  initTabs();
  initRightTabs();
  initColorPickers();
  initTypeScale();
  initBtnRadiusStyle();
  initInputStyle();
  initCardStyle();
  initSliders();
  initSpacingBase();
  initShadow();
  initDosDonts();
  initPresets();
  initExportButtons();
  initToolbar();
  applyPreset('tech');

  // 防止自訂選項卡觸發瀏覽器 focus-scroll
  // 瀏覽器 scroll-into-view 是同步的，早於 focus 事件；
  // 解法：click 時儲存 scrollTop，於 microtask（同步 scroll 結束後）還原
  document.querySelectorAll('.style-opt-card, .btn-radius-opt, .shadow-opt, .checkbox-item, .radio-item')
    .forEach(el => {
      el.addEventListener('mousedown', e => e.preventDefault());
      el.addEventListener('click', () => {
        const container = el.closest('.tab-content-wrapper');
        if (!container) return;
        const saved = container.scrollTop;
        Promise.resolve().then(() => { container.scrollTop = saved; });
      });
    });

  document.body.classList.add('app-ready');
});

/* ── Custom Select Component ── */
function initCustomSelects() {
  document.querySelectorAll('select.select-input').forEach(select => {
    if (select.id === 'preset-select') return; // handled by makePresetSelect
    makeCustomSelect(select);
  });
}

function makeCustomSelect(select) {
  select.style.display = 'none';

  const wrapper = document.createElement('div');
  wrapper.className = 'custom-select';
  // 繼承寬度 class（如 w-56、w-36）
  Array.from(select.classList).filter(c => /^w-/.test(c)).forEach(c => wrapper.classList.add(c));
  select.parentNode.insertBefore(wrapper, select);
  wrapper.appendChild(select);

  // Trigger button
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'custom-select-trigger';

  const valueSpan = document.createElement('span');
  valueSpan.className = 'csel-value';
  const _selOpt = select.options[select.selectedIndex];
  valueSpan.textContent = _selOpt?.text ?? '';
  if (_selOpt?.dataset?.font) valueSpan.style.fontFamily = `'${_selOpt.dataset.font}',sans-serif`;

  const chevron = document.createElement('span');
  chevron.className = 'csel-chevron';
  chevron.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

  trigger.append(valueSpan, chevron);
  wrapper.appendChild(trigger);

  // Dropdown（portal 到 body，不受 overflow 裁切）
  const dropdown = document.createElement('ul');
  dropdown.className = 'custom-select-dropdown';

  Array.from(select.options).forEach(opt => {
    const li = document.createElement('li');
    li.className = 'csel-option';
    li.dataset.value = opt.value;
    li.textContent = opt.text;
    if (opt.dataset.font) li.style.fontFamily = `'${opt.dataset.font}',sans-serif`;
    if (opt.selected) li.classList.add('selected');
    li.addEventListener('mousedown', e => {
      e.preventDefault();
      select.value = opt.value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      valueSpan.textContent = opt.text;
      valueSpan.style.fontFamily = opt.dataset.font ? `'${opt.dataset.font}',sans-serif` : '';
      dropdown.querySelectorAll('li').forEach(l => l.classList.remove('selected'));
      li.classList.add('selected');
      close();
    });
    dropdown.appendChild(li);
  });

  let isOpen = false;

  function open() {
    if (isOpen) return;
    isOpen = true;
    const rect = trigger.getBoundingClientRect();
    dropdown.style.left = rect.left + 'px';
    dropdown.style.minWidth = rect.width + 'px';
    dropdown.style.top = (rect.bottom + 4) + 'px';
    document.body.appendChild(dropdown);
    wrapper.classList.add('open');
    requestAnimationFrame(() => {
      const dr = dropdown.getBoundingClientRect();
      if (dr.bottom > window.innerHeight - 8) {
        dropdown.style.top = (rect.top - dr.height - 4) + 'px';
      }
      document.addEventListener('click', onOutside);
    });
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    if (dropdown.parentNode) dropdown.parentNode.removeChild(dropdown);
    wrapper.classList.remove('open');
    document.removeEventListener('click', onOutside);
  }

  function onOutside(e) {
    if (!wrapper.contains(e.target) && !dropdown.contains(e.target)) close();
  }

  trigger.addEventListener('click', e => {
    e.stopPropagation();
    isOpen ? close() : open();
  });

  select._csync = { valueSpan, dropdown };
}

function syncCustomSelectDisplay(selectEl) {
  if (!selectEl?._csync) return;
  if (typeof selectEl._csync.customSync === 'function') {
    selectEl._csync.customSync();
    return;
  }
  const { valueSpan, dropdown } = selectEl._csync;
  const match = Array.from(dropdown.querySelectorAll('li')).find(li => li.dataset.value === selectEl.value);
  if (match) {
    valueSpan.textContent = match.textContent;
    valueSpan.style.fontFamily = match.style.fontFamily || '';
    dropdown.querySelectorAll('li').forEach(l => l.classList.remove('selected'));
    match.classList.add('selected');
  }
}

/* ── Preset Select (帶色塊 + dirty 指示) ── */
function makePresetSelect() {
  const select = document.getElementById('preset-select');
  if (!select) return;
  select.style.display = 'none';

  const optionNames = {};
  Array.from(select.options).forEach(opt => { optionNames[opt.value] = opt.text; });

  const wrapper = document.createElement('div');
  wrapper.className = 'custom-select preset-select-wrapper';
  select.parentNode.insertBefore(wrapper, select);
  wrapper.appendChild(select);

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'custom-select-trigger';

  const leftPart = document.createElement('div');
  leftPart.className = 'preset-trigger-left';

  const chevron = document.createElement('span');
  chevron.className = 'csel-chevron';
  chevron.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

  trigger.append(leftPart, chevron);
  wrapper.appendChild(trigger);

  const dropdown = document.createElement('ul');
  dropdown.className = 'custom-select-dropdown';

  Object.entries(PRESETS).forEach(([key, preset]) => {
    const li = document.createElement('li');
    li.className = 'csel-option';
    li.dataset.value = key;

    const row = document.createElement('div');
    row.className = 'preset-option-row';
    row.appendChild(createPresetSwatches(preset));
    const nameEl = document.createElement('span');
    nameEl.textContent = PRESET_COLOR_LABELS[key] || optionNames[key] || key;
    row.appendChild(nameEl);
    li.appendChild(row);

    if (select.value === key) li.classList.add('selected');

    li.addEventListener('mousedown', e => {
      e.preventDefault();
      select.value = key;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      dropdown.querySelectorAll('li').forEach(l => l.classList.remove('selected'));
      li.classList.add('selected');
      close();
    });
    dropdown.appendChild(li);
  });

  let isOpen = false;

  function open() {
    if (isOpen) return;
    isOpen = true;
    const rect = trigger.getBoundingClientRect();
    dropdown.style.left = rect.left + 'px';
    dropdown.style.minWidth = rect.width + 'px';
    dropdown.style.top = (rect.bottom + 4) + 'px';
    document.body.appendChild(dropdown);
    wrapper.classList.add('open');
    requestAnimationFrame(() => {
      const dr = dropdown.getBoundingClientRect();
      if (dr.bottom > window.innerHeight - 8) dropdown.style.top = (rect.top - dr.height - 4) + 'px';
      document.addEventListener('click', onOutside);
    });
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    if (dropdown.parentNode) dropdown.parentNode.removeChild(dropdown);
    wrapper.classList.remove('open');
    document.removeEventListener('click', onOutside);
  }

  function onOutside(e) {
    if (!wrapper.contains(e.target) && !dropdown.contains(e.target)) close();
  }

  trigger.addEventListener('click', e => {
    e.stopPropagation();
    isOpen ? close() : open();
  });

  function syncTrigger() {
    const preset = PRESETS[select.value];
    if (!preset) return;
    leftPart.innerHTML = '';
    leftPart.appendChild(createPresetSwatches(preset));
    const nameEl = document.createElement('span');
    nameEl.className = 'preset-name';
    nameEl.textContent = (PRESET_COLOR_LABELS[select.value] || optionNames[select.value] || select.value) + (isStateDirty() ? '*' : '');
    leftPart.appendChild(nameEl);
  }

  select._csync = { customSync: syncTrigger };
  syncTrigger();
}

function createPresetSwatches(preset) {
  const div = document.createElement('div');
  div.className = 'preset-swatches';
  [preset.colorPrimary, preset.colorAccent, preset.colorBg, preset.colorText].forEach(color => {
    const s = document.createElement('span');
    s.className = 'preset-swatch';
    s.style.background = color;
    div.appendChild(s);
  });
  return div;
}

/* ── Toolbar (Reset + Theme Toggle) ── */
function initToolbar() {
  // 重置：回到 tech 預設
  document.getElementById('btn-reset').addEventListener('click', () => {
    applyPreset('tech');
    switchTab(1);
  });

  // 深淺色切換（只影響預覽區）
  document.getElementById('btn-theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('preview-dark');
  });
}

/* ── Tab Switching ── */
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(parseInt(btn.dataset.tab)));
  });

}

function switchTab(n) {
  if (n < 1 || n > TOTAL_TABS) return;
  currentTab = n;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.tab) === n);
    btn.setAttribute('aria-selected', parseInt(btn.dataset.tab) === n);
  });
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `tab-${n}`);
  });

}

/* ── Color Pickers ── */
function initColorPickers() {
  const pairs = [
    ['colorPrimary',   'hexPrimary',   'colorPrimary'],
    ['colorSecondary', 'hexSecondary', 'colorSecondary'],
    ['colorAccent',    'hexAccent',    'colorAccent'],
    ['colorBg',        'hexBg',        'colorBg'],
    ['colorText',      'hexText',      'colorText']
  ];

  pairs.forEach(([pickerId, hexId, stateKey]) => {
    const picker = document.getElementById(pickerId);
    const hexIn  = document.getElementById(hexId);

    picker.addEventListener('input', () => {
      hexIn.value = picker.value;
      state[stateKey] = picker.value;
      renderAll();
    });

    hexIn.addEventListener('paste', e => {
      e.preventDefault();
      const raw = (e.clipboardData || window.clipboardData).getData('text').trim();
      const v = raw.startsWith('#') ? raw : '#' + raw;
      if (isValidHex(v)) {
        hexIn.value = v.toUpperCase();
        picker.value = v;
        state[stateKey] = v;
        renderAll();
      }
    });

    hexIn.addEventListener('input', () => {
      const v = hexIn.value.startsWith('#') ? hexIn.value : '#' + hexIn.value;
      if (isValidHex(v)) {
        picker.value = v;
        state[stateKey] = v;
        renderAll();
      }
    });

    hexIn.addEventListener('blur', () => {
      if (!isValidHex(hexIn.value)) hexIn.value = state[stateKey];
    });
  });

  // styles (單選)
  document.querySelectorAll('input[name="style"]').forEach(rb => {
    rb.addEventListener('change', () => {
      const customSection = document.getElementById('custom-tones-section');
      if (rb.value === '自訂') {
        customSection.classList.remove('hidden');
        state.styles = [...document.querySelectorAll('input[name="custom-tone"]:checked')].map(c => c.value);
      } else {
        customSection.classList.add('hidden');
        state.styles = [rb.value];
      }
      renderMd();
    });
  });

  // 自訂調性 (多選)
  document.querySelectorAll('input[name="custom-tone"]').forEach(cb => {
    cb.addEventListener('change', () => {
      state.styles = [...document.querySelectorAll('input[name="custom-tone"]:checked')].map(c => c.value);
      renderMd();
    });
  });

  // brandPersonality
  document.getElementById('brandPersonality').addEventListener('input', e => {
    state.brandPersonality = e.target.value;
    renderMd();
  });

  // fonts
  document.getElementById('fontZh').addEventListener('change', e => {
    state.fontZh = e.target.value;
    document.getElementById('preview-zh').style.fontFamily = `'${e.target.value}',serif`;
    renderAll();
  });
  document.getElementById('fontEn').addEventListener('change', e => {
    state.fontEn = e.target.value;
    document.getElementById('preview-en').style.fontFamily = `'${e.target.value}',sans-serif`;
    renderAll();
  });

  // maxWidth / gridCols
  document.getElementById('maxWidth').addEventListener('input', e => {
    state.maxWidth = parseInt(e.target.value) || 1280;
    renderMd();
  });
  document.getElementById('gridCols').addEventListener('change', e => {
    state.gridCols = parseInt(e.target.value);
    renderMd();
  });
}

/* ── Type Scale ── */
const TS_TOKENS = ['xs','sm','base','lg','xl','2xl','3xl'];
const TS_POSITIONS = { xs:-2, sm:-1, base:0, lg:1, xl:2, '2xl':3, '3xl':4 };
const TS_LABELS = { xs:'標籤', sm:'次要文字', base:'內文', lg:'小標題', xl:'標題', '2xl':'大標題', '3xl':'Hero' };

function computeTypeScaleSizes(basePx, scale) {
  const result = {};
  TS_TOKENS.forEach(t => {
    result[t] = Math.round(basePx * Math.pow(scale, TS_POSITIONS[t]));
  });
  return result;
}

function renderTypeScaleList() {
  const list = document.getElementById('type-scale-list');
  if (!list) return;
  const computed = computeTypeScaleSizes(state.baseFontSize, state.typeScale);
  const resetBtn = document.getElementById('ts-reset');
  const hasAnyOverride = Object.keys(state.sizeOverrides).length > 0;
  if (resetBtn) resetBtn.classList.toggle('hidden', !hasAnyOverride);

  // Pre-compute current values & find violations
  const currentVals = {};
  TS_TOKENS.forEach(t => {
    currentVals[t] = t in state.sizeOverrides ? state.sizeOverrides[t] : computed[t];
  });
  const violations = new Set();
  for (let i = 1; i < TS_TOKENS.length; i++) {
    const prev = TS_TOKENS[i - 1], cur = TS_TOKENS[i];
    if (currentVals[cur] < currentVals[prev]) {
      violations.add(prev);
      violations.add(cur);
    }
  }

  list.innerHTML = '';

  TS_TOKENS.forEach(token => {
    const computedVal = computed[token];
    const isOverridden = token in state.sizeOverrides;
    const currentVal = currentVals[token];
    const isViolating = violations.has(token);

    const row = document.createElement('div');
    row.className = 'ts-row';

    const tokenSpan = document.createElement('span');
    tokenSpan.className = 'ts-token';
    tokenSpan.textContent = token;

    const computedSpan = document.createElement('span');
    computedSpan.className = 'ts-computed';
    computedSpan.title = `比例計算值：${computedVal}px`;
    computedSpan.textContent = isOverridden ? `(${computedVal})` : '';

    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'scale-input ts-scale-input' + (isOverridden ? ' is-overridden' : '') + (isViolating ? ' is-error' : '');
    input.value = currentVal;
    input.min = 6;
    input.max = 120;

    input.addEventListener('input', () => {
      const val = parseInt(input.value);
      if (isNaN(val)) return;
      if (val === computedVal) {
        delete state.sizeOverrides[token];
      } else {
        state.sizeOverrides[token] = val;
      }
      state.sizes[token] = val;
      renderTypeScaleList();
      renderMd();
    });

    const badge = document.createElement('span');
    badge.className = 'ts-badge';
    badge.textContent = '已微調';
    badge.style.display = isOverridden ? 'inline' : 'none';

    const desc = document.createElement('span');
    desc.className = 'ts-desc';
    desc.textContent = TS_LABELS[token];

    row.appendChild(tokenSpan);
    row.appendChild(computedSpan);
    row.appendChild(input);
    row.appendChild(badge);
    row.appendChild(desc);
    list.appendChild(row);
  });

  // Error message at bottom
  if (violations.size > 0) {
    const err = document.createElement('p');
    err.className = 'ts-err-msg';
    err.textContent = '字級需由小到大遞增';
    list.appendChild(err);
  }
}

function initTypeScale() {
  const baseInput = document.getElementById('ts-base');
  const resetBtn = document.getElementById('ts-reset');

  if (baseInput) {
    baseInput.value = state.baseFontSize;
    baseInput.addEventListener('input', () => {
      const val = parseInt(baseInput.value);
      if (!val || val < 10) return;
      state.baseFontSize = val;
      // recompute sizes, keep overrides
      const computed = computeTypeScaleSizes(state.baseFontSize, state.typeScale);
      TS_TOKENS.forEach(t => {
        state.sizes[t] = t in state.sizeOverrides ? state.sizeOverrides[t] : computed[t];
      });
      renderTypeScaleList();
      renderMd();
    });
  }

  document.querySelectorAll('input[name="tsRatio"]').forEach(radio => {
    if (parseFloat(radio.value) === state.typeScale) radio.checked = true;
    radio.addEventListener('change', () => {
      state.typeScale = parseFloat(radio.value);
      const computed = computeTypeScaleSizes(state.baseFontSize, state.typeScale);
      TS_TOKENS.forEach(t => {
        state.sizes[t] = t in state.sizeOverrides ? state.sizeOverrides[t] : computed[t];
      });
      renderTypeScaleList();
      renderMd();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.sizeOverrides = {};
      const computed = computeTypeScaleSizes(state.baseFontSize, state.typeScale);
      TS_TOKENS.forEach(t => { state.sizes[t] = computed[t]; });
      renderTypeScaleList();
      renderMd();
    });
  }

  // Initial render
  const computed = computeTypeScaleSizes(state.baseFontSize, state.typeScale);
  TS_TOKENS.forEach(t => {
    state.sizes[t] = t in state.sizeOverrides ? state.sizeOverrides[t] : computed[t];
  });
  renderTypeScaleList();
}

/* ── Button Radius Style ── */
const BTN_RADIUS_MAP = { sharp: 3, medium: 10, rounded: 20 };
const BTN_RADIUS_REVERSE = { 3: 'sharp', 10: 'medium', 20: 'medium', 8: 'medium' };

function initBtnRadiusStyle() {
  document.querySelectorAll('input[name="btnRadiusStyle"]').forEach(radio => {
    radio.addEventListener('change', () => {
      state.btnRadius = BTN_RADIUS_MAP[radio.value] ?? 10;
      renderComponentPreviews();
      renderPreviewWebMockup();
      renderMd();
      syncDirtyIndicator();
    });
  });
}

function syncBtnRadiusRadio() {
  // 找最接近的選項
  const entries = Object.entries(BTN_RADIUS_MAP);
  const closest = entries.reduce((best, [key, val]) =>
    Math.abs(val - state.btnRadius) < Math.abs(BTN_RADIUS_MAP[best] - state.btnRadius) ? key : best,
    entries[0][0]
  );
  const rb = document.querySelector(`input[name="btnRadiusStyle"][value="${closest}"]`);
  if (rb) rb.checked = true;
}

/* ── Input Style ── */
function initInputStyle() {
  document.querySelectorAll('input[name="inputStyle"]').forEach(radio => {
    radio.addEventListener('change', () => {
      state.inputStyle = radio.value;
      updateLiveInputPreview();
      renderPreviewWebMockup();
      renderMd();
      syncDirtyIndicator();
    });
  });
}

function updateLiveInputPreview() {
  ['live-input-1', 'live-input-2'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('bordered', 'underline');
    el.classList.add(state.inputStyle);
  });
}

/* ── Card Style ── */
function initCardStyle() {
  document.querySelectorAll('input[name="cardStyle"]').forEach(radio => {
    radio.addEventListener('change', () => {
      state.cardStyle = radio.value;
      updateLiveCardPreview();
      renderPreviewWebMockup();
      renderMd();
      syncDirtyIndicator();
    });
  });
}

function updateLiveCardPreview() {
  const card = document.getElementById('live-card');
  if (!card) return;
  if (state.cardStyle === 'bordered') {
    card.style.boxShadow = 'none';
    card.style.border = '1px solid var(--ui-border)';
  } else {
    const shadowVal = SHADOW_CSS[state.shadowStyle]?.md ?? '0 4px 12px rgba(0,0,0,.10)';
    card.style.boxShadow = shadowVal === 'none' ? '0 4px 14px rgba(0,0,0,.10)' : shadowVal;
    card.style.border = '1px solid transparent';
  }
  // badge color
  const badge = document.getElementById('live-card-badge');
  if (badge) badge.style.background = state.colorPrimary;
  // title font
  const title = document.getElementById('live-card-title');
  if (title) title.style.fontFamily = `'${state.fontZh}',serif`;
}

/* ── Sliders ── */
function initSliders() {
  // all radius/style controls now use radio buttons
}

/* ── Spacing Base ── */
function initSpacingBase() {
  document.querySelectorAll('input[name="spacingBase"]').forEach(radio => {
    radio.addEventListener('change', () => {
      state.spacingBase = parseInt(radio.value);
      renderSpacingScale();
      renderMd();
    });
  });
}

function renderSpacingScale() {
  const base = state.spacingBase;
  const mults = [0.5, 1, 2, 3, 4, 6, 8];
  const names = ['xs','sm','md','lg','xl','2xl','3xl'];
  const container = document.getElementById('spacing-scale');
  container.innerHTML = '';
  mults.forEach((m, i) => {
    const px = Math.round(base * m);
    const block = document.createElement('div');
    block.className = 'spacing-block';
    block.innerHTML = `
      <div class="spacing-bar" style="height:${Math.min(px * 2, 64)}px"></div>
      <div class="spacing-tag">${names[i]}<br>${px}px</div>
    `;
    container.appendChild(block);
  });
}

/* ── Shadow ── */
function initShadow() {
  document.querySelectorAll('input[name="shadowStyle"]').forEach(radio => {
    radio.addEventListener('change', () => {
      state.shadowStyle = radio.value;
      updateShadowPreview();
      renderPreviewWebMockup();
      renderMd();
    });
  });
}

// SHADOW_CSS 定義在 renderPreview 區塊下方

const SHADOW_TOKEN_TEXT = {
  none:   `--shadow-sm: none;\n--shadow-md: none;\n--shadow-lg: none;`,
  soft:   `--shadow-sm: 0 1px 2px rgba(0,0,0,.05);\n--shadow-md: 0 4px 6px rgba(0,0,0,.07), 0 2px 4px rgba(0,0,0,.05);\n--shadow-lg: 0 10px 15px rgba(0,0,0,.08), 0 4px 6px rgba(0,0,0,.05);`,
  medium: `--shadow-sm: 0 1px 3px rgba(0,0,0,.10);\n--shadow-md: 0 4px 12px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.08);\n--shadow-lg: 0 10px 25px rgba(0,0,0,.15), 0 6px 10px rgba(0,0,0,.10);`,
  strong: `--shadow-sm: 0 2px 6px rgba(0,0,0,.15);\n--shadow-md: 0 8px 20px rgba(0,0,0,.18), 0 4px 8px rgba(0,0,0,.12);\n--shadow-lg: 0 20px 40px rgba(0,0,0,.22), 0 8px 16px rgba(0,0,0,.15);`
};

function updateShadowPreview() {
  const card  = document.getElementById('shadow-demo-card');
  const label = document.getElementById('shadow-demo-label');
  const tokens = document.getElementById('shadow-token-list');
  const s = SHADOW_CSS[state.shadowStyle] || SHADOW_CSS.soft;
  if (card) card.style.boxShadow = s.md || 'none';
  if (label) label.textContent = s.label;
  if (tokens) tokens.textContent = SHADOW_TOKEN_TEXT[state.shadowStyle];
  // keep elevated card in sync with current shadow choice
  updateLiveCardPreview();
}

/* ── Do's & Don'ts ── */
function initDosDonts() {
  renderRuleList('dos');
  renderRuleList('donts');
  document.getElementById('add-do').addEventListener('click', () => {
    state.dos.push('');
    renderRuleList('dos');
    renderMd();
  });
  document.getElementById('add-dont').addEventListener('click', () => {
    state.donts.push('');
    renderRuleList('donts');
    renderMd();
  });
}

function renderRuleList(type) {
  const container = document.getElementById(`${type}-list`);
  container.innerHTML = '';
  const arr = state[type];
  arr.forEach((val, idx) => {
    const item = document.createElement('div');
    item.className = 'rule-item';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'rule-input';
    input.value = val;
    input.placeholder = type === 'dos' ? `Do ${idx + 1}：輸入規範...` : `Don't ${idx + 1}：輸入禁止事項...`;
    input.addEventListener('input', () => {
      state[type][idx] = input.value;
      renderMd();
    });

    const removeBtn = document.createElement('button');
    removeBtn.className = 'rule-remove';
    removeBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
    removeBtn.title = '移除';
    removeBtn.addEventListener('click', () => {
      state[type].splice(idx, 1);
      renderRuleList(type);
      renderMd();
    });

    item.appendChild(input);
    item.appendChild(removeBtn);
    container.appendChild(item);
  });
}

/* ── Presets ── */
function initPresets() {
  makePresetSelect();
  document.getElementById('preset-select').addEventListener('change', e => {
    applyPreset(e.target.value);
  });
}

function applyPreset(name) {
  const p = PRESETS[name];
  if (!p) return;
  currentPresetName = name;

  const { styles: _ignored, ...rest } = JSON.parse(JSON.stringify(p));
  Object.assign(state, rest);

  // Sync color pickers & hex inputs
  [['colorPrimary','hexPrimary'], ['colorSecondary','hexSecondary'], ['colorAccent','hexAccent'], ['colorBg','hexBg'], ['colorText','hexText']].forEach(([pickId, hexId]) => {
    const key = pickId;
    document.getElementById(pickId).value = state[key];
    document.getElementById(hexId).value  = state[key];
  });

  // Text
  document.getElementById('brandPersonality').value = state.brandPersonality;

  // Fonts
  const fzEl = document.getElementById('fontZh');
  const feEl = document.getElementById('fontEn');
  fzEl.value = state.fontZh;
  feEl.value = state.fontEn;
  syncCustomSelectDisplay(fzEl);
  syncCustomSelectDisplay(feEl);
  document.getElementById('preview-zh').style.fontFamily = `'${state.fontZh}',serif`;
  document.getElementById('preview-en').style.fontFamily  = `'${state.fontEn}',sans-serif`;

  // Type Scale
  const tsBaseEl = document.getElementById('ts-base');
  if (tsBaseEl) tsBaseEl.value = state.baseFontSize;
  const tsRatioEl = document.querySelector(`input[name="tsRatio"][value="${state.typeScale}"]`);
  if (tsRatioEl) tsRatioEl.checked = true;
  // Recompute sizes respecting overrides
  const tsComputed = computeTypeScaleSizes(state.baseFontSize, state.typeScale);
  TS_TOKENS.forEach(t => {
    state.sizes[t] = t in state.sizeOverrides ? state.sizeOverrides[t] : tsComputed[t];
  });
  renderTypeScaleList();

  // Button radius radio
  syncBtnRadiusRadio();

  // Input style radio
  const inputRb = document.querySelector(`input[name="inputStyle"][value="${state.inputStyle}"]`);
  if (inputRb) inputRb.checked = true;
  updateLiveInputPreview();

  // Card style radio
  const cardRb = document.querySelector(`input[name="cardStyle"][value="${state.cardStyle}"]`);
  if (cardRb) cardRb.checked = true;
  updateLiveCardPreview();

  // Spacing
  document.getElementById(`spacing${state.spacingBase}`).checked = true;

  // Max width / grid
  document.getElementById('maxWidth').value = state.maxWidth;
  const gcEl = document.getElementById('gridCols');
  gcEl.value = state.gridCols;
  syncCustomSelectDisplay(gcEl);

  // Shadow
  document.querySelector(`input[name="shadowStyle"][value="${state.shadowStyle}"]`).checked = true;

  // Dos/Donts
  renderRuleList('dos');
  renderRuleList('donts');

  renderAll();

  // Sync preset select
  const sel = document.getElementById('preset-select');
  if (sel) { sel.value = name; syncCustomSelectDisplay(sel); }
}

/* ── Export Buttons ── */
function initExportButtons() {
  document.getElementById('btn-copy').addEventListener('click', () => {
    const text = document.getElementById('md-output').textContent;
    navigator.clipboard.writeText(text).then(() => showToast('✅ 已複製到剪貼板！'));
  });

  document.getElementById('btn-download').addEventListener('click', () => {
    const doDownload = () => {
      const text = document.getElementById('md-output').textContent;
      const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = 'DESIGN.md';
      a.click();
      URL.revokeObjectURL(url);
      showToast('⬇️ DESIGN.md 下載中...');
    };

    if (hasSizeOrderViolation()) {
      showSizeWarningModal(doDownload);
    } else {
      doDownload();
    }
  });
}

/* ── Size Order Validation ── */
function hasSizeOrderViolation() {
  const tokens = TS_TOKENS;
  for (let i = 1; i < tokens.length; i++) {
    if (state.sizes[tokens[i]] < state.sizes[tokens[i - 1]]) return true;
  }
  return false;
}

/* ── Size Warning Modal ── */
function showSizeWarningModal(onConfirm) {
  // Prevent duplicate
  if (document.getElementById('size-warn-modal')) return;

  const overlay = document.createElement('div');
  overlay.id = 'size-warn-modal';
  overlay.style.cssText = [
    'position:fixed', 'inset:0', 'z-index:10000',
    'display:flex', 'align-items:center', 'justify-content:center',
    'background:rgba(0,0,0,.35)', 'backdrop-filter:blur(2px)',
    'animation:fadeIn .15s ease'
  ].join(';');

  const modal = document.createElement('div');
  modal.style.cssText = [
    'background:#fff', 'border-radius:14px', 'padding:28px 28px 22px',
    'width:360px', 'max-width:calc(100vw - 40px)',
    'box-shadow:0 20px 60px rgba(0,0,0,.18),0 4px 12px rgba(0,0,0,.08)',
    'display:flex', 'flex-direction:column', 'gap:12px',
    'animation:slideUp .18s cubic-bezier(.34,1.56,.64,1)'
  ].join(';');

  // Title row
  const titleRow = document.createElement('div');
  titleRow.style.cssText = 'display:flex;align-items:center;gap:9px';

  const iconWrap = document.createElement('span');
  iconWrap.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  iconWrap.style.flexShrink = '0';

  const title = document.createElement('h3');
  title.textContent = '字級階層異常';
  title.style.cssText = 'font-size:15px;font-weight:700;color:#111;margin:0';

  titleRow.appendChild(iconWrap);
  titleRow.appendChild(title);

  // Body
  const body = document.createElement('p');
  body.textContent = '目前字級未依由小到大遞增，可能影響排版層級與可讀性。\n是否仍要匯出 DESIGN.md？';
  body.style.cssText = 'font-size:13px;color:#555;line-height:1.65;margin:0;white-space:pre-line';

  // Buttons
  const btnRow = document.createElement('div');
  btnRow.style.cssText = 'display:flex;gap:8px;justify-content:flex-end;margin-top:4px';

  const btnCancel = document.createElement('button');
  btnCancel.textContent = '返回調整';
  btnCancel.style.cssText = [
    'padding:8px 16px', 'font-size:13px', 'font-weight:500',
    'border:1.5px solid var(--ui-border2)', 'border-radius:8px',
    'background:var(--ui-surface2)', 'color:var(--ui-text)',
    'cursor:pointer', 'font-family:inherit', 'transition:background .12s'
  ].join(';');
  btnCancel.addEventListener('mouseenter', () => { btnCancel.style.background = 'var(--ui-border)'; });
  btnCancel.addEventListener('mouseleave', () => { btnCancel.style.background = 'var(--ui-surface2)'; });

  const btnConfirm = document.createElement('button');
  btnConfirm.textContent = '仍要匯出';
  btnConfirm.style.cssText = [
    'padding:8px 16px', 'font-size:13px', 'font-weight:600',
    'border:none', 'border-radius:8px',
    'background:var(--ui-primary)', 'color:#fff',
    'cursor:pointer', 'font-family:inherit', 'transition:opacity .12s'
  ].join(';');
  btnConfirm.addEventListener('mouseenter', () => { btnConfirm.style.opacity = '.85'; });
  btnConfirm.addEventListener('mouseleave', () => { btnConfirm.style.opacity = '1'; });

  const close = () => overlay.remove();

  btnCancel.addEventListener('click', close);
  btnConfirm.addEventListener('click', () => { close(); onConfirm(); });
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  btnRow.appendChild(btnCancel);
  btnRow.appendChild(btnConfirm);
  modal.appendChild(titleRow);
  modal.appendChild(body);
  modal.appendChild(btnRow);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

/* ── Toast ── */
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ── Sync UI Primary Color ── */
function syncUiPrimary() {
  const hex = state.colorPrimary;
  const v   = generateVariants(hex);
  const root = document.documentElement;
  root.style.setProperty('--ui-primary',        hex);
  root.style.setProperty('--ui-primary-hover',  v.hover);
  root.style.setProperty('--ui-secondary',      state.colorSecondary);
  root.style.setProperty('--ui-active',         hex);
  root.style.setProperty('--ui-active-hover',   v.hover);
  root.style.setProperty('--ui-active-shadow',  `color-mix(in srgb, ${hex} 15%, transparent)`);
  root.style.setProperty('--ui-active-light', v.light);
  const [lh, ls, ll] = hexToHsl(v.light);
  root.style.setProperty('--ui-active-light-border', hslToHex(lh, ls, Math.max(ll - 12, 50)));
  const star = document.getElementById('logo-star');
  if (star) star.setAttribute('fill', hex);
}

/* ── Render All ── */
function renderAll() {
  syncUiPrimary();
  renderWcag();
  renderVariants();
  renderComponentPreviews();
  renderSpacingScale();
  updateShadowPreview();
  renderPreview();
  if (currentRightTab === 'md') renderMd();
  syncDirtyIndicator();
}

/* ── WCAG ── */
function renderWcag() {
  const { colorPrimary: p, colorBg: bg, colorText: t } = state;

  // Update swatches
  document.getElementById('sw-primary').style.background = p;
  document.getElementById('sw-bg1').style.background = bg;
  document.getElementById('sw-text').style.background = t;
  document.getElementById('sw-bg2').style.background = bg;

  // Primary vs BG
  const rPB  = getContrastRatio(p, bg);
  const aaPB = wcagPass(rPB, 'AA');
  const aaaPB = wcagPass(rPB, 'AAA');
  document.getElementById('ratio-pb').textContent = rPB.toFixed(2) + ':1';
  setWcagBadge('aa-pb', aaPB);
  setWcagBadge('aaa-pb', aaaPB);

  // Text vs BG
  const rTB  = getContrastRatio(t, bg);
  const aaTB = wcagPass(rTB, 'AA');
  const aaaTB = wcagPass(rTB, 'AAA');
  document.getElementById('ratio-tb').textContent = rTB.toFixed(2) + ':1';
  setWcagBadge('aa-tb', aaTB);
  setWcagBadge('aaa-tb', aaaTB);

  // Suggestions
  const suggestions = [];
  if (!aaPB) {
    const fix = suggestContrastFix(p, bg);
    if (fix) suggestions.push(`主色對比不足（${rPB.toFixed(2)}:1）。建議改為 <span class="wcag-fix-color" onclick="applyFixColor('colorPrimary','${fix}')"><span class="wcag-fix-swatch" style="background:${fix}"></span>${fix.toUpperCase()}</span>（點擊套用）`);
  }
  if (!aaTB) {
    const fix = suggestContrastFix(t, bg);
    if (fix) suggestions.push(`文字色對比不足（${rTB.toFixed(2)}:1）。建議改為 <span class="wcag-fix-color" onclick="applyFixColor('colorText','${fix}')"><span class="wcag-fix-swatch" style="background:${fix}"></span>${fix.toUpperCase()}</span>（點擊套用）`);
  }

  const sEl = document.getElementById('wcag-suggestion');
  if (suggestions.length > 0) {
    sEl.innerHTML = '⚠️ ' + suggestions.join('<br>');
    sEl.classList.add('visible');
  } else {
    sEl.classList.remove('visible');
  }
}

function setWcagBadge(id, pass) {
  const el = document.getElementById(id);
  el.classList.toggle('pass', pass);
  el.classList.toggle('fail', !pass);
}

// 套用修正色
window.applyFixColor = (key, hex) => {
  const pickerMap = { colorPrimary: 'colorPrimary', colorText: 'colorText' };
  const hexMap    = { colorPrimary: 'hexPrimary',  colorText: 'hexText' };
  state[key] = hex;
  document.getElementById(pickerMap[key]).value = hex;
  document.getElementById(hexMap[key]).value = hex;
  renderAll();
};

/* ── Variants ── */
function renderVariants() {
  renderVariantGroup('primary', state.colorPrimary);
  renderVariantGroup('accent',  state.colorAccent);
}

function renderVariantGroup(name, hex) {
  const container = document.getElementById(`variants-${name}`);
  container.innerHTML = '';
  const v = generateVariants(hex);
  [['original', hex], ['hover', v.hover], ['light', v.light], ['dark', v.dark]].forEach(([label, color]) => {
    const sw = document.createElement('div');
    sw.className = 'variant-swatch';
    sw.style.background = color;
    sw.title = `${label}: ${color}`;
    sw.setAttribute('data-label', label);
    container.appendChild(sw);
  });
  // wrap for bottom labels spacing
  container.style.paddingBottom = '18px';
}

/* ── Component Previews ── */
function renderComponentPreviews() {
  const p  = state.colorPrimary;
  const br = state.btnRadius;
  const ff = state.fontEn;

  // Primary button
  const btn = document.getElementById('preview-btn');
  if (btn) {
    btn.style.background   = p;
    btn.style.borderRadius = `${br}px`;
    btn.style.fontFamily   = `'${ff}',sans-serif`;
  }
  // Secondary button
  const btnSec = document.getElementById('preview-btn-sec');
  if (btnSec) {
    btnSec.style.borderColor  = p;
    btnSec.style.color        = p;
    btnSec.style.borderRadius = `${br}px`;
    btnSec.style.fontFamily   = `'${ff}',sans-serif`;
  }
  // Ghost button
  const btnGhost = document.getElementById('preview-btn-ghost');
  if (btnGhost) {
    btnGhost.style.color      = p;
    btnGhost.style.borderRadius = `${br}px`;
    btnGhost.style.fontFamily = `'${ff}',sans-serif`;
  }

  // Live input preview
  updateLiveInputPreview();

  // Live card preview
  updateLiveCardPreview();

  // Shadow demo dot
  const dot = document.getElementById('shadow-demo-dot');
  if (dot) dot.style.background = p;
}

/* ── Right Tab Switching ── */
function initRightTabs() {
  document.querySelectorAll('.right-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      currentRightTab = btn.dataset.rtab;
      document.querySelectorAll('.right-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mockup  = document.getElementById('rtab-mockup');
      const preview = document.getElementById('rtab-preview');
      const md      = document.getElementById('rtab-md');
      const actions = document.getElementById('md-actions');

      mockup.style.display  = currentRightTab === 'mockup'   ? '' : 'none';
      preview.style.display = currentRightTab === 'preview'  ? '' : 'none';
      md.classList.toggle('active', currentRightTab === 'md');
      actions.classList.toggle('visible', currentRightTab === 'md');

      if (currentRightTab === 'md') renderMd();
    });
  });
}

/* ── MD Output ── */
function renderMd() {
  const md = generateDesignMd(state);
  document.getElementById('md-output').textContent = md;
}

/* ── Visual Preview ── */
function renderPreview() {
  renderPreviewWebMockup();
  renderPreviewColors();
  renderPreviewTypography();
  renderPreviewComponents();
  renderPreviewSpacingShadow();
}

function renderPreviewWebMockup() {
  const p = state.colorPrimary;
  const bg = state.colorBg;
  const text = state.colorText;
  const pvars = generateVariants(p);

  const root = document.getElementById('web-mockup-root');
  if (!root) return;
  root.style.fontFamily = `'${state.fontZh}', '${state.fontEn}', system-ui, sans-serif`;

  // Background & text
  root.style.background = bg;
  root.style.color = text;

  // Nav
  document.getElementById('mock-nav').style.background = bg;
  document.getElementById('mock-nav-links').style.color = text;
  document.getElementById('mock-signin').style.color = text;
  document.getElementById('mock-logo-text').style.color = text;

  // Nav dot (brand icon)
  document.getElementById('mock-dot').style.background = p;

  // CTA buttons
  [document.getElementById('mock-cta-btn'), document.getElementById('mock-cta-lg')].forEach(btn => {
    if (btn) { btn.style.background = p; btn.style.color = contrastingText(p); }
  });

  // Hero background subtle tint
  document.getElementById('mock-hero').style.background = bg;
  document.getElementById('mock-heading').style.color = text;
  document.getElementById('mock-sub').style.color = text;
  document.getElementById('mock-ghost-btn').style.color = text;

  // Heading accent word
  document.getElementById('mock-heading-accent').style.color = p;

  // Badge
  const badge = document.getElementById('mock-hero-badge') || document.getElementById('mock-badge');
  if (badge) {
    badge.style.color = p;
    badge.style.borderColor = pvars.light;
    badge.style.background = pvars.light + '44';
  }
  const badgeDot = document.getElementById('mock-badge-dot');
  if (badgeDot) badgeDot.style.background = p;

  // Card accent bar & stat
  document.getElementById('mock-card-bar').style.background = p;
  document.getElementById('mock-stat').style.color = p;

  // Blob
  document.getElementById('mock-blob').style.background = p;

  // ── CSS variables for extended mockup sections ──
  const shadowMap = {
    none:   'none',
    soft:   '0 2px 8px rgba(0,0,0,.08)',
    medium: '0 4px 16px rgba(0,0,0,.14)',
    strong: '0 8px 28px rgba(0,0,0,.22)'
  };
  const cardRadius = state.btnRadius <= 4 ? '8px' : state.btnRadius <= 12 ? '14px' : '20px';
  const elevated   = state.cardStyle === 'elevated';
  const cardShadow = elevated ? (shadowMap[state.shadowStyle] || '0 2px 8px rgba(0,0,0,.08)') : 'none';
  const cardBorder = elevated ? 'none' : '1px solid rgba(0,0,0,.09)';

  // Input style classes on mock form inputs
  root.querySelectorAll('.mock-form-input').forEach(el => {
    el.classList.remove('mock-input-bordered', 'mock-input-underline');
    el.classList.add(`mock-input-${state.inputStyle}`);
  });

  root.style.setProperty('--mk-primary',      p);
  root.style.setProperty('--mk-primary-text', contrastingText(p));
  root.style.setProperty('--mk-accent',       state.colorAccent);
  root.style.setProperty('--mk-bg',           bg);
  root.style.setProperty('--mk-text',         text);
  root.style.setProperty('--mk-btn-radius',   `${state.btnRadius}px`);
  root.style.setProperty('--mk-input-radius', `${Math.min(state.btnRadius, 8)}px`);
  root.style.setProperty('--mk-card-radius',  cardRadius);
  root.style.setProperty('--mk-shadow',       cardShadow);
  root.style.setProperty('--mk-card-border',  cardBorder);
}

function renderPreviewColors() {
  // Update hex labels
  document.getElementById('prev-hex-primary').textContent   = state.colorPrimary.toUpperCase();
  document.getElementById('prev-hex-secondary').textContent = state.colorSecondary.toUpperCase();
  document.getElementById('prev-hex-accent').textContent    = state.colorAccent.toUpperCase();
  document.getElementById('prev-hex-bg').textContent        = state.colorBg.toUpperCase();
  document.getElementById('prev-hex-text').textContent      = state.colorText.toUpperCase();

  // Neutral cards
  const bgCard = document.getElementById('prev-sw-bg');
  bgCard.style.background = state.colorBg;
  bgCard.querySelector('.prev-neutral-name').style.color = contrastingText(state.colorBg);
  bgCard.querySelector('.prev-neutral-hex').style.color  = contrastingText(state.colorBg);

  const textCard = document.getElementById('prev-sw-text');
  textCard.style.background = state.colorText;
  textCard.querySelector('.prev-neutral-name').style.color = contrastingText(state.colorText);
  textCard.querySelector('.prev-neutral-hex').style.color  = contrastingText(state.colorText);

  // Color scales
  buildColorScale('scale-primary',   state.colorPrimary);
  buildColorScale('scale-secondary', state.colorSecondary);
  buildColorScale('scale-accent',    state.colorAccent);
}

function buildColorScale(containerId, hex) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const scale = generateColorScale(hex);
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  steps.forEach(step => {
    const color = scale[step];
    const textColor = contrastingText(color);
    const swatch = document.createElement('div');
    swatch.className = 'scale-swatch';
    swatch.style.background = color;
    swatch.title = `${step}: ${color.toUpperCase()} — 點擊複製`;
    swatch.innerHTML = `
      <span class="scale-swatch-num" style="color:${textColor}">${step}</span>
      <span class="scale-swatch-hex" style="color:${textColor}">${color.toUpperCase()}</span>
    `;
    swatch.addEventListener('click', () => {
      navigator.clipboard.writeText(color.toUpperCase()).then(() => showToast(`已複製 ${color.toUpperCase()}`));
    });
    container.appendChild(swatch);
  });
}

const ZH_FONT_LABELS = {
  'Noto Sans TC':  '思源黑體',
  'Noto Serif TC': '思源宋體',
  'GenYoGothic TC': '源樣黑體'
};

function renderPreviewTypography() {
  const container = document.getElementById('prev-typography');
  const zhFont = state.fontZh;
  const enFont = state.fontEn;
  const zhLabel = ZH_FONT_LABELS[zhFont] || zhFont;

  let html = `
    <div class="prev-typo-fonts">
      <div class="prev-font-item">
        <div class="prev-font-tag">中文字體</div>
        <div class="prev-font-name" style="font-family:'${zhFont}',serif">${zhLabel}</div>
        <div class="prev-font-sample" style="font-family:'${zhFont}',serif">品牌設計 Aa</div>
      </div>
      <div class="prev-font-item">
        <div class="prev-font-tag">英文字體</div>
        <div class="prev-font-name" style="font-family:'${enFont}',sans-serif">${enFont}</div>
        <div class="prev-font-sample" style="font-family:'${enFont}',sans-serif;font-size:16px;">Design Aa</div>
      </div>
    </div>
    <div style="padding:12px;margin-bottom:12px;background:var(--ui-surface2);border:1px solid var(--ui-border);border-radius:var(--radius-sm)">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--ui-text3);margin-bottom:8px">混排預覽</div>
      <div style="font-family:'${zhFont}',serif;font-size:22px;font-weight:600;color:var(--ui-text);line-height:1.3">品牌設計規範</div>
      <div style="font-family:'${enFont}',sans-serif;font-size:17px;font-weight:500;color:var(--ui-text2);margin-top:2px">Design System — Brand Guidelines</div>
      <div style="font-size:13px;color:var(--ui-text2);line-height:1.7;margin-top:6px"><span style="font-family:'${zhFont}',serif">用設計語言傳達品牌個性。</span><span style="font-family:'${enFont}',sans-serif">We craft interfaces that feel intuitive.</span></div>
    </div>
    <div class="prev-type-scale">
  `;

  const tokens = ['3xl','2xl','xl','lg','base','sm','xs'];
  const zhSamples = { '3xl':'品牌設計規範', '2xl':'視覺設計系統', xl:'設計語言', lg:'元件規範' };
  const enSamples = { base:'Brand Identity System', sm:'Design guidelines', xs:'Label · Tag' };
  const usages    = { '3xl':'Hero', '2xl':'大標題', xl:'標題', lg:'小標題', base:'內文', sm:'次要', xs:'標籤' };

  tokens.forEach(t => {
    const px = state.sizes[t];
    const isHeading = ['3xl','2xl','xl','lg'].includes(t);
    const ff = isHeading ? `'${zhFont}',serif` : `'${enFont}',sans-serif`;
    const sample = isHeading ? (zhSamples[t] || usages[t]) : (enSamples[t] || usages[t]);
    html += `
      <div class="prev-scale-row">
        <div class="prev-scale-meta">
          <span class="prev-scale-token">${t}</span>
          <span class="prev-scale-px">${px}px</span>
        </div>
        <div class="prev-scale-text" style="font-size:${Math.min(px, 36)}px;font-family:${ff}">${sample}</div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function renderPreviewComponents() {
  const container = document.getElementById('prev-components');
  const p  = state.colorPrimary;
  const br = state.btnRadius;
  const bodyFont = state.fontEn;
  const titleFont = state.fontZh;

  const lightPrimary = generateVariants(p).light;

  container.innerHTML = `
    <div class="prev-comp-block">
      <div class="prev-comp-label">按鈕</div>
      <div class="prev-buttons-row">
        <button class="prev-btn-primary" style="background:${p};border-radius:${br}px;font-family:'${bodyFont}',sans-serif">
          主要按鈕
        </button>
        <button class="prev-btn-secondary" style="border-color:${p};color:${p};border-radius:${br}px;font-family:'${bodyFont}',sans-serif">
          次要按鈕
        </button>
        <button class="prev-btn-ghost" style="color:${p};border-radius:${br}px;font-family:'${bodyFont}',sans-serif">
          文字按鈕
        </button>
      </div>
    </div>

    <div class="prev-comp-block">
      <div class="prev-comp-label">輸入框</div>
      <input class="prev-input-demo" style="${state.inputStyle === 'underline' ? 'border:none;border-bottom:2px solid var(--ui-border2);border-radius:0;padding-left:2px;background:transparent' : `border:1.5px solid var(--ui-border2);border-radius:6px`};font-family:'${bodyFont}',sans-serif" type="text" placeholder="${state.inputStyle === 'underline' ? 'Underline Style' : 'Bordered Style'}" readonly>
    </div>

    <div class="prev-comp-block">
      <div class="prev-comp-label">卡片</div>
      <div class="prev-card-demo" style="border-radius:10px;font-family:'${bodyFont}',sans-serif;${state.cardStyle === 'elevated' ? `box-shadow:${SHADOW_CSS[state.shadowStyle]?.md ?? '0 4px 12px rgba(0,0,0,.10)'};border:none` : 'border:1px solid var(--ui-border);box-shadow:none'}">
        <div class="prev-card-demo-title" style="font-family:'${titleFont}',serif">設計元件卡片</div>
        <div class="prev-card-demo-body">這是卡片內文的預覽範例，展示資訊區塊的排版樣式。</div>
        <div class="prev-card-demo-badge" style="background:${p};border-radius:${br}px">設計系統</div>
      </div>
    </div>
  `;
}

function renderPreviewSpacingShadow() {
  const container = document.getElementById('prev-spacing-shadow');
  const base = state.spacingBase;
  const mults = [0.5, 1, 2, 3, 4, 6, 8];
  const names = ['xs','sm','md','lg','xl','2xl','3xl'];
  const p = state.colorPrimary;

  // Spacing bars
  let spacingHtml = `<div class="prev-comp-label">間距系統（基底 ${base}px）</div><div class="prev-spacing-row">`;
  mults.forEach((m, i) => {
    const px = Math.round(base * m);
    spacingHtml += `
      <div class="prev-space-item">
        <div class="prev-space-bar" style="height:${Math.min(px * 1.5, 72)}px;background:${p};opacity:.65;border-radius:3px;width:20px"></div>
        <div class="prev-space-tag">${names[i]}<br>${px}px</div>
      </div>
    `;
  });
  spacingHtml += `</div>`;

  // Shadow cards
  const shadowDefs = [
    { label: 'sm', css: SHADOW_CSS[state.shadowStyle]?.sm ?? '0 1px 2px rgba(0,0,0,.06)' },
    { label: 'md', css: SHADOW_CSS[state.shadowStyle]?.md ?? '0 4px 8px rgba(0,0,0,.1)' },
    { label: 'lg', css: SHADOW_CSS[state.shadowStyle]?.lg ?? '0 8px 20px rgba(0,0,0,.14)' },
  ];

  let shadowHtml = `<div class="prev-comp-label">陰影風格：${SHADOW_CSS[state.shadowStyle]?.label ?? '輕柔'}</div><div class="prev-shadow-row">`;
  shadowDefs.forEach(({ label, css }) => {
    const realCss = css === 'none' ? 'none' : css;
    shadowHtml += `
      <div class="prev-shadow-card" style="box-shadow:${realCss}">
        <div style="font-size:11px;font-weight:600;color:#64748b">${label}</div>
      </div>
    `;
  });
  shadowHtml += `</div>`;

  container.innerHTML = spacingHtml + shadowHtml;
}

// SHADOW_CSS ref for preview
const SHADOW_CSS = {
  none:   { sm: 'none', md: 'none', lg: 'none', label: '無陰影' },
  soft:   { sm: '0 1px 2px rgba(0,0,0,.05)', md: '0 4px 8px rgba(0,0,0,.07)', lg: '0 10px 18px rgba(0,0,0,.08)', label: '輕柔' },
  medium: { sm: '0 1px 4px rgba(0,0,0,.10)', md: '0 4px 14px rgba(0,0,0,.13)', lg: '0 12px 28px rgba(0,0,0,.16)', label: '明顯' },
  strong: { sm: '0 2px 6px rgba(0,0,0,.16)', md: '0 8px 22px rgba(0,0,0,.20)', lg: '0 20px 42px rgba(0,0,0,.24)', label: '強烈' }
};
