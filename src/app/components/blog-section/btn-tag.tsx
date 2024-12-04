'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface TagProps {
  tag: string
}

export function BtnTag({ tag }: TagProps) {
  const router = useRouter()
  return (
    <motion.span
      className="text-md inline-block cursor-pointer rounded-sm text-black/80 "
      whileHover={{
        scale: 1.05,
        color: '#1b398e',
        transition: {
          duration: 0.2,
          ease: 'easeInOut',
        },
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        router.push(`/tags/${tag}`)
      }}
    >
      {tag}
    </motion.span>
  )
}
