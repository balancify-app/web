import { Button } from '@/components/ui/button'
import MemberListItem from './MemberListItem'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { MemberListProps } from './MemberList'
import MemberListItemPlaceholder from './MemberListItemPlaceholder'

export default function MemberListSheet({ loading, members }: MemberListProps) {
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
        {loading ? (
          <MemberListItemPlaceholder />
        ) : (
          <ul className="mt-6 flex flex-col gap-4">
            {members?.map((member, i) => <MemberListItem key={i} {...member} />)}
          </ul>
        )}
      </SheetContent>
    </Sheet>
  )
}
