import type { Friend } from '@/types/friend'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

interface FriendIntroProps {
  friend: Friend
}

export function FriendIntro({ friend }: FriendIntroProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <Link href={friend.link} target="_blank">
        <Avatar className="size-24 ring-2 ring-gray-300">
          <AvatarImage src={friend.avatar} alt="友链图片加载失败" width={100} height={100} />
          <AvatarFallback>{friend.name}</AvatarFallback>
        </Avatar>
      </Link>
      <span className="text-md my-2">{friend.name}</span>
    </div>
  )
}
