import { BookOpen, Info, Users } from 'lucide-react'
import Link from 'next/link'
import { NavItem } from './nav-item'

const navs = [
  {
    name: 'Blog',
    href: '/blog',
    icon: BookOpen,
  },
  {
    name: 'Friend',
    href: '/friend',
    icon: Users,
  },
  {
    name: 'About',
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
            <Link href={nav.href} title={nav.name}>
              <nav.icon className="size-5" />
            </Link>
          </NavItem>
        ))
      }
    </div>
  )
}
