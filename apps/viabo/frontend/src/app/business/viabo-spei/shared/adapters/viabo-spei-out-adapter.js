import { getCryptInfo } from '@/shared/utils'

export const ViaboSpeiOutAdapter = (transactions, concept, googleCode) => {
  const adaptedData = {
    externalAccounts: transactions?.map(transaction => ({
      id: transaction?.account?.id?.toString(),
      amount: parseFloat(
        transaction?.amount.toString() === '' ? '0' : transaction?.amount?.toString().replace(/,/g, '')
      )
    })),
    concept: concept?.toString() || '',
    googleAuthenticatorCode: googleCode?.toString() || ''
  }

  return getCryptInfo(adaptedData)
}
