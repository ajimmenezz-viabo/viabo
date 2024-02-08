import { SpeiAdminCompanyUsersMock } from '../_mock'
import { SpeiAdminCompanyUsersAdapter, SpeiCompaniesListAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getSpeiCompaniesList = async () => {
  const { data } = await axios.get('/api/spei/external-accounts')
  return SpeiCompaniesListAdapter(data)
}

export const newSpeiCompany = async company => {
  const { data } = await axios.post('/api/spei/external-account/new', company)
  return data
}

export const getViaboSpeiAdminCompanyUsers = async () => {
  // const { data } = await axios.get('/api/spei/users')

  const data = SpeiAdminCompanyUsersMock

  return SpeiAdminCompanyUsersAdapter(data)
}
