import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { Bell } from 'lucide-react'

export default function NotificationBar() {
  return (
    <div className="fixed left-0 right-0 top-0 flex h-12 items-start justify-between px-2 pt-2">
      <div>
        <UserButton appearance={{ elements: { avatarBox: 'h-9 w-9 border block sm:hidden' } }} />
      </div>
      <Button variant="ghost" size="icon">
        <Bell className="h-4 w-4 flex-shrink-0" />
      </Button>
    </div>
  )
}
