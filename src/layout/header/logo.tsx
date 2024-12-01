import { motion } from 'framer-motion'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/">
      <motion.div
        className="text-2xl font-bold"
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: {
            rotate: {
              duration: 0.5,
              ease: 'easeInOut',
            },
            scale: {
              duration: 0.2,
            },
          },
        }}
      >
        <span className="hover:text-green-200">
          yume
        </span>
      </motion.div>
    </Link>
  )
}
