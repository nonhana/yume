import type { IPostMetaData } from "@/types/post"

export function PostHeader({ metadata }: { metadata: IPostMetaData }) {
  return (
    <div className='flex-center flex-col space-y-2 text-center'>
      <h1 className='text-2xl font-extrabold tracking-tight xl:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
        {metadata.title}
      </h1>

      <p className='text-muted-foreground text-base font-medium'>
        发布于 {metadata.publishedAt}
      </p>

      <p className='text-muted-foreground max-w-2xl mx-auto p-4 leading-relaxed text-base italic border-l-2 border-primary/30'>
        {metadata.summary}
      </p>
    </div>
  )
}
