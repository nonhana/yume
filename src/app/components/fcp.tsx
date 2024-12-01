'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { IntroCard } from './intro-card'

const SECTION_Y = 0

export function Fcp() {
  return (
    <div
      className="relative w-full"
      style={{ height: `calc(100vh + ${SECTION_Y}px)` }}
    >
      <CenterImg />
    </div>
  )
}

function CenterImg() {
  const { scrollY } = useScroll()

  const filterOpacity = useTransform(
    scrollY,
    [SECTION_Y, SECTION_Y + 500],
    [0.25, 1],
  )

  const cardOpacity = useTransform(
    scrollY,
    [SECTION_Y, SECTION_Y + 500],
    [1, 0],
  )

  return (
    <div className="sticky top-0 h-screen w-full">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/imgs/bg.jpg")',
        }}
      >
        <motion.div className="absolute inset-0 z-10 bg-black" style={{ opacity: filterOpacity }} />
      </motion.div>

      <motion.div className="relative z-20 flex h-full items-center justify-center" style={{ opacity: cardOpacity }}>
        <IntroCard />
      </motion.div>
    </div>
  )
}
