import { BlogListFCP } from '@/components/module/blog/blog-list-fcp'
import { FriendListFCP } from '@/components/module/friend/friend-list-fcp'
import { OperationListFCP } from '@/components/module/operation/operation-list-fcp'
import { Fcp } from './components/fcp'

export default function Home() {
  return (
    <div className="relative">
      <main>
        <Fcp />
        <BlogListFCP />
        <FriendListFCP />
        <OperationListFCP />
      </main>
    </div>
  )
}
