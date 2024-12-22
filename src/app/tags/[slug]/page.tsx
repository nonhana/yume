import { BlogList } from '@/components/common/blog-list'
import { getAllPosts, getPostsByTagSlug } from '@/components/mdx/utils'
import { notFound } from 'next/navigation'

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params

  const posts = getAllPosts()
  const filteredPosts = getPostsByTagSlug(posts, params.slug)

  if (!filteredPosts.length) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-foreground mb-4 text-3xl font-bold">
        Blog-
        <span>
          #
          {params.slug}
        </span>
      </h1>
      <BlogList posts={filteredPosts} />
    </div>
  )
}
