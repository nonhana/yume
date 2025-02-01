import { MessageForm } from '@/components/module/message/message-form'
import Messages from '@/components/module/message/messages'
import { currentUser } from '@clerk/nextjs/server'
import { Suspense } from 'react'

export default async function Page() {
  const user = await currentUser()

  return (
    <div className="mt-10 flex w-full flex-col gap-8">
      <Suspense fallback={
        <div className="text-muted-foreground flex h-20 items-center justify-center text-2xl"> Loading... </div>
      }
      >
        {user
          ? (
              <MessageForm />
            )
          : (
              <div className="bg-secondary text-muted-foreground flex h-20 items-center justify-start rounded-lg px-10 pr-2 text-sm">
                请登录
              </div>
            )}
      </Suspense>

      <Suspense fallback={<div />}>
        <Messages />
      </Suspense>
    </div>
  )
}
