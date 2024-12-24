import type { FC, PropsWithChildren } from 'react'
import { ReactLenis } from 'lenis/react'

export const LenisProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        gestureOrientation: 'both', // 允许both方向的手势
        prevent(node) {
          return !node.closest('.lenis-prevent')
        },
      }}
    >
      {children}
    </ReactLenis>
  )
}
