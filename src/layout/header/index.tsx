'use client'

import { headerAtom, positionAtom } from '@/atoms/header'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useAtom } from 'jotai'
import { HeaderBg } from './header-bg'
import { NavItem } from './nav-item'

const navs = [
  {
    name: 'yume',
    href: '/',
  },
  {
    name: 'friends',
    href: '/friends',
  },
  {
    name: 'about',
    href: '/about',
  },
  {
    name: 'blog',
    href: '/blog',
  },
]

export function Header() {
  const [header, setHeader] = useAtom(headerAtom)

  const { scrollY } = useScroll()

  const variants = {
    normal: {
      y: 5,
    },
    compact: {
      y: 32,
    },
    hidden: {
      y: '-100%',
    },
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    const isAtTop = latest < 100
    const isScrollingDown = latest > previous

    if (isAtTop) {
      setHeader('normal')
    }
    else {
      isScrollingDown ? setHeader('hidden') : setHeader('compact')
    }
  })

  const [_position, setPosition] = useAtom(positionAtom)

  return (
    <AnimatePresence>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 mx-auto w-fit rounded-full bg-white"
        animate={header}
        variants={variants}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative flex w-fit rounded-full p-1 shadow-lg "
          onMouseLeave={() => {
            setPosition(prev => ({
              ...prev,
              opacity: 0,
            }))
          }}
        >
          {navs.map(nav => (
            <NavItem key={nav.name}>
              {nav.name}
            </NavItem>
          ))}
          <HeaderBg />
        </motion.div>
      </motion.header>
    </AnimatePresence>
  )
}
