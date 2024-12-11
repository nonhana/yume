import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'
import Callout from './components/callout'
import { H1, H2 } from './components/headings'
import { OPTIONS } from './mdx-remote-options'

const components = {
  Callout: React.forwardRef((props: any, ref: any) => (
    <Callout ref={ref} {...props} />
  )),
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={OPTIONS}
    />
  )
}
