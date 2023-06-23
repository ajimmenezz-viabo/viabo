import { getDecryptInfo } from '@/shared/utils'

export const CreateFundingOrderAdapter = (values, card) => ({
  cardId: card?.id,
  amount: values?.amount.toString(),
  spei: card?.SPEI,
  emails: values?.emails
})

export const CreateFundingOrderResponseAdapter = response => {
  const decryptedResponse = getDecryptInfo(response?.ciphertext, response?.iv)

  if (decryptedResponse) {
    return {
      reference: decryptedResponse?.referenceNumber
    }
  } else {
    throw new Error('Algo fallo al obtenerla informacion')
  }
}
