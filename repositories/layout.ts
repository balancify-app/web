import { AppTheme, LOCALSTORAGE_KEYS, THEME } from '@/lib/constants'
import { atomWithStorage } from 'jotai/utils'

export const desktopNavToggleAtom = atomWithStorage<boolean>(LOCALSTORAGE_KEYS.DESKTOP_NAV_TOGGLE, false)
export const appThemeAtom = atomWithStorage<AppTheme>(LOCALSTORAGE_KEYS.APP_THEME, THEME.LIGHT)
