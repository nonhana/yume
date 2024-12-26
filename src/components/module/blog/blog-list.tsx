'use client'

import type { Post } from '@/types/post'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { BlogCard } from './blog-card'

const POSTS_PER_PAGE = 5

export function BlogList({ posts }: { posts: Post[] }) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = posts.slice(startIndex, endIndex)

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {currentPosts.map(post => (
          <BlogCard
            key={post.slug}
            post={post}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="size-5" />
        </Button>

        <span className="text-muted-foreground flex items-center text-sm">
          {currentPage}
          {' '}
          /
          {totalPages}
        </span>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  )
}
