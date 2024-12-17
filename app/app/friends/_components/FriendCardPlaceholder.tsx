import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

export default function FriendCardPlaceholder() {
  return (
    <Card className="shadow-none">
      <CardContent className="flex items-center gap-2 p-4">
        <Avatar>
          <AvatarFallback className="animate-pulse bg-muted-foreground/15" />
        </Avatar>
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-3 w-1/3 animate-pulse rounded-lg bg-muted-foreground/15" />
          <div className="h-3 w-2/3 animate-pulse rounded-lg bg-muted-foreground/15" />
        </div>
      </CardContent>
    </Card>
  )
}
