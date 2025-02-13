'use client'

import type { Message } from '@prisma/client'
import { RelativeTime } from '@/components/common/time'
import { cn } from '@/lib/utils'
import { useUser } from '@clerk/nextjs'
import { Loader2, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { deleteMessage } from './actions'

interface Props {
  message: Message & { isSending?: boolean }
  onDelete: (id: number) => void
}

export function MessageItem({ message, onDelete }: Props) {
  const [isPending, startTransition] = useTransition()
  const { user } = useUser()

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteMessage(message.id)
      if (result.success) {
        onDelete(message.id)
        toast.success(result.message)
      }
      else {
        toast.error(result.message)
      }
    })
  }

  return (
    <li key={message.id} className="">
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

          <div className="flex items-center gap-3">
            <p className="shadow-2xs bg-card relative w-fit break-words rounded-xl px-4 py-2">
              {message.message}
            </p>
            { message?.isSending && <Loader2 className="size-5 animate-spin" />}
            <button onClick={handleDelete} disabled={isPending} className={cn('opacity-0', user?.id === message.userId && 'opacity-100')}>
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
