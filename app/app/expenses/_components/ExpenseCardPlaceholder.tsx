import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ExpenseCardPlaceholder() {
  return (
    <Card className="animate-pulse overflow-hidden shadow-none">
      <CardHeader className="flex-row items-center gap-4 space-y-0 border-b p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted-foreground/15" />
        <div className="flex flex-1 flex-col overflow-hidden">
          <CardTitle className="mb-2 h-3 w-3/5 rounded-lg bg-muted-foreground/15" />
          <CardDescription className="h-3 w-4/5 rounded-lg bg-muted-foreground/15" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <div className="h-3 w-16 rounded-lg bg-muted-foreground/15" />
          <div className="h-3 w-20 rounded-lg bg-muted-foreground/15" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-3 w-16 rounded-lg bg-muted-foreground/15" />
          <div className="flex items-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <Avatar key={i} className="-ml-2 h-6 w-6 border bg-background first:ml-0">
                <AvatarFallback className="animate-pulse bg-muted-foreground/15" />
              </Avatar>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-3 w-16 rounded-lg bg-muted-foreground/15" />
          <div className="h-6 w-14 rounded-lg bg-muted-foreground/15" />
        </div>
      </CardContent>
    </Card>
  )
}
