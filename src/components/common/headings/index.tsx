import type { PropsWithCC } from '@/types'
import { cn } from '@/lib/utils'

export function H1({ children, className }: PropsWithCC) {
  return (
    <h1 className={cn('text-foreground/80 group-hover:text-foreground leading-loose text-2xl font-medium', className)}>
      {children}
    </h1>
  )
}
