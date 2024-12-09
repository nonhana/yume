'use client'

import type { Post } from '@/types/post'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
        className="rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="mb-2 text-xl font-bold">{post.metadata.title}</h2>
          <p className="mb-4 text-sm text-gray-400">{post.metadata.publishedAt}</p>
          <p className="line-clamp-2 text-sm text-gray-300">{post.metadata.summary}</p>

          {post.metadata.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.metadata.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </Link>
  )
}
