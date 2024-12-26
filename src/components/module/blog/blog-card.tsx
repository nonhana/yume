'use client'

import type { PropsWithCC } from '@/types'
import type { Post } from '@/types/post'
import Image from 'next/image'
import Link from 'next/link'
import { BlogTags } from './blog-tags'

interface BlogCardProps extends PropsWithCC {
  post: Post
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <div className={`hover:bg-card group rounded-lg backdrop-blur-sm transition-all ${className}`}>
      <div className="flex-center gap-6 p-4">
        <div className="flex-1">
          <Link href={`/blog/${post.slug}`}>
            <div className="mb-2">
              <h3 className="text-foreground/90 group-hover:text-foreground line-clamp-2 text-xl font-semibold transition-colors">
                {post.metadata.title}
              </h3>
              <p className="text-muted-foreground mt-1 text-sm">
                {post.metadata.publishedAt}
              </p>
            </div>
            <div className="mt-3">
              <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                {post.metadata.summary}
              </p>
            </div>
          </Link>
          <BlogTags tags={post.metadata.tags} />
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="relative h-[135px] w-[240px] shrink-0 overflow-hidden rounded-lg  transition-transform group-hover:shadow-lg"
        >
          <Image
            src={post.metadata.cover.replace('http://localhost:3000', '')}
            alt={post.metadata.title}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
    </div>
  )
}
