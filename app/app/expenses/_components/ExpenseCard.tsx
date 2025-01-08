import AvatarStack from '@/components/AvatarStack'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ROUTES } from '@/lib/constants'
import { Expense } from '@/services/expense.model'
import Link from 'next/link'
import { useMemo } from 'react'

export default function ExpenseCard({
  id,
  name,
  createdAt,
  icon,
  iconBgColor,
  totalCost,
  totalOwe,
  members,
  createdByYou,
  createdBy,
}: Expense) {
  const settledPercentage = useMemo(
    () => Math.min(Math.round((totalOwe / totalCost) * 100), 100),
    [totalCost, totalOwe],
  )

  return (
    <Card className="overflow-hidden ">
      <CardHeader className="flex-row items-center gap-4 space-y-0 border-b p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: iconBgColor }}>
          <img src={`/assets/svgs/icon-${icon}.svg`} className="h-6 w-6" alt="icon" />
        </div>
        <div className="flex flex-1 flex-col overflow-hidden">
          <CardTitle className="overflow-hidden text-ellipsis whitespace-nowrap pb-1 capitalize">{name}</CardTitle>
          <CardDescription className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
            Paid by {createdByYou ? 'You' : createdBy}
          </CardDescription>
        </div>
        <h1 className="text-lg font-bold text-foreground">${totalCost}</h1>
      </CardHeader>
      <CardContent className="flex items-center justify-between p-4">
        <AvatarStack
          items={members.map((m) => ({
            imageSrc: m.imageUrl,
            initial: m.firstName[0] + m.lastName[0],
            bgColor: m.profileBgColor,
          }))}
          className="-ml-2 h-8 w-8 border-0"
        />
        <div className="flex flex-col items-end">
          <p className="font-bold">{settledPercentage}%</p>
          <p className="text-sm text-muted-foreground">{settledPercentage >= 100 ? 'Settled' : 'Paid'}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="text-sm text-muted-foreground">{createdAt}</p>
        <Button variant="secondary" size="sm" asChild>
          <Link href={`${ROUTES.APP.EXPENSES}/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
