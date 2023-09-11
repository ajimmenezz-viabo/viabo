import { fCurrency, getDecryptInfo } from '@/shared/utils'

export const GlobalCardsAdapter = cards => {
  const decryptedCards = getDecryptInfo(cards?.ciphertext, cards?.iv)
  let masterBalance = 0
  let masterTransit = 0
  const dataAdapted = decryptedCards?.map(card => {
    masterBalance += parseFloat(card?.balance)
    masterTransit += parseFloat(card?.inTransit)
    return {
      ...card,
      id: card?.cardId,
      balanceFormatted: fCurrency(card?.balance),
      inTransitFormatted: fCurrency(card?.inTransit)
    }
  })

  return {
    master: {
      balance: masterBalance,
      inTransit: masterTransit,
      balanceFormatted: fCurrency(masterBalance),
      inTransitFormatted: fCurrency(masterTransit)
    },
    globals: dataAdapted
  }
}
