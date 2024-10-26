'use client'

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="ghost" className="w-10 px-0" onClick={toggleTheme}>
      <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"></Sun>
      <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"></Moon>
    </Button>
  )
}
