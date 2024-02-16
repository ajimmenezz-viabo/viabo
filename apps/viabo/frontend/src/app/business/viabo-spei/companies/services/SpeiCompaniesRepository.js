import { SpeiAdminCompanyUsersAdapter, SpeiCompaniesListAdapter, SpeiCompanyDetailsAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getSpeiCompaniesList = async () => {
  const { data } = await axios.get('/api/commerces')
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
  const fetchURL = new URL('/api/backoffice/company/toggle', window.location.origin)

  fetchURL.searchParams.set('company', company?.id)
  fetchURL.searchParams.set('active', company?.changeStatus)

  const { data } = await axios.put(fetchURL)

  return company
}

export const getViaboSpeiCompanyDetails = async companyId => {
  const fetchURL = new URL('/api/backoffice/company', window.location.origin)

  fetchURL.searchParams.set('company', companyId)

  const { data } = await axios.get(fetchURL)

  return SpeiCompanyDetailsAdapter(data)
}

export const updateViaboSpeiCompany = async company => {
  const { data } = await axios.put('/api/backoffice/company', company)

  return data
}
