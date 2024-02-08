import { METHODS_NEW_COMPANY_USERS } from './spei-companies-keys'

export const SpeiNewCompanyAdapter = company => ({
  fiscalName: company?.fiscalName?.trim(),
  rfc: company?.rfc?.trim(),
  commercialName: company?.commercialName?.trim(),
  isNewUser: company?.method === METHODS_NEW_COMPANY_USERS.NEW_ADMIN_USER,
  assignedUsers: company?.adminUsers?.map(user => user.value) || [],
  newUserName: company?.adminName?.trim(),
  newUserLastName: company?.adminLastName?.trim(),
  newUserEmail: company?.adminEmail?.trim(),
  newUserPhone: company?.adminPhone?.trim()
})
