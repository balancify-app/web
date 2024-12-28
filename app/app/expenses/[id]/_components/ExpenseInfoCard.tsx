import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import MemberListSheet from './MemberListSheet'

export default function ExpenseInfoCard() {
  return (
    <Card className="bg-none from-amber-300 shadow-none md:bg-gradient-to-l">
      <CardContent className="flex flex-col-reverse items-center gap-4 p-6 md:flex-row md:items-start">
        <div className="flex-1 self-stretch">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold capitalize">Lorem, ipsum</h1>
            <p className="text-xs text-muted-foreground">Added by Person - 12 dec 2024</p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-8 md:mt-10 md:flex-row md:items-start md:gap-0">
            <div className="flex-1">
              <h1 className="hidden text-sm text-muted-foreground md:block">Total</h1>
              <h1 className="text-3xl font-bold md:text-xl">$100.00</h1>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-xs text-muted-foreground md:text-sm">You Owed</h1>
              <h1 className="text-xl font-bold">$100.00</h1>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-4 md:!bg-transparent md:p-0" style={{ backgroundColor: '#fcd34d' }}>
          <img src={`/assets/svgs/icon-food.svg`} className="h-16 w-16" alt="icon" />
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 md:hidden">
        <div className="flex-1">
          <MemberListSheet />
        </div>
        <Button className="flex-1">Settle up</Button>
      </CardFooter>
    </Card>
  )
}
