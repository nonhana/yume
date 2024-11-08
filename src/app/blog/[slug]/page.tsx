import { CustomMDX } from '@/components/mdx/mdx'
import { getAllPosts } from '@/components/mdx/utils'
import { notFound } from 'next/navigation'
import { BlogTitle } from './components/blog-title'
import { Tags } from './components/tags'

export default async function Page(
  props: {
    params: Promise<{ slug: string }>
  },
) {
  const params = await props.params
  const post = getAllPosts().find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="grid grid-cols-2">
      <article className="prose dark:prose-invert">
        <BlogTitle metadata={post.metadata} />
        <CustomMDX source={post.content} />
      </article>

      <div className="flex flex-col">
        <Tags tags={post.metadata.tags || []} />
      </div>
    </div>
  )
}
