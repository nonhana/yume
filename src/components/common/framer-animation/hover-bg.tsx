'use client'

import type { PropsWithCC } from '@/types'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
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
      {isHovered && (
        <motion.div
          layoutId="hover-indicator"
          className="absolute inset-0 z-[-1] rounded-2xl bg-green-200"
          transition={{
            type: 'spring',
            bounce: 0.25,
            duration: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
        />
      )}
    </div>
  )
}
