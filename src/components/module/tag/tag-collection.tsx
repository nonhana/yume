import { getAllTags } from '../mdx/utils'
import { Tag } from '../module/tag/tag'

export function TagCollection() {
  const tags = getAllTags()
  const maxCount = tags.sort((a, b) => b.count - a.count)[0].count

  const getSize = (count: number) => {
    const mapSize = (count: number) => {
      switch (count) {
        case 1:
          return 'sm'
        case 2:
          return 'md'
        case 3:
          return 'lg'
        default:
          return 'sm'
      }
    }
    return mapSize(1 + (count / maxCount) * 2)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags
        .map(({ name, count }) => (
          <Tag name={name} count={count} key={name} size={getSize(count)} />
        ))}
    </div>
  )
}
