'use client'

import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

const menuVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
}

export function MenuIcon() {
  return (
    <motion.div
      className="absolute right-4 flex w-64 justify-end"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <Menu className="size-6" />
    </motion.div>
  )
}
