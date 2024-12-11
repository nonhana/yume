import { IMG_PADDING } from '@/constants/page-config'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function CenterImg() {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  //   useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  //     console.log(latest)
  //   })

  return (

    <motion.div
      className="sticky inset-0 z-0 overflow-hidden rounded-3xl bg-cover bg-center"
      ref={targetRef}
      style={{
        backgroundImage: 'url("/imgs/bg.jpg")',
        scale,
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: `${IMG_PADDING}px`,
      }}
    >
      <motion.div className="absolute inset-0 bg-neutral-950/50" style={{ opacity }}></motion.div>
    </motion.div>
  )
}
