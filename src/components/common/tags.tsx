import { Tag } from '@/components/common/tag'
import { getAllTags } from '../mdx/utils'

export function Tags() {
  const tags = getAllTags()
  return (
    <div className="space-x-4">
      {tags.map(tag => (
        <Tag key={tag.name} count={tag.count} name={tag.name} />
      ))}
    </div>
  )
}
