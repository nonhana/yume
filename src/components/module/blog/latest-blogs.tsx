import { H1Link } from '@/components/common/link/h1-link'
import { getLatestPosts } from '@/components/mdx/utils'
import { BlogItem } from './blog-item'

export async function LatestBlogs() {
  const latestBlogs = await getLatestPosts('blog')
  return (
    <div>
      <H1Link href="/blog">最近的博客</H1Link>
      <div className="flex flex-col">
        {latestBlogs.map(blog => (
          <BlogItem key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  )
}
