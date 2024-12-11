import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { LuBell } from 'react-icons/lu'

const BAR_HEIGHT = 'h-12'

export default function NotificationBar({ isDark }: { isDark: boolean }) {
  return (
    <>
      <div className={cn('fixed left-0 right-0 top-0 flex items-start justify-between px-2 pt-2', BAR_HEIGHT)}>
        <div>
          <UserButton
            appearance={{
              elements: { avatarBox: 'h-9 w-9 border block md:hidden' },
              baseTheme: isDark ? dark : undefined,
            }}
          />
        </div>
        <Button variant="ghost" size="icon">
          <LuBell className="h-4 w-4 flex-shrink-0" />
        </Button>
      </div>
      <div className={BAR_HEIGHT} />
    </>
  )
}
