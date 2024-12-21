'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export function DynamicBg() {
  const { scrollYProgress } = useScroll()

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ['100% 0%', '0% 100%', '0% 100%'],
  )

  const finalColorOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.9],
    [0, 0, 1],
  )

  return (
    <>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom left, #1b398e 0%, #7691ac 80%, #e5cbb7 100%)',
          backgroundSize: '200% 200%',
          backgroundPosition,
        }}
      />
      <motion.div
        className="bg-background absolute inset-0 z-0"
        style={{
          opacity: finalColorOpacity,
        }}
      />
    </>
  )
}
