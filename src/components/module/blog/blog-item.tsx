import type { Post } from '@/types/post'
import { RelativeTime } from '@/components/common/relativeTime'
import Link from 'next/link'

interface BlogItemProps {
  blog: Post
}

export function BlogItem({ blog }: BlogItemProps) {
  const { metadata } = blog
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group flex w-fit items-center gap-4 py-2"
    >
      <span className="text-foreground/80 group-hover:text-foreground text-lg transition-colors">
        {metadata.title}
      </span>

      <RelativeTime
        date={metadata.publishedAt}
        className="text-muted-foreground/80 group-hover:text-foreground text-sm transition-colors"
      />
    </Link>
  )
}
