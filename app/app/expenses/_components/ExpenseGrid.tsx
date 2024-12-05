/* eslint-disable @next/next/no-img-element */
import AvatarStack from '@/components/AvatarStack'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Expense } from '@/services/expense.model'
import { BsThreeDotsVertical } from 'react-icons/bs'

export function ExpenseWrapper({
  children,
  loading,
}: Readonly<{
  children?: React.ReactNode
  loading: boolean
}>) {
  return <div className="grid grid-cols-4 gap-4">{children}</div>
}

export function ExpenseCard({ name, createdAt, icon, iconBgColor, totalCost, totalOwe, members, hasSettled }: Expense) {
  return (
    <Card className="overflow-hidden shadow-none">
      <CardHeader className="flex-row items-center gap-4 space-y-0 p-4 pb-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: iconBgColor }}>
          <img src={`/assets/svgs/icon-${icon}.svg`} className="h-6 w-6" alt="icon" />
        </div>
        <div className="flex flex-1 flex-col overflow-hidden">
          <CardTitle className="overflow-hidden text-ellipsis whitespace-nowrap capitalize">{name}</CardTitle>
          {/* <CardDescription className="overflow-hidden text-ellipsis whitespace-nowrap">{createdAt}</CardDescription> */}
        </div>
        <h1 className="font-bold text-foreground">{totalCost}</h1>
      </CardHeader>
      <CardContent className="p-4">
        <p className="mb-2 text-sm text-muted-foreground">
          Total Cost: <span className="font-bold text-foreground">{totalCost}</span>
        </p>
        <div className="mb-2 flex items-center gap-2">
          <p className="text-sm text-muted-foreground">
            You Owed: <span className="font-bold text-foreground">{totalOwe}</span>
          </p>
          {hasSettled ? (
            <Badge variant="secondary" className="bg-green-200">
              Paid
            </Badge>
          ) : null}
        </div>
        <AvatarStack
          items={members.map((m) => ({
            imageSrc: m.imageUrl,
            initial: m.firstName[0] + m.lastName[0],
            bgColor: m.profileBgColor,
          }))}
          className="-ml-1 h-6 w-6 border-0"
        />
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <CardDescription className="overflow-hidden text-ellipsis whitespace-nowrap">{createdAt}</CardDescription>
      </CardFooter>
    </Card>
  )
}
