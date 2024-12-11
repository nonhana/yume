import { Icons } from '@/components/icons/icon'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface GoToProps {
  href: string
  children: React.ReactNode
  icon: keyof typeof Icons.Theme
}

export function GoTo({ href, children, icon }: GoToProps) {
  const Icon = Icons.Theme[icon]

  const containerVariants = {
    initial: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      y: 0,
    },
    hover: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
      y: -8,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  }

  const iconVariants = {
    hover: {
      rotate: 360,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
      className="w-64 rounded-md text-white"
    >
      <Link href={href} className="flex-center flex-col gap-2 p-6">
        <motion.div variants={iconVariants}>
          <Icon className="size-8" />
        </motion.div>
        <span
          className="text-lg font-medium"
        >
          {children}
        </span>
      </Link>
    </motion.div>
  )
}
