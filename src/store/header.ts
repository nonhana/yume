import { atom } from 'jotai'

export const isScrollingAtom = atom(false)
export const isHeaderHoveringAtom = atom(false)
export const isShowFullNavAtom = atom(
  (get) => {
    if (get(isHeaderHoveringAtom))
      return true
    if (get(isScrollingAtom))
      return false
    return true
  },
)
