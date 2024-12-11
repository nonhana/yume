import { positionAtom } from '@/atoms/header'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'

export function HeaderBg() {
  const [position] = useAtom(positionAtom)

  return (
    <motion.div
      animate={{
        ...position,
      }}
      className="absolute z-0 h-12 rounded-full bg-black"
    />
  )
}
