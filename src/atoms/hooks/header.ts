import { isCompactAtom, isNormalAtom } from '@/atoms/header'
import { useAtom } from 'jotai'

export function useIsCompact() {
  return useAtom(isCompactAtom)
}

export function useIsNormal() {
  return useAtom(isNormalAtom)
}
