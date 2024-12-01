import type { PropsWithChildren } from 'react'
import { comicFont, sansFont, serifFont } from '@/config/fonts'

export function FontProvider({ children }: PropsWithChildren) {
  return (
    <div
      className={`${sansFont.variable} ${comicFont.variable} ${serifFont.variable} font-sans antialiased`}
    >
      {children}
    </div>
  )
}
