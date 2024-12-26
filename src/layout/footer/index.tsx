import type { LucideIcon } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Github, Mail, Rss } from 'lucide-react'
import Link from 'next/link'

interface FooterLink {
  href: string
  icon: LucideIcon
}

const links: FooterLink[] = [
  {
    href: siteConfig.links.github,
    icon: Github,
  },
  {
    href: siteConfig.links.email,
    icon: Mail,
  },
  {
    href: siteConfig.rss,
    icon: Rss,
  },
]

export function Footer() {
  return (
    <footer className="bg-background/80 flex-between z-50 w-full border-t px-8 py-4 backdrop-blur">
      <div className="text-muted-foreground text-sm">
        <span>© 2024 sayoriqwq.</span>
      </div>
      <div className="flex items-center gap-4">
        {links.map(({ href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
          >
            <Icon className="size-5" />
          </Link>
        ))}
      </div>
    </footer>
  )
}
