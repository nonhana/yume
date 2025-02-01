'use client'

import { Icons } from '@/components/icons/icon'
import { siteConfig } from '@/config/site'
import { motion } from 'framer-motion'

interface Icon {
  name: keyof typeof siteConfig.links
  Icon: typeof Icons.Platform[keyof typeof Icons.Platform]
  backgroundColor: string
}

const iconSet: Icon[] = [
  {
    name: 'github',
    Icon: Icons.Platform.Github,
    backgroundColor: '#24292e',
  },
  {
    name: 'twitter',
    Icon: Icons.Platform.Twitter,
    backgroundColor: '#1DA1F2',
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
        {iconSet.map(({ name, Icon, backgroundColor }) => {
          const link = siteConfig.links[name]
          if (!link)
            return null

          return (
            <motion.a
              key={name}
              target="_blank"
              rel="noreferrer"
              href={link}
              className="flex-center size-12 rounded-full p-2 text-white"
              {...iconAnimation}
              style={{ backgroundColor }}
            >
              <Icon className="size-6" />
            </motion.a>
          )
        })}
      </div>
    </motion.div>
  )
}
