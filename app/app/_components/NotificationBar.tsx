import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { Bell } from 'lucide-react'

const BAR_HEIGHT = 'h-12'

export default function NotificationBar() {
  return (
    <>
      <div className={cn('fixed left-0 right-0 top-0 flex items-start justify-between px-2 pt-2', BAR_HEIGHT)}>
        <div>
          <UserButton appearance={{ elements: { avatarBox: 'h-9 w-9 border block sm:hidden' } }} />
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4 flex-shrink-0" />
        </Button>
      </div>
      <div className={BAR_HEIGHT} />
    </>
  )
}
