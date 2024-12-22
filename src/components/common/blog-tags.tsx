import { Tag } from './tag'

export function BlogTags({ tags }: { tags?: string[] }) {
  return (tags && (
    <div className="flex gap-2">
      {tags.map(tag => (
        <Tag key={tag} name={tag} />
      ))}
    </div>
  ))
}
