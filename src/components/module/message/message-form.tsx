'use client'

import { GrowTextarea } from '@/components/ui/ym/grow-textarea'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { toast } from 'sonner'
import { createMessage } from './actions'

export function MessageForm() {
  const [message, setMessage] = useState('')

  const { pending } = useFormStatus()

  const formAction = async (formData: FormData) => {
    try {
      await createMessage(formData)
      setMessage('')
      toast.success('Message sent successfully')
    }
    catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
      else {
        toast.error('An error occurred')
      }
    }
  }
  return (
    <form action={formAction}>

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
          disabled={pending}
          type="submit"
          className="text-foreground/80 absolute right-1 top-1 p-2"
        >
          <Send className="size-5" />
        </button>
      </div>

    </form>
  )
}
