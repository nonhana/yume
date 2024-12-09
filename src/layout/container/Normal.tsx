export function Normal({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background relative">
      <div className="container mx-auto max-w-4xl px-4 py-20">{children}</div>
    </div>
  )
}
