export function BgProvider({ children }: { children: React.ReactNode }) {
  // for mix-blend-difference
  return <div className="bg-white">{children}</div>
}
