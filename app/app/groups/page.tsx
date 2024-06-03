'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import { GroupRow, GroupWrapper } from './_components/GroupTable'
import useGroup from './_hooks/useGroup'

export default function Groups() {
  const { isPending, groupData } = useGroup()

  return (
    <div className="container pb-4">
      <div className="mt-8 flex items-center justify-between sm:mt-0">
        <h1 className="text-3xl font-bold">Groups</h1>
        <Button className="gap-4 sm:hidden">
          <Plus className="h-4 w-4" /> New Group
        </Button>
      </div>
      <div className="my-6 flex items-center justify-between gap-4">
        <Input className="sm:max-w-sm" placeholder="Search..." type="search" />
        <Button className="hidden gap-4 sm:flex">
          <Plus className="h-4 w-4" /> New Group
        </Button>
      </div>
      <GroupWrapper>
        {groupData.map((group, i) => (
          <GroupRow
            key={i}
            createdAt={group.createdAt}
            member={group.members}
            name={group.name}
            total={group.totalSpent}
          />
        ))}
      </GroupWrapper>
    </div>
  )
}
