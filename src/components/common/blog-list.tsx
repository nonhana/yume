import type { Post } from '@/types/post'
import { BlogCard } from './blog-card'

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-6">
      {posts.map(post => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
