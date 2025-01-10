import { appThemeAtom } from '@/repositories/layout'
import { useAtom } from 'jotai'

export default function useSettings() {
  const [appTheme, setAppTheme] = useAtom(appThemeAtom)

  return {
    appTheme,
    setAppTheme,
  }
}
