'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'
import { ROUTES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import useAppLayout from './_hooks/useAppLayout'
import { usePathname } from 'next/navigation'
import { Settings } from 'lucide-react'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { isCollapsed, isLoaded, setIsCollapsed, user, appLinks } = useAppLayout()

  return (
    <ResizablePanelGroup direction="horizontal" className="max-h-dvh min-h-dvh">
      <ResizablePanel
        // collapsible={true}
        defaultSize={15}
        minSize={15}
        maxSize={15}
        collapsedSize={4}
        onCollapse={() => setIsCollapsed(true)}
        onExpand={() => setIsCollapsed(false)}
        className={cn('hidden sm:block', isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
      >
        <div className="flex h-full flex-col">
          <div className="p-4">
            <h1 className="mb-6 text-lg font-bold">Balancify</h1>
            <div className="flex items-center gap-2">
              <Avatar className={cn('h-14 w-14', { 'animate-pulse': !isLoaded })}>
                <AvatarImage src={user?.imageUrl} />
                <AvatarFallback>
                  {user?.firstName?.[0]}
                  {user?.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                {isLoaded ? (
                  <h1 className="whitespace-nowrap pl-3 text-sm">Hello, {user?.firstName || '--'}</h1>
                ) : (
                  <div className="ml-3 h-5 animate-pulse rounded-lg bg-gray-100" />
                )}
                <Button variant="ghost" size="sm" asChild>
                  <Link href={ROUTES.APP.PROFILE}>View account</Link>
                </Button>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex flex-1 flex-col justify-between p-4">
            <div className="flex flex-col gap-2">
              {appLinks.map((al) => (
                <Button
                  asChild
                  variant={pathname === al.link ? 'default' : 'ghost'}
                  className="justify-start gap-4"
                  size="sm"
                  key={al.title}
                >
                  <Link href={al.link}>
                    <al.icon className="h-4 w-4" /> {al.title}
                  </Link>
                </Button>
              ))}
            </div>
            <Button
              asChild
              variant={pathname === ROUTES.APP.SETTINGS ? 'default' : 'ghost'}
              size="sm"
              className="justify-start gap-4"
            >
              <Link href={ROUTES.APP.SETTINGS}>
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </Button>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle className="hidden sm:flex" withHandle />
      <ResizablePanel defaultSize={85}>
        <div className="relative h-full overflow-auto">{children}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
