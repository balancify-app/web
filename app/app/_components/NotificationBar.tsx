import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { Bell } from 'lucide-react'

export default function NotificationBar() {
  return (
    <div className="fixed left-0 right-0 top-0 flex items-start justify-between px-4 pt-4">
      <div>
        <UserButton appearance={{ elements: { avatarBox: 'h-9 w-9 border block sm:hidden' } }} />
      </div>
      <Button variant="ghost" size="icon">
        <Bell className="h-4 w-4 flex-shrink-0" />
      </Button>
    </div>
  )
}
