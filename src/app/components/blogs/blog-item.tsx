import type { Post } from '@/types/post'
import { BlogTags } from '@/components/common/blog-tags'
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
          <BlogTags tags={metadata.tags} />
        </div>
      </div>
    </Link>
  )
}
