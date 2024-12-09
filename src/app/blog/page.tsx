import { getAllPosts, getAllTags } from '@/components/mdx/utils'
import { BlogWall } from './components/blog-wall'
import { Tags } from './components/tags'

export default async function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold">Blog</h1>
          <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
            <div>
              Page 1 -
              {posts.length}
              {' '}
              posts
            </div>
            <a href="/archive" className="hover:text-neutral-900 dark:hover:text-neutral-200">
              archive →
            </a>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex-1">
            <BlogWall posts={posts} />
          </div>

          <div className="w-64 shrink-0">
            <div className="sticky top-24">
              <h2 className="mb-4 font-medium">Tags</h2>
              <Tags tags={tags} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
