'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ROUTES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import useAppLayout from './_hooks/useAppLayout'
import { usePathname } from 'next/navigation'
import { Settings } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { isCollapsed, isLoaded, setIsCollapsed, user, appLinks } = useAppLayout()

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex w-full gap-6 overflow-hidden">
        <div
          className={cn('relative flex flex-col border-r transition-all duration-300', {
            'w-[55px]': isCollapsed,
            'w-[250px]': !isCollapsed,
          })}
        >
          <div className="overflow-hidden p-2">
            <h1 className={cn('mb-6 text-lg font-bold', { hidden: isCollapsed })}>Balancify</h1>
            <div className="flex items-center gap-2">
              <Avatar className={cn('h-14 w-14 border', { 'animate-pulse': !isLoaded, 'h-9 w-9': isCollapsed })}>
                <AvatarImage src={user?.imageUrl} />
                <AvatarFallback>
                  {user?.firstName?.[0]}
                  {user?.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <div className={cn('block', { hidden: isCollapsed })}>
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
          <Separator className="my-2" />
          <div className="flex flex-1 flex-col justify-between overflow-hidden p-2">
            <div className={cn('flex flex-col gap-2', { 'items-center': isCollapsed })}>
              {appLinks.map((al) => (
                <Tooltip key={al.title} open={isCollapsed ? undefined : false}>
                  <TooltipTrigger asChild>
                    <Link
                      href={al.link}
                      className={buttonVariants({
                        variant: pathname === al.link ? 'default' : 'ghost',
                        size: isCollapsed ? 'icon' : 'sm',
                        className: 'gap-4 whitespace-nowrap',
                      })}
                      style={{ justifyContent: isCollapsed ? 'center' : 'flex-start' }}
                    >
                      <al.icon className="h-4 w-4 flex-shrink-0" />{' '}
                      <span className={cn({ hidden: isCollapsed })}>{al.title}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{al.title}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            <Tooltip open={isCollapsed ? undefined : false}>
              <TooltipTrigger asChild>
                <Link
                  href={ROUTES.APP.SETTINGS}
                  className={buttonVariants({
                    variant: pathname === ROUTES.APP.SETTINGS ? 'default' : 'ghost',
                    size: isCollapsed ? 'icon' : 'sm',
                    className: 'gap-4 whitespace-nowrap',
                  })}
                  style={{ justifyContent: isCollapsed ? 'center' : 'flex-start' }}
                >
                  <Settings className="h-4 w-4 flex-shrink-0" />
                  <span className={cn({ hidden: isCollapsed })}>Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className=" group absolute right-0 top-1/2 z-10 flex h-14 w-8 -translate-y-1/2 translate-x-full cursor-pointer items-center justify-center"
                onClick={() => setIsCollapsed((p) => !p)}
              >
                <div className="relative h-6 w-1 translate-y-1">
                  <span
                    className={cn(
                      'absolute left-0 top-0 inline-block h-3 w-full origin-top rotate-0 rounded-full bg-border transition-all duration-300 group-hover:bg-gray-500',
                      { 'group-hover:-rotate-[20deg]': isCollapsed, 'group-hover:rotate-[20deg]': !isCollapsed },
                    )}
                  ></span>
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 inline-block h-3 w-full origin-bottom -translate-y-1 rotate-0 rounded-full bg-border transition-all duration-300 group-hover:bg-gray-500',
                      { 'group-hover:rotate-[20deg]': isCollapsed, 'group-hover:-rotate-[20deg]': !isCollapsed },
                    )}
                  ></span>
                </div>
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{isCollapsed ? 'Open' : 'Close'} sidebar</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="relative w-full overflow-auto">{children}</div>
      </div>
    </TooltipProvider>
  )
}
