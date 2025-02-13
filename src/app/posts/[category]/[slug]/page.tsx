import { CustomMDX } from "@/components/mdx/mdx"
import { PostHeader } from "@/components/mdx/post-header"
import { getAllPosts } from "@/components/mdx/utils"
import { TableOfContents } from "@/components/toc/toc"
import { NormalContainer } from "@/layout/container/Normal"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map(post => ({
    slug: post.slug,
  }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const post = getAllPosts().find(post => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <NormalContainer className='bg-background flex gap-20 min-w-128 max-w-full px-10 lg:px-40'>
      <article className='prose dark:prose-invert p-10'>
        <PostHeader metadata={post.metadata} />
        <CustomMDX source={post.content} />
      </article>
      <div className='lg:block hidden'>
        <TableOfContents />
      </div>
    </NormalContainer>
  )
}
