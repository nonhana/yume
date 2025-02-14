import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  y: number
  duration?: number
}
export function ScrollToShow({ children, y, duration = 0.75 }: Props) {
  return (
    <motion.div
      initial={{ y, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration }}
    >
      {children}
    </motion.div>
  )
}
