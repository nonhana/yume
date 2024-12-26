import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface TagProps {
  name: string
  count?: number
  current?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Tag({ name, current, count, size = 'sm' }: TagProps) {
  return (
    <Link href={`/tags/${name}`}>
      <Badge
        variant="secondary"
        className={cn(
          'cursor-pointer hover:bg-accent hover:text-accent-foreground',
          current && 'bg-accent text-accent-foreground',
          size === 'sm' && 'text-xs px-3 py-0.5',
          size === 'md' && 'text-sm px-5 py-1',
          size === 'lg' && 'text-md px-7 py-1.5',
        )}

      >
        {name}
        {count !== undefined && (
          <span className="text-muted-foreground ml-1">
            {count}
          </span>
        )}
      </Badge>
    </Link>
  )
}
