import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { WhereToGo } from './where-to-go'

export function Overlay() {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  const whereToGoOpacity = useTransform(scrollYProgress, [0.5, 0.75, 1], [0, 1, 0])

  return (
    <div>
      <motion.div
        style={{ y, opacity }}
        ref={targetRef}
        className="flex-center absolute left-0 top-0 h-screen w-full text-white/90 mix-blend-overlay backdrop-opacity-30"
      >
        <div className="flex-center flex-col gap-6">
          <h1 className="text-8xl drop-shadow-lg">
            yume
          </h1>
          <p className="text-2xl tracking-wide">
            a place to share your dreams
          </p>
        </div>
      </motion.div>
      <motion.div
        style={{ y, opacity: whereToGoOpacity }}
      >
        <WhereToGo />
      </motion.div>
    </div>
  )
}
