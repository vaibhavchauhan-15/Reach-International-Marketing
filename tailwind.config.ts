import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand (raw — use semantic tokens in components)
        'brand-blue': '#008CFC',
        'brand-charcoal': '#202329',
        // Light theme semantic
        'surface-base': 'var(--surface-base)',
        'surface-raised': 'var(--surface-raised)',
        'surface-sunken': 'var(--surface-sunken)',
        'surface-tint': 'var(--surface-tint)',
        'surface-inverse': 'var(--surface-inverse)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-inverse': 'var(--text-inverse)',
        'text-link': 'var(--text-link)',
        'border-subtle': 'var(--border-subtle)',
        'border-strong': 'var(--border-strong)',
        'border-focus': 'var(--border-focus)',
        'action-primary-bg': 'var(--action-primary-bg)',
        'action-primary-fg': 'var(--action-primary-fg)',
        'action-primary-hover': 'var(--action-primary-hover)',
        'badge-fg': 'var(--badge-fg)',
        'icon-accent': 'var(--icon-accent)',
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.5rem,1.6rem + 4.5vw,4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '650' }],
        h1: ['clamp(2rem,1.4rem + 3vw,3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '650' }],
        h2: ['clamp(1.625rem,1.25rem + 1.8vw,2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '650' }],
        h3: ['clamp(1.25rem,1.1rem + 0.8vw,1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        h4: ['1.125rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        'body-lg': ['clamp(1.0625rem,1rem + 0.3vw,1.25rem)', { lineHeight: '1.6', fontWeight: '400' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        label: ['0.875rem', { lineHeight: '1.25', letterSpacing: '0.01em', fontWeight: '550' }],
        caption: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.005em', fontWeight: '400' }],
        overline: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '6px',
        md: '10px',
        lg: '16px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgb(16 24 40 / 0.06)',
        md: '0 8px 24px rgb(16 24 40 / 0.12)',
      },
      maxWidth: {
        narrow: '720px',
        default: '1200px',
        wide: '1360px',
      },
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

export default config
