import { Github, Twitter } from 'lucide-react'

export const Icons = {
  // 平台图标
  Platform: {
    Github,
    Twitter,
  },
} as const

export type IconKeys = keyof typeof Icons.Platform
