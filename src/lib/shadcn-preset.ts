import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import { shadcnPlugin } from './shadcn-plugin'

export const shadcnPreset: Partial<Config> = {
  darkMode: 'class',
  // shadcn依赖于tailwindcss-animate,需要使用preset的方式平铺plugins
  plugins: [shadcnPlugin, animatePlugin],
}
