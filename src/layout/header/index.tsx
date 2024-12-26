'use client'

import { clerkModalAtom } from '@/atoms/clerk'
import { headerAtom, positionAtom } from '@/atoms/header'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useAtom } from 'jotai'
import { HeaderBg } from './header-bg'
import { Navs } from './navs'

export function Header() {
  const [header, setHeader] = useAtom(headerAtom)
  const [_position, setPosition] = useAtom(positionAtom)
  const [isModalOpen] = useAtom(clerkModalAtom)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setHeader(latest - previous < 0)
  })

  return (
    <AnimatePresence mode="wait">
      <header
        className="fixed inset-1 top-0 z-50 h-14"
        style={{
          paddingRight: isModalOpen ? 15 : 0,
        }}
      >
        <motion.div
          className="bg-secondary text-secondary-foreground relative mx-auto flex h-14 w-fit items-center rounded-full border px-2 shadow-lg"
          initial={{
            y: 32,
            opacity: 1,
          }}
          animate={{
            y: header ? 32 : '-105%',
            opacity: header ? 1 : 0,
          }}
          exit={{
            y: '-105%',
            opacity: 0,
          }}
          transition={{
            type: 'tween',
            duration: 0.3,
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
      </header>
    </AnimatePresence>
  )
}
