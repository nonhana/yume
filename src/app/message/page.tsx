import MessagesPage from '@/components/module/message/page'
import { currentUser } from '@clerk/nextjs/server'
import { Suspense } from 'react'

export default async function Page() {
  const user = await currentUser()

  return (
    <div className="mt-10 flex w-full flex-col gap-8">
      <Suspense fallback={<div> Loading1... </div>}>
        {user
          ? (
              <Suspense fallback={<div> Loading2... </div>}>
                <MessagesPage />
              </Suspense>
            )
          : (
              <div>
                请先登录
              </div>
            )}
      </Suspense>
    </div>
  )
}
