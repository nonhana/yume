import Link from 'next/link'
import { NavItem } from './nav-item'

export function Logo() {
  return (
    <NavItem>
      <Link href="/">
        <span className="text-xl font-bold">
          yume
        </span>
      </Link>
    </NavItem>
  )
}
