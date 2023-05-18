import { getCryptInfo } from '@/shared/utils'

export const CardTransactionsAdapter = (originCard, data) => {
  const { transactions } = data
  const adaptedData = {
    originCardId: originCard,
    destinationCards: transactions?.map(transaction => ({
      cardId: transaction?.card?.value?.toString(),
      concept: transaction?.concept?.toString(),
      amount: parseFloat(
        transaction?.amount.toString() === '' ? '0' : transaction?.amount?.toString().replace(/,/g, '')
      ).toString()
    }))
  }
  return {
    cardId: adaptedData?.originCardId,
    data: getCryptInfo(adaptedData)
  }
}
