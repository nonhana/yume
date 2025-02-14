/* thanks for https://github.com/rehype-pretty/rehype-pretty-code/issues/235 */

'use client'

import type { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Check, Clipboard } from 'lucide-react'
import {

  useRef,
  useState,
} from 'react'

export default function Pre({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
  const [isCopied, setIsCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  const handleClickCopy = async () => {
    const code = preRef.current?.textContent

    if (code) {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    }
  }

  return (
    <pre ref={preRef} {...props} className="relative">
      <button
        disabled={isCopied}
        onClick={handleClickCopy}
        className="absolute right-4 size-6"
      >
        {isCopied ? <Check /> : <Clipboard />}
      </button>
      {children}
    </pre>
  )
}
