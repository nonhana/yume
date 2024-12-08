'use client'

import type { PropsWithCC } from '@/types'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const variants = {
  hidden: { y: 48, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -48, opacity: 0 },
}

export function SectionAnimation({ children, className }: PropsWithCC) {
  return (
    <motion.section
      className={cn('section-gap', className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: '-100px' }}
      transition={{
        ease: 'easeInOut',
        duration: 0.75,
      }}
    >
      {children}
    </motion.section>
  )
}
