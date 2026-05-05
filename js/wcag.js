/* ─────────────────────────────────────────
   wcag.js — WCAG 2.1 對比度計算工具
   ───────────────────────────────────────── */

/** 解析 hex → { r, g, b }（0-255）*/
function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16)
  };
}

/** 相對亮度（WCAG 定義） */
function getRelativeLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const lin = v => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** 對比比值（較大/較小 + 0.05）*/
function getContrastRatio(hex1, hex2) {
  const l1 = getRelativeLuminance(hex1);
  const l2 = getRelativeLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker  = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/** 判斷是否通過指定標準
 *  @param {number} ratio - 對比值
 *  @param {'AA'|'AAA'} level
 *  @param {'normal'|'large'} size - normal=18px 以下
 */
function wcagPass(ratio, level, size = 'normal') {
  if (level === 'AA')  return size === 'large' ? ratio >= 3   : ratio >= 4.5;
  if (level === 'AAA') return size === 'large' ? ratio >= 4.5 : ratio >= 7;
  return false;
}

/* ── Color Utility ── */

function hexToHsl(hex) {
  let { r, g, b } = hexToRgb(hex);
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [h * 360, s * 100, l * 100];
}

function hslToHex(h, s, l) {
  h /= 360; s /= 100; l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  const toHex = x => Math.round(Math.max(0, Math.min(1, x)) * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * 在 hex 顏色的色相不變、飽和度不變下調整亮度，
 * 搜尋能達到 targetRatio 的建議色（先往深找、再往淺找）
 */
function suggestContrastFix(fgHex, bgHex, targetRatio = 4.5) {
  const [h, s, l] = hexToHsl(fgHex);
  // 先往暗色方向找
  for (let newL = l - 3; newL >= 2; newL -= 3) {
    const candidate = hslToHex(h, s, newL);
    if (getContrastRatio(candidate, bgHex) >= targetRatio) return candidate;
  }
  // 再往亮色方向找
  for (let newL = l + 3; newL <= 98; newL += 3) {
    const candidate = hslToHex(h, s, newL);
    if (getContrastRatio(candidate, bgHex) >= targetRatio) return candidate;
  }
  return null;
}

/** 產生 hover / light / dark 三個變體 */
function generateVariants(hex) {
  const [h, s, l] = hexToHsl(hex);
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  return {
    hover: hslToHex(h, clamp(s + 3, 0, 100), clamp(l - 10, 8,  92)),
    light: hslToHex(h, clamp(s * 0.25, 5, 40), clamp(l + 36, 75, 96)),
    dark:  hslToHex(h, clamp(s + 5,  0, 100), clamp(l - 26, 5,  80))
  };
}

/** 判斷顏色是否是有效的 hex */
function isValidHex(hex) {
  return /^#[0-9A-Fa-f]{6}$/.test(hex);
}

/**
 * 產生 50-900 完整色階
 * @param {string} hex
 * @returns {{ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 }}
 */
function generateColorScale(hex) {
  const [h, s, l] = hexToHsl(hex);
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  // 以原始色的 L 為基準，往上 / 往下分佈
  const offsets = {
    50:  44,
    100: 34,
    200: 24,
    300: 14,
    400: 6,
    500: 0,
    600: -12,
    700: -22,
    800: -32,
    900: -44
  };

  const scale = {};
  for (const [level, offset] of Object.entries(offsets)) {
    const newL = clamp(l + offset, 3, 97);
    // 淺色降低飽和度，避免「洗白」感消失
    const sFactor = newL > 85 ? 0.2 : newL > 72 ? 0.55 : newL > 60 ? 0.85 : 1;
    scale[level] = hslToHex(h, clamp(s * sFactor, 0, 100), newL);
  }
  return scale;
}

/** 根據背景色決定文字應該用白或黑 */
function contrastingText(bgHex) {
  return getRelativeLuminance(bgHex) > 0.35 ? '#1a1a2e' : '#ffffff';
}
