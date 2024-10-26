'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

export function Intro() {
  return (
    <section className="flex-center mt-10 flex-col gap-2 font-sans">
      <Avatar className="size-28">
        <AvatarImage src="/imgs/avatar.png" />
        <AvatarFallback>0.0</AvatarFallback>
      </Avatar>
      <p className="break-words text-2xl">
        Hi, I'm
        <span className="text-primary"> sayori</span>
        <span className="text-blue-400">qwq</span>
      </p>
      <p className="text-muted-foreground text-md break-words">
        Student | Front-end Developer
      </p>
      {/* <SocialIcons /> */}
    </section>
  )
}
