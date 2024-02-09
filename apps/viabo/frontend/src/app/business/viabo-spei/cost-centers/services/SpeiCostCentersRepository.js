import { SpeiAdminCostCenterUsersMock, SpeiAdminCostCentersMock } from '../_mock'
import { SpeiAdminCostCenterUsersAdapter, SpeiCostCentersListAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const getSpeiCostCentersList = async () => {
  // const { data } = await axios.get('/api/spei/external-accounts')
  const data = SpeiAdminCostCentersMock
  return SpeiCostCentersListAdapter(data)
}

export const newSpeiCostCenter = async costCenter => {
  const { data } = await axios.post('/api/spei/cost-centers/new', costCenter)
  return data
}

export const getViaboSpeiAdminCostCenterUsers = async () => {
  // const { data } = await axios.get('/api/spei/users')

  const data = SpeiAdminCostCenterUsersMock

  return SpeiAdminCostCenterUsersAdapter(data)
}
