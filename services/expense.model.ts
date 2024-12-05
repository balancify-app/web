import { GroupMember } from './group.model'
import { ResponseResultWithPagination } from './types'

export type Expense = {
  name: string
  createdAt: string
  totalCost: number
  totalOwe: number
  members: GroupMember[]
  hasSettled: boolean
  createdBy: string
  icon: string
  iconBgColor: string
  createdByYou: boolean
}

export type ExpenseListResult = ResponseResultWithPagination<Expense[]>
