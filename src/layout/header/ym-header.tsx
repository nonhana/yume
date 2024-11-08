import type { PropsWithCC } from '@/types'
import type { FC } from 'react'
import { cn } from '@/lib/utils'

export const YmHeader: FC<PropsWithCC> = ({ children, className }) => {
  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 flex px-9 py-5 bg-transparent', className)}>
      {children}
    </header>
  )
}
