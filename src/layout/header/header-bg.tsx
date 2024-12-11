import { positionAtom } from '@/atoms/header'
import { AnimatePresence, motion } from 'framer-motion'
import { useAtom } from 'jotai'

export function HeaderBg() {
  const [position] = useAtom(positionAtom)
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          ...position,
        }}
        className="absolute inset-1 z-0 h-12 rounded-full bg-black"
      />
    </AnimatePresence>
  )
}
