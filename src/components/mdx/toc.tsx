'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // 获取所有标题元素
    const elements = Array.from(document.querySelectorAll('h2, h3, h4'))
    const items: TocItem[] = elements.map(element => ({
      id: element.id,
      text: element.textContent || '',
      level: Number(element.tagName.charAt(1)),
    }))
    setHeadings(items)

    // 监听滚动事件来更新活动标题
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' },
    )

    elements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  if (headings.length === 0)
    return null

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto">
      <h2 className="mb-4 text-lg font-semibold">table of contents</h2>
      <ul className="space-y-2 text-sm">
        {headings.map(heading => (
          <motion.li
            key={heading.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              marginLeft: `${(heading.level - 2) * 16}px`,
            }}
          >
            <a
              href={`#${heading.id}`}
              className={`block transition-colors hover:text-green-500
                ${activeId === heading.id
            ? 'text-green-500'
            : 'text-neutral-600 dark:text-neutral-400'
          }`}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(`#${heading.id}`)?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}
            >
              {heading.text}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}
