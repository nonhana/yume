'use client'

import type { PropsWithChildren } from 'react'
import { LenisProvider } from './lenis-provider'
import { ThemeProvider } from './theme-provider'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LenisProvider>
        {children}
      </LenisProvider>
    </ThemeProvider>
  )
}
