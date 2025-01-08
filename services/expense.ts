import { faker } from '@faker-js/faker'
import { ApiService } from './api'
import {
  Expense,
  ExpenseDetails,
  ExpenseDetailsMember,
  ExpenseDetailsResult,
  ExpenseListResult,
  Timeline,
} from './expense.model'
import dayjs from 'dayjs'
import { Person } from './group.model'
import { BG_COLORS, DEFAULT_DATE_FORMAT, EXPENSE_ICONS } from '@/lib/constants'

export default class ExpenseService extends ApiService {
  async getExpenses(): Promise<ExpenseListResult> {
    const icons = Object.values(EXPENSE_ICONS)

    const fakeData = Array.from<number, Expense>({ length: 10 }, (_, i) => {
      const total = faker.number.float({ min: 5, max: 100, fractionDigits: 2 })

      return {
        id: faker.string.uuid(),
        name: faker.word.noun(),
        createdAt: dayjs(faker.date.recent()).format(DEFAULT_DATE_FORMAT),
        createdBy: faker.person.fullName(),
        totalCost: total,
        totalOwe: faker.number.float({ min: 5, max: total, fractionDigits: 2 }),
        members: Array.from<number, Person>({ length: faker.number.int({ min: 3, max: 10 }) }, () => ({
          id: faker.string.uuid(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          imageUrl: faker.image.avatar(),
          profileBgColor: BG_COLORS[faker.number.int({ min: 0, max: BG_COLORS.length - 1 })],
          email: faker.internet.email(),
        })),
        hasSettled: faker.datatype.boolean(),
        icon: icons[faker.number.int({ min: 0, max: icons.length - 1 })],
        iconBgColor: BG_COLORS[faker.number.int({ min: 0, max: BG_COLORS.length - 1 })],
        createdByYou: i === 5,
      }
    })

    const response = await new Promise<ExpenseListResult>((resolve) => {
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

  async getExpense(): Promise<ExpenseDetailsResult> {
    const total = faker.number.float({ min: 5, max: 100, fractionDigits: 2 })
    const icons = Object.values(EXPENSE_ICONS)
    const timelines: Timeline[] = Array.from<number, Timeline>({ length: 5 }, () => ({
      createdAt: dayjs(faker.date.recent()).format(DEFAULT_DATE_FORMAT),
      createdBy: {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        imageUrl: faker.image.avatar(),
        profileBgColor: BG_COLORS[faker.number.int({ min: 0, max: BG_COLORS.length - 1 })],
        email: faker.internet.email(),
      },
      events: faker.finance.transactionDescription(),
    }))

    const fakeData: ExpenseDetails = {
      id: faker.string.uuid(),
      name: faker.word.noun(),
      createdAt: dayjs(faker.date.recent()).format(DEFAULT_DATE_FORMAT),
      createdBy: faker.person.fullName(),
      totalCost: total,
      totalOwe: faker.number.float({ min: 5, max: total, fractionDigits: 2 }),
      members: Array.from<number, ExpenseDetailsMember>({ length: faker.number.int({ min: 3, max: 10 }) }, () => ({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        imageUrl: faker.image.avatar(),
        profileBgColor: BG_COLORS[faker.number.int({ min: 0, max: BG_COLORS.length - 1 })],
        email: faker.internet.email(),
        ownedAmount: faker.number.float({ min: 5, max: total, fractionDigits: 2 }),
      })),
      hasSettled: faker.datatype.boolean(),
      icon: icons[faker.number.int({ min: 0, max: icons.length - 1 })],
      iconBgColor: BG_COLORS[faker.number.int({ min: 0, max: BG_COLORS.length - 1 })],
      createdByYou: faker.datatype.boolean(),
      timelines,
    }

    const response = await new Promise<ExpenseDetailsResult>((resolve) => {
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
