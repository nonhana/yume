import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'
import Callout from './components/callout'
import { OPTIONS } from './mdx-remote-options'

const components = {
  Callout: React.forwardRef((props: any, ref: any) => (
    <Callout ref={ref} {...props} />
  )),
}

export function CustomMDX(props: any) {
  return (
    <>
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
        options={OPTIONS}
      />
    </>
  )
}
