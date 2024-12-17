import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function ExpenseCardPlaceholder() {
  return (
    <Card className="overflow-hidden shadow-none">
      <CardHeader className="flex-row items-center gap-4 space-y-0 border-b p-4">
        <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-lg bg-muted-foreground/15" />
        <div className="flex flex-1 flex-col overflow-hidden">
          <CardTitle className="mb-2 h-3 w-3/5 animate-pulse rounded-lg bg-muted-foreground/15" />
          <CardDescription className="h-3 w-4/5 animate-pulse rounded-lg bg-muted-foreground/15" />
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <Avatar key={i} className="-ml-2 h-8 w-8 border bg-background first:ml-0">
              <AvatarFallback className="animate-pulse bg-muted-foreground/15" />
            </Avatar>
          ))}
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="h-3 w-14 animate-pulse rounded-lg bg-muted-foreground/15" />
          <div className="h-3 w-12 animate-pulse rounded-lg bg-muted-foreground/15" />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0 ">
        <div className="h-3 w-14 animate-pulse rounded-lg bg-muted-foreground/15" />
        <Button disabled variant="secondary" size="sm">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
