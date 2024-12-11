import { motion } from 'framer-motion'
import { type Dispatch, type SetStateAction, useRef, useState } from 'react'

export function SlideTabs() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  })

  return (
    <ul
      onMouseLeave={() => {
        setPosition(pv => ({
          ...pv,
          opacity: 0,
        }))
      }}
      className="fixed inset-x-0 top-8 z-50 mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>

      <Cursor position={position} />
    </ul>
  )
}

function Tab({
  children,
  setPosition,
}: {
  children: string
  setPosition: Dispatch<SetStateAction<Position>>
}) {
  const ref = useRef<null | HTMLLIElement>(null)

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current)
          return

        const { width } = ref.current.getBoundingClientRect()

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        })
      }}
      className="relative z-50 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  )
}

function Cursor({ position }: { position: Position }) {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  )
}

interface Position {
  left: number
  width: number
  opacity: number
}
