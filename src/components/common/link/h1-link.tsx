import type { PropsWithCC } from '@/types'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { H1 } from '../headings'

interface Props extends PropsWithCC {
  href: string
}

export function H1Link({ children, className, href }: Props) {
  return (
    <Link href={href} className="group mb-8 flex w-fit items-center gap-2 font-serif">
      <H1 className={className}>{children}</H1>
      <ArrowUpRight
        className="text-foreground size-5 -translate-x-2 -translate-y-1 opacity-0 transition-all duration-300 group-hover:opacity-100"
      />
    </Link>
  )
}
