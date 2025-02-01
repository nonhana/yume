'use client'

import type { PropsWithCC } from '@/types'
import { cn } from '@/lib/utils'

export function H1({ children, className }: PropsWithCC) {
  return (
    <h1 className={cn('text-foreground font-aboreto leading-loose text-3xl font-semibold', className)}>
      {children}
    </h1>
  )
}
