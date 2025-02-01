import { getLatestPosts } from '@/components/mdx/utils'
import { DraftItem } from './draft-item'
import { H1 } from './H1'
import { ReadMore } from './read-more'

export function Drafts() {
  const posts = getLatestPosts()
  return (
    <div className="flex flex-col gap-10">
      <div className="flex-between">
        <H1>Drafts</H1>
        <ReadMore link="/drafts" />
      </div>
      <div>
        {
          posts.map((post) => {
            return (
              <DraftItem post={post} key={post.slug} />
            )
          })
        }
      </div>
    </div>
  )
}
