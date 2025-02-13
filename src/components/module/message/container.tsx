'use client'

import type { Message } from '@prisma/client'
import { useOptimistic } from 'react'
import { MessageBoard } from './board'
import { MessageForm } from './form'

export default function MessageContainer({ initialMessages }: { initialMessages: Message[] }) {
  const [optimisticMessages, setOptimisticMessages] = useOptimistic<Message[]>(initialMessages)

  const handleDelete = (id: number) => {
    setOptimisticMessages(prevMessages => prevMessages.filter(msg => msg.id !== id))
  }

  return (
    <div className="space-y-10">
      <MessageForm setOptimisticMessages={setOptimisticMessages} />
      <MessageBoard messages={optimisticMessages} onDelete={handleDelete} />
    </div>
  )
}
