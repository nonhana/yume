import { H1 } from '@/components/common/headings'
import { ApplyFriendLink } from '@/components/module/friend/apply-friend-link'
import { FriendList } from '@/components/module/friend/friend-list'

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <H1>朋友们</H1>
      <FriendList />
      <ApplyFriendLink />
    </div>

  )
}
