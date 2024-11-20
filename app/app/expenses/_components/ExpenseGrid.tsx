import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GroupMember } from '@/services/group.model'
import { BsSuitcase, BsThreeDotsVertical } from 'react-icons/bs'

export function ExpenseWrapper({
  children,
  loading,
}: Readonly<{
  children?: React.ReactNode
  loading: boolean
}>) {
  return <div className="grid grid-cols-4 gap-4">{children}</div>
}

type ExpenseCardProps = {
  name: string
  createdAt: string
  totalCost: string
  totalOwe: string
  members: GroupMember[]
  hasSettled: boolean
  createdBy: string
}

export function ExpenseCard() {
  return (
    <Card className="overflow-hidden shadow-none">
      <CardHeader className="flex-row items-center gap-4 space-y-0 border-b p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-200">
          <BsSuitcase className="h-6 w-6 text-black" />
        </div>
        <div className="flex flex-1 flex-col overflow-hidden">
          <CardTitle className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap">Test</CardTitle>
          <CardDescription className="overflow-hidden text-ellipsis whitespace-nowrap">test</CardDescription>
        </div>
        <Button variant="ghost" size="icon" className="shrink-0">
          <BsThreeDotsVertical className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        <p className="mb-2 text-sm text-muted-foreground">
          Total Cost: <span className="font-bold text-foreground">$100.00</span>
        </p>
        <p className="mb-2 text-sm text-muted-foreground">
          You Owed: <span className="font-bold text-foreground">$100.00</span>
        </p>
      </CardContent>
    </Card>
  )
}
