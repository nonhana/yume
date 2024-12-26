import { relativeTimeFromNow } from '@/lib/formate-date'
import { cn } from '@/lib/utils'

interface RelativeTimeProps {
  date: string
  className?: string
}
export function RelativeTime({ date, className }: RelativeTimeProps) {
  return (
    <time className={cn('relative-time', className)} dateTime={date}>
      {relativeTimeFromNow(date)}
    </time>
  )
}
