'use client'

import type { PropsWithCC } from '@/types'
import { cn } from '@/lib/utils'
import { type ChangeEvent, useRef } from 'react'
import { Textarea } from '../textarea'

interface Props extends React.ComponentProps<'textarea'>, PropsWithCC {
  maxRows?: number
}

export function GrowTextarea({ maxRows, className, onChange, children, rows = 1, ...props }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target
    textarea.style.height = 'auto'

    const style = window.getComputedStyle(textarea)
    const borderHeight = Number.parseInt(style.borderTopWidth) + Number.parseInt(style.borderBottomWidth)
    const paddingHeight = Number.parseInt(style.paddingTop) + Number.parseInt(style.paddingBottom)

    const lineHeight = Number.parseInt(style.lineHeight)
    const maxHeight = maxRows ? lineHeight * maxRows + borderHeight + paddingHeight : Infinity

    const newHeight = Math.min(textarea.scrollHeight + borderHeight, maxHeight)

    textarea.style.height = `${newHeight}px`

    onChange?.(e)
  }

  return (
    <Textarea
      ref={textareaRef}
      rows={rows}
      onChange={handleInput}
      className={cn('min-h-[none] resize-none', className)}
      {...props}
    >
      {children}
    </Textarea>
  )
}
