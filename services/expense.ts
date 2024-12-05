import { faker } from '@faker-js/faker'
import { ApiService } from './api'
import { Expense, ExpenseListResult } from './expense.model'
import { ResponseResult } from './types'
import dayjs from 'dayjs'
import { GroupMember } from './group.model'
import { DEFAULT_DATE_FORMAT, EXPENSE_ICONS } from '@/lib/constants'

export default class ExpenseService extends ApiService {
  async getExpenses(): Promise<ResponseResult<ExpenseListResult>> {
    const icons = Object.values(EXPENSE_ICONS)

    const fakeData: Expense[] = Array.from({ length: 10 }, () => ({
      name: faker.word.noun(),
      createdAt: dayjs(faker.date.recent()).format(DEFAULT_DATE_FORMAT),
      createdBy: faker.person.fullName(),
      totalCost: faker.finance.amount({ min: 5, max: 100, dec: 2, symbol: '$' }),
      totalOwe: faker.finance.amount({ min: 5, max: 100, dec: 2, symbol: '$' }),
      members: Array.from({ length: faker.number.int({ min: 3, max: 10 }) }, () => ({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        imageUrl: faker.datatype.boolean() ? faker.image.avatar() : undefined,
        profileBgColor: ['#fde68a', '#bbf7d0', '#ddd6fe', '#fecdd3'][faker.number.int({ min: 0, max: 3 })],
      })) as GroupMember[],
      hasSettled: faker.datatype.boolean(),
      icon: icons[faker.number.int({ min: 0, max: icons.length - 1 })],
      iconBgColor: ['#fde68a', '#bbf7d0', '#ddd6fe', '#fecdd3'][faker.number.int({ min: 0, max: 3 })],
    }))

    const response = await new Promise<ResponseResult<ExpenseListResult>>((resolve) => {
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
