'use client'

import { DragCards } from '@/components/module/think/drag-cards'
import { GridCards } from '@/components/module/think/grid-cards'
import { ScrollCards } from '@/components/module/think/scroll-cards'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const mode = searchParams.get('mode')

  useEffect(() => {
    if (!mode) {
      window.history.replaceState(null, '', `${pathname}?mode=drag`)
    }
  }, [mode, pathname])

  return (
    <div>
      {mode === 'scroll' ? <ScrollCards /> : mode === 'grid' ? <GridCards /> : <DragCards />}
    </div>
  )
}
