import { Github, Menu, Moon, Sun, Twitter } from 'lucide-react'

export const Icons = {
  // 平台图标
  Platform: {
    Github,
    Twitter,
  },
  Theme: {
    Sun,
    Moon,
  },
  Nav: {
    Menu,
  },
} as const

export type IconKeys = keyof typeof Icons.Platform
