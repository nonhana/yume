export function BgProvider({ children }: { children: React.ReactNode }) {
  // for mix-blend-difference
  return <div className="bg-blue-50">{children}</div>
}
