import dayjs from 'dayjs'
import { ApiService } from './api'
import { Group, GroupDetails, GroupDetailsResult, GroupListResult, Person } from './group.model'
import { faker } from '@faker-js/faker'
import { BG_COLORS, DEFAULT_DATE_FORMAT } from '@/lib/constants'
import services from '.'

export default class GroupService extends ApiService {
  // async getGroups(params: GetGroupListParams): Promise<ResponseResult<GroupListResult>> {
  async getGroups(): Promise<GroupListResult> {
    const fakeData: Group[] = Array.from({ length: 10 }, () => ({
      id: faker.string.uuid(),
      name: faker.word.noun(),
      createdAt: dayjs(faker.date.recent()).format(DEFAULT_DATE_FORMAT),
      members: Array.from<number, Person>({ length: faker.number.int({ min: 3, max: 10 }) }, () => ({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        imageUrl: faker.image.avatar(),
        profileBgColor: BG_COLORS[faker.number.int({ min: 0, max: BG_COLORS.length - 1 })],
        email: faker.internet.email(),
      })),
      totalSpent: faker.finance.amount({ min: 5, max: 100, dec: 2, symbol: '$' }),
    }))

    const response = await new Promise<GroupListResult>((resolve) => {
      setTimeout(
        () => {
          resolve({
            data: fakeData,
            pagination: {
              count: fakeData.length,
              limit: 0,
              offset: 0,
            },
          })
        },
        faker.number.int({ min: 1000, max: 3000 }),
      )
    })

    return response
  }

  async getGroup(): Promise<GroupDetailsResult> {
    const fakeData: GroupDetails = {
      id: faker.string.uuid(),
      name: faker.word.noun(),
      createdAt: dayjs(faker.date.recent()).format(DEFAULT_DATE_FORMAT),
      members: Array.from<number, Person>({ length: faker.number.int({ min: 3, max: 10 }) }, () => ({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        imageUrl: faker.image.avatar(),
        profileBgColor: BG_COLORS[faker.number.int({ min: 0, max: BG_COLORS.length - 1 })],
        email: faker.internet.email(),
      })),
      totalSpent: faker.finance.amount({ min: 5, max: 100, dec: 2, symbol: '$' }),
      expenses: (await services.expense.getExpenses()).data,
      description: faker.lorem.sentence(),
    }

    const response = await new Promise<GroupDetailsResult>((resolve) => {
      setTimeout(
        () => {
          resolve({
            data: fakeData,
          })
        },
        faker.number.int({ min: 1000, max: 3000 }),
      )
    })

    return response
  }
}
