'use client'

import type { PropsWithChildren } from 'react'
import { BgProvider } from './bg-provider'
import { FontProvider } from './font-provider'
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
        <FontProvider>
          <BgProvider>
            {children}
          </BgProvider>
        </FontProvider>
      </LenisProvider>
    </ThemeProvider>
  )
}
