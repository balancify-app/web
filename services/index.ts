import ExpenseService from './expense'
import FriendService from './friend'
import GroupService from './group'

const services = {
  Group: new GroupService(),
  Expense: new ExpenseService(),
  Friend: new FriendService(),
}

export default services
