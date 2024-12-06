import dayjs from 'dayjs'
import { ApiService } from './api'
import { GetGroupListParams, Group, GroupListResult, GroupMember } from './group.model'
import { faker } from '@faker-js/faker'
import { ResponseResult } from './types'
import { DEFAULT_DATE_FORMAT } from '@/lib/constants'

export default class GroupService extends ApiService {
  async getGroups(params: GetGroupListParams): Promise<ResponseResult<GroupListResult>> {
    const fakeData: Group[] = Array.from({ length: 10 }, () => ({
      name: faker.word.noun(),
      createdAt: dayjs(faker.date.recent()).format(DEFAULT_DATE_FORMAT),
      members: Array.from({ length: faker.number.int({ min: 3, max: 10 }) }, () => ({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        imageUrl: faker.datatype.boolean() ? faker.image.avatar() : undefined,
        profileBgColor: ['#fde68a', '#bbf7d0', '#ddd6fe', '#fecdd3'][faker.number.int({ min: 0, max: 3 })],
      })) as GroupMember[],
      totalSpent: faker.finance.amount({ min: 5, max: 100, dec: 2, symbol: '$' }),
    }))

    const response = await new Promise<ResponseResult<GroupListResult>>((resolve) => {
      setTimeout(
        () => {
          resolve({
            data: {
              data: fakeData,
              pagination: {
                count: fakeData.length,
                limit: 0,
                offset: 0,
              },
            },
          })
        },
        faker.number.int({ min: 1000, max: 3000 }),
      )
    })

    return response
  }
}
