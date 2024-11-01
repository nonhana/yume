'use client'

import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { IntroCard } from './intro-card'

const SECTION_Y = 1500

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
  //   useMotionValueEvent(scrollY, 'change', (latest) => {
  //     console.log(latest)
  //   })

  const filterOpacity = useTransform(
    scrollY,
    [SECTION_Y, SECTION_Y + 500],
    [0.4, 1],
  )
  const clipPercentage = useTransform(
    scrollY,
    [0, SECTION_Y],
    [20, 0],
  )

  const clipPath = useMotionTemplate`inset(${clipPercentage}% round 1rem)`

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_Y + 500],
    ['170%', '100%'],
  )

  const cardOpacity = useTransform(
    scrollY,
    [SECTION_Y, SECTION_Y + 500],
    [1, 0],
  )

  return (
    <motion.div
      className="flex-center sticky top-0 h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/imgs/bg.jpg")',
        clipPath,
        backgroundSize,
      }}
    >
      <motion.div className="absolute inset-0 z-10 bg-black" style={{ opacity: filterOpacity }} />

      <motion.div className="z-20" style={{ opacity: cardOpacity }}>
        <IntroCard />
      </motion.div>
    </motion.div>

  )
}
