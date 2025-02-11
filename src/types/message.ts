export interface Message {
  id: number
  userId: string
  userName: string
  userImg: string
  message: string
  createdAt: Date
}

export type CreateMessage = Omit<Message, 'id' | 'createdAt'>
