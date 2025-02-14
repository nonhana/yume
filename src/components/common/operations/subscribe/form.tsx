'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useUser } from '@clerk/nextjs'

import { Loader2 } from 'lucide-react'
import { useActionState } from 'react'
import toast from 'react-hot-toast'
import { createSubscriber } from './action'

export function SubscribeForm() {
  const { user } = useUser()
  const email = user?.emailAddresses[0]?.emailAddress || ''

  const [state, formAction, isPending] = useActionState(createSubscriber, { message: '', success: false })

  async function handleSubmit(formData: FormData) {
    await formAction(formData)
    if (state.message) {
      toast[state.success ? 'success' : 'error'](state.message)
    }
  }

  return (
    <form action={handleSubmit} className="flex-center gap-6">
      <Input
        type="email"
        name="email"
        id="email"
        defaultValue={email}
      />
      <Button
        type="submit"
        disabled={isPending}
      >
        {isPending
          ? <Loader2 className="size-5 animate-spin" />
          : '订阅'}
      </Button>
    </form>
  )
}
