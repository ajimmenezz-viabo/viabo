import { fDateTime, getDecryptInfo } from '@/shared/utils'

export const StockCardsAdapter = cards => {
  try {
    const decryptedCards = getDecryptInfo(cards?.ciphertext, cards?.iv)
    if (decryptedCards && Array.isArray(decryptedCards)) {
      return decryptedCards?.map(card => {
        const { id, number, CVV, register, expirationDate, paymentProcessorName, recorderName } = card

        return {
          id,
          cardType: paymentProcessorName,
          cardNumber: number,
          expiration: expirationDate,
          register: fDateTime(register),
          registerName: recorderName,
          cvv: CVV
        }
      })
    }
    return []
  } catch (e) {
    return []
  }
}