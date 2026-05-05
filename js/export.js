/* ─────────────────────────────────────────
   export.js — 產生 DESIGN.md 內容
   ───────────────────────────────────────── */

const SHADOW_TOKENS = {
  none: {
    label: '無陰影',
    sm: 'none',
    md: 'none',
    lg: 'none'
  },
  soft: {
    label: '輕柔',
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.05)'
  },
  medium: {
    label: '明顯',
    sm: '0 1px 3px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 4px 12px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 25px rgba(0, 0, 0, 0.15), 0 6px 10px rgba(0, 0, 0, 0.10)'
  },
  strong: {
    label: '強烈',
    sm: '0 2px 6px rgba(0, 0, 0, 0.15)',
    md: '0 8px 20px rgba(0, 0, 0, 0.18), 0 4px 8px rgba(0, 0, 0, 0.12)',
    lg: '0 20px 40px rgba(0, 0, 0, 0.22), 0 8px 16px rgba(0, 0, 0, 0.15)'
  }
};

const SIZE_USAGE = {
  xs: '標籤、輔助文字',
  sm: '次要文字、說明',
  base: '主要內文段落',
  lg: '小標題、強調文字',
  xl: '區塊標題',
  '2xl': '頁面大標題',
  '3xl': 'Hero 標題、主視覺文字'
};

/** 由 state 產生完整 DESIGN.md 字串 */
function generateDesignMd(state) {
  const date = new Date().toISOString().slice(0, 10);
  const lines = [];
  const add = (...args) => lines.push(...args);

  // ── Header ──
  add(
    `# DESIGN.md`,
    ``,
    `> 由 **Design MD 產生器** 自動生成 · ${date}`,
    `> 如需修改，直接編輯本檔案，或回到產生器重新輸出。`,
    ``
  );

  add(`---`, ``);

  // ── Section 1 ──
  add(`## 1. 視覺主題與氛圍`, ``);

  const styleList = state.styles.length > 0
    ? state.styles.join('、')
    : '（未設定）';
  add(`**風格定位：** ${styleList}`, ``);

  if (state.brandPersonality) {
    add(`**品牌個性：** ${state.brandPersonality}`, ``);
  }
  add(``);

  add(`---`, ``);

  // ── Section 2 ──
  add(`## 2. 色彩系統`, ``);

  add(`### 品牌核心色`, ``);
  add(`| 角色 | Hex | 用途 |`);
  add(`| :--- | :--- | :--- |`);
  add(`| Primary（主色）   | \`${state.colorPrimary.toUpperCase()}\` | CTA 按鈕、連結、強調元素 |`);
  add(`| Accent（強調色）  | \`${state.colorAccent.toUpperCase()}\`  | 標籤、警示、特殊強調 |`);
  add(`| Background（背景）| \`${state.colorBg.toUpperCase()}\`      | 頁面底色、容器背景 |`);
  add(`| Text（文字）      | \`${state.colorText.toUpperCase()}\`    | 主要文字、標題 |`);
  add(``);

  // 自動變體
  const pvars = generateVariants(state.colorPrimary);
  const avars = generateVariants(state.colorAccent);

  add(`### 自動產生色階`, ``);
  add(`**Primary 變體**`);
  add(`| 狀態 | Hex |`);
  add(`| :--- | :--- |`);
  add(`| Hover | \`${pvars.hover.toUpperCase()}\` |`);
  add(`| Light | \`${pvars.light.toUpperCase()}\` |`);
  add(`| Dark  | \`${pvars.dark.toUpperCase()}\`  |`);
  add(``);
  add(`**Accent 變體**`);
  add(`| 狀態 | Hex |`);
  add(`| :--- | :--- |`);
  add(`| Hover | \`${avars.hover.toUpperCase()}\` |`);
  add(`| Light | \`${avars.light.toUpperCase()}\` |`);
  add(`| Dark  | \`${avars.dark.toUpperCase()}\`  |`);
  add(``);

  // WCAG
  const ratioPB = getContrastRatio(state.colorPrimary, state.colorBg);
  const ratioTB = getContrastRatio(state.colorText, state.colorBg);

  add(`### WCAG 2.1 對比度`, ``);
  add(`| 組合 | 對比值 | AA（4.5:1） | AAA（7:1） |`);
  add(`| :--- | ---: | :---: | :---: |`);
  add(`| Primary / Background | ${ratioPB.toFixed(2)}:1 | ${ratioPB >= 4.5 ? '✅' : '❌'} | ${ratioPB >= 7 ? '✅' : '❌'} |`);
  add(`| Text / Background    | ${ratioTB.toFixed(2)}:1 | ${ratioTB >= 4.5 ? '✅' : '❌'} | ${ratioTB >= 7 ? '✅' : '❌'} |`);
  add(``);

  add(`---`, ``);

  // ── Section 3 ──
  add(`## 3. 字體規則`, ``);
  add(`| 類型 | 字體 |`);
  add(`| :--- | :--- |`);
  add(`| 中文字體 | ${state.fontZh} |`);
  add(`| 英文字體 | ${state.fontEn} |`);
  add(``);

  add(`### 字級系統`, ``);
  add(`| Token | px | rem | 用途 |`);
  add(`| :--- | ---: | ---: | :--- |`);
  const tokens = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'];
  for (const token of tokens) {
    const px = state.sizes[token] || 16;
    const rem = (px / 16).toFixed(3).replace(/\.?0+$/, '');
    add(`| \`${token}\` | ${px}px | ${rem}rem | ${SIZE_USAGE[token]} |`);
  }
  add(``);

  // CSS vars
  add(`\`\`\`css`);
  add(`/* 字型 CSS 變數 */`);
  add(`--font-zh:   '${state.fontZh}', serif;`);
  add(`--font-en:   '${state.fontEn}', sans-serif;`);
  add(``);
  for (const token of tokens) {
    add(`--text-${token}: ${state.sizes[token]}px;`);
  }
  add(`\`\`\``);
  add(``);

  add(`---`, ``);

  // ── Section 4 ──
  add(`## 4. 元件樣式`, ``);
  add(`| 設定 | 值 |`);
  add(`| :--- | :--- |`);
  add(`| 按鈕圓角 | ${{ sharp: '方正（3px）', medium: '適中（10px）', rounded: '圓潤（20px）' }[({ 3:'sharp',10:'medium',20:'rounded' })[state.btnRadius]] || `${state.btnRadius}px`} |`);
  add(`| 輸入框樣式 | ${state.inputStyle === 'bordered' ? '有框線 Bordered' : '底線 Underline'} |`);
  add(`| 卡片風格 | ${state.cardStyle === 'bordered' ? 'Subtle Border（扁平細邊框）' : 'Elevated Shadow（浮起陰影）'} |`);
  add(``);
  add(`\`\`\`css`);
  add(`/* 元件 CSS 變數 */`);
  add(`--radius-btn:   ${state.btnRadius}px;`);
  add(`--input-style:  ${state.inputStyle};`);
  add(`--card-style:   ${state.cardStyle};`);
  add(`\`\`\``);
  add(``);

  add(`---`, ``);

  // ── Section 5 ──
  add(`## 5. 排版原則`, ``);
  add(`| 設定 | 值 |`);
  add(`| :--- | :--- |`);
  add(`| 基礎間距單位 | ${state.spacingBase}px |`);
  add(`| 最大內容寬度 | ${state.maxWidth}px |`);
  add(`| Grid 欄數 | ${state.gridCols} 欄 |`);
  add(``);

  // 間距 scale
  add(`### 間距系統（以 ${state.spacingBase}px 為基底）`, ``);
  const base = parseInt(state.spacingBase);
  const spacingTokens = [
    { name: 'xs',  mult: base === 4 ? 1 : 0.5 },
    { name: 'sm',  mult: 1 },
    { name: 'md',  mult: 2 },
    { name: 'lg',  mult: 3 },
    { name: 'xl',  mult: 4 },
    { name: '2xl', mult: 6 },
    { name: '3xl', mult: 8 }
  ];
  add(`| Token | px |`);
  add(`| :--- | ---: |`);
  for (const t of spacingTokens) {
    add(`| \`space-${t.name}\` | ${Math.round(base * t.mult)}px |`);
  }
  add(``);
  add(`\`\`\`css`);
  add(`/* 間距 CSS 變數 */`);
  for (const t of spacingTokens) {
    add(`--space-${t.name}: ${Math.round(base * t.mult)}px;`);
  }
  add(`\`\`\``);
  add(``);

  add(`---`, ``);

  // ── Section 6 ──
  add(`## 6. 深度與陰影`, ``);
  const st = SHADOW_TOKENS[state.shadowStyle] || SHADOW_TOKENS.soft;
  add(`**陰影風格：** ${st.label}`, ``);
  add(`\`\`\`css`);
  add(`/* 陰影 CSS 變數 */`);
  add(`--shadow-sm: ${st.sm};`);
  add(`--shadow-md: ${st.md};`);
  add(`--shadow-lg: ${st.lg};`);
  add(`\`\`\``);
  add(``);

  add(`---`, ``);

  // ── Section 7 ──
  add(`## 7. 使用規範 — Do's and Don'ts`, ``);

  const doList  = state.dos.filter(s => s.trim());
  const dontList = state.donts.filter(s => s.trim());

  add(`### ✅ Do's`, ``);
  if (doList.length > 0) {
    for (const d of doList) add(`- ${d}`);
  } else {
    add(`- （尚未填寫）`);
  }
  add(``);

  add(`### ❌ Don'ts`, ``);
  if (dontList.length > 0) {
    for (const d of dontList) add(`- ${d}`);
  } else {
    add(`- （尚未填寫）`);
  }
  add(``);

  add(`---`, ``);

  // ── Footer ──
  add(`> ⚡ 由 [Design MD 產生器](https://github.com/) 生成 · ${date}`);

  return lines.join('\n');
}
