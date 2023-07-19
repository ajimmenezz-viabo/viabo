import {
  convertCatalogToReactSelect,
  fCardNumberHidden,
  fCardNumberShowLastDigits,
  fDateTime,
  getDecryptInfo
} from '@/shared/utils'
import { format } from 'date-fns'

export const CardsAdapter = cards => {
  try {
    const decryptedCards = getDecryptInfo(cards?.ciphertext, cards?.iv)
    if (decryptedCards && Array.isArray(decryptedCards)) {
      const cardsAdapter = decryptedCards?.map(card => {
        const {
          id,
          number,
          CVV,
          register,
          expirationDate,
          paymentProcessorName,
          paymentProcessorId,
          statusId,
          statusName,
          commerceId,
          commerceName,
          ownerId,
          ownerName,
          ownerPhone,
          ownerEmail,
          recorderId,
          recorderName,
          active
        } = card

        const lastFourDigits = number?.slice(-4)
        let assignName = ownerName ?? ''

        if (assignName?.length > 10) {
          assignName = assignName.slice(0, 13) + '...'
        }
        return {
          id,
          cardTypeId: paymentProcessorId,
          cardType: paymentProcessorName,
          assignCommerce: {
            id: commerceId,
            name: commerceName
          },
          assignUser: {
            id: ownerId,
            name: ownerName,
            phone: ownerPhone,
            email: ownerEmail
          },
          staffRegister: {
            id: recorderId,
            name: recorderName
          },
          cardNumber: number,
          cardNumberHidden: fCardNumberHidden(number),
          cardNumberMoreDigits: fCardNumberShowLastDigits(number),
          cardUserNumber: assignName?.toUpperCase() + ' ' + lastFourDigits,
          expiration: expirationDate,
          register: fDateTime(register),
          registerDate: register ? format(new Date(register), 'dd MMM yyyy') : '',
          registerTime: register ? format(new Date(register), 'p') : '',
          cvv: CVV,
          status: {
            id: statusId,
            name: statusName
          }
        }
      })
      return convertCatalogToReactSelect(cardsAdapter, 'id', 'cardUserNumber') || []
    }
    return []
  } catch (e) {
    return []
  }
}
