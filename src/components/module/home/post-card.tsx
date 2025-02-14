'use client'

import type { PropsWithCC } from '@/types'
import type { Post } from '@/types/post'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps extends PropsWithCC {
  post: Post
}

export function PostCard({ post, className }: PostCardProps) {
  const href = `posts/${post.metadata.category}/${post.slug}`
  return (
    <Link
      href={href}
      className={cn(
        'flex-between gap-6 rounded-lg p-6 transition-all',
        'group',
        className,
      )}
    >
      <div className="flex flex-col gap-2 px-2">
        <h3 className="text-foreground/90 group-hover:text-foreground line-clamp-2 text-xl font-semibold transition-colors">
          {post.metadata.title}
        </h3>
        <p className="text-muted-foreground text-md mt-1">
          {post.metadata.publishedAt}
        </p>
      </div>
      <div className="relative aspect-4/3 w-48 shrink-0 overflow-hidden rounded-lg transition-transform group-hover:shadow-lg">
        <Image
          src={post.metadata.cover.replace('http://localhost:3000', '')}
          alt={post.metadata.title}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  )
}
