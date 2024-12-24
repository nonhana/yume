import { ClerkSign } from '@/components/common/clerk-sign'
import { ModeToggle } from '@/components/common/mode-toggle'
import { NavItem } from './nav-item'

export function Operations() {
  return (
    <div className="flex">
      <NavItem>
        <ModeToggle />
      </NavItem>
      <NavItem>
        <ClerkSign />
      </NavItem>
    </div>
  )
}
