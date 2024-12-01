'use client'

import { badgeVariants } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

interface TagProps {
  tag: string
  current?: boolean
  count?: number
}
export function Tag({ tag, current, count }: TagProps) {
  const router = useRouter()
  return (
    <Button
      className={badgeVariants({
        variant: current ? 'default' : 'secondary',
        className: 'no-underline rounded-md',
      })}
      onClick={() => {
        router.push(`/tags/${tag}`)
      }}
    >
      {tag}
      {count ? `(${count})` : null}
    </Button>
  )
}
