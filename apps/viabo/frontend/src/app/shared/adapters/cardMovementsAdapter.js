import { fCurrency, fDateTime, getDecryptInfo } from '@/shared/utils'
import { format } from 'date-fns'

export const CardMovementsAdapter = movements => {
  const decryptedMovements = getDecryptInfo(movements?.ciphertext, movements?.iv)
  let expenses = 0
  let income = 0

  return {
    movements:
      decryptedMovements?.map(movement => {
        const amount = parseFloat(movement?.amount || '0')
        movement?.type.toLowerCase() === 'gasto' ? (expenses += amount) : (income += amount)
        const date = movement?.date ? format(new Date(movement?.date), 'dd MMM yyyy') : ''
        const time = movement?.date ? format(new Date(movement?.date), 'p') : ''
        return {
          fullDate: fDateTime(movement?.date),
          date,
          time,
          description: movement?.description,
          amount: fCurrency(amount),
          type: movement?.type.toLowerCase()
        }
      }) ?? [],
    income: fCurrency(income),
    expenses: fCurrency(expenses)
  }
}
