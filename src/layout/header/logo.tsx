import { headerSelectedAtom } from '@/atoms/header'
import { useAtom } from 'jotai'
import Link from 'next/link'

export function Logo() {
  const [_selected, setSelected] = useAtom(headerSelectedAtom)
  return (
    <Link
      href="/"
      className="font-aboreto text-xl font-bold transition-colors hover:text-yume-spotlight-foreground duration-300 ease-in-out"
      onClick={() => setSelected('/')}
    >
      yume
    </Link>
  )
}
