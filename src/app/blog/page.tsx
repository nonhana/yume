import { H1 } from '@/components/common/headings'
import { getAllPosts } from '@/components/mdx/utils'
import { BlogList } from '@/components/module/blog/blog-list'
import { Tags } from '@/components/module/tag/tags'

export default async function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      <H1>博客</H1>
      <div className="mt-8 grid grid-cols-[3fr,1fr] gap-x-10">
        <main>
          <BlogList posts={posts} />
        </main>
        <aside>
          <Tags />
        </aside>
      </div>
    </div>
  )
}
