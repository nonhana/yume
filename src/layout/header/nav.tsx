'use client'

import { isHeaderHoveringAtom } from '@/store/header'
import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import Link from 'next/link'

const links = [
  { label: 'Blog', href: '/blog' },
  { label: 'Think', href: '/think' },
  { label: 'About', href: '/about' },
  { label: 'Friend', href: '/friend' },
]

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}
export function Nav() {
  const isHeaderHovering = useAtomValue(isHeaderHoveringAtom)
  return (
    <motion.nav
      key="full-nav"
      className="flex items-center justify-end gap-4"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{
        duration: isHeaderHovering ? 0.5 : 0.4,
        ease: isHeaderHovering ? 'easeOut' : 'easeIn',
      }}
    >
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="font-sans transition-colors duration-300 hover:text-gray-400"
        >
          {link.label}
        </Link>
      ))}
    </motion.nav>
  )
}
