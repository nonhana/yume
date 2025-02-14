'use client'

import type { Message } from '@prisma/client'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import { Send } from 'lucide-react'
import { useActionState, useState } from 'react'
import toast from 'react-hot-toast'
import { createMessage } from './actions'

interface Props {
  setOptimisticMessages: (updateFn: (messages: Message[]) => Message[]) => void
}

export function MessageForm({ setOptimisticMessages }: Props) {
  const [message, setMessage] = useState('')
  const [state, formAction, isPending] = useActionState(createMessage, {
    message: '',
    success: false,
  })
  const { user } = useUser()

  if (!user) {
    return (
      <div className="flex-center p-6 rounded-xl border border-dashed bg-card">
        <p className="text-card-foreground">登录后发送留言</p>
      </div>
    )
  }

  const handleSubmit = async (formData: FormData) => {
    const newMessage = formData.get('message') as string
    if (!newMessage)
      return

    const optimisticMessage: Message & { isSending?: boolean } = {
      message: newMessage,
      userId: user.id,
      userName: (user.username || user.firstName) ?? '神秘',
      userImg: user.imageUrl,
      createdAt: new Date(),
      // fake id
      id: Math.random(),
      isSending: true,
    }

    setOptimisticMessages(prevMessages => [optimisticMessage, ...prevMessages])

    setMessage('')

    await formAction(formData)
    if (state.message) {
      toast[state.success ? 'success' : 'error'](state.message)
    }
  }

  return (
    <form action={handleSubmit}>
      <div className="relative">
        <Textarea
          name="message"
          placeholder="有什么想说的呢？"
          value={message}
          onChange={e => setMessage(e.target.value)}
          maxLength={500}
          className="field-sizing-content max-h-96 min-h-[none] resize-none rounded-xl pr-8"
        />
        <button
          disabled={isPending}
          type="submit"
          className="absolute right-1 top-1 p-2"
        >
          <Send className="size-5" />
        </button>
      </div>
    </form>
  )
}
