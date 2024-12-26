import { atom } from 'jotai'

interface Position {
  left: number
  width: number
  opacity: number
}

export const headerAtom = atom<boolean>(true)

// hover effect on nav item
export const positionAtom = atom<Position>({
  left: 0,
  width: 0,
  opacity: 0,
})
