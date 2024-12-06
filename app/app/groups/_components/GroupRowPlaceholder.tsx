import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function GroupRowPlaceholder() {
  return (
    <li className="flex items-center gap-4 rounded-xl border border-border p-4">
      <div className="flex-[0.6] overflow-hidden lg:flex-[0.3]">
        <div className="h-3 w-3/5 animate-pulse rounded-lg bg-muted-foreground/15" />
        <div className="mt-2 block h-3 w-2/5 animate-pulse rounded-lg bg-muted-foreground/15 lg:hidden" />
      </div>
      <div className="hidden flex-[0.3] items-center lg:flex">
        {Array.from({ length: 3 }, (_, i) => (
          <Avatar key={i} className="-ml-2 h-8 w-8 border bg-background first:ml-0">
            <AvatarFallback className="animate-pulse bg-muted-foreground/15" />
          </Avatar>
        ))}
      </div>
      <div className="hidden flex-[0.2] lg:block">
        <div className="h-3 w-3/5 animate-pulse rounded-lg bg-muted-foreground/15" />
      </div>
      <div className="flex flex-[0.4] items-center justify-between lg:flex-[0.2]">
        <div className="h-3 w-2/5 animate-pulse rounded-lg bg-muted-foreground/15" />
      </div>
    </li>
  )
}
