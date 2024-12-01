import Link from 'next/link'

export function GoTo({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-gray-400"
    >
      {children}
    </Link>
  )
}
