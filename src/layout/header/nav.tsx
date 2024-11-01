import Link from 'next/link'

const links = [
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Think',
    href: '/think',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Friend',
    href: '/friend',
  },
]
export function Nav() {
  return (
    <nav className="flex items-center gap-4">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="font-sans"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
