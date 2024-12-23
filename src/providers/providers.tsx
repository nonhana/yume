'use client'

import type { PropsWithChildren } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { FontProvider } from './font-provider'
import { LenisProvider } from './lenis-provider'
import { SWRProvider } from './swr-provider'
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
          <SWRProvider>
            <ClerkProvider>
              {children}
            </ClerkProvider>
          </SWRProvider>
        </FontProvider>
      </LenisProvider>
    </ThemeProvider>
  )
}
