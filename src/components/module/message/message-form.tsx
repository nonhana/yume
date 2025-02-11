'use client'

import { GrowTextarea } from '@/components/ui/ym/grow-textarea'
import { Send } from 'lucide-react'
import { useActionState, useState } from 'react'
import { toast } from 'sonner'
import { createMessage } from './actions'

export function MessageForm() {
  const [message, setMessage] = useState('')

  const [state, formAction, isPending] = useActionState(createMessage, {
    message: '',
    success: false,
  })

  const handleSubmit = async (formData: FormData) => {
    await formAction(formData)
    setMessage('')
    if (state.message) {
      toast[state.success ? 'success' : 'error'](state.message)
    }
  }

  return (
    <form action={handleSubmit}>

      <div className="relative">
        <GrowTextarea
          name="message"
          placeholder="share something ?"
          value={message}
          onChange={e => setMessage(e.target.value)}
          maxLength={500}
          className="rounded-xl pr-8"
        >
        </GrowTextarea>

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
