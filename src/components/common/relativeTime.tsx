import { relativeTimeFromNow } from '@/lib/formate-date'

export function RelativeTime({ date }: { date: string }) {
  return <time className="relative-time">{relativeTimeFromNow(date)}</time>
}
