'use client'

import type { PropsWithCC } from '@/types'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export function HoverBg({ children, className }: PropsWithCC) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn('relative', className)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            layoutId="hover-indicator"
            className="absolute inset-0 z-[-1] rounded-2xl bg-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              bounce: 0.25,
              duration: 0.5,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
