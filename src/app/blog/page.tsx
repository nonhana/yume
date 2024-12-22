import { Tags } from '@/components/common/tags'
import { getAllPosts } from '@/components/mdx/utils'
import { BlogHeader } from '../../components/common/blog-header'
import { BlogList } from '../../components/common/blog-list'

export default async function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <BlogHeader />
      <div className="grid grid-cols-2 gap-8">
        <BlogList posts={posts} />
        <Tags />
      </div>
    </>
  )
}
