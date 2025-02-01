import { NormalContainer } from '@/layout/container/Normal'
import { Activities } from './activities'
import { Drafts } from './drafts'

export function DraftsActGrid() {
  return (
    <NormalContainer className="grid grid-cols-1 gap-16 md:grid-cols-2">
      <Drafts />
      <Activities />
    </NormalContainer>
  )
}
