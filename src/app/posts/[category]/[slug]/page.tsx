import { CustomMDX } from '@/components/mdx/mdx'
import { getAllPosts } from '@/components/mdx/utils'
import { BlogMetadata } from '@/components/module/post/blog-metadata'
import { TableOfContents } from '@/components/toc/toc'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map(post => ({
    slug: post.slug,
  }))
}

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
    <div className="bg-background grid grid-cols-[1fr_250px] gap-10">
      <article className="prose dark:prose-invert">
        <BlogMetadata metadata={post.metadata} />
        <div className="flex flex-col">
        </div>
        <CustomMDX source={post.content} />
      </article>
      <TableOfContents />
    </div>
  )
}
