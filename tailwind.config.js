/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        ui: {
          bg:       'var(--ui-bg)',
          surface:  'var(--ui-surface)',
          surface2: 'var(--ui-surface2)',
          border:   'var(--ui-border)',
          border2:  'var(--ui-border2)',
          text:     'var(--ui-text)',
          text2:    'var(--ui-text2)',
          text3:    'var(--ui-text3)',
          primary:  'var(--ui-primary)',
          success:  '#10B981',
          danger:   '#EF4444',
        }
      },
      height: {
        header:  'var(--header-h)',
        tabnav:  'var(--tabnav-h)',
        tabfoot: 'var(--tabfoot-h)',
      },
      width:    { 'left-panel': 'var(--left-width)' },
      minWidth: { 'left-panel': 'var(--left-width)' },
      fontFamily: {
        sans: ['TaipeiSansTC', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    }
  },
  plugins: [],
}
