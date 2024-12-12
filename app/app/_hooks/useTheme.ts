import { AppTheme, THEME } from '@/lib/constants'
import { appThemeAtom } from '@/repositories/layout'
import { useAtomValue } from 'jotai'
import { useCallback, useEffect, useState } from 'react'

export default function useTheme() {
  const appTheme = useAtomValue(appThemeAtom)

  const [isDark, setisDark] = useState(false)

  useEffect(() => {
    if (appTheme === THEME.SYSTEM) {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      handleChangeThemeClass(isDark ? THEME.DARK : THEME.DARK)
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', catchThemeChanges)
    } else {
      handleChangeThemeClass(appTheme)
    }

    function catchThemeChanges(event: MediaQueryListEvent) {
      const newTheme = event.matches ? THEME.DARK : THEME.DARK
      handleChangeThemeClass(newTheme)
    }

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', catchThemeChanges)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appTheme])

  const handleChangeThemeClass = useCallback((newTheme: AppTheme) => {
    document.documentElement.classList.remove(THEME.DARK)
    document.documentElement.classList.remove(THEME.LIGHT)
    document.documentElement.classList.add(newTheme)
    setisDark(newTheme === THEME.DARK)
  }, [])

  return {
    isDark,
  }
}
