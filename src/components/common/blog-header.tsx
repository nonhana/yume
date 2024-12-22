import { Button } from '@/components/ui/button'
import { Archive, ArrowRight } from 'lucide-react'

export function BlogHeader() {
  return (
    <div className="mb-8">
      <h1 className="text-foreground mb-4 text-3xl font-bold">
        Blog
      </h1>
      <div className="flex-between text-muted-foreground text-sm">
        <Button className="group">
          <Archive className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          Archive
          <ArrowRight
            className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  )
}
