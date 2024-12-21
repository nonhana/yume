import { positionAtom } from '@/atoms/header'
import { useAtom } from 'jotai'
import { type PropsWithChildren, useRef } from 'react'

export function NavItem({ children }: PropsWithChildren) {
  const [_position, setPosition] = useAtom(positionAtom)
  const ref = useRef<null | HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current)
          return

        const { width } = ref.current.getBoundingClientRect()

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        })
      }}
      onMouseLeave={() => {
        setPosition(pv => ({
          ...pv,
          opacity: 0,
        }))
      }}
      className="flex-center relative z-10 px-4"
    >
      {children}
    </div>
  )
}
