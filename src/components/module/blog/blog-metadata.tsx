import type { IPostMetaData } from '@/types/post'
import { H1 } from '../../common/headings'

export function BlogMetadata({ metadata }: { metadata: IPostMetaData }) {
  return (
    <div>
      <H1>
        {metadata.title}
      </H1>

      <p className="text-muted-foreground">
        {metadata.publishedAt}
      </p>

      <p className="text-muted-foreground p-1 leading-relaxed">
        {metadata.summary}
      </p>
    </div>
  )
}
