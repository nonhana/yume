import { atom } from 'jotai'

export type Header = 'hidden' | 'compact' | 'normal'

interface Position {
  left: number
  width: number
  opacity: number
}

export const headerAtom = atom<Header>('normal')

export const positionAtom = atom<Position>({
  left: 0,
  width: 0,
  opacity: 0,
})

export const isCompactAtom = atom(
  get => get(headerAtom) === 'compact',
)

export const isNormalAtom = atom(
  get => get(headerAtom) === 'normal',
)
