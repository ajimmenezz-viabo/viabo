import { getCryptInfo } from '@/shared/utils'

export const CardTransactionsAdapter = (originCardId, data, isGlobal) => {
  let adaptedData
  if (isGlobal) {
    adaptedData = {
      originCardId,
      destinationCards: [
        {
          cardId: data?.card?.value.toString(),
          concept: data?.concept?.toString(),
          amount: parseFloat(
            data?.amount.toString() === '' ? '0' : data?.amount?.toString().replace(/,/g, '')
          ).toString()
        }
      ]
    }
  } else {
    adaptedData = {
      originCardId,
      destinationCards: data?.map(transaction => ({
        cardId: transaction?.card?.value?.toString(),
        concept: transaction?.concept?.toString(),
        amount: parseFloat(
          transaction?.amount.toString() === '' ? '0' : transaction?.amount?.toString().replace(/,/g, '')
        ).toString()
      }))
    }
  }

  return {
    cardId: adaptedData?.originCardId,
    data: getCryptInfo(adaptedData)
  }
}
