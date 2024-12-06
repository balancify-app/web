import ExpenseService from './expense'
import GroupService from './group'

const services = {
  Group: new GroupService(),
  Expense: new ExpenseService(),
}

export default services
