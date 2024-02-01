import { getCryptInfo } from '@/shared/utils'

export const ViaboSpeiOutAdapter = (transactions, concept) => {
  const adaptedData = {
    externalAccounts: transactions?.map(transaction => ({
      id: transaction?.account?.id?.toString(),
      amount: parseFloat(
        transaction?.amount.toString() === '' ? '0' : transaction?.amount?.toString().replace(/,/g, '')
      )
    })),
    concept: concept?.toString() || ''
  }

  return getCryptInfo(adaptedData)
}
