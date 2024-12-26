import { friends } from '@/constants/friends'
import { FriendCard } from './friend-card'

export function FriendList() {
  return (
    <div className="grid grid-cols-2 gap-y-10 px-20">
      {
        friends.map((friend, index) => (
          <FriendCard key={index} friend={friend} />
        ))
      }
    </div>
  )
}
