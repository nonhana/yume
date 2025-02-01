import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

export function Intro() {
  return (
    <section className="flex-center mt-10 flex-col gap-2 text-center font-sans font-bold">
      <Link href="/about">
        <Avatar className="size-28 ring-2 transition duration-300 hover:ring-green-200">
          <AvatarImage src="/imgs/avatar.png" />
          <AvatarFallback>Ciallo~</AvatarFallback>
        </Avatar>
      </Link>
      <p className="break-words text-2xl">
        <span className=""> sayori</span>
        <span className="text-green-200">qwq</span>
      </p>
      <p className="text-md break-words text-slate-300">
        Student | Front-end Developer
      </p>
    </section>
  )
}
