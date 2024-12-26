import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { BookOpen, Info, Users } from 'lucide-react'
import Link from 'next/link'
import { NavItem } from './nav-item'

const navs = [
  {
    name: '博客',
    href: '/blog',
    icon: BookOpen,
  },
  {
    name: '朋友',
    href: '/friend',
    icon: Users,
  },
  {
    name: '关于',
    href: '/about',
    icon: Info,
  },
]
export function CenterNavs() {
  return (
    <div className="flex">
      {
        navs.map(nav => (
          <NavItem key={nav.href}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={nav.href} title={nav.name} className="flex items-center gap-2">
                    <nav.icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom" sideOffset={4}>
                  {nav.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </NavItem>
        ))
      }
    </div>
  )
}
