import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import { fCurrency, fDateTime, getDecryptInfo } from '@/shared/utils'

export const MasterMovementsAdapter = movements => {
  const decryptedMovements = getDecryptInfo(movements?.ciphertext, movements?.iv)

  let expenses = 0
  let income = 0

  return {
    movements:
      decryptedMovements?.map(movement => {
        const amount = parseFloat(movement?.amount || '0')
        movement?.type.toLowerCase() === 'gasto' ? (expenses += amount) : (income += amount)
        const date = movement?.date ? format(new Date(movement?.date), 'dd MMM yyyy', { locale: es }) : ''
        const time = movement?.date ? format(new Date(movement?.date), 'p') : ''
        return {
          fullDate: fDateTime(movement?.date),
          date,
          time,
          description: movement?.description,
          amount,
          amountFormatted: fCurrency(amount),
          paymentProcessor: movement?.paymentProcessor,
          type: movement?.type.toLowerCase(),
          operationType: movement?.typeOperation.toUpperCase(),
          concept: movement?.concept ?? ''
        }
      }) ?? [],
    income: fCurrency(income),
    expenses: fCurrency(expenses),
    balanceMovements: fCurrency(income - expenses)
  }
}
