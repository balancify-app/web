'use client'

import useAppLayout from './_hooks/useAppLayout'
import { usePathname } from 'next/navigation'
import { TooltipProvider } from '@/components/ui/tooltip'
import DesktopNav from './_components/DesktopNav'
import MobileNav from './_components/MobileNav'
import NotificationBar from './_components/NotificationBar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { isCollapsed, setIsCollapsed, appLinks, userLoaded, user } = useAppLayout()

  return (
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
  )
}
