import { AppThemeType, THEME } from '@/lib/constants'
import { appThemeAtom } from '@/repositories/layout'
import { useAtomValue } from 'jotai'
import { useCallback, useEffect } from 'react'

export default function useTheme() {
  const appTheme = useAtomValue(appThemeAtom)

  useEffect(() => {
    if (appTheme !== THEME.SYSTEM) handleChangeThemeClass(appTheme)

    if (appTheme === THEME.SYSTEM) {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      handleChangeThemeClass(isDark ? THEME.DARK : THEME.LIGHT)
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', catchThemeChanges)
    }

    function catchThemeChanges(event: MediaQueryListEvent) {
      const newTheme = event.matches ? THEME.DARK : THEME.LIGHT
      handleChangeThemeClass(newTheme)
    }

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', catchThemeChanges)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appTheme])

  const handleChangeThemeClass = useCallback((newTheme: AppThemeType) => {
    document.documentElement.classList.remove(THEME.DARK)
    document.documentElement.classList.remove(THEME.LIGHT)
    document.documentElement.classList.add(newTheme)
  }, [])
}
