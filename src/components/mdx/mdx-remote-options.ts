import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

export const OPTIONS = { mdxOptions: {
  remarkPlugins: [],
  rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark', transformers: [
    transformerCopyButton({
      visibility: 'always',
      feedbackDuration: 3_000,
    }),
  ] }], [
    rehypeAutoLinkHeadings,
    {
      behavior: 'wrap',
      properties: {
        className: ['subheading-anchor'],
        ariaLabel: 'Link to section',
      },
    },
  ]],
  format: 'mdx',
} }
