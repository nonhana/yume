import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
/*
    不能使用路径别名，tailwind.config.ts 是在项目构建开始之前就被加载的
    它被 Tailwind CLI 和 PostCSS 直接使用
    这个阶段 Next.js 的构建系统还没有介入，所以路径别名解析器还没有生效
*/
import { shadcnPreset } from './src/lib/shadcn-preset'

const config: Config = {
  mode: 'jit',
  presets: [shadcnPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['var(--font-sans)'],
      serif: ['var(--font-serif)', 'serif'],
      comic: ['var(--font-comic)', 'sans'],
    },
    extend: {
      /* 需要定制最大宽度,prose会有约束 */
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
