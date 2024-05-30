import { cn } from '@/lib/utils'
import { AppLinkType } from '../_hooks/useAppLayout'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { UserResource } from '@clerk/types'
import { Dispatch, SetStateAction } from 'react'

type DesktopNavProps = {
  isCollapsed: boolean
  appLinks: AppLinkType[]
  pathname: string
  userLoaded: boolean
  user: UserResource | null | undefined
  setIsCollapsed: Dispatch<SetStateAction<boolean>>
}

export default function DesktopNav({
  isCollapsed,
  appLinks,
  pathname,
  userLoaded,
  user,
  setIsCollapsed,
}: DesktopNavProps) {
  return (
    <nav
      className={cn(
        'relative hidden flex-shrink-0 flex-col  justify-between border-r p-2 transition-all duration-300 sm:flex',
        {
          'w-[55px]': isCollapsed,
          'w-[250px]': !isCollapsed,
        },
      )}
    >
      <div>
        <h1 className={cn('overflow-hidden whitespace-nowrap text-lg font-bold', { hidden: isCollapsed })}>
          Balancify <span className=" text-xs font-normal text-muted-foreground">v{process.env.version}</span>
        </h1>
        <h1 className={cn('hidden text-center text-lg font-bold', { block: isCollapsed })}>B</h1>
      </div>
      <div className={cn('flex flex-col gap-2 overflow-hidden', { 'items-center': isCollapsed })}>
        {appLinks.map(({ Icon, link, title }) => (
          <Tooltip key={title} open={isCollapsed ? undefined : false}>
            <TooltipTrigger asChild>
              <Link
                href={link}
                className={buttonVariants({
                  variant: pathname === link ? 'default' : 'ghost',
                  size: isCollapsed ? 'icon' : undefined,
                  className: 'gap-4 whitespace-nowrap',
                })}
                style={{ justifyContent: isCollapsed ? 'center' : 'flex-start' }}
              >
                <Icon className="h-4 w-4 flex-shrink-0" /> <span className={cn({ hidden: isCollapsed })}>{title}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      <div className="flex h-9 items-center gap-4">
        {userLoaded ? (
          <>
            <UserButton appearance={{ elements: { avatarBox: 'h-9 w-9 border' } }} />
            <h1
              className={cn('flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold', {
                hidden: isCollapsed,
              })}
            >
              {user?.firstName}
            </h1>
          </>
        ) : (
          <>
            <div className="h-9 w-9 animate-pulse rounded-full bg-border" />
            <div className={cn('h-4 flex-1 animate-pulse rounded-lg bg-border', { hidden: isCollapsed })} />
          </>
        )}
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
    </nav>
  )
}
