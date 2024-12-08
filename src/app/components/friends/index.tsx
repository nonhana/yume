'use client'
import { friends } from '@/constants/friends'
import { FriendCard } from './friend-card'
import '@/styles/modules/horizontal-scroll.css'

export function Friends() {
  return (
    <section>
      <h2 className="mb-10 text-center text-3xl font-bold">Friends</h2>
      <div className="horizontal-scroll-wrapper squares no-scrollbar" data-lenis-prevent style={{ scrollBehavior: 'smooth' }}>
        {friends.map((friend, index) => (
          <FriendCard friend={friend} key={index} />
        ))}
        <div className="flex-center size-64">
          share links?
        </div>
      </div>
    </section>
  )
}
