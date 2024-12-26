import { H1Link } from '@/components/common/link/h1-link'
import { friends } from '@/constants/friends'
import { Normal } from '@/layout/container/Normal'
import { FriendIntro } from './friend-intro'

export function FriendListFCP() {
  return (
    <div className="w-full">
      <Normal>
        <div className="flex-center">
          <H1Link href="friend">朋友们</H1Link>
        </div>
        <div className="flex gap-x-10 overflow-x-scroll">
          {
            friends.map((friend, index) => (
              <FriendIntro key={index} friend={friend} />
            ))
          }
        </div>
      </Normal>
    </div>
  )
}
