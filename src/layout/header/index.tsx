import { ModeToggle } from '@/components/common/mode-toggle'
import { Logo } from './logo'

export function Header() {
  return (
    <header className="bg-background fixed inset-x-0 top-0 z-50 flex">
      <Logo></Logo>
      <ModeToggle></ModeToggle>
    </header>
  )
}
