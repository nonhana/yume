'use client'

import { Icons } from '@/components/icons/icon'
import { siteConfig } from '@/config/site'
import { motion } from 'framer-motion'

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
  return (
    <motion.div>
      <div className="flex-center space-x-4">
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
              className="flex-center size-10 rounded-full bg-black/5 p-2 text-white backdrop-blur-md transition-colors hover:text-green-400"
              {...iconAnimation}
            >
              <Icon className="size-full" />
            </motion.a>
          )
        })}
      </div>
    </motion.div>
  )
}
