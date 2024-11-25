'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function PreLoad({ children }: { children: React.ReactNode }) {
  const [_isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const preloadImages = async () => {
      const imagesToPreload = ['/imgs/bg.jpg']

      const loadImage = (src: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = src
          img.onload = resolve
          img.onerror = reject
        })
      }

      try {
        await Promise.all(imagesToPreload.map(loadImage))
        setIsLoading(false)
      }
      catch (error) {
        console.error('Failed to preload images:', error)
        setIsLoading(false)
      }
    }

    preloadImages()
  }, [])

  const loadingVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <>
      <motion.div
        className="bg-primary fixed inset-0 z-50 flex items-center justify-end"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transitionEnd: {
            display: 'none',
          },
        }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          className="mr-20 flex h-32 w-96 flex-col text-end text-white"
          variants={loadingVariants}
          animate="animate"
        >
          <motion.div
            className="mb-5 text-8xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              type: 'spring',
              stiffness: 100,
            }}
          >
            yume
          </motion.div>
          <motion.div
            className="text-3xl font-light tracking-wider text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 1.2,
              type: 'spring',
              stiffness: 100,
            }}
          >
            a place for daydreamer
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        {children}
      </motion.div>
    </>
  )
}
