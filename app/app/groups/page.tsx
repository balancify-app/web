import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import { GroupRow, GroupWrapper } from './_components/GroupTable'

export default function Groups() {
  return (
    <div className="container">
      <h1 className="mt-8 text-3xl font-bold sm:mt-0">Groups</h1>
      <div className="mb-12 mt-6 flex items-center justify-between gap-4">
        <Input className="max-w-sm" placeholder="Search..." type="search" />
        <Button className="gap-4">
          <Plus className="h-4 w-4" /> New Group
        </Button>
      </div>
      <GroupWrapper>
        <GroupRow
          createdAt="May 30, 2024"
          member={Array.from({ length: 10 }, () => ({ firstName: 'a', lastName: 'b' }))}
          name="Lorem ipsum dolor sit amet"
          total={100}
        />
        <GroupRow
          createdAt="May 30, 2024"
          member={Array.from({ length: 10 }, () => ({ firstName: 'a', lastName: 'b' }))}
          name="Lorem ipsum dolor sit amet"
          total={100}
        />
        <GroupRow
          createdAt="May 30, 2024"
          member={Array.from({ length: 10 }, () => ({ firstName: 'a', lastName: 'b' }))}
          name="Lorem ipsum dolor sit amet"
          total={100}
        />
        <GroupRow
          createdAt="May 30, 2024"
          member={Array.from({ length: 10 }, () => ({ firstName: 'a', lastName: 'b' }))}
          name="Lorem ipsum dolor sit amet"
          total={100}
        />
      </GroupWrapper>
    </div>
  )
}
