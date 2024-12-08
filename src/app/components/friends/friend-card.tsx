import type { Friend } from '@/types/friend'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface FriendCardProps {
  friend: Friend
}

export function FriendCard({ friend }: FriendCardProps) {
  return (
    <div>
      <Link href={friend.link} target="_blank">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-center size-64 flex-col gap-2"
        >
          <Image
            src={friend.avatar}
            alt={friend.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <h3 className="text-lg font-semibold">{friend.name}</h3>
          <p className="line-clamp-2 px-8 text-center text-sm">{friend.description}</p>
        </motion.div>
      </Link>
    </div>
  )
}
