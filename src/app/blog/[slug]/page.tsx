import { CustomMDX } from '@/components/mdx/mdx'
import { TableOfContents } from '@/components/mdx/toc'
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
    <div className="bg-background grid grid-cols-[1fr_250px] gap-8">
      <div className="px-20 pt-16">
        <article className="prose dark:prose-invert">
          <BlogTitle metadata={post.metadata} />

          <div className="flex flex-col">
            <Tags tags={post.metadata.tags || []} />
          </div>
          <CustomMDX source={post.content} />
        </article>
      </div>

      <div className="px-4 pt-16">
        <TableOfContents />
      </div>
    </div>
  )
}
