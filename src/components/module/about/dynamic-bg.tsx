'use client'

import { motion } from 'framer-motion'

export function DynamicBg() {
//   const { scrollYProgress } = useScroll()

  //   const backgroundPosition = useTransform(
  //     scrollYProgress,
  //     [0, 0.7, 1],
  //     ['100% 0%', '0% 100%', '0% 100%'],
  //   )

  return (
    <>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
        //   background: 'linear-gradient(to bottom left, #1b398e 0%, #7691ac 80%, #e5cbb7 100%)',
        //   backgroundSize: '200% 200%',
        //   backgroundPosition,
          background: '#1b398e',
        }}
      />
    </>
  )
}
