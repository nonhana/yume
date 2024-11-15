import type { PropsWithChildren } from 'react'

export function FontProvider({ children }: PropsWithChildren) {
  return <div className="font-sans">{children}</div>
}
