'use client'

import type { Post } from '@/types/post'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BlogTags } from './blog-tags'

interface Props {
  post: Post
  className?: string
}

export function BlogCard({ post, className }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={className}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-xl p-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="mb-2 text-xl font-bold">{post.metadata.title}</h2>
          <p className="text-muted-foreground mb-4 text-sm">{post.metadata.publishedAt}</p>
          <p className="text-muted-foreground mb-2 line-clamp-2 text-sm">{post.metadata.summary}</p>

          <BlogTags tags={post.metadata.tags} />
        </motion.div>
      </motion.div>
    </Link>
  )
}
