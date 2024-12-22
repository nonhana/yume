import type { IPostMetaData } from '@/types/post'

export function BlogTitle({ metadata }: { metadata: IPostMetaData }) {
  return (
    <div className="my-4">
      <h1 className="title text-foreground mt-4 text-2xl font-semibold tracking-tighter">
        {metadata.title}
      </h1>

      <p className="text-muted-foreground my-2 text-sm">
        {metadata.publishedAt}
      </p>

      <p className="mt-4 rounded-md p-4 text-base leading-relaxed">
        {metadata.summary}
      </p>
    </div>
  )
}
