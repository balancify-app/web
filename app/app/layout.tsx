'use client'

import useAppLayout from './_hooks/useAppLayout'
import { usePathname } from 'next/navigation'
import { TooltipProvider } from '@/components/ui/tooltip'
import DesktopNav from './_components/DesktopNav'
import MobileNav from './_components/MobileNav'
import NotificationBar from './_components/NotificationBar'
import { useEffect, useState } from 'react'
import Splash from '@/components/Splash'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { isCollapsed, setIsCollapsed, appLinks, userLoaded, user } = useAppLayout()

  const [isServer, setIsServer] = useState(true)

  useEffect(() => {
    const timerId = setTimeout(() => setIsServer(false), 300)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <>
      <TooltipProvider delayDuration={0}>
        <div className="flex max-h-dvh min-h-dvh w-full gap-6 overflow-hidden">
          <DesktopNav
            appLinks={appLinks}
            isCollapsed={isCollapsed}
            pathname={pathname}
            setIsCollapsed={setIsCollapsed}
            user={user}
            userLoaded={userLoaded}
          />
          <main className="relative min-h-dvh w-full overflow-auto">
            <NotificationBar />
            {children}
            <MobileNav appLinks={appLinks} pathname={pathname} />
          </main>
        </div>
      </TooltipProvider>
      <Splash show={isServer} />
    </>
  )
}
