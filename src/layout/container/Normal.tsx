import type { PropsWithCC } from '@/types'
import { cn } from '@/lib/utils'

export function Normal({ children, className }: PropsWithCC) {
  return (
    <div className={cn('container max-w-5xl px-10 py-20 mx-auto', className)}>{children}</div>
  )
}
