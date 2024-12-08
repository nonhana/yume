import type { FC, PropsWithChildren } from 'react'
import { ReactLenis } from 'lenis/react'

export const LenisProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        gestureOrientation: 'both', // 允许both方向的手势
        orientation: 'vertical', // 只控制垂直方向
      }}
    >
      {children}
    </ReactLenis>
  )
}
