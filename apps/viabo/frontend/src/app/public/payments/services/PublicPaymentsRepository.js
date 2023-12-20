import { PaymentByCashAdapterResponseAdapter } from '../adapters'

import { CommerceAdapter } from '@/app/management/commerces/adapters'
import { axios } from '@/shared/interceptors'
import { getCryptInfo } from '@/shared/utils'

export const getCommerceInfoBySlug = async slug => {
  const { data } = await axios.get(`/api/commerce-slug/${slug}`)

  return CommerceAdapter(data, true)
}

export const payWithCashMethod = async payment => {
  console.log(payment)
  // const { data } = await axios.post(`/api/commerce/pay/cash`, payment)
  const data = {
    id: '1cd3a774-2b6b-4f8e-9559-5c726905350f',
    referenceNumber: '7543220'
  }

  const dataCrypt = getCryptInfo(data)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(PaymentByCashAdapterResponseAdapter(dataCrypt))
    }, 2000)
  })
}

export const payWithTerminalMethod = async payment => {
  const { data } = await axios.post(`/api/commerce-slug/terminal/transaction`, payment)
  return data
}
