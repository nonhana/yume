import type { IPostMetaData } from '@/components/mdx/utils'

export function BlogTitle({ metadata }: { metadata: IPostMetaData }) {
  return (
    <div className="my-4">
      <h1 className="title mt-4 text-2xl font-semibold tracking-tighter">
        {metadata.title}
      </h1>

      <p className="my-2 text-sm text-neutral-600 dark:text-neutral-400">
        {metadata.publishedAt}
      </p>

      <p className="mt-4 rounded-md bg-neutral-100 p-4 text-base leading-relaxed text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
        {metadata.summary}
      </p>
    </div>
  )
}
