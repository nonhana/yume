import type { IPostMetaData } from '@/types/post'

export function BlogMetadata({ metadata }: { metadata: IPostMetaData }) {
  return (
    <div>
      <p>
        {metadata.title}
      </p>

      <p className="text-muted-foreground">
        {metadata.publishedAt}
      </p>

      <p className="text-muted-foreground p-1 leading-relaxed">
        {metadata.summary}
      </p>
    </div>
  )
}
