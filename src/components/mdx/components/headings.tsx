export function H1({ children, id }: { children: React.ReactNode, id?: string }) {
  return (
    <h1 id={id} className="group flex whitespace-pre-wrap">
      <span className="mr-3">{children}</span>
      <a
        href={`#${id}`}
        className="anchor-link opacity-0 group-hover:opacity-100"
        aria-label="标题链接"
      >
      </a>
    </h1>
  )
}
export function H2({ children, id }: { children: React.ReactNode, id?: string }) {
  return (
    <h2 id={id} className="group flex whitespace-pre-wrap">
      <span className="mr-3">{children}</span>
      <a
        href={`#${id}`}
        className="anchor-link opacity-0 group-hover:opacity-100"
        aria-label="标题链接"
      >
      </a>
    </h2>
  )
}
