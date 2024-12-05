import AvatarStack from '@/components/AvatarStack'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Group } from '@/services/group.model'
import { LuMoreHorizontal } from 'react-icons/lu'

export function GroupWrapper({
  children,
  loading,
}: Readonly<{
  children?: React.ReactNode
  loading: boolean
}>) {
  return (
    <ul className="flex w-full flex-col gap-4">
      <li className="flex items-center gap-4 px-4 py-0">
        <h1 className="flex-[0.6] text-sm lg:flex-[0.3]">Name</h1>
        <h1 className="hidden flex-[0.3] text-sm lg:block">Members</h1>
        <h1 className="hidden flex-[0.2] text-sm lg:block">Created</h1>
        <h1 className="flex-[0.4] text-sm lg:flex-[0.2]">Total</h1>
      </li>
      {loading ? Array.from({ length: 3 }).map((_, i) => <GroupRowPlaceholder key={i} />) : children}
    </ul>
  )
}

export function GroupRow({ name, members, createdAt, totalSpent }: Group) {
  return (
    <li className="flex items-center gap-4 rounded-xl border border-border p-4">
      <div className="flex-[0.6] overflow-hidden lg:flex-[0.3]">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">{name}</p>
        <p className="block text-xs lg:hidden">
          {members.length} members • {createdAt}
        </p>
      </div>
      <div className="hidden flex-[0.3] lg:block">
        <AvatarStack
          items={members.map((m) => ({
            imageSrc: m.imageUrl,
            initial: m.firstName[0] + m.lastName[0],
            bgColor: m.profileBgColor,
          }))}
        />
      </div>
      <p className="hidden flex-[0.2] lg:block">{createdAt}</p>
      <div className="flex flex-[0.4] items-center justify-between lg:flex-[0.2]">
        <p>{totalSpent}</p>
        <Button variant="ghost" size="icon">
          <LuMoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </li>
  )
}

function GroupRowPlaceholder() {
  return (
    <li className="flex items-center gap-4 rounded-xl border border-border p-4">
      <div className="flex-[0.6] overflow-hidden lg:flex-[0.3]">
        <div className="h-4 w-3/5 animate-pulse rounded-lg bg-muted-foreground/15" />
        <div className="mt-2 block h-3 w-2/5 animate-pulse rounded-lg bg-muted-foreground/15 lg:hidden" />
      </div>
      <div className="hidden flex-[0.3] items-center lg:flex">
        {Array.from({ length: 3 }).map((_, i) => (
          <Avatar key={i} className="-ml-2 h-8 w-8 border bg-background first:ml-0">
            <AvatarFallback className="animate-pulse bg-muted-foreground/15" />
          </Avatar>
        ))}
      </div>
      <div className="hidden flex-[0.2] lg:block">
        <div className="h-4 w-3/5 animate-pulse rounded-lg bg-muted-foreground/15" />
      </div>
      <div className="flex flex-[0.4] items-center justify-between lg:flex-[0.2]">
        <div className="h-4 w-2/5 animate-pulse rounded-lg bg-muted-foreground/15" />
      </div>
    </li>
  )
}
