'use server'

import { db } from '@/db'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const MessageSchema = z.object({
  message: z.string()
    .min(1, '消息不能为空')
    .max(500, '消息长度不能超过500字符'),
})

export async function createMessage(formData: FormData) {
  const user = await currentUser()

  if (!user) {
    throw new Error('User not authenticated')
  }

  // 验证表单数据
  const validationResult = MessageSchema.safeParse({
    message: formData.get('message'),
  })

  if (!validationResult.success) {
    throw new Error(validationResult.error.errors[0].message)
  }

  await db.message.create({
    data: {
      message: validationResult.data.message ?? '',
      userId: user.id,
      userName: (user.username || user.firstName) ?? '神秘',
      userImg: user.imageUrl,
    },
  })

  revalidatePath('/message')
}
