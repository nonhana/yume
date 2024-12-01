'use client'

import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

export function BlogAnimation({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  )
}
