import { METHODS_NEW_COST_CENTER_USERS } from './spei-cost-centers-keys'

export const SpeiNewCostCenterAdapter = company => ({
  name: company?.adminName?.trim(),
  isNewUser: company?.method === METHODS_NEW_COST_CENTER_USERS.NEW_ADMIN_USER,
  assignedUsers: company?.adminUsers?.map(user => user.value) || [],
  newUserName: company?.adminName?.trim(),
  newUserLastName: company?.adminLastName?.trim(),
  newUserEmail: company?.adminEmail?.trim(),
  newUserPhone: company?.adminPhone?.trim()
})
