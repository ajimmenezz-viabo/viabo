import { convertCatalogToReactSelect, fCardNumberHidden, fDateTime, getDecryptInfo } from '@/shared/utils'

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
          recorderId,
          recorderName,
          active
        } = card

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
            name: ownerName
          },
          staffRegister: {
            id: recorderId,
            name: recorderName
          },
          cardNumber: number,
          cardNumberHidden: fCardNumberHidden(number),
          expiration: expirationDate,
          register: fDateTime(register),
          cvv: CVV,
          status: {
            id: statusId,
            name: statusName
          }
        }
      })
      return convertCatalogToReactSelect(cardsAdapter, 'id', 'cardNumberHidden') || []
    }
    return []
  } catch (e) {
    return []
  }
}
