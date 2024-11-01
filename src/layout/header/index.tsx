import { Logo } from './logo'
import { Nav } from './nav'
import { YmHeader } from './ym-header'

export function Header() {
  return (
    <YmHeader className="items-center justify-between">
      <Logo />
      <Nav />
    </YmHeader>
  )
}
