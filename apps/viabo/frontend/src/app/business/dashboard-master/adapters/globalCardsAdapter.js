import { fCurrency } from '@/shared/utils'

export const GlobalCardsAdapter = cards => {
  let masterBalance = 0
  let masterTransit = 0
  const dataAdapted = cards?.map(card => {
    masterBalance += card?.balance
    masterTransit += card?.inTransit
    return {
      ...card,
      id: card?.id,
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
