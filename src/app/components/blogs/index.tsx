import { H1Link } from '@/components/common/link/h1-link'
import { SectionAnimation } from '@/components/common/section-animation'
import { getLatestPosts } from '@/components/mdx/utils'
import { BlogItem } from './blog-item'

export async function Blogs() {
  const latestBlogs = await getLatestPosts('blog')
  return (
    <SectionAnimation>
      <H1Link href="/blog">Latest Blogs</H1Link>
      <div className="flex flex-col gap-y-6">
        {latestBlogs.map(blog => (
          <BlogItem key={blog.slug} blog={blog} />
        ))}
      </div>
    </SectionAnimation>
  )
}
