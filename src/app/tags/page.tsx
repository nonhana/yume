import { Tag } from '@/components/common/tag'
import { getAllTags } from '@/components/mdx/utils'

export default function TagsPage() {
  const tags = getAllTags()

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold">Tags</h1>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {Object.keys(tags).length}
            {' '}
            tags in total
          </div>
        </div>

        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-3">
            {Object.entries(tags)
              .sort(([, a], [, b]) => b - a)
              .map(([tag, count]) => (
                <Tag key={tag} tag={tag} count={count} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
