import { ClerkSign } from '@/components/common/operations/clerk-sign'
import { ModeToggle } from '@/components/common/operations/mode-toggle'

export function Operations() {
  return (
    <div className="flex-center gap-6">
      <ModeToggle />
      <ClerkSign />
    </div>
  )
}
