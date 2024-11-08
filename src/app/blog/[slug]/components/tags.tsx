import { Tag } from '@/components/common/tag'

export function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex space-x-3">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  )
}
