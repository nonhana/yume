import type { FC, PropsWithChildren } from 'react'
import { ReactLenis } from 'lenis/react'

export const LenisProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}
