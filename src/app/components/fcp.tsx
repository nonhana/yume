'use client'

import { SECTION_Y } from '@/constants/page-config'
import { CenterImg } from './center-img'
import { WhereToGo } from './where-to-go'

export function Fcp() {
  return (
    <div
      className="relative w-full"
      style={{ height: `calc(100vh + ${SECTION_Y}px)` }}
    >
      <CenterImg />
      <WhereToGo />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black" />
    </div>
  )
}
