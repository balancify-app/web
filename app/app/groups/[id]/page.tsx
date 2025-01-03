import { Button } from '@/components/ui/button'
import { HiOutlineCog6Tooth } from 'react-icons/hi2'

export default function GroupDetails() {
  return (
    <div className="container pb-4">
      <div className="mt-8 flex items-center justify-between md:mt-0">
        <h1 className="text-3xl font-bold">Expense Details</h1>
        <Button className="hidden gap-2 md:inline-flex">
          <HiOutlineCog6Tooth className="h-4 w-4" /> Group Settings
        </Button>
      </div>
    </div>
  )
}
