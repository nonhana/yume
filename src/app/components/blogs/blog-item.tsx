import type { Post } from '@/types/post'
import { RelativeTime } from '@/components/common/relativeTime'
import { Tag } from '@/components/common/tag'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface BlogItemProps {
  blog: Post
}

export function BlogItem({ blog }: BlogItemProps) {
  const { metadata } = blog
  return (
    <Link href={`/blog/${blog.slug}`} className="group/link">
      <div className="flex-between">
        <div className="flex items-center">
          <span className="mr-8 gap-1 text-xl">{metadata.title}</span>
          {metadata.tags?.map(tag => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <RelativeTime date={metadata.publishedAt} />
          <div className="relative flex items-center">
            <ChevronRight className="absolute size-4 translate-x-0 transition-all duration-300 ease-in-out group-hover/link:translate-x-1 group-hover/link:scale-0" />
            <ArrowRight className="absolute size-4 translate-x-1 scale-x-0  transition-all duration-300 ease-in-out group-hover/link:translate-x-0 group-hover/link:scale-x-100" />
          </div>
        </div>
      </div>
    </Link>
  )
}
