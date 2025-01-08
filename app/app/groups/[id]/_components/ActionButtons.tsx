import { Button } from '@/components/ui/button'
import { HiOutlineUserPlus } from 'react-icons/hi2'
import { LuPlus } from 'react-icons/lu'
import { HiOutlineLogout } from 'react-icons/hi'

export default function ActionButtons() {
  return (
    <div className="mt-6 flex flex-col gap-2 md:flex-row md:gap-4">
      <div className="flex gap-2 md:gap-4">
        <Button className="flex-1 gap-2">
          <LuPlus className="h-4 w-4" />
          Add Expense
        </Button>
        <Button variant="outline" className="flex-1 gap-2">
          <HiOutlineUserPlus className="h-4 w-4" />
          Add Member
        </Button>
      </div>
      <Button variant="destructive" className="gap-2">
        <HiOutlineLogout className="h-4 w-4" />
        Leave
      </Button>
    </div>
  )
}
