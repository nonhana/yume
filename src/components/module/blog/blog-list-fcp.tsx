import { Normal } from '@/layout/container/Normal'
import { LatestBlogs } from './latest-blogs'
import { MostLikedBlogs } from './most-liked-blogs'

export async function BlogListFCP() {
  return (
    <Normal>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <LatestBlogs />
        <MostLikedBlogs />
      </div>
    </Normal>
  )
}
