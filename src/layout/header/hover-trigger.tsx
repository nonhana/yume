import type { PropsWithCC } from '@/types'
import { isHeaderHoveringAtom } from '@/store/header'
import { useDebounceFn } from 'ahooks'
import { useSetAtom } from 'jotai'

export function HoverTrigger({ children, className }: PropsWithCC) {
  const setIsHeaderHovering = useSetAtom(isHeaderHoveringAtom)

  const { run: handleHoverChange } = useDebounceFn(
    (hovering: boolean) => {
      setIsHeaderHovering(hovering)
    },
    { wait: 100 },
  )

  return (
    <div
      className={className}
      onMouseEnter={() => handleHoverChange(true)}
      onMouseLeave={() => handleHoverChange(false)}
    >
      {children}
    </div>
  )
}
