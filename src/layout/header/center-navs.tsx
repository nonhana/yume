import type { HeaderTabs } from '@/atoms/header'
import { headerSelectedAtom } from '@/atoms/header'
import { cn } from '@/lib/utils'
import { useAtom } from 'jotai'
import { BookText, Link2, LoaderCircle, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const navs = [
  {
    name: '博客',
    href: '/posts',
    icon: BookText,
  },
  {
    name: '朋友',
    href: '/friend',
    icon: Link2,
  },
  {
    name: '关于',
    href: '/about',
    icon: LoaderCircle,
  },
  {
    name: '留言',
    href: '/message',
    icon: MessageCircle,
  },
]

export function CenterNavs() {
  const [selected, setSelected] = useAtom(headerSelectedAtom)
  return (
    <div className="flex">
      {
        navs.map(nav => (
          <Link
            href={nav.href}
            className={cn(
              'relative rounded-md px-2 py-1 flex-center gap-2',
              'hover:text-yume-spotlight-foreground',
              'transition-all duration-300 ease-in-out',
              selected === nav.href && 'text-yume-spotlight-foreground px-4',
            )}
            key={nav.href}
            onClick={() => setSelected(nav.href as HeaderTabs)}
          >
            <div className={cn(
              'w-0 scale-0 transition-all duration-300 ease-in-out opacity-0',
              selected === nav.href && 'w-4 scale-100 opacity-100',
            )}
            >
              <nav.icon className="size-4" />
            </div>
            <span className="relative z-10">{nav.name}</span>
          </Link>
        ))
      }
    </div>
  )
}
