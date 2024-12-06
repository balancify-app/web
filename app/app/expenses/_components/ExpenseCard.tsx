import AvatarStack from '@/components/AvatarStack'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { Expense } from '@/services/expense.model'

export default function ExpenseCard({
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
