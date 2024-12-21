'use client'

import { headerAtom, type Header as HeaderState, positionAtom } from '@/atoms/header'
import { IMG_PADDING } from '@/constants/page-config'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useAtom } from 'jotai'
import { usePathname } from 'next/navigation'
import { HeaderBg } from './header-bg'
import { Navs } from './navs'

const ANIMATION_CONFIG = {
  duration: 0.3,
}

function getHeaderState(latest: number, previous: number) {
  if (latest < 100)
    return 'normal'
  return latest > previous ? 'hidden' : 'compact'
}

function getHeaderClass(state: HeaderState, isHomePage: boolean) {
  return cn(
    'relative mx-auto flex items-center h-14 bg-secondary text-secondary-foreground',
    {
      'rounded-full shadow-lg px-2 border border-border': state === 'compact',
      'px-5': state === 'normal',
      'bg-transparent text-white/90 mix-blend-overlay': state === 'normal' && isHomePage,
      'backdrop-blur-sm': state === 'normal' && !isHomePage,
    },
  )
}

export function Header() {
  const [header, setHeader] = useAtom(headerAtom)
  const [_position, setPosition] = useAtom(positionAtom)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setHeader(getHeaderState(latest, previous))
  })

  if (header === 'hidden') {
    return (
      <AnimatePresence mode="wait">
        <motion.header
          key="hidden"
          className="fixed inset-x-0 top-0 z-50 mx-auto"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          exit={{ y: '-100%' }}
          transition={ANIMATION_CONFIG}
        />
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.header
        key="visible"
        className="fixed inset-x-0 top-0 z-50 mx-auto"
        initial={{ y: '-100%' }}
        animate={{
          y: header === 'normal' ? 0 : 32,
        }}
        exit={{ y: '-100%' }}
        transition={ANIMATION_CONFIG}
      >
        <motion.div
          className={getHeaderClass(header, isHomePage)}
          layout
          transition={ANIMATION_CONFIG}
          style={{
            marginTop: isHomePage && header === 'normal' ? IMG_PADDING * 2 : 0,
            width: header === 'normal' ? '100%' : 'fit-content',
            justifyContent: header === 'normal' ? 'space-between' : 'center',
          }}
          onMouseLeave={() => {
            setPosition(pv => ({
              ...pv,
              opacity: 0,
            }))
          }}
        >
          <Navs />
          <HeaderBg />
        </motion.div>
      </motion.header>
    </AnimatePresence>
  )
}
