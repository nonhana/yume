import type { Tags as TagsType } from '@/types/post'
import { Tag } from '@/components/common/tag'
import Link from 'next/link'

export function Tags({ tags }: { tags: TagsType }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {Object.entries(tags).map(([tag, count]) => (
          <Tag key={tag} tag={tag} count={count} />
        ))}
      </div>
      <Link
        href="/tags"
        className="inline-flex items-center text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
      >
        view all →
      </Link>
    </div>
  )
}
