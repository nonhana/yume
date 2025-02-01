import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useCallback, useState } from 'react'

export function Light() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const size = useMotionValue(100)
  const [isPressed, setIsPressed] = useState(false)

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
      size.set(isPressed ? 100 : 30)
    },
    [mouseX, mouseY, isPressed, size],
  )

  const background = useMotionTemplate`radial-gradient(
    ${size}px circle at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.3),
    transparent 80%
  )`

  return (
    <motion.div
      className="fixed inset-0 cursor-none mix-blend-soft-light backdrop-blur-xl"
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={{ background }}
    />
  )
}
