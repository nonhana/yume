import type { Metadata } from 'next'
import { getAllPosts, getAllTags, getPostsByTagSlug, sortTagsByCount } from '@/components/mdx/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tag } from '../../../components/common/tag'

interface TagPageProps {
  params: Promise<{
    tag: string
  }>
}

const posts = getAllPosts()

// export async function generateMetadata(props: TagPageProps): Promise<Metadata> {
//   const params = await props.params
//   const { tag } = params
//   return {
//     title: tag,
//     description: `Posts on the topic of ${tag}`,
//   }
// }

export default async function TagPage(props: TagPageProps) {
  const params = await props.params
  const { tag } = params
  const title = tag.split('-').join(' ')

  const allPosts = getPostsByTagSlug(posts, tag)
  const displayPosts = allPosts.filter(post => post.metadata.published)
  const tags = getAllTags(posts)
  const sortedTags = sortTagsByCount(tags)

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-black capitalize lg:text-5xl">
            {title}
          </h1>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-12 gap-3">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          {displayPosts?.length > 0
            ? (
                <ul className="flex flex-col">
                  {displayPosts.map((post) => {
                    const { slug } = post
                    return (
                      <li key={slug}>
                        {post.metadata.title}
                      </li>
                    )
                  })}
                </ul>
              )
            : (
                <p>Nothing to see here yet</p>
              )}
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map(t => (
              <Tag tag={t} key={t} count={tags[t]} current={(t) === tag} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
