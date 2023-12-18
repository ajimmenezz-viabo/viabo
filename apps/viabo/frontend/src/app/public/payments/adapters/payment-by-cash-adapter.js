import { PublicPaymentAdapter } from './public-payment-adapter'

import { getDecryptInfo } from '@/shared/utils'

export const PaymentByCashAdapter = (payment, commerce) => {
  const publicPayment = PublicPaymentAdapter(payment)
  const dataAdapted = {
    commerceId: commerce?.id,
    ...publicPayment
  }

  console.log(dataAdapted)

  return dataAdapted
}

export const PaymentByCashAdapterResponseAdapter = response => {
  const decryptedResponse = getDecryptInfo(response?.ciphertext, response?.iv)

  if (decryptedResponse) {
    return {
      id: decryptedResponse?.id,
      reference: decryptedResponse?.referenceNumber
    }
  } else {
    throw new Error('Algo fallo al obtener la información')
  }
}
