import { Button } from '@/components/ui/button'
import MemberListItem from './MemberListItem'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export default function MemberListSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full">
          Members
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">Members</SheetTitle>
        </SheetHeader>
        <ul className="mt-6 flex flex-col gap-4">
          <MemberListItem firstName="Adam" lastName="Brown" ownedAmount="$5.0" />
          <MemberListItem firstName="Adam" lastName="Brown" ownedAmount="$5.0" />
          <MemberListItem firstName="Adam" lastName="Brown" ownedAmount="$5.0" />
          <MemberListItem firstName="Adam" lastName="Brown" ownedAmount="$5.0" />
          <MemberListItem firstName="Adam" lastName="Brown" ownedAmount="$5.0" />
        </ul>
      </SheetContent>
    </Sheet>
  )
}
