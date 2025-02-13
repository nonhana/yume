import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import React from "react"
import { createHeading } from "./components/elements/heading"
import rehypePrettyCode, {
  type Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code"
import Pre from "./components/elements/pre"

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  pre: Pre,
}

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: "ayu-dark",
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
      }}
      {...props}
    />
  )
}
