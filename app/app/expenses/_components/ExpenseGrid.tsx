/* eslint-disable @next/next/no-img-element */
import AvatarStack from '@/components/AvatarStack'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { Expense } from '@/services/expense.model'

export function ExpenseWrapper({
  children,
  loading,
}: Readonly<{
  children?: React.ReactNode
  loading: boolean
}>) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {loading ? Array.from({ length: 3 }).map((_, i) => <ExpenseCardPlaceholder key={i} />) : children}
    </div>
  )
}

export function ExpenseCard({
  name,
  createdAt,
  icon,
  iconBgColor,
  totalCost,
  totalOwe,
  members,
  hasSettled,
  createdByYou,
}: Expense) {
  return (
    <Card className="overflow-hidden shadow-none">
      <CardHeader className="flex-row items-center gap-4 space-y-0 border-b p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: iconBgColor }}>
          <img src={`/assets/svgs/icon-${icon}.svg`} className="h-6 w-6" alt="icon" />
        </div>
        <div className="flex flex-1 flex-col overflow-hidden">
          <CardTitle className="overflow-hidden text-ellipsis whitespace-nowrap pb-1 capitalize">{name}</CardTitle>
          <CardDescription className="overflow-hidden text-ellipsis whitespace-nowrap">{createdAt}</CardDescription>
        </div>
        <h1 className="text-lg font-bold text-foreground">${totalCost}</h1>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">You Owed:</p>
          <span className="text-sm font-bold text-foreground">${createdByYou ? 0 : totalOwe}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Share With:</p>
          <AvatarStack
            items={members.map((m) => ({
              imageSrc: m.imageUrl,
              initial: m.firstName[0] + m.lastName[0],
              bgColor: m.profileBgColor,
            }))}
            className="-ml-1 h-5 w-5 border-0 shadow-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Status:</p>
          {createdByYou ? (
            <Badge variant="outline">Paid By You</Badge>
          ) : (
            <Badge
              variant={hasSettled ? 'default' : 'secondary'}
              className={cn({ 'bg-green-400 text-white': hasSettled })}
            >
              {hasSettled ? 'Paid' : 'Unpaid'}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="gap-2 p-4 pt-0">
        <div className="flex-1">
          <Progress value={Math.round((totalOwe / totalCost) * 100)} />
        </div>
        <p className="text-sm text-muted-foreground">{Math.round((totalOwe / totalCost) * 100)}%</p>
      </CardFooter>
    </Card>
  )
}

export function ExpenseCardPlaceholder() {
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
