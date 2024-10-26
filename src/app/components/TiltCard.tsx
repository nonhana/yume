'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'

import React, { useRef } from 'react'

function renderContent() {
  return (
    <section className="flex-center mt-10 flex-col gap-2 text-center font-sans font-bold">
      <Avatar className="size-28">
        <AvatarImage src="/imgs/avatar.png" />
        <AvatarFallback>Ciallo~</AvatarFallback>
      </Avatar>
      <p className="break-words text-2xl">
        Hi, I'm
        <span className="text-primary"> sayori</span>
        <span className="text-blue-400">qwq</span>
      </p>
      <p className="text-muted-foreground text-md break-words">
        Student | Front-end Developer
      </p>
    </section>
  )
}

const ROTATION_RANGE = 32.5
const HALF_ROTATION_RANGE = 32.5 / 2

export function TiltCard() {
  const ref = useRef<HTMLDivElement | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current)
      return [0, 0]

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
    const rY = mouseX / width - HALF_ROTATION_RANGE

    x.set(rX)
    y.set(rY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className="relative size-72"
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-0 rounded-xl shadow-xl"
      >

        <div
          style={{
            transform: 'translateZ(50px)',
          }}
        >
          {renderContent()}
        </div>
      </div>
    </motion.div>
  )
}
