'use client'

import { Icons } from '@/components/icons/icon'
import { siteConfig } from '@/config/site'
import { SECTION_Y } from '@/constants/page-config'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'

interface Icon {
  name: keyof typeof siteConfig.links
  Icon: typeof Icons.Platform[keyof typeof Icons.Platform]
}

const iconSet: Icon[] = [
  {
    name: 'github',
    Icon: Icons.Platform.Github,
  },
  {
    name: 'twitter',
    Icon: Icons.Platform.Twitter,
  },
]

const iconAnimation = {
  whileHover: {
    scale: 1.1,
    rotate: [-5, 5, -5, 5, 0],
    transition: {
      rotate: {
        repeat: Infinity,
        duration: 0.4,
      },
      scale: {
        duration: 0.2,
      },
    },
  },
}

export function SocialIcons() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  const opacity = useTransform(
    scrollY,
    [0, SECTION_Y],
    [0, 1],
  )

  useMotionValueEvent(opacity, 'change', (latest) => {
    setIsVisible(latest > 0.2)
  })

  return (
    <motion.div style={{ opacity }}>
      <div className="flex items-center justify-center space-x-4">
        {iconSet.map(({ name, Icon }) => {
          const link = siteConfig.links[name]
          if (!link)
            return null

          return (
            <motion.a
              key={name}
              target="_blank"
              rel="noreferrer"
              href={link}
              className="flex size-10 items-center justify-center rounded-full bg-black/20 p-2 text-white backdrop-blur-md transition-colors hover:text-green-400"
              {...iconAnimation}
              style={{
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
            >
              <Icon className="size-full" />
            </motion.a>
          )
        })}
      </div>
    </motion.div>
  )
}
