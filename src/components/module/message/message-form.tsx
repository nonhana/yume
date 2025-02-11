'use client'

import type { Message } from '@/types/message'
import { GrowTextarea } from '@/components/ui/ym/grow-textarea'
import { Send } from 'lucide-react'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import { createMessage } from './actions'

interface Props {
  messages: Message[]
  setOptimisticMessages: (updateFn: (messages: Message[]) => Message[]) => void
}

export function MessageForm({ messages, setOptimisticMessages }: Props) {
  const [message, setMessage] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (formData: FormData) => {
    const newMessage = formData.get('message') as string
    if (!newMessage)
      return

    const optimisticMessage: Message = {
      id: Date.now().toString(),
      message: newMessage,
      createdAt: new Date(),
      userId: 'temp-id',
      userName: '发送中...',
      userImg: '/default-avatar.png',
    }

    startTransition(() => {
      setOptimisticMessages(prevMessages => [optimisticMessage, ...prevMessages])
    })

    setMessage('')

    const result = await createMessage(messages, formData)

    if (result.message) {
      toast[result.success ? 'success' : 'error'](result.message)
    }
  }

  return (
    <form action={handleSubmit}>
      <div className="relative">
        <GrowTextarea
          name="message"
          placeholder="有什么想说的呢？"
          value={message}
          onChange={e => setMessage(e.target.value)}
          maxLength={500}
          className="rounded-xl pr-8"
        />
        <button disabled={isPending} type="submit" className="absolute right-1 top-1 p-2">
          <Send className="size-5" />
        </button>
      </div>
    </form>
  )
}
