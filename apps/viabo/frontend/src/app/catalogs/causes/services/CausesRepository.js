import { CausesListAdapter } from '../adapters'

import { axios } from '@/shared/interceptors'

export const newCause = async cause => {
  const { data } = await axios.post('/api/support-reason/new', cause)

  return data
}

export const getCausesList = async () => {
  const { data } = await axios.get('/api/tickets/support-reasons')

  return CausesListAdapter(data)
}
