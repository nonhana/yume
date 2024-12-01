'use client'

import { SECTION_Y } from '@/constants/page-config'
import { CenterImg } from './center-img'

export function Fcp() {
  return (
    <div
      className="relative w-full"
      style={{ height: `calc(100vh + ${SECTION_Y}px)` }}
    >
      <CenterImg />
    </div>
  )
}
