import type { Friend } from '@/types/friend'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'
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
          className="flex size-64 flex-col items-center gap-2"
        >
          <Avatar className="size-24">
            <AvatarImage src={friend.avatar} width={100} height={100} />
            <AvatarFallback>{friend.name}</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-semibold">{friend.name}</h3>
          <p className="line-clamp-2 px-8 text-center text-sm">{friend.description}</p>
        </motion.div>
      </Link>
    </div>
  )
}
