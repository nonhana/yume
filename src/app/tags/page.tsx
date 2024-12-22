import { TagCollection } from '@/components/common/tag-collection'

export default function Page() {
  return (
    <div>
      <h1 className="text-foreground mb-4 text-3xl font-bold">
        Tags
      </h1>
      <TagCollection />
    </div>
  )
}
