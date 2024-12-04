import { getLatestPosts } from '@/components/mdx/utils'
import Link from 'next/link'
import { BlogAnimation } from './blog-animation'
import { BlogItem } from './blog-item'

export async function BlogSection() {
  const latestBlogs = await getLatestPosts('blog')
  return (
    <section className=" h-screen">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <BlogAnimation>
          <div className="flex-between mb-20">
            <h1 className="text-4xl">
              <Link href="/blog" className="transition-colors hover:text-gray-400">
                Latest Blogs
              </Link>
            </h1>
            <div>read more</div>
          </div>
        </BlogAnimation>

        <div className="flex flex-col gap-y-6">
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
