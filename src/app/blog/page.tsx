import { getAllPosts, getAllTags } from '@/components/mdx/utils'
import { Button } from '@/components/ui/button'
import { Archive, ArrowRight } from 'lucide-react'
import { BlogWall } from './components/blog-wall'
import { Tags } from './components/tags'

export default async function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <div className="bg-background min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-foreground mb-4 text-3xl font-bold">Blog</h1>
          <div className="flex-between text-muted-foreground text-sm">
            <div>
              Page 1 -
              {posts.length}
              {' '}
              posts
            </div>
            <Button className="group">
              <Archive className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
              Archive
              <ArrowRight
                className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
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
