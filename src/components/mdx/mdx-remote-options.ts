import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeAutoLinkHeadings, { type Options as RehypeAutoLinkHeadingsOptions } from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode, { type Options as RehypePrettyCodeOptions } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: 'ayu-dark',
  transformers: [
    transformerCopyButton({
      visibility: 'always',
      feedbackDuration: 3_000,
    }),
  ],
}

const rehypeAutoLinkHeadingsOptions: RehypeAutoLinkHeadingsOptions = {
  behavior: 'wrap',
  properties: {
    className: ['anchor'],
    ariaHidden: true,
    tabIndex: -1,
  },
  content: {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['anchor-icon'],
    },
    children: [{ type: 'text', value: '→' }],
  },
}

export const OPTIONS = { mdxOptions: {
  remarkPlugins: [
    remarkGfm,
    remarkMath,
  ],
  rehypePlugins: [
    [rehypePrettyCode, rehypePrettyCodeOptions],
    rehypeSlug,
    [rehypeAutoLinkHeadings, rehypeAutoLinkHeadingsOptions],
    rehypeKatex,
  ],
  format: 'mdx',
} }
