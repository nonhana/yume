import { isScrollingAtom, isShowFullNavAtom } from '@/store/header'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useAtom, useAtomValue } from 'jotai'
import { MenuIcon } from './menu-icon'
import { Nav } from './nav'

export function NavBar() {
  const { scrollY } = useScroll()
  const [_isScrolling, setIsScrolling] = useAtom(isScrollingAtom)
  const showFullNav = useAtomValue(isShowFullNavAtom)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolling(latest > 100)
  })
  return (
    <motion.div
      className="flex items-center"
    >
      <AnimatePresence mode="wait">
        {showFullNav ? <Nav /> : <MenuIcon />}
      </AnimatePresence>
    </motion.div>
  )
}
