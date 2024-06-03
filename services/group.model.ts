import { GetListParams, ResponseResultWithPagination } from './types'

export type Group = {
  name: string
  members: GroupMember[]
  totalSpent: string
  createdAt: string
}

export type GroupMember = {
  firstName: string
  lastName: string
  imageUrl?: string
  profileBgColor?: string
}

export type GroupListParams = {
  q?: string
}

export type GetGroupListParams = GetListParams<GroupListParams>
export type GroupListResult = ResponseResultWithPagination<Group[]>
