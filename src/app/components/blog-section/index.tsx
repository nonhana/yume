import { getLatestPosts } from '@/components/mdx/utils'
import { BlogAnimation } from './blog-animation'
import { BlogItem } from './blog-item'

export async function BlogSection() {
  const latestBlogs = await getLatestPosts('blog')
  return (
    <section className="bg-blue-100">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <BlogAnimation>
          <h1 className="mb-8 text-4xl font-bold">
            Latest Blogs
          </h1>
        </BlogAnimation>

        <div className="flex flex-col gap-y-8">
          {latestBlogs.map(blog => (
            <BlogAnimation key={blog.slug}>
              <BlogItem blog={blog} />
            </BlogAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
