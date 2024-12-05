import { GroupMember } from './group.model'
import { ResponseResultWithPagination } from './types'

export type Expense = {
  name: string
  createdAt: string
  totalCost: string
  totalOwe: string
  members: GroupMember[]
  hasSettled: boolean
  createdBy: string
  icon: string
  iconBgColor: string
}

export type ExpenseListResult = ResponseResultWithPagination<Expense[]>
