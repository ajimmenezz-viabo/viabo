import { fCurrency, getDecryptInfo } from '@/shared/utils'

export const ViaboSpeiBalanceAdapter = balance => {
  const balanceDecrypted = getDecryptInfo(balance?.ciphertext, balance?.iv)
  if (balanceDecrypted) {
    return {
      balance: balanceDecrypted?.balance,
      balanceFormat: fCurrency(balanceDecrypted?.balance || 0),
      accountNumber: balanceDecrypted?.accountNumber,
      accountNumberHidden: balanceDecrypted?.accountNumber?.replace(/.(?=.{4})/g, '*')
    }
  }

  throw new Error('Error al obtener el balance de la cuenta stp')
}
