import MessageContainer from '@/components/module/message/message-container'
import { db } from '@/db'

async function getMessages() {
  const messages = await db.message.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return messages
}

export default async function MessagesPage() {
  // 在这个服务器组件里获取数据，并且往下传递
  const initialMessages = await getMessages()

  return <MessageContainer initialMessages={initialMessages} />
}
