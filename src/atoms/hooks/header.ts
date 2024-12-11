import { isCompactAtom } from '@/atoms/header'
import { useAtom } from 'jotai'

export function useIsCompact() {
  return useAtom(isCompactAtom)
}
