'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useLenis } from 'lenis/react'
import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  const lenis = useLenis()

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
      { rootMargin: '-80px 0px -80% 0px' },
    )

    elements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  if (headings.length === 0)
    return null

  return (
    <nav className="sticky top-32 ml-10 max-h-[calc(100vh-6rem)] overflow-auto">
      <h2 className="mb-4 text-lg font-bold">Table Of Contents</h2>
      <ul className="text-md space-y-2">
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
              className={cn(
                'transition-colors hover:text-accent',
                activeId === heading.id && 'text-accent',
                activeId !== heading.id && 'text-foreground',
              )}
              onClick={(e) => {
                e.preventDefault()
                const element: HTMLElement | null = document.querySelector(`#${heading.id}`)
                if (element) {
                  lenis?.scrollTo(element, { offset: -80 })
                }
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
