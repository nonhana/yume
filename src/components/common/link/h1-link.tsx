import type { PropsWithCC } from '@/types'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Props extends PropsWithCC {
  href: string
}

export function H1Link({ children, className, href }: Props) {
  return (
    <Link href={href}>
      <h1 className={cn('text-center text-3xl font-bold mb-16 hover:text-gray-400 transition-colors', className)}>
        {children}
      </h1>
    </Link>
  )
}
