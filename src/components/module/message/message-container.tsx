'use client'

import type { Message } from '@/types/message'
import { useOptimistic } from 'react'
import { MessageBoard } from './message-board'
import { MessageForm } from './message-form'

export default function MessageContainer({ initialMessages }: { initialMessages: Message[] }) {
  const [optimisticMessages, setOptimisticMessages] = useOptimistic<Message[]>(initialMessages)

  return (
    <div className="space-y-4">
      <MessageForm messages={optimisticMessages} setOptimisticMessages={setOptimisticMessages} />
      <MessageBoard messages={optimisticMessages} />
    </div>
  )
}
