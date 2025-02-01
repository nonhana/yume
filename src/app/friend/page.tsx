import { ApplyFriendLink } from '@/components/module/friend/apply-friend-link'
import { FriendList } from '@/components/module/friend/friend-list'

export default function Page() {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <FriendList />
      <ApplyFriendLink />
    </div>

  )
}
