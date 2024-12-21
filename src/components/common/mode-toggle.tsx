'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={toggleTheme} className="flex-center relative size-4">
      <Sun className="absolute size-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"></Sun>
      <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"></Moon>
    </button>
  )
}
