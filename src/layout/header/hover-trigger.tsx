import type { PropsWithCC } from '@/types'
import { isHeaderHoveringAtom } from '@/store/header'
import { useAtom } from 'jotai'

export function HoverTrigger({ children, className }: PropsWithCC) {
  const [_, setIsHeaderHovering] = useAtom(isHeaderHoveringAtom)

  return (
    <div
      className={className}
      onMouseEnter={() => setIsHeaderHovering(true)}
      onMouseLeave={() => setIsHeaderHovering(false)}
    >
      {children}
    </div>
  )
}
