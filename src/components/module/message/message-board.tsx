import type { Message } from '@/types/message'
import { RelativeTime } from '@/components/common/time'

import Image from 'next/image'

export function MessageBoard({ messages }: { messages: Message[] }) {
  return (
    <ul className="flex flex-col space-y-4">
      {messages.map(message => (
        <MessageItem key={message.id} message={message} />
      ))}
    </ul>
  )
}

export function MessageItem({ message }: { message: Message }) {
  return (
    <li key={message.id}>
      <div className="flex gap-3">
        <div className="flex shrink-0 flex-col items-center gap-2">
          <Image
            src={message.userImg}
            width={40}
            height={40}
            alt="user image"
            className="rounded-full"
          />
        </div>

        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center gap-3">
            <p>{message.userName}</p>
            <RelativeTime date={message.createdAt} className="text-muted-foreground text-xs" />
          </div>

          <div className="shadow-xs bg-card w-fit rounded-xl px-4 py-2">
            <p className="text-md break-words">
              {message.message}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}
