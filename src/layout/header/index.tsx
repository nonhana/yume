import { Logo } from './logo'

export function Header() {
  return (
    <header className="bg-background fixed inset-x-0 top-0 z-50 flex">
      <Logo></Logo>
    </header>
  )
}
