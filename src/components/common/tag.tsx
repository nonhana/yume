'use client'

import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface TagProps {
  tag: string
  current?: boolean
  count?: number
}

export function Tag({ tag, current, count }: TagProps) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(`/tags/${tag}`)}
      className={cn(
        'text-sm px-2 py-0.5 rounded transition-colors',
        'hover:bg-neutral-100 dark:hover:bg-neutral-800',
        'text-neutral-600 dark:text-neutral-400',
        'hover:text-neutral-900 dark:hover:text-neutral-200',
        current && 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200',
      )}
    >
      {tag}
      {count !== undefined && (
        <span className="ml-1 text-neutral-400 dark:text-neutral-600">
          {count}
        </span>
      )}
    </button>
  )
}
