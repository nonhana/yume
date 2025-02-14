import type { SWRConfiguration } from 'swr'
import { SWRConfig } from 'swr'

export function SWRProvider({ children }: { children: React.ReactNode }) {
  const config: SWRConfiguration = {
    fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
  }

  return (
    <SWRConfig
      value={config}
    >
      {children}
    </SWRConfig>
  )
}
