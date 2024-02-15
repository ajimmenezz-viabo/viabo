import { SpeiAdminCompaniesMock } from '../_mock'
import { SpeiAdminCompanyUsersAdapter, SpeiCompaniesListAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getSpeiCompaniesList = async () => {
  const data = SpeiAdminCompaniesMock
  return SpeiCompaniesListAdapter(data)
}

export const newSpeiCompany = async company => {
  const { data } = await axios.post('/api/backoffice/company/new', company)
  return data
}

export const getViaboSpeiAdminCompanyUsers = async () => {
  const { data } = await axios.get('/api/security/users/administrators-of-companies')

  return SpeiAdminCompanyUsersAdapter(data)
}

export const changeSpeiCompanyStatus = async company => {
  const { data } = await axios.put(`/api/spei/company/${company?.id}/${company?.changeStatus ? 'disable' : 'enable'}`)
  return company
}
