import { CardDetailsAdapter } from './cardAdapter'

import { convertCatalogToReactSelect, getDecryptInfo } from '@/shared/utils'

export const CardsAdapter = cards => {
  const decryptedCards = getDecryptInfo(cards?.ciphertext, cards?.iv)
  if (decryptedCards && Array.isArray(decryptedCards)) {
    const cardsAdapter = decryptedCards?.map(card => CardDetailsAdapter(card))
    return convertCatalogToReactSelect(cardsAdapter, 'id', 'cardUserNumber') || []
  }

  throw new Error('No se pueden obtener las tarjetas')
}
