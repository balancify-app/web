import { LOCALSTORAGE_KEYS } from '@/lib/constants'
import { atomWithStorage } from 'jotai/utils'

export const desktopNavToggleAtom = atomWithStorage<boolean>(LOCALSTORAGE_KEYS.DESKTOP_NAV_TOGGLE, false)
