import { ModeToggle } from '@/components/common/mode-toggle'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import { NavItem } from './nav-item'

export function Operations() {
  return (
    <div className="flex">
      <NavItem>
        <ModeToggle />
      </NavItem>
      <NavItem>
        <SignedOut>
          <SignInButton mode="modal">
            <LogIn className="size-4" />
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </NavItem>
    </div>
  )
}
