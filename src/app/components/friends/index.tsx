'use client'
import { H1Link } from '@/components/common/link/h1-link'
import { SectionAnimation } from '@/components/common/section-animation'
import { friends } from '@/constants/friends'
import { FriendCard } from './friend-card'
import '@/styles/modules/horizontal-scroll.css'

export function Friends() {
  return (
    <SectionAnimation>
      <H1Link href="/friends">Friends</H1Link>
      <div className="relative h-[30vh] w-full">
        <div className="horizontal-scroll-wrapper squares no-scrollbar" data-lenis-prevent style={{ scrollBehavior: 'smooth' }}>
          {friends.map((friend, index) => (
            <FriendCard friend={friend} key={index} />
          ))}
        </div>
      </div>
    </SectionAnimation>
  )
}
