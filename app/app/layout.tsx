'use client'

import useAppLayout from './_hooks/useAppLayout'
import { TooltipProvider } from '@/components/ui/tooltip'
import DesktopNav from './_components/DesktopNav'
import MobileNav from './_components/MobileNav'
import NotificationBar from './_components/NotificationBar'
import Splash from './_components/Splash'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isCollapsed, appLinks, userLoaded, user, isInitialLoading, pathname, setIsCollapsed } = useAppLayout()

  return (
    <>
      <TooltipProvider delayDuration={0}>
        <div className="flex h-svh max-h-svh gap-6 overflow-hidden">
          <DesktopNav
            appLinks={appLinks}
            isCollapsed={isCollapsed}
            pathname={pathname}
            setIsCollapsed={setIsCollapsed}
            user={user}
            userLoaded={userLoaded}
          />
          <main className="relative flex-1 overflow-auto">
            <NotificationBar />
            {children}
            <MobileNav appLinks={appLinks} pathname={pathname} />
          </main>
        </div>
      </TooltipProvider>
      <Splash show={isInitialLoading} />
    </>
  )
}
