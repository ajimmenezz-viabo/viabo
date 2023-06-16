import { fCurrency, getDecryptInfo } from '@/shared/utils'

export const CardMainAdapter = card => {
  const decryptedCard = getDecryptInfo(card?.ciphertext, card?.iv)
  const balance = parseFloat(decryptedCard?.balance === '' ? '0' : decryptedCard?.balance.replace(/,/g, ''))
  const inTransit = parseFloat(
    decryptedCard?.balanceInTransaction === '' ? '0' : decryptedCard?.balanceInTransaction.replace(/,/g, '')
  )

  if (decryptedCard) {
    return {
      id: decryptedCard?.cardId,
      balance,
      balanceFormatted: fCurrency(balance),
      inTransit,
      inTransitFormatted: fCurrency(inTransit)
    }
  } else {
    throw new Error('Algo fallo al obtenerla informacion')
  }
}
